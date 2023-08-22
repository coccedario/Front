import React from 'react';
import { Link } from "react-router-dom";

import './../estilos/teclados.css';

const Teclados = (props) => {
   
    return (
        <main>
        <div className="Mainnos">

            <div className="catalogo">

                <h3>Catalogo de Pianos y Teclados</h3>
                <p>Tenemos todas las marcas mas reconocidas y el asesoramiento pre y post venta que necesitas</p>

            </div>
            <Link   to= "/Galeriax/10">
                <div className="Teclas">
                    <div className="Imgteclas">
                        <img src="img/piano.jpg" height="240px" alt=""/>

                    </div>
                    <div className="Detteclas">
                        <h3>Pianos Acusticos</h3>
                        <h4>Steinwai & sons - Bloothner - Julius</h4>
                        <p>El piano es un instrumento musical armónico clasificado como instrumento de cuerda percutida.
                        Está compuesto por una caja de resonancia a la que se ha agregado un teclado mediante el cual se percuten 
                        las cuerdas de acero con martillos forrados de fieltro, lo que produce el sonido</p>
                            <h3>Ver Galeria</h3>
                    </div>

                </div>
                </Link>

            <Link   to= "/Galeriax/17">
                <div className="Teclas">
                    <div className="Imgteclas">
                        <img src="img/pianoelect2.jpg" height="240px" alt=""/>

                    </div>
                    <div className="Detteclas">
                        <h3>Pianos Electricos</h3>
                        <h4>Rhodes-Yamaha-Hohner</h4>
                        <p>El piano electrónico o piano digital es un instrumento musical de teclado diseñado para 
                            emitir el timbre de un piano 
                             utilizando el sonido de un piano con sensores que definen la duración de una determinada
                              nota. Estos pianos suelen ser de menor tamaño que los pianos tradicionales, 
                              porque emplean un sistema de circuitos electrónicos.</p>
                            <h3>Ver Galeria</h3>
                    </div>

                </div>
                </Link>

            <Link   to= "/Galeriax/18">
                <div className="Teclas">
                    <div className="Imgteclas">
                        <img src="img/sinte.webp" height="240px" alt=""/>

                    </div>
                    <div className="Detteclas">
                        <h3>Sintetizadores</h3>
                        <h4>Korg-Casio-Roland</h4>
                        <p>Un sintetizador es un instrumento musical de tipo electrónico que, a través de circuitos,
                             genera señales eléctricas que luego son convertidas a sonidos audibles. 
                              Sus sonidos pueden ser creados y modificados. Los sintetizadores pueden 
                             imitar otros instrumentos o generar nuevos timbres. Usualmente son ejecutados a través
                              de un teclado</p>
                            <h3>Ver Galeria</h3>
                    </div>

                </div>
                </Link>


        </div>
    </main>

    )
}

export default Teclados;