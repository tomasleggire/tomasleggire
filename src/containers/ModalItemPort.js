import React from "react";
import '../styles/ModalItemPort.scss';

export default function ModalItemPort({ setModalItemValue }) {
    return (
        <div className="main-modal-port">
            <div className="modal-port">
                <button onClick={()=>setModalItemValue(false)}>CLOSE</button>
            </div>
        </div>
    )
}