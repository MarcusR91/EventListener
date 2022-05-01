import React, {useState} from "react";
import Header from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import './App.css';
import StartPrototype from "./components/StartPrototype.jsx";
import EventList from "./components/EventList.jsx";
import { NavBar } from "./components/Nav/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import { routes } from "./components/Nav/route-config.js";



export const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                {routes.map(route =>
                    <Route key = {route.path} path = {route.path} element = {<route.component />}/>
                    )}
            </Routes>
            {/* <StartPrototype  /> */}
            <Footer title="EventListener" date = {new Date().getFullYear().toString()} />
        </div>
    )
}