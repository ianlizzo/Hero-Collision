import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

const navStyle = {
  background: 'linear-gradient(45deg, #b92b27 20%, #1565c0 90%)',
  color: 'white',
}

const typeStyle = {
  fontFamily: 'Futura',
}

const NavBar = () => {
  return(
    <div>
      <AppBar style={navStyle}>
        <Toolbar>
          <Typography variant="display1" color="inherit" style={typeStyle}>
            H E R O <span>&nbsp;</span> C O L L I S I O N
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default NavBar
