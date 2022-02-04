import React from 'react';
import './Nav.css';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
 function Nav(){
     return(
         <div className='nav_bar'>
             <div className='nav_bar-left'>
                <div className='menuicon'><MenuRoundedIcon/></div>
                <img src='https://i.imgur.com/XjBO8Vd.png'></img>
             </div>
             <div className='nav_bar-middle'>
                    <div class="searchicon"><SearchIcon/></div>
                    <input type='text' placeholder="Search here"></input>
                    <div className='dropdown'><ArrowDropDownRoundedIcon/></div>
                 </div>
             <div className='nav_bar-right'>
                 <div className='smae'><AppsRoundedIcon/></div>
                 <div className='smae'><NotificationsRoundedIcon/></div>
                 <div ><AccountCircleRoundedIcon className='account'/></div>
             </div>
         </div>
     );
 }
export default Nav;
