import './../estilos/percusion.css';
import React from 'react';
import { Link } from "react-router-dom";


const Percusion = (props) => {
    return (

        <main>
            <div className="Mainnos">

                <div className="catalogo">

                    <h3>Catalogo de Instrumentos de Percusion</h3>
                    <p>Tenemos todas las marcas mas reconocidas y el asesoramiento pre y post venta que necesitas</p>

                </div>

                <Link to="/Galeriax/7">
                    <div className="Teclas">
                        <div className="Imgteclas">
                            <img src="img/baterias.jpeg" height="240px" alt="" />

                        </div>
                        <div className="Detteclas">
                            <h3>Baterias Acusticas</h3>
                            <h4>Solidrum - Yamaha - Pearl - Tama</h4>
                            <p>La batería es un conjunto de tambores, platillos y otros instrumentos de percusión, 
                                que se colocan en soportes para ser tocados por un solo músico,con baquetas en ambas
                                 manos y los pies accionando los pedales que controlan el platillo del hi-hat y
                                  el golpeador del bombo.La batería electrónica consta de pads electrónicos, 
                                  que producen un sonido determinado y programable</p>
                                <h3>Ver Galeria</h3>
                        </div>

                    </div>
                </Link>

                <Link to="/Galeriax/14">
                    <div className="Teclas">
                        <div className="Imgteclas">
                            <img src="img/tambores.jpeg" height="240px" alt="" />

                        </div>
                        <div className="Detteclas">
                            <h3>Tambores y Tumbadoras</h3>
                            <h4>Yamaha-Hohner- Tama</h4>
                            <p>Los tambores de candombe o tamboriles (referidos también como tambores afro-montevideanos) 
                                son membranófonos usados para tocar música de Candombe de Uruguay. Tienen un solo parche 
                                y existen tres tamaños: piano (rango bajo), repique (rango tenor) y chico (rango alto). Los tambores están hechos de madera y tienen la forma de barril curvado con la base angosta.</p>
                                <h3>Ver Galeria</h3>
                        </div>

                    </div>
                </Link>

                <Link to="/Galeriax/15">
                    <div className="Teclas">
                        <div className="Imgteclas">
                            <img src="img/platillos.jpeg" height="240px" alt="" />

                        </div>
                        <div className="Detteclas">
                            <h3>Platillos</h3>
                            <h4>Istambul-Zildjiam-Sabian-Paiste</h4>
                            <p>Los platillos, platos, latos, címbalos o cimbales son instrumentos de percusión de sonido indeterminado​,
                                 lo que significa que las notas no tienen una altura definida. Pertenecen a la familia de los idiófonos,
                                  por lo que el sonido se produce entrechocando uno con otro o percutiéndolos con baquetas.​</p>
                                <h3>Ver Galeria</h3>
                        </div>



                    </div>
                </Link>
                <Link to="/Galeriax/16">
                    <div className="Teclas">
                        <div className="Imgteclas">
                            <img src="img/percusion varios.jpeg" height="240px" alt="" />

                        </div>
                        <div className="Detteclas">
                            <h3>Instrumentos de Percusion Varios</h3>
                            <h4>Yamaha-Hohner- Tama</h4>
                            <p>La sección de percusión de una orquesta suele contener instrumentos como los timbales,
                                 el bombo, los platillos, el triangulo y la pandereta. Sin embargo, la sección también
                                  puede contener instrumentos no percutivos, como silbato y sirena, o una caracola soplada.  ​</p>
                                <h3>Ver Galeria</h3>
                        </div>

                    </div>
                </Link>

            </div>
        </main>

    )
}

export default Percusion;