import React, { useCallback } from 'react';
import { TreeItem } from '@material-ui/lab';
import { TreePost, NODEVIEW } from '../../../../../types/ITreeDataContext';
import { useTreeState, useTreeDispatcher } from '@views/Home/TreeStructure/context';
import { EXPAND_COLLAPSE_ONE } from '@views/Home/TreeStructure/actions';

type TreeNodeTypes = {
  nodeview: NODEVIEW;
};

/**
 * Presentation component to render Tree Node based upon view Type
 */
function RenderTreeNode(props: TreeNodeTypes) {
	const { nodeview } = props;

	const treeData = useTreeState();
	const dispatcher = useTreeDispatcher();

	const TreeNode = useCallback(
		(userReplies: TreePost[]) => {
			return userReplies.map((nestedThread: TreePost) => (
				<TreeItem
					key={nestedThread.id}
					nodeId={nestedThread.id}
					onIconClick={() =>
						dispatcher({ type: EXPAND_COLLAPSE_ONE, payload: { nodeId: nestedThread.id } })
					}
					onLabelClick={() =>
						dispatcher({ type: EXPAND_COLLAPSE_ONE, payload: { nodeId: nestedThread.id } })
					}
					className={nestedThread.parentId === null ? '' : 'childNodes'}
					label={
						nodeview === NODEVIEW.NAME ? (
							<div>{`${nestedThread.createdBy.user.firstName} ${nestedThread.createdBy.user.lastName}`}</div>
						) : (
							<div>{nestedThread.content}</div>
						)
					}
				>
					{nestedThread.replies && TreeNode(nestedThread.replies)}
				</TreeItem>
			));
		},
		[nodeview, dispatcher]
	);

	return <>{TreeNode(treeData.users)}</>;
}

export default RenderTreeNode;
