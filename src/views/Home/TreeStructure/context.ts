import { useContext, createContext, useReducer, Dispatch } from 'react';
import { ITreeDataContext } from '../../../types/ITreeDataContext';
import { TreeStructureActions } from '@views/Home/TreeStructure/actions';
import reducer from './reducer';

// initial values
const INITIAL_STATE = {
	loading: false,
	error: null,
	users: [],
};

// Create Data Context
export const TreeStructureContext = createContext<ITreeDataContext>(INITIAL_STATE);

// use Data Context
export const useTreeState = () => useContext(TreeStructureContext);

// Create Dispatcher Context
export const TreeStructureDispatcher = createContext<Dispatch<TreeStructureActions>>(() => null);

// use Dispatcher Context
export const useTreeDispatcher = () => useContext(TreeStructureDispatcher);

// pass the data to reducer
function useTreeStructureData() {
	return useReducer(reducer, INITIAL_STATE);
}

export default useTreeStructureData;
