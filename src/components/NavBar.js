import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcons from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const NavBar = () => {
    const useStyles = makeStyles(theme => ({
        mainTitle: {
            fontSize: "3rem",
            textAlign: "center",
            color: "black"
        },
        button: {
            width: '10vw',
            height: '10vh',
            marginBottom: '10%'
        },
        menuIcons: {
            width: '10vw',
            height: '8vh',
            color: 'white'
        }
      }));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.button}>
        <MenuIcons className={classes.menuIcons}/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default NavBar;