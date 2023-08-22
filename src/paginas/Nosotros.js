const Nosotros = (props) => {

    const styles = {
        mainnos: {
            borderTop: "1px solid #008b8b",
            background: "rgb(1, 0, 8)",
            // background: rgb(1, 0, 8);
            // background: -moz-linear-gradient(180deg, rgba(1, 0, 8, 1) 0%, rgba(0, 139, 139, 1) 66%);
            // background: -webkit-linear-gradient(180deg, rgba(1, 0, 8, 1) 0%, rgba(0, 139, 139, 1) 66%);
            background: "linear-gradient(180deg, rgba(1, 0, 8, 1) 0%, rgba(0, 139, 139, 1) 66%)",
            filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr'#010008', endColorstr=#008b8b, GradientType=1)",

            paddingTop: "20px",
            height: "auto",
        },
        personas: {

            display: "flex",
            justifyContent: "space-around",

            padding: "10px",

        },

        persona: {


            textAlign: "center",
            border: "1px solid #008b8b",
            borderRadius: "10px",
            width: "18%",
            backgroundColor: "#020202c2",
            padding: "30px",
            color: "#ecf1f1",
        },

        img: {

            borderRadius: "50 %",
            height: "170px",
            filter: "grayscale(100 %)",
        },

        empresa: {
            textAlign: "center",
            color: "#f6f8f8",
            width: "960px",
            margin: "0 auto",
            textShadow: "#141414 1px",
        }


    }


    return (
        <main>
            <div style={styles.mainnos} className="mainnos">

                <div style={styles.empresa} className="empresa">

                    <h3>Nuestra Empresa</h3>
                    <p> Nacimos en el 2018 sumando experiencia y juventud en la búsqueda de brindar lo mejor en atención y servicio pre y postventa. Apreciamos a nuestros clientes y agradecemos sus comentarios y sugerencias. Usa nuestra página Contacto para decirnos qué es lo que estamos haciendo bien y qué es lo que podemos mejorar.</p>

                </div>

                <div style={styles.personas} className="personas">

                    <div style={styles.persona} className="persona">

                        <div><img style={styles.img} src="img/dario (2).jpg" height="180" alt="" /></div>
                        <br />
                        <h5>Dario</h5>
                        <h6> Socio Fundador</h6>
                        <p>Como amante de la musica decido fundar junto a mis hijos esta empresa para dar soporte a quienes compartan nuestra pasion </p>

                    </div>
                    <div style={styles.persona} className="persona">

                        <div><img style={styles.img} src="img/tobibat.jpg" alt="" /></div>
                        <br />
                        <h5>Tobias</h5>
                        <h6> Profesor de Musica</h6>
                        <p>Recibido en el conservatorio de musica de Bahía Blanca asesora en todo lo que tiene que ver con percusión y sonido</p>

                    </div>
                    <div style={styles.persona} className="persona">

                        <div><img style={styles.img} src="img/renzo.jpg" alt="" /></div>
                        <br />
                        <h5>Renzo</h5>
                        <h6> Musico profesional</h6>
                        <p>Destacado Bajista del medio que puede ayudarte a elegir tu instrumento de cuerda adecuado</p>

                    </div>
                </div>
            </div>
        </main>

    )
}

export default Nosotros;