
export const loginAction = bool => ({
    type: "LOGIN",
    payload: bool
});

export const logoutAction = bool => ({
    type: "LOGOUT",
    payload: bool
});