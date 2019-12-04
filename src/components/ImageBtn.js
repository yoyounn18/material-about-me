import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
  {
    url: 'data:image/png;base64,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',
    title: 'HTML',
    width: '25vh',
    height: '25vh'
  },
  {
    url: 'data:image/png;base64,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',
    title: 'Css',
    width: '25vh',
    height: '25vh'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    title: 'JavaScript',
    width: '25vh',
    height: '25vh'
  },
  {
    url : 'data:image/png;base64,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',
    title: 'Java',
    width: '25vh',
    height: '25vh'
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      border: '10px solid white',
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        width: '100%',
        backgroundColor: 'white',
        border: '4px solid white',
        color: 'black'
      },
    },
  },
  focusVisible: {
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white, // 타이틀 부분
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'), // 밑에 작은 버튼
  },
}));

const ImageBtn = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span 
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked}/>
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}

export default ImageBtn;