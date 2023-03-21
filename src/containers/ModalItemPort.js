import React, { useState } from "react";
import '../styles/ModalItemPort.scss';

export default function ModalItemPort({ setModalItemValue }) {

    const [opacityValue, setOpacityValue] = useState(false);

    const handleCloseModal = () => {
        setOpacityValue(true);
        setTimeout(() => {
            setModalItemValue(false);
        }, 600);
    }

    return (
        <div className={`main-modal-port ${opacityValue ? 'close-modal-port' : ''}`}>
            <div className='modal-port'>
                <button onClick={handleCloseModal}>CLOSE</button>
            </div>
        </div>
    )
}