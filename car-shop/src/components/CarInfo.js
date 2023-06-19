import React, {useState} from "react";

function CarInfo({formData, setFormData}) {
    return (
        <div className = "car-info-container">
        <input 
            type="text" 
            placeholder="Marca" 
            value={formData.marca} 
            onChange={(e) => {
                setFormData({...formData, marca: e.target.value });
                }}/>
        
        <input 
            type="text" 
            placeholder="Modelo" 
            value={formData.modelo} 
            onChange={(e) => {
                setFormData({...formData, modelo: e.target.value });
                }}/>
        
        
        <input 
            type="text" 
            placeholder="Placa" 
            value={formData.placa} 
            onChange={(e) => {
                setFormData({...formData, placa: e.target.value });
                }}/>
        
        
        <input 
            type="text" 
            placeholder="Nivel Tanque de Gasolina" 
            value={formData.nivel} 
            onChange={(e) => {
                setFormData({...formData, nivel: e.target.value });
                }}/>
        
        
        <input 
            type="text" 
            placeholder="Información Adicional" 
            value={formData.informacion} 
            onChange={(e) => {
                setFormData({...formData, informacion: e.target.value });
                }}/>




        </div>
    )
}

export default CarInfo;