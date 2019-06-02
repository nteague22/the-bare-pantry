import React, { ReactNode, Fragment, useMemo } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

export interface BaseProps<T=any> {
    reducers?: T;
    children?: ReactNode;
}

export default function BaseLayout(props: BaseProps) {
    const storeBuild = useMemo(()=>createStore(combineReducers(props.reducers)),[props.reducers]);
    return (
        <Provider store={storeBuild}>
        <div>
            <header>

            </header>
            {props.children}
            <footer>

            </footer>
        </div>
        </Provider>
    )
}