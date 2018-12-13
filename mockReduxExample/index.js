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


// ========
// REDUCERS
// ========
// We need to default the oldListOfClaims array in case this is the first time we call this function and there are no exsisting claims to pass
// in case it isnt a create claim
const claimHistory = (oldlistOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        return [...oldlistOfClaims, action.payload];
    }

    return oldlistOfClaims;
}

const accounting = (bagOfMoney, action) => {

    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }
     return bagOfMoney;

}

const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name]
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => { 
            name !== action.payload.name;
        })
    }
    return listOfPolicies;
}

import { createStore, combineReducers } from 'redux';

// Combines all of our reducers
const ourDepartments = combineReducers({
    accounting: accounting,
    claimHistory: claimHistory,
    policies: policies
})

const store = createStore(ourDepartments);

const action = createPolicy('Alex', 20);
console.log(action);

// When we called store,dispatch each one of our reducer function were run and essentially processed or evaluated the type of form it was
store.dispatch(action);

// This is the overall state of our application
store.getState();
