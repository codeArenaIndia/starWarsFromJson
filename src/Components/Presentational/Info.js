import React from 'react';
import { Modal } from 'react-bootstrap';

export default function Info({modalData,show,handleClose}){
return(
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Planet: {modalData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Name: {modalData.name}</p>
            <p>Rotation_period: {modalData.rotation_period}</p>
            <p>Orbital_period: {modalData.orbital_period}</p>
            <p>Diameter: {modalData.diameter}</p>
            <p>Climate: {modalData.climate}</p>
            <p>Gravity: {modalData.gravity}</p>
            <p>Terrain: {modalData.terrain}</p>
            <p>Surface_water:{modalData.surface_water}</p>
            <p>Population: {modalData.population}</p>
        </Modal.Body>
    </Modal>
)
}