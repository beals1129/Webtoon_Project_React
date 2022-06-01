import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import QnaChat from './QnaChat';
import './css/Reset.css'
import Container from './Container';

const Main = () => {
    return (
        <Container>
        <div>
            <Header></Header>
            <MainContent></MainContent>
            <QnaChat></QnaChat>
        </div>
        </Container>
    );
};

export default Main;