import React, { useEffect } from 'react';
import useTreeStructureData, {
	TreeStructureContext,
	TreeStructureDispatcher,
} from '@views/Home/TreeStructure/context';
import structureData from '@views/Home/TreeStructure/common/utils/structureData';
import { LOAD_TREE } from '@views/Home/TreeStructure/actions';
import { treePosts } from '@mocks/users.json';
import PostSidebar from './PostSidebar/PostSidebar';
import PostContent from './PostContent/PostContent';
import styles from './TreeStructure.module.scss';

/**
 * Main Context Wrapper for post component
 */
function TreeStructure() {
	const [treeState, dispatcher] = useTreeStructureData();

	// mock data feed
	useEffect(() => {
		const flattened = structureData(treePosts);
		dispatcher({ type: LOAD_TREE, payload: { posts: flattened } });
	}, [dispatcher]);

	return (
		<TreeStructureContext.Provider value={treeState}>
			<TreeStructureDispatcher.Provider value={dispatcher}>
				<div className={styles.treeStructureWrapper}>
					<PostSidebar />
					<PostContent />
				</div>
			</TreeStructureDispatcher.Provider>
		</TreeStructureContext.Provider>
	);
}

export default TreeStructure;
