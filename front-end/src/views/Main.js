import React from 'react'
import styled from 'styled-components';
import Catalog from '../components/Main/Catalog';
import Footer from '../components/Main/Footer';
import Header from '../components/Main/Header';
import Menu from '../components/Main/Menu';

const Main = () => {
  return (
    <Container>
        <Header />
        <Menu />
        <Catalog />
        <Footer />
    </Container>
  )
}

const Container = styled.div`
    /* display: grid;
    grid-template-areas: 
        'header header'
        'nav catalog'
        'footer footer'
        'footer footer'
        'footer footer'
    ;
    @media (max-width: 768px) {
        grid-template-areas: 
            'header header header header header header'
            'nav nav nav nav nav nav'
            'catalog catalog catalog catalog catalog catalog'
            'catalog catalog catalog catalog catalog catalog'
            'catalog catalog catalog catalog catalog catalog'
            'catalog catalog catalog catalog catalog catalog'
            'catalog catalog catalog catalog catalog catalog'
            'footer footer footer footer footer footer'
        ;
    } */
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
    }
`;

export default Main;