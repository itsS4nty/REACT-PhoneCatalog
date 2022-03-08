import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Catalog from '../components/Main/Catalog';
import Footer from '../components/Main/Footer';
import Header from '../components/Main/Header';
import Menu from '../components/Main/Menu';
import PhoneInfoContainer from '../components/PhoneInfo.js/PhoneInfoContainer';

const Main = () => {
    const [phoneInfo, setPhoneInfo] = useState({
        show: false,
        id: '',
    });
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleScroll = () => {
        const position = window.pageYOffset;
        if(scrollPosition - position !== 0 && !phoneInfo.show) {
            console.log('hi', phoneInfo)
            setScrollPosition(position);
        }
    };
    const showInfo = (e) => {
        e.preventDefault();
        setPhoneInfo({ show: true, id: e.target.id });
        window.scroll(0, 0);
    }
    const closePhoneInfo = (e) => {
        e.preventDefault();
        setPhoneInfo({ show: false });
        window.scroll(0, scrollPosition);
    }
    return (
        <>
        <Container darkContainer={phoneInfo.show}>
                <Header />
                <Menu />
                <Catalog phoneInfo={showInfo} />
                <Footer />
                { phoneInfo.show && <PhoneInfoContainer id={phoneInfo.id} closePhoneInfo={closePhoneInfo} /> }
        </Container>
        {phoneInfo.show && <DarkContainer currentScrollPos={scrollPosition} /> }
        </>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
    "header header"
    "nav catalog"
    "footer footer";
    background-color: #fff;
    color: #444;
    @media (max-width: 768px) {
        grid-template-rows: auto;
        grid-template-areas: 
            'header header'
            'nav nav'
            'nav nav'
            'catalog catalog'
            'footer footer'
            ;
        visibility: ${props => props.darkContainer ? 'hidden' : 'visible'};
    }
    overflow: ${props => props.darkContainer ? 'hidden' : 'auto'};
`;

const DarkContainer = styled.div`
    z-index: 5;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .75;
`;

export default Main;