import React from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import { Button, Dialog, IconButton, Typography } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

// assets
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = ({ children, onClose, ...other }: DialogTitleProps) => (
  <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
    {children}
    {onClose ? (
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 10,
          top: 10,
          color: (theme) => theme.palette.grey[500]
        }}
      >
        <CloseIcon />
      </IconButton>
    ) : null}
  </DialogTitle>
);

export default function DynamicDialog(
  {
    header,
    children,
    isShown,
    close,
    footerButton,}: {
      header: React.ReactNode;
      children: React.ReactNode;
      isShown: boolean;
      close: () => void;
      footerButton?: React.ReactNode;
    }
) {

  return (
    <div>
      <BootstrapDialog onClose={close} aria-labelledby="customized-dialog-title" open={isShown}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close}>
          {header}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {children}
          </Typography>
          {/* <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed
            odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography> */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={close}>
            Close
          </Button>
          {footerButton}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
