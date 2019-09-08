import { SHOW_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return action.payload;
        case REMOVE_ALERT:
            return null;

        default:
            return state;
    }
};
