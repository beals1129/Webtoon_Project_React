import React from 'react';
import SideBar from './SideBar';

const Header = () => {
    return (
        <div>
            <div>
                <a><img/></a>
                <input></input>
                <button>Language</button>
                <button>Login</button>
            </div>
            <SideBar></SideBar>
        </div>
    );
};

export default Header;