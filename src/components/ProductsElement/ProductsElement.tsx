import Modal from '@mui/material/Modal';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { useState } from 'react';
import { IProduct } from '../../types/data';
import ModalBox from '.././ModalBox';

interface ProductItemProps {
  product: IProduct;
}

const ProductsElement: React.FC<ProductItemProps> = ({ product }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: `${product.color}`,
    border: '2px solid #000',

    padding: 4,
  };
  return (
    <Grid item xs={6}>
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          bgcolor: `${product.color}`,
          '&:hover': {
            boxShadow:
              'inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1)',
          },
        }}
        onClick={handleOpen}
      >
        <CardContent>
          <Typography sx={{ display: 'flex', margin: 0, padding: '10px' }}>
            <Typography component={'span'} sx={{ fontWeight: 'bold' }}>
              id:
            </Typography>
            {product.id}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography sx={{ margin: 0, padding: '10px' }}>
            <Typography component={'span'} sx={{ fontWeight: 'bold' }}>
              name:{' '}
            </Typography>{' '}
            {product.name}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography sx={{ margin: 0, padding: '10px' }}>
            <Typography component={'span'} sx={{ fontWeight: 'bold' }}>
              year:{' '}
            </Typography>{' '}
            {product.year}
          </Typography>
        </CardContent>
      </Card>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <ModalBox product={product} />
        </Box>
      </Modal>
    </Grid>
  );
};
export default ProductsElement;
