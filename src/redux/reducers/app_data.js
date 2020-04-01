// @flow
import type { Action } from '../types'
import type { AppData } from '../types/app_data'
import {initState} from '../initState'

const app_data = (state: AppData = initState.app_data, action: Action): AppData => {
    switch(action.type) {
        case "CHANGE_WELCOME_MSG":
            return {
                ...state,
                welcome_msg: action.msg,
            }
        default:
            return state;
    }
} 

export default app_data