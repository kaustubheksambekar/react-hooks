import React, { useMemo } from 'react';
import { TreeView } from '@material-ui/lab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { NODEVIEW } from '../../../../types/ITreeDataContext';
import { getExpandedPostIDs } from '@views/Home/TreeStructure/common/utils/getExpanded';
import RenderTreeNode from '@views/Home/TreeStructure/common/RenderTreeNode/RenderTreeNode';
import { useTreeState } from '../context';
import styles from './PostContent.module.scss';

/**
 * Component to render post content on TreeStructure
 */
function PostContent() {
	const treeData = useTreeState();

	const getDefaultExpanded = useMemo(() => getExpandedPostIDs(treeData.users), [treeData.users]);

	return (
		<div className={styles.postContent}>
			<TreeView
				expanded={getDefaultExpanded}
				defaultCollapseIcon={<ExpandMoreIcon />}
				defaultExpandIcon={<ChevronRightIcon />}
			>
				<RenderTreeNode nodeview={NODEVIEW.CONTENT} />
			</TreeView>
		</div>
	);
}

export default PostContent;
