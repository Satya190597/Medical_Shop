import React from "react";
import {Link} from "react-router-dom";

const Nav =  () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/category/create" className="nav-link">
                                    Create A category
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/category/manage" className="nav-link">
                                    Manage category
                                </Link>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;