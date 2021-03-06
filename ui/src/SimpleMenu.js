import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class SimpleMenu extends React.Component {
   state = {
      anchorEl: null,
   };
   
   handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
   };
   
   handleClose = () => {
      this.setState({ anchorEl: null });
   };
   
   render() {
      const { anchorEl } = this.state;
      
      return (
         <div>
            <Button
               aria-owns={anchorEl ? 'simple-menu' : null}
               aria-haspopup="true"
               onClick={this.handleClick}
            >
               View Cars
            </Button>
            <Menu
               id="simple-menu"
               anchorEl={anchorEl}
               open={Boolean(anchorEl)}
               onClose={this.handleClose}
            >
               <MenuItem onClick={this.handleClose}>1968 Mustang</MenuItem>
               <MenuItem onClick={this.handleClose}>1969 Firebird</MenuItem>
               <MenuItem onClick={this.handleClose}>1970 Corvette</MenuItem>
               <MenuItem onClick={this.handleClose}>1971 Nova</MenuItem>
            </Menu>
         </div>
      );
   }
}

export default SimpleMenu;