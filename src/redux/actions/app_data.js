// @flow
import type { AppDataAction } from '../../types/app_data'
//import type { ThunkAction } from '../types'

export const changeWelcomeMsg = (msg: string): AppDataAction => {
    return {
        type: "CHANGE_WELCOME_MSG",
        msg,
    }
}
