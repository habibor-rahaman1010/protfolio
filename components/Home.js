import Head from "next/head";
import Header from "./home/Header";
import Navbar from "./share/Navbar";



const Home = () => {
    return (
        <div className="">
            <Head>
                <title>Home</title>
            </Head>

            <Navbar/>
            
            <Header/>
           

        </div>
    );
}

export default Home;