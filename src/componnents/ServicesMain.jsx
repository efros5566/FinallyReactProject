import { Link, Outlet } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
function ServicesMain() {
    //return 
    return (
        <>       
            <h2>ServicesMain</h2>
<Tabs>

<Tab label="Home" component={Link} to="/" ></Tab>
<Tab label="Services" component={Link} to="Services" />
<Tab label="Events" component={Link} to="Events" />
</Tabs>
            <Outlet />
       </>)
}
export default ServicesMain




