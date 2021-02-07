import React from "react";
import Nav from "./Nav";

const Base = ({children}) => {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}
export default Base;