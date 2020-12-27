import React from 'react';



const SideBar = () => {
 const [array,setArray] = React.useState([]);
 const setCount = (limit) => {for(let i = 0; i < limit; i++){setArray(array=>[ ...array, Math.floor(Math.random() * 150)])}};
 return (
     <>
     <div style={styles.sidebarContainer}>
         <div style={styles.Title}>Sort Visualizer</div>
     </div>
 </>)
}

const styles = {
    sidebarContainer: {
        width: "25vw",
        height: "100vh",
        borderRightWidth: 1,
        borderColor: "grey",
        borderRightStyle: "solid"
    },
    Title: {
        fontSize: 30,
        width: "100%",
        alignItems: "center"
    }
}

export default SideBar;