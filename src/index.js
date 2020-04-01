import React from 'react';
import { render } from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './redux/rootReducer';
import { filterWordsMiddleware } from './redux/middleware';
import { sagaWatcher } from './redux/sagas';
import App from './App';

const saga = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, filterWordsMiddleware, saga))
);

saga.run(sagaWatcher);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

render(
    <React.StrictMode>{app}</React.StrictMode>,
    document.getElementById('root')
);
