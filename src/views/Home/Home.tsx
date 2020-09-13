import React from 'react';
import TreeStructure from '@views/Home/TreeStructure/TreeStructure';
import withMainLayout from '@layouts/withMainLayout';

function Home() {
	return <TreeStructure />;
}

export default withMainLayout(Home);
