const deposit = (value)=>{
    console.log("DEPOSIT_MONEY: ", value)
    return {
        type:"DEPOSIT_MONEY",
        payload: +value,
    }
}


const withdraw = (value)=>{
    console.log("WITHDRAW_MONEY:", value)
    return {
        type:"WITHDRAW_MONEY",
        payload: -value,
    }
}

export {deposit, withdraw};