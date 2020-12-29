import React from 'react';
import ReactDOM from 'react-dom'
import {iContext} from '../views/homeVisualizer'

import BubbleSort from "../assets/algorithms/bubbleSort";
//Plan is to approach this by creating some kind of clock component that has tick and at every tick which the users will set and in each set we will have to iterate through array and update
//the state or look into set interval loop and it will make stuff much simpler

const MagicCanvas = () => {
    
    const inputContext = React.useContext(iContext);
    const returnRandom = () => {
        return Math.floor(Math.random() * 500)
    }
    const items = []
    const size = []
    for (let i = 0; i < inputContext.IState.inputValue; i++){
        size.push(returnRandom())
    }
    for (let i = 0; i < inputContext.IState.inputValue; i++) {
        items.push(<div style={{ id: "oscar",
            width: 4, backgroundColor: "black", height: size[i] ,
            marginLeft: 2,
        }}></div>)
    }

    return (
        <>
            
            <div style={styles.canvasContainer} ><div style={styles.barContainer}>{items}</div><div style={styles.bottomRuler}></div></div>
            
        </>
        )
}



const styles = {
    canvasContainer: {
        display: "flex",
        flexDirection: "column",
        width: "75vw",
        height: "100%",
        alignItems: "center"
    },
    bottomRuler: {
        width: "75vw",
        height: "20%",
        borderTopWidth: 2,
        borderColor: "black",
        borderTopStyle: "solid"
    },
    barContainer: {
        width: "75vw",
        height: "80%",
        flexDirection: "row",
        display: "flex",
        alignItems: "flex-end"
    }

}

export default MagicCanvas;