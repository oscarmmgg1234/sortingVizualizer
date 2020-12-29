import React from 'react';
import {iContext} from '../views/homeVisualizer'



const SideBar = () => {

    const input_context = React.useContext(iContext);

    const [input,setInput] = React.useState("");
    const [Algo, setAlgo] = React.useState("");
    const [dataS, setDataS] = React.useState("");

     return (
     <>
     <div style={styles.sidebarContainer}>
         <div style={styles.Title}>Sort Visualizer</div>
         <p>Input Size: </p>
         <input type="text" style={styles.InputBar} onChange={(event)=>setInput(event.target.value)}/>
         <select onChange={(event)=> setAlgo(event.target.value)} name={"Sorting Algorithm"}>
             <option value={"bubbleSort"}>Bubble Sort</option>
             <option value={"insertionSort"}>Insertion Sort</option>
         </select>
         <select onChange={(event)=>setDataS(event.target.value)} name={"Data Structure"}>
             <option value={"linkedList"}>Linked List</option>
         </select>
         <button onClick={()=>input_context.Dispatch({type: 'setObject', payload: parseInt(input), algorithm: Algo, datas: dataS})}>Magik Sort</button>
     </div>
 </>)
}

const styles = {
    sidebarContainer: {
        width: "25vw",
        height: "100vh",
        borderRightWidth: 1,
        borderColor: "grey",
        borderRightStyle: "solid",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    Title: {
        fontSize: 30
    },
    InputBar: {
        width: "25%"
    }
}

export default SideBar;