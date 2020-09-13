import React from 'react';
import Contact from '@views/Contact/Contact';
import withMainLayout from '@layouts/withMainLayout';
/**
 * Contact route
 */
function ContactPage() {
	return <Contact />;
}

export default withMainLayout(ContactPage);
