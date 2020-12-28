import React from 'react';



const SideBar = () => {

    const [input,setInput] = React.useState("");
    const [array,setArray] = React.useState([]);
    const setCount = (limit) => {for(let i = 0; i < limit; i++){setArray(array=>[ ...array, Math.floor(Math.random() * 150)])}};
 return (
     <>
     <div style={styles.sidebarContainer}>
         <div style={styles.Title}>Sort Visualizer</div>
         <p>Input Size: </p>
         <input type="text" style={styles.InputBar} onChange={(event)=>setInput(event.target.value)}/>
         <select name={"Sorting Algorithm"}>
             <option value={"bubbleSort"}>Bubble Sort</option>
             <option value={"insertionSort"}>Insertion Sort</option>
         </select>
         <select name={"Data Structure"}>
             <option value={"linkedList"}>Linked List</option>
         </select>
         <button>Magik Sort</button>
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