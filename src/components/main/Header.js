import React from 'react';
import SideBar from './SideBar';

const Header = () => {
    return (
        <div className='content'>
            <div className='main_flex'>
                <a><img/>Logo</a>
                <input className='search_input' placeholder='내가 찾는 모든 웹툰 검색'></input>
                <button className='btn'>Language</button>
                <button>Login</button>
            </div> 
            <SideBar></SideBar>
        </div>
    );
};

export default Header;