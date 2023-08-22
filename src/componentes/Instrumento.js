import React from 'react';
import { Link } from 'react-router-dom';


const styles = {

    card: {

        height: "500px",
        width: "300px",
        color: "#008b8b",
        background: "white",
        padding: "5px",
        display: "flex",
       flexDirection: "column",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
        border: "1px solid #008b8b",
        borderRadius: "10px",
        margin: "5px"

    },
    inicio: {
        width: "1020px",
        height: "auto",
        padding: "50px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignContents: "space-between"


    }



}


const Instrumento = (props) => {


    const { data } = props;

    const tit = data.titulo;
    const marca = data.marcdes;
    const id = data.id;
    console.log(id);

    return (




        <div style={styles.card}>
            <h3>{data.titulo}</h3>
            <h4>Marca: {data.marcdes}</h4>
            <h5>Modelo: {data.texto}</h5>
            <img src={data.imagen} height="200px" width="200px" alt="" />
            <p>Precio: $ {data.precio}</p>
           
            <button ><Link to={"../Compras/"+tit+"/"+marca+"/"+id}>Comprar</Link></button>
        </div>



    )
}

export default Instrumento;