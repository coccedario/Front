import Envio from "../componentes/Envio";

const Compra = (props) => {

    const styles = {
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

        contacto: {

            display: "flex",
            flexDirection: "column",
            alignItems: "center",

        },

        label: {

            minWidth: "100px",
        },

        input: {

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


    return (
        <main>

            <div style={styles.inicio} className="inicio">

                <div style={styles.cuadro} className="cuadro">

                    <form style={styles.contacto} className="contacto" action="">

                        <h5>Coloca tus datos para el envio </h5>
                        <br />
                        <br />
                        <br />
                        <br />
                        <table>

                            <td>
                                <tr style="text-align:center">

                                    <label  for="">Nombre  :</label>

                                </tr>
                                <tr style="text-align:center">

                                    <input  type="text" />
                                </tr>
                            </td>


                            <td>
                                <tr style="text-align:center">
                               <label style={styles.label} for="">e-mail  :</label>
                            

                                </tr>
                                <tr style="text-align:center">
                                <input style={styles.input} type="email" />
                                   
                                </tr>
                            </td>








                        </table>
                       

                        <div style={styles.renglon} className="renglon">



                        </div>

                        <div style={styles.renglon} className="renglon">

                            <p><label style={styles.label} for="">e-mail  :</label></p>
                            <p><input style={styles.input} type="email" /></p>

                        </div>

                        <div style={styles.renglon} className="renglon">

                            <p><label style={styles.label} for="">telefono  :</label></p>
                            <p><input style={styles.input} type="text" /></p>

                        </div>

                        <div style={styles.renglon} className="renglon">

                            <p><label style={styles.label} for="">Medio de Pago  :</label></p>
                            <p><input style={styles.input} type="text" /></p>

                        </div>

                        <p><input type="submit" value="Pagar" /></p>

                    </form>
                </div>
            </div>
        </main>

    )
}

export default Compra;