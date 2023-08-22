const Header = (props) => {

const styles ={

    img:{height:"130px",paddingLeft:"45px"},
    header: {
        backgroundColor: "rgb(0, 0, 0)",
       
        color: "#008b8b",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        
    },
    
    headerh2: {
    
        fontStyle: "italic",
        fontWeight: "bold",
    }
    
   
    
}

    return (
        <header style={styles.header}>

             <div><img style={styles.img} src="img/logopsinegro.png" alt="" /></div> 

             <div > 
                <h2 style={styles.headerh2}>Psico♫delia</h2>
                <p>Instrumentos para expresar tus ideas</p>
            </div> 
        </header>

    )
}

export default Header;