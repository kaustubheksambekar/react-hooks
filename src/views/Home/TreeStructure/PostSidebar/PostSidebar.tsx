import React, { useMemo } from 'react';
import { TreeView } from '@material-ui/lab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ClearIcon from '@material-ui/icons/Clear';
import { NODEVIEW } from '../../../../types/ITreeDataContext';
import { getExpandedPostIDs } from '@views/Home/TreeStructure/common/utils/getExpanded';
import RenderTreeNode from '@views/Home/TreeStructure/common/RenderTreeNode/RenderTreeNode';
import { useTreeState } from '../context';
import styles from './PostSidebar.module.scss';

/**
 * Component to render post sidebar on TreeStructure
 */
function PostSidebar() {
	const treeData = useTreeState();

	const getDefaultExpanded = useMemo(() => getExpandedPostIDs(treeData.users), [treeData.users]);

	return (
		<div className={styles.postSidebar}>
			<TreeView
				expanded={getDefaultExpanded}
				defaultCollapseIcon={<ExpandMoreIcon />}
				defaultExpandIcon={<ChevronRightIcon />}
				defaultEndIcon={<ClearIcon />}
			>
				<RenderTreeNode nodeview={NODEVIEW.NAME} />
			</TreeView>
		</div>
	);
}

export default PostSidebar;
