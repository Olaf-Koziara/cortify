import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
    Link
} from "react-router-dom";

const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path=""/>
            </Routes>
        </BrowserRouter>
    );
};

export default Root;