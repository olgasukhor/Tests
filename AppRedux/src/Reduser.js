const defaultState = {
    cash: 0
}

const reduser = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CASH":
            return { cash: state.cash + action.payload }
        case "GET_CASH":
            return { cash: state.cash - action.payload }
        default:
            return state
    }
}
export default reduser;