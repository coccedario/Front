import { useEffect, useState } from "react";
import axios from 'axios';
import { redirect, useParams } from "react-router-dom";
import '../estilos/contacto.css';
import { Link } from "react-router-dom";



//  //"proxy": "http://localhost/3000"








const Contacto = (props) => {

   

    const params = useParams();
    const titulo = params.tit;
    const marca = params.marca;
    const id = params.id;

  


    const styles = {
        inicio: {

            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "700px",
            backgroundImage: "url(../img/microfonos.jpg)",
            padding: "50px",



        },
        cuadro: {


            width: "500px",
            height: "auto",
            margin: "0 auto",

            background: "#a6adad",
            padding: "10px",

            marginBottom: "20px",
            borderRadius: "10px",


        },

        contacto: {

            display: "flex",
            flexDirection: "column",

            alignItems: "center",


        },

        label: {

            minWidth: "100px",
        },

        input: {

            borderRadius: "1px",
        },



        textarea: {

            maxWidth: "190px",
            borderRadius: "5px",
            resize: "none",
        },

        renglon: {
            display: "flex",

        },
        titulos: {
            margin: "0 auto"

        },
        imagen: {
            margin: "0 auto",
            display: "flex",
            alignItems: "space-around"
        },


    }


    const initialForm = {

        nombre: '',
        email: '',
        telefono: '',
        numero: '',
        calle: '',
        titulo: titulo,
        marca: marca,
        id: id
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {

        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {

        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post("http://localhost:3000/api/compra", formData);
        setSending(false);
        setMsg(response.data.message);

    }





    return (
        <main>

            <div style={styles.inicio} className="inicio">

                <div className="logueo">

                    <form style={styles.contacto} className="contacto" action="/" method="post" onSubmit={handleSubmit}>

                        <div style={styles.titulos} >

                            <center><h2>Ya casi es tuyo</h2></center>
                            <center> <h3> Elegiste {titulo}</h3></center>


                            <center> <h3>Marca {marca}</h3></center>

                            <center><h4>UN ASESOR SE CONTACTARA PARA TERMINAR LA TRANSACCION</h4></center>
                            <center><h4>Coloca tus datos personales </h4></center>
                       
                        </div>

                        <table>


                            <tr >
                                <td className="columna">
                                    <p><label style={styles.label} for="">Nombre :</label></p>


                                </td>
                                <td className="columna">
                                    <p><input style={styles.input} type="text" name='nombre' required value={FormData.nombre} onChange={handleChange} /></p>
                                </td>
                            </tr>

                            <tr >
                                <td className="columna">

                                    <p><label for="">E - mail :</label></p>



                                </td>
                                <td className="columna">

                                    <p><input type="email" required   name='email' value={FormData.email} onChange={handleChange} /></p>

                                </td>
                            </tr>

                            <tr >
                                <td className="columna">

                                    <p><label style={styles.label} for="">Telefono :</label></p>


                                </td>
                                <td className="columna">

                                    <p><input style={styles.input} type="text" name='telefono' required value={FormData.telefono} onChange={handleChange} /></p>

                                </td>
                            </tr>

                      
                        <tr >
                            <td className="columna">

                            <p><label style={styles.label} for="">Calle :</label></p>
                        

                            </td>
                            <td className="columna">

                            <p><input style={styles.input} type="text" name='calle' required value={FormData.telefono} onChange={handleChange} /></p>
                            </td>
                        </tr>

                        <tr >
                            <td className="columna">

                           
                            <p><label style={styles.label} for="">Numero :</label></p>
                        

                            </td>
                            <td className="columna">

                            <p><input style={styles.input} type="text" name='numero' required value={FormData.telefono} onChange={handleChange} /></p>


                            </td>
                        </tr>

                        <tr >
                            <td className="columna">

                           
                           
                        

                            </td>
                            <td className="columna">

                            <p><input className="boton" type="submit" value="Confirmar compra" /></p>


                            </td>
                        </tr>


                    </table>
  

                </form>

                {sending ? <p>Enviando ....</p> : null}

                {msg ? <center><p>{msg}</p></center> : null}
                {msg ? <center><button className="boton"><Link to={"/"}> VOLVER AL INICIO</Link></button></center> : null}



            </div>
        </div >

        </main >



    )

}

export default Contacto;