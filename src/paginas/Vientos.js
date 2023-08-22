import React from 'react';
import { Link } from "react-router-dom";

import './../estilos/vientos.css';


const Vientos = (props) => {
    return (
        <main>
        <div className="Mainnos">

            <div className="catalogo">

                <h3>Catalogo de Instrumentos de Viento</h3>
                <p>Tenemos todas las marcas mas reconocidas y el asesoramiento pre y post venta que necesitas</p>

            </div>
            <Link   to= "/Galeriax/9">
                <div className="Teclas">
                    <div className="Imgteclas">
                        <img src="img/saxo.jpg" height="240px" alt=""/>

                    </div>
                    <div className="Detteclas">
                        <h3>Saxos</h3>
                        <h4>Yamaha - Selmer Paris - Jupiter</h4>
                        <p>El saxo, es un instrumento musical de la familia de viento-madera, generalmente hecho de latón,
                             que consta de una boquilla con una caña simple al igual que el clarinete. Fue inventado 
                             por Adolphe Sax a principios de los años 1840. Se asocia comúnmente con la 
                             música popular, la música de big band y el jazz!</p>
                            <h3>Ver Galeria</h3>
                    </div>

                </div>
                </Link>

            <Link   to= "/Galeriax/19">
                <div className="Teclas">
                    <div className="Imgteclas">
                        <img src="img/corno.png" height="240px" alt=""/>

                    </div>
                    <div className="Detteclas">
                        <h3>Baritonos</h3>
                        <h4>Rhodes-Yamaha-Hohner</h4>
                        <p>Los Baritonos son instrumentos de viento-metal de registro bajo que tiene un carácter muy
                             versátil y abarcan una tesitura muy amplia con pocos cilindros. Además estos instrumentos
                             pueden emitir tanto sonidos suaves y dulces como ásperos y duros. </p>
                            <h3>Ver Galeria</h3>
                    </div>

                </div>
                </Link>

            <Link   to= "/Galeriax/20">
                <div className="Teclas">
                    <div className="Imgteclas">
                        <img src="img/flauta.jpeg" height="240px" alt=""/>

                    </div>
                    <div className="Detteclas">
                        <h3>Flautas</h3>
                        <h4>Yamaha y mas</h4>
                        <p>Se denomina flauta a un tipo de instrumento musical de viento. Por la sencillez de su 
                            construcción, puede que sea uno de los instrumentos más antiguos, pues con diversas 
                            formas se encuentra en todas las culturas.Consta de un tubo, generalmente de madera o
                             metal , con una serie de orificios y una boquilla, en el borde (bisel) del cual se 
                             produce el sonido</p>
                            <h3>Ver Galeria</h3>
                    </div>

                </div>
                </Link>


        </div>
    </main>

    )
}

export default Vientos;