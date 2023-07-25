export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;

export const selectUser = ({ auth }) => auth.user;

export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;

export const selectIsError = ({ auth }) => auth.isError;

export const selectIsLoading = ({ auth }) => auth.isLoading;
