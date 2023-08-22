import Instrumento from "../componentes/Instrumento";
import { useParams } from "react-router-dom";
import { useFetch } from "../useFetch";




  //  const { data } = useFetch("https://jsonplaceholder.typicode.com/users")
   
const Galeria = (props) => {

    const params = useParams();
   // console.log(params);
    const id = params.id;
    console.log(id);
    const productos = require('../datos/productos.json');

    
  

    const lista = productos.filter(tipo => (tipo.grupo===id));
   

//console.log(lista);

    const styles={

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

    return (
        
<div style={styles.inicio}>


<Instrumento  elementos={lista}/>


</div>

    )
}

export default Galeria;