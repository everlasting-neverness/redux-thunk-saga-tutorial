import {
    CREATE_POST,
    FETCH_POSTS,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ALERT,
    HIDE_ALERT,
    REQUEST_POSTS
} from './types';

export const createPost = post => ({
    type: CREATE_POST,
    payload: post
});

export function fetchPosts() {
    return {
        type: REQUEST_POSTS
    }
    // return async dispatch => {
    //     try {
    //         dispatch(showLoader());
    //         const response = await fetch(
    //             'https://jsonplaceholder.typicode.com/posts?_limit=5'
    //         );
    //         const json = await response.json();
    //         dispatch({
    //             type: FETCH_POSTS,
    //             payload: json
    //         });
    //         dispatch(hideLoader());
    //     } catch {
    //         dispatch(showAlert('Something is wrong...'));
    //         dispatch(hideLoader());
    //     }
    // };
}

export const showLoader = () => ({
    type: SHOW_LOADER
});

export const hideLoader = () => ({
    type: HIDE_LOADER
});

export const showAlert = message => {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: message
        });
        setTimeout(() => {
            dispatch(hideAlert());
        }, 5000);
    };
};

export const hideAlert = () => ({
    type: HIDE_ALERT
});
