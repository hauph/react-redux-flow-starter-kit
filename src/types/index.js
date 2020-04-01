// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'

import type { AppState,AppDataAction } from './app_data'

export type ReduxInitAction = { type: '@@INIT' };

// APP STATE TYPE
export type State = AppState; // & AnotherStateData

// APP ACTION TYPE
export type Action = AppDataAction; // | AnotherAction

// APP STORE
export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;

export type GetState = () => State;

// APP THUNK ACTION TYPE
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
