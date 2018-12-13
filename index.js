// ==============
// ACTION CREATOR
// ==============
// People dropping off a form
const createPolicy = (name, amount) => {

    // This object is an action or the form in our insurance company analogy
    return { 
        type: 'CREATE POLICY',
        payload: {
            name: name,
            amount: amount
        }
    }

}

// ==============
// ACTION CREATOR
// ==============
const deletePolicy = (name, id) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name: name,
            id: id
        }
    }
}

// ==============
// ACTION CREATOR
// ==============
const createClaim = (name, amountOfMoneyToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amountOfMoneyToCollect: amountOfMoneyToCollect
        }
    }
}