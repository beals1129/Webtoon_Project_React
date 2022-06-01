import React from 'react';

const MainContent = () => {
    const bannerImg = ['네이버','카카오페이지','다음','시리즈']
    return (
        <div>
            <div className='content main'>
                <h1>나만의 인기 웹툰 <br/> 찾아서 한번에 연결하기</h1>
                <button>테스트 하고 웹툰 찾기 </button>
            </div>
            <div className='main_toon_list'>
                <p>striming webtoon</p>
                <ul>
                   {bannerImg.map((img, index) => <li key={index}>{img}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default MainContent;