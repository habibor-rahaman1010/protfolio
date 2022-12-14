import Head from "next/head";
import HeoroSection from "./home/HeoroSection";
import Navbar from "./share/Navbar";
import Footer from "./share/Footer";
import styles from "../styles/Home.module.css"
import SecondHerosection from "./home/SecondHerosection";
import Skils from "./skils/Skils";
import skills from '../public/data/skils';
import ProjectTabs from "./project/ProjectTabs";
import projectsData from "../public/data/project";


export const getStaticProps = async () => {
  
    return {
      props: {
        skills,
      },
    };
  };



const Home = () => {

    return (
        <>
            <Head>
                <title>Home</title>
        
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
                rel="stylesheet" 
                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" 
                crossorigin="anonymous"
                />

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" 
                integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" 
                crossorigin="anonymous" />

            </Head>

            <header>
                <Navbar/>
            </header>

            <main className={styles.main}>
                <HeoroSection/>
                <SecondHerosection/>
                <Skils skills={skills}/>
                <ProjectTabs projectsData={projectsData}/>
                
            </main>

            <footer className={styles.footer}>
                <Footer/>
            </footer>
        </>
       
    );
}

export default Home;