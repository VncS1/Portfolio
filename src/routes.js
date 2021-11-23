import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Home } from "./Components/Home";
import { Events } from "./Components/Events";
import { Opinions } from "./Components/Opinions";
import { Biography } from "./Components/Biography";

const Router = () => {
   return(
        <BrowserRouter>
            <Routes>
                <Route element = { <Home /> }  path="/" />
                <Route element = { <Events /> }  path="/events#topo" />
                <Route element = { <Opinions /> }  path="/opinions" />
                <Route element = { <Biography /> }  path="/biography" />
            </Routes>
        </BrowserRouter>
   )
}

export default Router;
