import Head from "next/head";
import HeoroSection from "./home/HeoroSection";
import Navbar from "./share/Navbar";
import Footer from "./share/Footer";
import styles from "../styles/Home.module.css"
import SecondHerosection from "./home/SecondHerosection";





const Home = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <header>
                <Navbar/>
            </header>

            <main className={styles.main}>
                <HeoroSection/>
                <SecondHerosection/>
            </main>

            <footer className={styles.footer}>
                <Footer/>
            </footer>
        </>
       
    );
}

export default Home;