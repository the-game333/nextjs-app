import { useEffect, useState } from 'react';
import Link from 'Link';
// material-ui
import { Button, CardContent, CardMedia, Grid, Rating, Stack, Typography } from '@mui/material';

// redux
import { useDispatch, useSelector } from 'store';
import { addProduct } from 'store/slices/cart';

// project import
import MainCard from './MainCard';
import SkeletonProductPlaceholder from 'ui-component/cards/Skeleton/ProductPlaceholder';
import { openSnackbar } from 'store/slices/snackbar';

// assets
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

// types
import { ProductCardProps } from 'types/product';

const prodImage = '/assets/images/e-commerce';

// ==============================|| PRODUCT CARD ||============================== //

const ProductCard = ({ id, color, name, image, description, offerPrice, salePrice, rating }: ProductCardProps) => {
  const dispatch = useDispatch();

  const prodProfile = image && `${prodImage}/${image}`;
  const [productRating] = useState<number | undefined>(rating);
  const cart = useSelector((state) => state.cart);

  const addCart = () => {
    dispatch(addProduct({ id, name, image, salePrice, offerPrice, color, size: 8, quantity: 1 }, cart.checkout.products));
    dispatch(
      openSnackbar({
        open: true,
        message: 'Add To Cart Success',
        variant: 'alert',
        alert: {
          color: 'success'
        },
        close: false
      })
    );
  };

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const TypedLink = Link as React.ElementType;

  return (
    <>
      {isLoading ? (
        <SkeletonProductPlaceholder />
      ) : (
        <MainCard
          content={false}
          boxShadow
          sx={{
            '&:hover': {
              transform: 'scale3d(1.02, 1.02, 1)',
              transition: 'all .4s ease-in-out'
            }
          }}
        >
          <CardMedia
            sx={{ height: 220 }}
            image={prodProfile}
            title="Contemplative Reptile"
            component={TypedLink}
            href={`/app/e-commerce/product-details/${id}`}
          />
          <CardContent sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  component={TypedLink}
                  href={`/app/e-commerce/product-details/${id}`}
                  variant="subtitle1"
                  sx={{ textDecoration: 'none' }}
                >
                  {name}
                </Typography>
              </Grid>
              {description && (
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    sx={{
                      overflow: 'hidden',
                      height: 45
                    }}
                  >
                    {description}
                  </Typography>
                </Grid>
              )}
              <Grid item xs={12} sx={{ pt: '8px !important' }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Rating precision={0.5} name="size-small" value={productRating} size="small" readOnly />
                  <Typography variant="caption">({offerPrice}+)</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Grid container spacing={1}>
                    <Grid item>
                      <Typography variant="h4">${offerPrice}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6" sx={{ color: 'grey.500', textDecoration: 'line-through' }}>
                        ${salePrice}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Button variant="contained" sx={{ minWidth: 0 }} onClick={addCart}>
                    <ShoppingCartTwoToneIcon fontSize="small" />
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </MainCard>
      )}
    </>
  );
};

export default ProductCard;
