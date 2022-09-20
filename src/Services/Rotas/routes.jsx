import React from "react";
import Header from "../Header/index";
import Home from "../../Pages/Home/index";
import Gryff from "../../components/Gryffindor/index";
import Huff from "../../components/Hufflepuff/index";
import Raven from "../../components/Ravenclaw/index";
import Sly from "../../components/Slytherin/index";
import Spells from "../../components/Spells/index"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function Rotas(){
    return(
        <>
          <Router>
            <Header />
              <Routes>
                 <Route path='/' element={<Home />} />
                 <Route path='/gryffindor' element={<Gryff />} />
                 <Route path='/hufflepuff' element={<Huff />} />
                 <Route path='/ravenclaw' element={<Raven />} />
                 <Route path='/slytherin' element={<Sly />} />
                 <Route path='/spells' element={<Spells />} />
              </Routes>
          </Router> 
        </>
    );
};