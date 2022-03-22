const initialState = {
    amount: 100,
}

export default (state = initialState, action) => {

    if (action.type === "DEPOSIT_MONEY") {
        return {
            ...state,
            amount: state.amount + action.payload
        }
    }

    if (action.type === "WITHDRAW_MONEY") {
        return {
            ...state,
            amount: state.amount + action.payload
        }
    }

    return state;
};



export const selectCurrentAmount = (state) =>{
    return state.amountReducer.amount;
}