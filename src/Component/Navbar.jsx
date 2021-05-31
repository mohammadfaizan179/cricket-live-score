import React, { Component } from 'react'
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import "../Styles/NavbarStyles.css";

class Navbar extends Component {
    render() {
        return (
            <>
                <AppBar position="fixed" className="navbar_wraper">
                    <Toolbar>  
                        <SportsCricketIcon className="circketIcon"/>           
                        <Typography variant="h5" mb={3}>Cricket Live Score</Typography>
                    </Toolbar>
                </AppBar>
                
            </>
        )
    }
}

export default Navbar
