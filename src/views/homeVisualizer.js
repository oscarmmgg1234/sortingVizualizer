import React from 'react'
import SideBar from "../components/sideBar";
import MagicCanvas from "../components/magicCanvas";

const Home = () => {

    return (<>
        <div style={styles.container}>
            <SideBar/>
            <MagicCanvas/>
        </div>
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