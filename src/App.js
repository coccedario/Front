
//  import './App.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./componentes/layout/Footer";
import Header from "./componentes/layout/Header";

import Nav from "./componentes/layout/Nav";

import Home from "./paginas/Home";
import Cuerdas from "./paginas/Cuerdas";
import Percusion from "./paginas/Percusion";
import Contacto from "./paginas/Contacto";
import Vientos from "./paginas/Vientos";
import Teclados from "./paginas/Teclados";
import Nosotros from "./paginas/Nosotros";
//import Galeria from "./paginas/Galeria";
// import Compra from "./Fallidos/Compra";
import Compras from "./paginas/Compras";
//import Apirest from "./paginas/Apirest";
import Galeriax from "./paginas/Galeriax";

function App() {
  return (
    <div className="App">

      <Header />

      <BrowserRouter>

        <Nav />

        <Routes>

          <Route path="/" element= {<Home/>} />
          <Route path="Cuerdas" element= {<Cuerdas/>} />
          <Route path="Percusion" element= {<Percusion/>} />
          <Route path="Teclados" element= {<Teclados/>} />
          <Route path="Vientos" element= {<Vientos/>} />
          <Route path="Nosotros" element= {<Nosotros/>} />
          <Route path="Contacto" element= {<Contacto/>} />
          {/* <Route path="Compra" element= {<Compra/>} /> */}
          <Route path="Compras/:tit/:marca/:id" element= {<Compras/>} />
          <Route path="Galeriax/:id" element= {<Galeriax/>} />
           {/* <Route path="Apirest" element= {<Apirest/>} /> */}
         {/* <Route path="Galeria/:id" element= {<Galeria/>} /> */}

        </Routes>
      </BrowserRouter>

     
      <Footer />

    </div>
  );
}

export default App;
