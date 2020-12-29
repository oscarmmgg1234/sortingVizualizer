import React from 'react'
import SideBar from "../components/sideBar";
import MagicCanvas from "../components/magicCanvas";


export const iContext = React.createContext();
const initialState = {inputValue: 0,Algo: "bubbleSort", DataS: "linkedList"};
function reducer(state,action){
    switch(action.type){
        case 'setObject':
            return {inputValue: action.payload, Algo: action.algorithm, DataS: action.datas}
        case 'setInput':
            return {...state, inputValue: action.payload};
        case 'setAlgo' :
            return {...state, Algo: action.payload};
        case 'setDataS': 
            return {...state, DataS: action.payload};
        case 'reset' : 
            return initialState;
        default: 
            return state
    };
};

const Home = () => {

    const [input, dispatch] = React.useReducer(reducer,initialState);
    return (<>
    <iContext.Provider value={{IState: input, Dispatch: dispatch }} >
        <div style={styles.container}>
            <SideBar/>
            <MagicCanvas/>
        </div>
    </iContext.Provider>
    </>)
}

const styles = {
    container: {
        flexDirection: "row",
        display: 'flex',
        height: "100vh",
        width: "100vw"
    }


}
export default Home