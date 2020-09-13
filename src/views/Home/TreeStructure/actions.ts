import { TreePost } from '../../../types/ITreeDataContext';

// Action constants
export const EXPAND_COLLAPSE_ONE = 'EXPAND_COLLAPSE_ONE';
export const EXPAND_COLLAPSE_ALL = 'EXPAND_COLLAPSE_ALL';
export const LOAD_TREE = 'LOAD_TREE';

// Action types
export type TreeStructureActions =
  | {
      type: typeof EXPAND_COLLAPSE_ONE;
      payload: { nodeId: string };
    }
  | {
      type: typeof LOAD_TREE;
      payload: { posts: TreePost[] };
    }
  | { type: typeof EXPAND_COLLAPSE_ALL };
