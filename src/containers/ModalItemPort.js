import React, { useState } from "react";
import '../styles/ModalItemPort.scss';
import { MdClear } from "react-icons/md";

export default function ModalItemPort({ setModalItemValue, mainItemModalPort }) {

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
                    <div className="port-image-div">
                        <img src={mainItemModalPort.image} className='port-image'/>
                    </div>
                    <div className="port-text">
                        <h1 className="modal-item-h1">{mainItemModalPort.title}</h1>
                        <h3 className="modal-item-h3">{mainItemModalPort.text}</h3>
                        <p className="modal-item-p">{mainItemModalPort.parrafe}</p>
                    <button className="modal-item-btn"><a href={mainItemModalPort.url} target="_blank" >VIEW WEBSITE</a></button>
                    </div>
                </div>
                <button className="modal-item-closeBtn" onClick={handleCloseModal}>
                    <MdClear className="closeBtn-icon"/>
                </button>
            </div>
        </div>
    )
}