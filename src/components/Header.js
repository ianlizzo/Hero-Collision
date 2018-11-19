import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

const styles = {
  background: 'linear-gradient(45deg, #b92b27 20%, #1565c0 90%)',
  color: 'white',
}

const Header = () => {
  return(
    <div>
      <AppBar style={styles}>
        <Toolbar>
          <Typography variant="display1" color="inherit" style={{fontFamily: 'Futura'}}>
            H E R O <span>&nbsp;</span> C O L L I S I O N
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Header
