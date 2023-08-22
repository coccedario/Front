import '../estilos/cuerdas.css';
import { Link } from "react-router-dom";

const Cuerdas = (props) => {

   

    return (

        <main>
       
        <div className="mainnos">

            <div className="catalogo">

                <h3>Catalogo de cuerdas</h3>
                <p>Tenemos todas las marcas mas reconocidas y el asesoramiento pre y post venta que necesitas</p>

            </div>

            

            
             <Link   to= "/Galeriax/8">
                <div className="cuerdas">
                    <div className="imgcuerdas">
                        <img src="img/acustica4.avif" height="240px" alt=""/>

                    </div>
                    <div className="detcuerdas">
                        <h3>Guitarras Acusticas</h3>
                        <h4> Taylor - Fender - Gibson y mas</h4>
                        <p>Las guitarras acústicas varían enormemente en su diseño y construcción, más aún que las guitarras eléctricas.
                            Las mas conocidas son la guitarra Clásica, la guitarra Acustica y la Electro - Acustica.
                             Aqui podras encontrar variedad en marcas y  modelos . </p>
                             <p> Ingresa y mira todas nuestras opciones </p>
                        <h3>Ver Galeria</h3>
                    </div>

                </div>
                </Link>
                <Link   to= "/Galeriax/11">
            <div className="cuerdas">
                <div className="imgcuerdas">
                    <img src="img/gibson3.jpeg" height="240px" alt=""/>

                </div>
                <div className="detcuerdas">
                    <h3>Guitarras Electricas</h3>
                    <h4>Gibson - Fender - Ibanez -Epiphone y otras</h4>
                    <p>La guitarra eléctrica es un instrumento que posee una gran cantidad de formas de ejecutar una nota 
                         A pesar de ser un instrumento de creación relativamente reciente 
                         (en comparación con los instrumentos clásicos y populares en general), 
                         muchos guitarristas han ido innovando y añadiendo nuevas técnicas, muchas extraídas de otros instrumentos y adaptadas a la guitarra eléctrica.</p>
                        <h3>Ver Galeria</h3>
                </div>

            </div>
            </Link>
            <Link   to= "/Galeriax/12">
                <div className="cuerdas">
                    <div className="imgcuerdas">
                        <img src="img/bajo.jpg" alt=""/>

                    </div>
                    <div className="detcuerdas">
                        <h3>Bajos electrricos y acusticos</h3>
                        <h4>Fender - Ibanez - Hoffner y otros</h4>
                        <p>El bajo eléctrico, llamado sencillamente bajo, es un instrumento musical melódico
                             similar en apariencia y construcción a la guitarra eléctrica, pero con un cuerpo de mayores dimensiones, un mástil de mayor longitud
                              y escala y cuerdas más gruesas, normalmente cuatro, afinadas según la afinación estándar del contrabajo, su antecesor.</p>
                            <p>Visita nuestras opciones en cuatro, cinco y seis cuerdas</p>
                            <h3>Ver Galeria</h3>
                    </div>

                </div>
                </Link>
            <Link   to= "/Galeriax/13">
                <div className="cuerdas">
                    <div className="imgcuerdas">
                        <img src="img/violin.jpeg" height="180px" alt=""/>

                    </div>
                    <div className="detcuerdas">
                        <h3>Violines, Violonchelos y Violas</h3>
                        <h4>Stradivarius y de estudio</h4>
                        <p>El violín (del italiano violino, diminutivo de viola) es un instrumento de cuerda. 
De la familia de las cuerdas frotadas, es el más pequeño y agudo entre los de su clase, que se
 compone de una caja de resonancia en forma de 8, un mástil sin trastes y cuatro cuerdas que se
  hacen sonar con un arco.​</p>
  <p>Disfruta de toda la variedad de cuerdas clasicas y modernas</p>
                            <h3>Ver Galeria</h3>
                    </div>

                </div>
                </Link>
            <Link   to= "/Galeriax/21">
                <div className="cuerdas">
                    <div className="imgcuerdas">
                        <img src="img/contrabajo.jpg" height="180px" alt=""/>

                    </div>
                    <div className="detcuerdas">
                        <h3>Contrabajos</h3>
                        <h4>Cello D - Cecilio y mas</h4>
                        <p>El contrabajo es un instrumento musical de cuerda frotada de tesitura grave.
                             Suele tener cuatro cuerdas. Y se toca con un arco grande. 
                             Está compuesto de una caja de resonancia en forma de 8 grande con
                              un mástil largo con clavijas. Es muy popular la ejecucion con los dedos para el Jazz ​</p>
                            <p>Tenemos el instrumento a tu medida en calidad y economia</p>
                            <h3>Ver Galeria</h3>
                    </div>

                </div>
                </Link>

        </div>
    </main>


    )
}

export default Cuerdas;