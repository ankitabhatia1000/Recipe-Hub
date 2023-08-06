
import {Menu} from 'semantic-ui-react';
import {logo} from '../../constants/constant'
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
       
     


        <Menu borderless fixed="top">
            <Menu.Item>
            < img src= {logo} alt="logo" style= {{width:65, height:65}}/>
           </Menu.Item>
            <Menu.Item name="Home" as={Link} to="/"  style={{ fontSize: '20px' }}/>
            <Menu.Item name="Recipes" as = {Link} to="/recipes" style={{ fontSize: '20px' }}/>
        </Menu>
    )
}

export default NavBar;