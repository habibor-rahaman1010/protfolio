import Head from "next/head";
import styles from "../../styles/Home.module.css"


const Home = () => {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <h1 className={styles.hello}>Hello Programemr</h1>
        </div>
    );
}

export default Home;