import Instrumento from "../componentes/Instrumento";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../useFetch";
import { Link } from 'react-router-dom';



const styles = {

    card: {

        height: "400px",
        width: "300px",
        color: "#008b8b",
        background: "white",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #008b8b",
        borderRadius: "10px",
        margin: "10px"

    },

    inicio: {

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "auto",
        backgroundImage: "url(../img/microfonos.jpg)",
        padding: "50px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",




    }

}

const Galeriax = (props) => {

    const params = useParams();
    console.log(params);
    const id = params.id;
    console.log(id);
  

    const [loading, Setloading] = useState(false);
    const [elementos, Setelementos] = useState([]);

    

    useEffect(
        () => {
            
            Setloading(true)
            fetch("http://localhost:3000/api/instrumentos/"+id,
            {
                'mode': 'cors',
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    Setelementos(data)
                    Setloading(false)
                })

        },

        []

    )


    if (loading) {
        return (
            <h1>loading .. .. ..</h1>
        )
    } else {

        return (

            <div >
                <center><h1>Galeria de Instrumentos</h1></center>
                <div style={styles.inicio}>





                    {Object.values(elementos).map((elemento) =>

                        <Instrumento data={elemento} />
                        // <div style={styles.card}>

                        //     <h3>{elemento.titulo}</h3>
                        //     <h5>{elemento.texto}</h5>
                        //     <img src={elemento.img} height="200px" width="200px" alt="" />
                        //     <p>{elemento.precio}</p>
                        //     <button ><Link to="/Apirest">Comprar</Link></button>
                        // </div>


                    )}





                </div>

            </div>



        )

    }



}

export default Galeriax;

