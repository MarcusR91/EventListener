import React from "react";
import { Footer } from "./components/Shared/Footer.jsx";
import './App.css';
import { NavBar } from "./components/Nav/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import { routes } from "./components/Nav/route-config.js";



export const App = () => {
    return (
        <div>
            <div className="background-image">
                <NavBar />

                <Routes>
                {routes.map(route =>
                    <Route key = {route.path} path = {route.path} element = {<route.component />}/>
                    )}
            </Routes>
            {/* <StartPrototype  /> */}
            <Footer title="EventListener" date = {new Date().getFullYear().toString()} />
            </div>
            
        </div>
    )
}