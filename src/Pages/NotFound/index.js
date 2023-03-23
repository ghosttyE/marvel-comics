import React from "react";
import "./style.css"

function NotFoundPage() {
    return (
        <div className="NotFound-AppMaster">
            <div className="NotFound-AppMaster-Error">
                <div className="NotFound-AppMaster-Error-Code">404</div>
                <div className="NotFound-AppMaster-Error-Title">NotFound</div>
            </div>
            <a className="NotFound-AppMaster-Home-Button" href="/">Voltar</a>
        </div>
    );
}

export default NotFoundPage;