import React from 'react';
import { Footer } from '../components/common/Footer';
import { Header } from '../components/common/Header';
import { Navigation } from '../components/common/Navigation';
import Head from 'next/head'

export const PageLayout = (props) => {
    return (
        <>
            <Head>
                <title>Phones Store</title>
            </Head>
            <Header />
            <Navigation categories={props.categories} />
            {props.children}
            <Footer categories={props.categories} />
        </>

    );
};
