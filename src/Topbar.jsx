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
        <div className="container" >
            <div style={{ marginTop: 50, display: 'flex', justifyContent: 'space-around' }}>
                <span>
                    <Link to={"/"} style={{ textDecoration: "none", color: "grey" }}> <span style={{ marginLeft: 40, ...isactive("ALL") }} onClick={() => handlechange("ALL")}>ALL</span></Link>
                    <Link to={"/fullstackdevelopment"}style={{ textDecoration: "none", color: "grey" }}><span style={{ marginLeft: 40, ...isactive("FULL STACK DEVELOPMENT") }} onClick={() => handlechange("FULL STACK DEVELOPMENT")}>FULL STACK DEVELOPMENT</span></Link>
                    <Link to={"/datascience"}style={{ textDecoration: "none", color: "grey" }}><span style={{ marginLeft: 40, ...isactive("DATA SCIENCE") }} onClick={() => handlechange("DATA SCIENCE")}>DATA SCIENCE</span></Link>
                    <Link to={"/cybersecurity"}style={{ textDecoration: "none", color: "grey" }}> <span style={{ marginLeft: 40, ...isactive("CYBER SECURITY") }} onClick={() => handlechange("CYBER SECURITY")}>CYBER SECURITY</span></Link>
                    <Link to={"/career"}style={{ textDecoration: "none", color: "grey" }}> <span style={{ marginLeft: 40, ...isactive("CAREER") }} onClick={() => handlechange("CAREER")}>CAREER</span></Link>
                </span>
            </div>
        </div >

    )
}

export default Topbar