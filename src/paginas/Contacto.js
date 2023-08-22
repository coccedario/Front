import { useEffect, useState } from "react";
import axios from 'axios';

//  //"proxy": "http://localhost/3000"








const Contacto = (props) => {

    const styles={
        inicio: {
            
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "479px",
            backgroundImage: "url(../img/microfonos.jpg)",
            padding: "50px",
        
        
        
        },
        cuadro: {


            width: "500px",
            height: "auto",
            margin: "0 auto",
           
            background: "#a6adad",
            padding: "30px",
     
            marginBottom: "70px",
            borderRadius: "10px",
        
        },
        
        contacto :{
        
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        
        },
        
       label: {
        
            minWidth: "100px",
        },
        
       input :{
        
            borderRadius: "5px",
        },
        
        textarea: {
        
            maxWidth: "190px",
            borderRadius: "10px",
            resize: "none",
        },
        
        renglon: {
            display: "flex",
        },


        
    }


    const initialForm= {

        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }
    
    const [sending,setSending] = useState(false);
    const [msg,setMsg] = useState('');
    const [formData,setFormData] = useState(initialForm);
    
    const handleChange = e => {
    
        const {name,value} = e.target;
        setFormData(oldData => ({
    ...oldData,
    [name]: value
        }));
    }
    
    const handleSubmit = async e => {
    
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post("http://localhost:3000/api/contacto", formData);
        setSending(false);
        setMsg(response.data.message);
    
    } 
    
    



    return (
<main>
       
        <div  style={styles.inicio} className="inicio">

        <div style={styles.cuadro}  className="cuadro">

            <form style={styles.contacto}  className="contacto" action="/contacto" method="post" onSubmit={handleSubmit}>

                <h5>Coloca tus datos para que te contactemos</h5>
                <br/>
                <div style={styles.renglon}  className="renglon">

                    <p><label style={styles.label}  for="">Nombre</label></p>
                    <p><input style={styles.input} type="text" name = 'nombre' value={FormData.nombre} onChange={handleChange}/></p>

                </div>

                <div style={styles.renglon} className="renglon">

                    <p><label style={styles.label}  for="">e-mail</label></p>
                    <p><input style={styles.input}  type="email" name = 'email' value={FormData.email} onChange={handleChange}/></p>

                </div>

                <div style={styles.renglon} className="renglon">

                    <p><label style={styles.label}  for="">telefono</label></p>
                    <p><input style={styles.input} type="text" name = 'telefono' value={FormData.telefono} onChange={handleChange}/></p>

                </div>

                <div style={styles.renglon} className="renglon">

                    <p><label style={styles.label}  for="">Consulta</label></p>
                    <p><textarea style={styles.textarea} name="mensaje" id="" cols="30" rows="5" value={FormData.mensaje} onChange={handleChange}></textarea></p>

                </div>

                <p><input type="submit" value="Enviar"/></p>

            </form>

{sending ? <p>Enviando ....</p> : null }

{msg ? <p>{msg}</p> : null }

        </div>
        </div>
    </main>

    )
}

export default Contacto;