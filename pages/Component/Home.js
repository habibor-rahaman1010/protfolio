import Head from "next/head";
import styles from "../../styles/Home.module.css"
import Navbar from "./Share/Navbar";


const Home = () => {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <Navbar/>

            <h1 className={styles.hello}>Hello Programemr</h1>
        </div>
    );
}

export default Home;