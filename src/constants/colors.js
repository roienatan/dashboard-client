const COLORS = {
    mainBlack: '#191C21',
    contentBlack: '#303640',
    contentBlackDarker: '#292E37',
    mainWhite: '#FFFFFF',
    contentWhite: '#E4E8E2',
    contentWhiteDarker: '#CCCCCC',
    cyan: '#24B5B4',
    black: '#000000',
    red: '#ff4040',
    orange: '#ffa500',
    green: '#4D9E45',
    gray: '#A29D9C'
}

export const LIGHT_MODE = {
    mainBackgroundColor: COLORS.mainWhite,
    contentBackgroundColor: COLORS.contentWhite,
    ActionsBarColor: COLORS.contentWhiteDarker,
    highlightedColor: COLORS.cyan,
    textColor: COLORS.contentBlack
}

export const DARK_MODE = {
    mainBackgroundColor: COLORS.mainBlack,
    contentBackgroundColor: COLORS.contentBlack,
    ActionsBarColor: COLORS.contentBlackDarker,
    highlightedColor: COLORS.cyan,
    textColor: COLORS.contentWhite
}

export const TASK_LOW = {
    mainColor: COLORS.green
}

export const TASK_MEDIUM = {
    mainColor: COLORS.orange
}

export const TASK_HIGH = {
    mainColor: COLORS.red
}

export const TASK_COMPLETED = {
    mainColor: COLORS.gray
}