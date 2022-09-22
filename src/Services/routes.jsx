import React from "react";
import {Home, Header, Gryffindor, Hufflepuff, Ravenclaw, Slytherin, Spells} from "../Pages/index"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function Rotas(){
    return(
        <>
          <Router>
            <Header />
              <Routes>
                 <Route path='/' element={<Home />} />
                 <Route path='/gryffindor' element={<Gryffindor />} />
                 <Route path='/hufflepuff' element={<Hufflepuff />} />
                 <Route path='/ravenclaw' element={<Ravenclaw />} />
                 <Route path='/slytherin' element={<Slytherin />} />
                 <Route path='/spells' element={<Spells />} />
              </Routes>
          </Router> 
        </>
    );
};