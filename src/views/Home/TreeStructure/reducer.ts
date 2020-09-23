import { Reducer } from 'react';
import produce from 'immer';
import { ITreeDataContext } from '../../../types/ITreeDataContext';
import {
	TreeStructureActions,
	EXPAND_COLLAPSE_ONE,
	EXPAND_COLLAPSE_ALL,
	LOAD_TREE,
} from './actions';

/**
 * Reducer to manage state for TreeStructure component
 */

const reducer: Reducer<ITreeDataContext, TreeStructureActions> = produce(
	(state: ITreeDataContext, action: TreeStructureActions) => {
		switch (action.type) {
			case LOAD_TREE:
				state.users = action.payload.posts;
				state.loading = false;
				break;

			case EXPAND_COLLAPSE_ONE:
				state.users.forEach(currentNode => {
					if (currentNode.id === action.payload.nodeId) {
						currentNode.isExpanded = !currentNode.isExpanded;
					}
				});
				break;

			case EXPAND_COLLAPSE_ALL:
				state.loading = true;
				break;
			}
	}
);

export default reducer;
