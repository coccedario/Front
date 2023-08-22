import { Link } from "react-router-dom";

const styles={

    nav:{
    
        height: "30px",
        color: "#008b8b",
        backgroundColor: "black",
        padding: "0",
    
    },
    
       
    ul:{
        listStyle: "none",
        textDecoration: "none",
        display: "flex",
        paddingTop: "5px",
        paddingLeft: "40px",
    },
    
    li:{
    
    
        flexGrow: "1",
    },
    
    a:{
        color: "#008b8b",
        textDecoration: "none",
        fontStyle: "italic",
        fontWeight: "bold",
    }
    
}

const Nav = (props) => {



    return (
        <nav style={styles.nav}>
            <div>

                <ul style={styles.ul} >

                    <li style={styles.li}><Link  style={styles.a} to= "/">Home</Link></li>
                    <li style={styles.li}><Link style={styles.a} to= "/Cuerdas">Cuerdas</Link></li>
                    <li style={styles.li}><Link style={styles.a} to= "/Percusion">Percusion</Link></li>
                    <li style={styles.li}><Link style={styles.a} to= "/Teclados">Teclados</Link></li>
                    <li style={styles.li}><Link style={styles.a} to= "/Vientos">Vientos</Link></li>
                    <li style={styles.li}><Link style={styles.a} to= "/Nosotros">Nosotros</Link></li>
                    <li style={styles.li}><Link style={styles.a} to= "/Contacto">Contacto</Link></li>



                </ul>



            </div>




        </nav>

    )
}

export default Nav;