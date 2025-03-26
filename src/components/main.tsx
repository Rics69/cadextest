'use client'
import Hero from "./hero";
import Header from "./header";
import Proposal from "./proposal";
import Footer from "./footer";
import Advantages from "./advantages";

const Main = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Advantages />
                <Proposal />
            </main>
            <Footer />
        </>
    )
}

export default Main;