import {STATUS_COMING, STATUS_IN_PROGRESS, STATUS_NO_RECEPTION, STATUS_WAITING} from "../constants";

export const theme = {};
theme[STATUS_NO_RECEPTION] = {
    container: {
        backgroundColor: '#a4dee9',
    },
    headerContainer: {
        color: '#fff',
    },
    status: {
        color: '#fff',
    },
    footerContainer: {
        backgroundColor: '#8dbdc8',
        color: '#fff',
    },
};
theme[STATUS_WAITING] = {
    container: {
        backgroundColor: '#f3f3f3',
    },
    headerContainer: {
        color: '#000',
    },
    status: {
        color: '#000',
    },
    footerContainer: {
        backgroundColor: '#d2d2d2',
        color: '#000',
    },
};

theme[STATUS_COMING] = {
    container: {
        backgroundColor: '#0bbd0b',
    },
    headerContainer: {
        color: '#fff',
    },
    status: {
        color: '#fff',
    },
    footerContainer: {
        backgroundColor: '#0ba10b',
        color: '#fff',
    },
};
theme[STATUS_IN_PROGRESS] = {
    container: {
        backgroundColor: '#ed4545',
    },
    headerContainer: {
        color: '#fff',
    },
    status: {
        color: '#fff',
    },
    footerContainer: {
        backgroundColor: '#da3f3f',
        color: '#fff',
    },
};
