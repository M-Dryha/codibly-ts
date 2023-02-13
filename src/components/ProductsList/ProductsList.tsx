import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { Box, Button, Grid } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useGetProductsByPaginationQuery } from '../../redux/myProductSlice';
import ProductsElement from '.././ProductsElement';
import Loader from '.././Loader';

const ProductsList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page');
  const [pages, setPages] = useState(currentPage === null ? 1 : +currentPage);
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsByPaginationQuery(pages);

  const checkPages = products && pages === products.total_pages;

  useEffect(() => {
    setSearchParams({ page: pages.toString() });
  }, [pages, currentPage, setSearchParams]);

  useEffect(() => {
    if (checkPages) {
      toast.error('There is no data');
    }
  }, [checkPages]);

  useEffect(() => {
    if (isError) {
      toast.error('Ooops, something went wrong');
    }
  }, [isError]);

  return (
    <>
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2} sx={{ mb: '30px' }}>
          {isLoading && <Loader />}
          {products &&
            products.data.map(product => (
              <ProductsElement key={product.id} product={product} />
            ))}
        </Grid>
        <Box sx={{ display: 'flex', mr: 'auto', ml: 'auto', width: 100 }}>
          <Box sx={{ mr: '20px' }}>
            <Button
              variant="contained"
              onClick={() => setPages(pages - 1)}
              disabled={pages === 1}
            >
              <KeyboardArrowLeftIcon />
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              onClick={() => setPages(pages + 1)}
              disabled={checkPages}
            >
              <KeyboardArrowRightIcon />
            </Button>
          </Box>
        </Box>
        <ToastContainer />
      </Box>
    </>
  );
};

export default ProductsList;
