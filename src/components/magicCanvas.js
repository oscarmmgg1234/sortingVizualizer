import React from 'react';

import BubbleSort from "../assets/algorithms/bubbleSort";
//Plan is to approach this by creating some kind of clock component that has tick and at every tick which the users will set and in each set we will have to iterate through array and update
//the state or look into set interval loop and it will make stuff much simpler
const MagicCanvas  = () => {
    let a = BubbleSort("oscar");
    return (
        <div>{a}</div>
    )
}

export default MagicCanvas;