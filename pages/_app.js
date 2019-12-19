import React from 'react'
import {initStore} from '../redux/index'
import {Provider} from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import {getData} from "../redux/actions/getData";

class MyApp extends App {

    // static async getInitialProps({Component, ctx}) {
    //
    //     ctx.store.dispatch(getData());
    //
    //     const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    //
    //     return {pageProps};
    //
    // }

    render() {

        const {Component, pageProps, store} = this.props;
        console.log("pageProps",pageProps)
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }

}

export default withRedux(initStore)(MyApp);
