export const getLoadingState = state => state.app.isLoading;
export const getDeviceIdState = state => state.app.deviceId;
export const getOsState = state => state.app.os;

export const getCurrentThemeState = state => state.app.theme;

export const getDataState = state => state.data.map(({ time, high, low, open, close }) => ({
    x: time,
    y: [open, close, low, high],
}));
