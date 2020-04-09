import React , {useState } from 'react';
import { debounce ,updateCounter } from '../Components/Helper/Helper'
import PlanetHeader from '../Components/Presentational/Planet-Header';
import PlanetBody from '../Components/Presentational/Planet-Body';
import { SearchInput } from '../Components/Input'
import "../Components/Helper/Style/Planets.css";
import PlanetList from '../Data/Planets.json';
import { useHistory } from 'react-router-dom'


export default function Planets(){
  const [planets,setPlanets] = useState([]);
  const [query,setQuery] = useState("");
  const [loading,setLoading] = useState("none");
  const [restricted,setRestricted] = useState("");
  const [username,setUsername]= useState("");
  const [modalData,SetModalData] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let history = useHistory();

  /****************************Mounting,Unmounting and Updating code starts*****************/
  
  const getResults = async(queries) =>{
    if(!updateCounter()){
      setPlanets([]);
      setRestricted("Maximum Api request limit reached. Please try after a minute.")
      return false;
    }
    else{
      setRestricted("")
    }
    setLoading("block");
    try{
     const res = Object.entries(PlanetList);
     const newPlanetList = [];
      res.forEach((item,index)=>{
        if((item[1].fields.name.toLowerCase()).includes(queries.toLowerCase())){
          newPlanetList[index] = item[1].fields;
        }
      });
      newPlanetList.map((item)=>{
        console.log("item",item)
      });
     setPlanets(newPlanetList);

    } catch (err){
        console.log('Error',err);
    }
    setLoading("none");
  }

  const handleSearch = debounce(function(target) {
    setPlanets([]);
    setQuery(target.value);
  }, 600);
  
  const local = localStorage.getItem("user");
  React.useEffect(()=>{
    if( local === null){
      history.push("/login");
    }
  },[local]);

  React.useEffect(()=>{
    getResults(query);
    setUsername(JSON.parse(localStorage.getItem('counter')).username);
  },[query]);

  /****************************Mounting,Unmounting and Updating ends*****************/

  /*****************Onclick modal box code starts *****************************/
  const handleShowModal = (results)=>{
    handleShow();
    const planetData = [];
    for (let [key, value] of Object.entries(results)) {
        planetData[key] = value;
    }
    SetModalData(planetData);
  }

  /************************Onclick modal box code ends ************************/
  return (
    <div className="planetContainer col-md-12 npr">
      <PlanetHeader username={username}/>
      <SearchInput handleSearch={handleSearch}/>
      <PlanetBody handleShowModal={handleShowModal} restricted={restricted} planets={planets} handleClose={handleClose} modalData={modalData} show={show} loading={loading}/>
    </div>
  )
}