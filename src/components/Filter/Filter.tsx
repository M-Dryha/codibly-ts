import { useEffect } from 'react';
import AutorenewTwoToneIcon from '@mui/icons-material/AutorenewTwoTone';
import { TextField, Box } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { useGetProductsQuery } from '../../redux/myProductSlice';
import ProductsElement from '../ProductsElement';
import { onChangeFilter } from '../../redux/myFilterSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ChangeEventHandler } from 'react';

const Filter = () => {
  const dispatch = useAppDispatch();
  const { data, error } = useGetProductsQuery();
  const idValue = useAppSelector(state => state.filter);
  const normalizedId = Number(idValue);
  const visibleProduct = data?.data.filter(d => d.id === normalizedId);

  useEffect(() => {
    if (data && normalizedId > data.total) {
      toast.error(`No data for id: ${normalizedId}`);
    }
  }, [data, normalizedId]);

  useEffect(() => {
    if (error) {
      toast.error('Ooops, something went wrong');
    }
  }, [error]);

  const changeFilter: ChangeEventHandler<HTMLInputElement> = e => {
    const regex = /^[0-9\b]+$/;
    const regexNumber = regex.test(e.target.value);
    if (e.target.value === '' || regexNumber) {
      dispatch(onChangeFilter(e.target.value));
    }
    if (e.target.value !== '' && !regexNumber) {
      toast.error('Please, enter a valid number');
    }
    if (e.target.value === '0') {
      toast.error(`No data for id: ${normalizedId}`);
    }
  };

  return (
    <Box sx={{ width: 544, mr: 'auto', ml: 'auto', height: 200 }}>
      <TextField
        error
        label="Find product by id"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={idValue}
        onChange={changeFilter}
        sx={{ width: 544 }}
        helperText="Enter a number"
      />
      <Box sx={{ p: 3 }}>
        {!idValue && (
          <Box sx={{ width: 60, mr: 'auto', ml: 'auto' }}>
            <AutorenewTwoToneIcon sx={{ fontSize: 60, color: 'grey' }} />
          </Box>
        )}
        {data &&
          visibleProduct?.map(product => (
            <ProductsElement key={product.id} product={product} />
          ))}
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Filter;
