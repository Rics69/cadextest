import Hero from "./hero";
import Header from "./header";
import Advantages from "./advantages";
import Proposal from "./proposal";
import Footer from "./footer";

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