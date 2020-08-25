const isLoggedIn = sessionStorage.getItem('isLoggedIn');

const defaultState = {
    isLoggedIn
}

export const auth = (state = defaultState, action) => {
    const { type } = action;

    switch(type) {
        case "LOGIN": {
            return {
                isLoggedIn: true
            }
        }
        case "LOGOUT": {
            return {
                isLoggedIn: false
            }
        }
        default:
            return state;
    }
}