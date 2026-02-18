import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import Objective from "../components/Objective";
import Stacks from "../components/Stacks";

export default function FastPage(){
    return(
        <div>
            <Home/>
            <Stacks/>
            <Objective/>
            <Footer/>
        </div>

    )
}