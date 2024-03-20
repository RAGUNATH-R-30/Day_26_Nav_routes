import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { Link } from 'react-router-dom'
//This is the navigation bar
function Topbar() {
    const [active, setactive] = useState("ALL")
    const [menutoggle, menutoggler] = useState(false)
    const handlechange = (item) => {
        setactive(item)

    }
    const isactive = (item) => {
        return active == item ? { borderBottom: "3px solid #0dba4b", color: "#0dba4b" } : {};
    }
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" onClick={() => { menutoggler(!menutoggle) }}></span>
                    </button>
                    <div className={`collapse navbar-collapse ${menutoggle ? "show" : null}`} id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 "style={{gap:10}} >
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link" style={{ textDecoration: "none", color: "grey" }}> <span style={{ ...isactive("ALL") }} onClick={() => handlechange("ALL")}>ALL</span></Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/fullstackdevelopment"} className="nav-link" style={{ textDecoration: "none", color: "grey" }}><span style={{ ...isactive("FULL STACK DEVELOPMENT") }} onClick={() => handlechange("FULL STACK DEVELOPMENT")}>FULL STACK DEVELOPMENT</span></Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/datascience"} className="nav-link" style={{ textDecoration: "none", color: "grey" }}><span style={{ ...isactive("DATA SCIENCE") }} onClick={() => handlechange("DATA SCIENCE")}>DATA SCIENCE</span></Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/cybersecurity"} className="nav-link" style={{ textDecoration: "none", color: "grey" }}> <span style={{ ...isactive("CYBER SECURITY") }} onClick={() => handlechange("CYBER SECURITY")}>CYBER SECURITY</span></Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/career"} className="nav-link" style={{ textDecoration: "none", color: "grey" }}> <span style={{ ...isactive("CAREER") }} onClick={() => handlechange("CAREER")}>CAREER</span></Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    )
}

export default Topbar;