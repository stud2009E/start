import React from "react";
import "./Layout.css";

function Layout(props){

    return (
        <div className="layout">

            <nav className="nav">
                {props.nav}
            </nav>

            <main className="main">
                <header className="header">
                    {props.header}
                </header>
                <article className="article">
                    Test
                </article>
                <footer className="footer">
                    {props.footer}
                </footer>
            </main>

        </div>
    );
}

export default Layout;