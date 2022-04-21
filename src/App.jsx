import React, {useState} from "react";
import Header from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

import StartPrototype from "./components/StartPrototype.jsx";
import EventList from "./components/EventList.jsx";



export const App = () => {
    return (
        <div>
            <Header />
            <StartPrototype  />
            <Footer />
        </div>
    )
}