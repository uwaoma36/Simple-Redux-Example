import React,{Component} from 'react';
import store from './controllers/client';

class App extends Component{

    constructor(props){
        super(props)
        this.state={num:0};
        this.clickInc=this.clickInc.bind(this);
        this.clickDec=this.clickDec.bind(this);
    }

    clickInc(){
        //increment newPayload
        let newPayload=this.state.num+1;
        //set new PayLoad
        this.setState({num:newPayload});
        //dispatch an action to the store to handle.
        store.dispatch({type:"INC",payload:newPayload});
    }

    clickDec(){
        //decrement newPayload
        let newPayload=this.state.num>0?this.state.num-1:1;
        //set new PayLoad
        this.setState({num:newPayload});
        //dispatch an action to the store to handle.
        store.dispatch({type:"DEC",payload:newPayload});
    }
    render(){
        return(
            <div>
            <h1>{store.getState()}</h1><br/>
            <button onClick={this.clickInc}>Increment store</button>
            <button onClick={this.clickDec}>Decrement store</button>
            </div>
        );
    }
}

export default App;