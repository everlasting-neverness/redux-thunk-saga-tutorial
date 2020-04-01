import { CREATE_POST } from './types';
import { showAlert } from './actions';

const forbidden = ['fuck', 'spam', 'php'];

export function filterWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            if (action.type === CREATE_POST) {
                const found = forbidden.some(word => action.payload.title.includes(word));
                if (found) {
                    return dispatch(showAlert('Forbidden word'))
                }
            }
            return next(action);
        };
    };
}
