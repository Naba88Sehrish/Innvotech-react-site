import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';

import NotFound from '../Pages/NotFound';
import Portfolio from '../Pages/portfolio';

function MainRouter() {
    return (
        <Router>
            <Routes>
            
          
                <Route path="/*" element={<NotFound />} />
                <Route path="/" element={<Home />} /> 
                <Route path="/portfolio" element={<Portfolio />} /> 
                           
               
            </Routes>
        </Router>
    );
}

export default MainRouter;
