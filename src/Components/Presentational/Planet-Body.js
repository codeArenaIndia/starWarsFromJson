import React from 'react';
import Cards from './Cards';
import Info from './Info';

export default function PlanetBody({restricted,planets,handleClose,modalData,show,loading,handleShowModal }){
    console.log("test",planets);
    return (
        <div className="planet-list col-md-12 col-xs-12 style-2 scrollbar">
          <div className="col-md-12 text-white">The image size inside the tiles denotes the comparative size of planet's population</div>
          {restricted !== "" ? (<div className="alert alert-danger">{restricted}</div>) : ""}
            {planets.map((results,key) => (
                <Cards key={results.name +key}  results={results} handleShowModal={handleShowModal}/>
            ))}
            <Info handleClose={handleClose} modalData={modalData} show={show}/>
            {planets.length === 0 && loading === "none" ? (<p style={{color: "#fff",margin: "15px"}}>No record found</p>) : ("")}
            <div className="spinner" style={{display: `${loading}`}}></div>
        </div>
    )
}