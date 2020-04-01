// @flow
export type AppData = {
    +welcome_msg: string,
}

// App Data State
export type AppState = {
    +app_data: AppData,
}

// App Data Action
export type AppDataAction = 
    | { type: "CHANGE_WELCOME_MSG", +msg: string }
    //| Another Action