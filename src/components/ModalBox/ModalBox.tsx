import { Typography } from '@mui/material';
import { IProduct } from '../../types/data';

interface ProductItemProps {
  product: IProduct;
}

const ModalBox: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <>
      <Typography sx={{ margin: 0, padding: '10px' }}>
        <Typography component={'span'} sx={{ fontWeight: 'bold' }}>
          id:{' '}
        </Typography>
        {product.id}
      </Typography>
      <Typography>
        {' '}
        <Typography sx={{ margin: 0, padding: '10px' }}>
          <Typography component={'span'} sx={{ fontWeight: 'bold' }}>
            name:{' '}
          </Typography>{' '}
          {product.name}
        </Typography>{' '}
      </Typography>
      <Typography sx={{ margin: 0, padding: '10px' }}>
        <Typography component={'span'} sx={{ fontWeight: 'bold' }}>
          year:{' '}
        </Typography>
        {product.year}
      </Typography>
      <Typography sx={{ margin: 0, padding: '10px' }}>
        <Typography component={'span'} sx={{ fontWeight: 'bold' }}>
          color:{' '}
        </Typography>
        {product.color}
      </Typography>
      <Typography sx={{ margin: 0, padding: '10px' }}>
        <Typography component={'span'} sx={{ fontWeight: 'bold' }}>
          pantone_value:{' '}
        </Typography>
        {product.pantone_value}
      </Typography>
    </>
  );
};

export default ModalBox;
