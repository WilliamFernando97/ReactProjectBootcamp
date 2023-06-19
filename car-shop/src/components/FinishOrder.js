import React, {Component} from "react";



function FinishOrder({formData, setFormData}) {

    return(
        <div className = "summary-info-container"> 
        <ul > 
        <li>Nombres: </li>
        <li>Apellidos: </li>
        <li>Email:</li>
        <li>Teléfono: </li>
        <li>Identificación: </li>
        <li>Tipo de Identificación: </li>
        <li>Marca: </li>
        <li>Modelo: </li>
        <li>Placa:</li>
        <li>Nivel: </li>
        <li>Información: </li>
        <li>Servicios: </li>
        </ul>
      </div>
    );
}



export default FinishOrder;