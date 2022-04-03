import React, {useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
  root: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'transition(-50%,-50%)',
  },
}));

const Loader = () => {
    const classes = useStyles();
    return (
            <CircularProgress className={classes.root}/>

    );
};
export default Loader;