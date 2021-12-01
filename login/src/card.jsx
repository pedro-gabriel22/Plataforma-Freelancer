import React from "react";
import "./card.css"
const Card = (props) =>{
    return(
<>

<div className="container-card-free">
    <div className="container-card-free-filho">
        <h1 className="card-titulo">{props.titulo}</h1>
        <p className="card-descricao">{props.descricao}</p>
</div>
</div>
</>

    )
}
export default Card;