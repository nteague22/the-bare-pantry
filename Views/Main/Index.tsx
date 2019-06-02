import React from 'react';
import ReactDOM from 'react-dom';
import BaseLayout from 'components/BaseLayout';
import { Reducer } from 'redux';

const mainReducers: Reducer = (state={}, action) => {
    switch (action.type) {
        case 'Action':
            return {
                ...state,
                message: 'Action set'
            };
    
        default:
            return state;
    }
}

const mount = document.getElementById('app');
ReactDOM.render(
<BaseLayout reducers={mainReducers}>
    
</BaseLayout>, 
mount);