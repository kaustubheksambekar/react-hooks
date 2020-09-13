import React from 'react';
import App from 'next/app';
import '../styles/app.scss';

class BaseApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return <Component {...pageProps} />;
	}
}

export default BaseApp;
