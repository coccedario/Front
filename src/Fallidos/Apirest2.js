import { useFetch } from "../useFetch";

import { Link } from 'react-router-dom';



function Apirest() {

  //  const { data } = useFetch("https://jsonplaceholder.typicode.com/users")
  
  const { data } = useFetch("http://localhost:3000/response");
console.log(data);

const styles={
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
        color: "#eef5f5"
    
    
    }
}


    return  (


    <div style={styles.inicio}>

       <div >



            <center><h1>Galeria de Instrumentos</h1></center>


            {/* <ul>

                {data?.map((dato) => (

                    <li>{dato.titulo},{dato.texto},$ {dato.precio}</li>




                )
                )}
            </ul> */}
            
<div style={styles.inicio}>

            {data?.map((elemento) =>
                <div style={styles.card}>
                 
                    <h3>{elemento.titulo}</h3>
                    <h5>{elemento.texto}</h5>
                    <img src={elemento.img} height="200px" width="200px" alt="" />
                    <p>{elemento.precio}</p>
                    <button ><Link to="/Apirest">Comprar</Link></button>
                </div>)}

 
        </div>
            
        </div>
        </div>
   )

}


export default Apirest;