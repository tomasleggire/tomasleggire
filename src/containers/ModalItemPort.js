import React, { useState } from "react";
import '../styles/ModalItemPort.scss';

export default function ModalItemPort({ setModalItemValue }) {

    const [opacityValue, setOpacityValue] = useState(false);

    const handleCloseModal = () => {
        setOpacityValue(true);
        setTimeout(() => {
            setModalItemValue(false);
        }, 500);
    }

    return (
        <div className={`main-modal-port ${opacityValue ? 'close-modal-port' : ''}`}>
            <div className='modal-port-container'>
                <div className="modal-port">
                    <div className="port-image">
                    </div>
                    <div className="port-text">
                        LALALALA
                    </div>
                </div>
                <button onClick={handleCloseModal}>CLOSE</button>
            </div>
        </div>
    )
}