import React from 'react'
import SideBar from "../components/sideBar";

const Home = () => {

    return (<>
        <div style={styles.container}>
            <SideBar/>

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