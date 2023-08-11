import React from "react";
import BackImg from "./BackImg";
import Navbar from "./Navbar";
import WelcText from "./WelcText";
import Card from "./Card";
import Footer from "./Footer";

function Home(){
    return(
        <div>
            <Navbar it1='View' it2='Approved' it3='Denied' it4='Returns' it5="Logout"/>
            <BackImg />
            <WelcText />
            <Card name="Pending" link="p"/>
            <Card name="Approved" link="a"/>
            <Card name="Denied" link="e"/>
            <Footer />
        </div>
    )

    }
    export default Home;

