import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: 'whitesmoke',
  },
}));

export default function SimpleBackdrop({ visible }) {
  const classes = useStyles();

  return (
    <Backdrop
      className={classes.backdrop}
      open={visible}
      style={{ zIndex: 10000 }}
    >
      <CircularProgress color="inherit" style={{ zIndex: 10000 }} />
    </Backdrop>
  );
}
