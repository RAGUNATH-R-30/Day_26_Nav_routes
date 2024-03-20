import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { Link } from 'react-router-dom'
//This is the navigation bar
function Topbar() {
    const [active, setactive] = useState("ALL")

    const handlechange = (item) => {
        setactive(item)

    }
    const isactive = (item) => {
        return active == item ? { borderBottom: "3px solid #0dba4b", color: "#0dba4b" } : {};
    }
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg mt-4">
                <div className="container justify-content-center"style={{gap:40}}>
                    <Link to={"/"} style={{ textDecoration: "none", color: "grey" }}> <span style={{ ...isactive("ALL") }} onClick={() => handlechange("ALL")}>ALL</span></Link>
                    <Link to={"/fullstackdevelopment"} style={{ textDecoration: "none", color: "grey" }}><span style={{ ...isactive("FULL STACK DEVELOPMENT") }} onClick={() => handlechange("FULL STACK DEVELOPMENT")}>FULL STACK DEVELOPMENT</span></Link>
                    <Link to={"/datascience"} style={{ textDecoration: "none", color: "grey" }}><span style={{ ...isactive("DATA SCIENCE") }} onClick={() => handlechange("DATA SCIENCE")}>DATA SCIENCE</span></Link>
                    <Link to={"/cybersecurity"} style={{ textDecoration: "none", color: "grey" }}> <span style={{ ...isactive("CYBER SECURITY") }} onClick={() => handlechange("CYBER SECURITY")}>CYBER SECURITY</span></Link>
                    <Link to={"/career"} style={{ textDecoration: "none", color: "grey" }}> <span style={{ ...isactive("CAREER") }} onClick={() => handlechange("CAREER")}>CAREER</span></Link>
                </div>
            </nav>
        </div>


    )
}

export default Topbar

{/* <div className="container" >
<div style={{ marginTop: 50, display: 'flex', justifyContent: 'space-around' }}>
    <span>
        
    </span>
</div>
</div > */}