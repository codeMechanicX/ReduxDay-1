// state
// action 
// reducer 
// store 
// store dispatch

const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const initialState = {
    counter:0,
    amount:0
};
const handleIncrement = () =>{
    return {
        type:INCREMENT
    }
}
const handleDecrement = () =>{
    return {
        type:DECREMENT
    }
}

const handleReset = () =>{
    return{
        type:RESET
    }
}

const handleLogicalReducer = (state = initialState,action) =>{
    switch (action.type) {
        case INCREMENT:
            // return for it is a pure function
            return{
                ...state,
                counter : state.counter + 1
            }
        case DECREMENT:
            // return for it is a pure function
            return{
                ...state,
                counter : state.counter - 1
            }
        case RESET:
            // return for it is a pure function
            return{
                ...state,
                counter : state.counter = 0
            }

        default:
            state;
    }
}

const store = createStore(handleLogicalReducer);
store.subscribe(()=>{
    console.log(store.getState())
})

// dispatch action 

store.dispatch(handleIncrement())
store.dispatch(handleIncrement())
store.dispatch(handleIncrement())
store.dispatch(handleDecrement())
store.dispatch(handleDecrement())
store.dispatch(handleReset())