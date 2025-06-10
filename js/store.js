const createStore = (initialState = {}) => {
    let state = {...initialState};
    const listeners = new Set();

    return {
        getState() {
            return state;
        },
        setState(partial) {
            state = {...state, ...partial};
            listeners.forEach((callback) => callback(state));
        },
        subscribe(callback) {
            listeners.add(callback);
            return () => listeners.delete(callback);
        }
    }
}

export const store = createStore({
    count: 0,
    username: '',
    cart: []
});

window.store = store;    

