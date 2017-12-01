//creating a redux data mangement architecture.

import {createStore} from 'redux';



const reducer=(state,action)=>{
    switch(action.type){
        case 'INC': return state+action.payload;

        case 'DEC': return state-action.payload;
    }

    return state;
}


let store=createStore(reducer,0);

store.subscribe(()=>{
    console.log(`the new state is ${store.getState()} `);
});


store.dispatch({type:"INC",payload:4});
store.dispatch({type:"DEC",payload:-3});
store.dispatch({type:"INC",payload:0});
store.dispatch({type:"DEC",payload:5});

export default store;

