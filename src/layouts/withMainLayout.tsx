import React, { ReactNode, ComponentType } from 'react';
import Header from '@component/Header/Header';
import Footer from '@component/Footer/Footer';
import styles from './withMainLayout.module.scss';

type MainLayoutProps = {
  children: ReactNode;
};
/**
 *  Main Layout to wrap components
 *  with Header and Footer
 */
function withMainLayout(WrappedComponent: ComponentType) {
	function withMainLayoutHOC(props: MainLayoutProps) {
		return (
			<div className={styles.mainLayoutWrapper}>
				<Header />
				<section className={styles.mainSection}>
					<WrappedComponent {...props} />
				</section>
				<Footer />
			</div>
		);
	}

	withMainLayoutHOC.displayName = 'withMainLayoutHOC';
	return withMainLayoutHOC;
}

export default withMainLayout;
