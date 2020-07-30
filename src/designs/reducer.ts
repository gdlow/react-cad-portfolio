import { createAction, handleActions } from 'redux-actions';
import designs from './designs';
import { StoreState } from '../types/index';

const initialState: StoreState = {
    chosenDesign: designs[0],
};

const UPDATE_DESIGN = (state: StoreState, { payload }: { payload: number }): StoreState => {
    return { ...state, chosenDesign: designs[payload] };
};

export const updateDesign = createAction('UPDATE_DESIGN');

export default handleActions({
    UPDATE_DESIGN
}, initialState);