import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import QnaChat from './QnaChat';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <MainContent></MainContent>
            <QnaChat></QnaChat>
        </div>
    );
};

export default Main;