import React from 'react';
import './ImagemButton.css'

function ImagemButton(props) {
    return (
        <div className="image-button-container">
            <a href={props.link}></a>
            <img src={props.imagem}/>
            <p>{props.texto }</p>
        </div>

    )
}

export default ImagemButton;