import React , {useState } from 'react';
import { handleNavigationHelper, debounce ,updateCounter } from '../Components/Helper/Helper'
import PlanetHeader from '../Components/Presentational/Planet-Header';
import PlanetBody from '../Components/Presentational/Planet-Body';
import { SearchInput } from '../Components/Input'
//import axios from 'axios';
import "../Components/Helper/Style/Planets.css";
import PlanetList from '../Data/Planets.json';

export default function Planets(){
  const [planets,setPlanets] = useState([]);
// const [page,setPage] = useState(1)
//const [count,setCount] = useState(null);
 // const [next,setNext] = useState(null);
  const [query,setQuery] = useState("");
  const [loading,setLoading] = useState("none");
  const [restricted,setRestricted] = useState("");
  const [username,setUsername]= useState("");
  const [modalData,SetModalData] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        //newPlanetList[index] = Object.entries(item[1].fields);
        if((item[1].fields.name.toLowerCase()).includes(queries.toLowerCase())){
          newPlanetList[index] = item[1].fields;
        }
      });
      newPlanetList.map((item)=>{
        console.log("item",item)
      });
     setPlanets(newPlanetList);
    // setNext("done");
   //  setCount(newPlanetList.length);
      


  //TO get data FROM API UNCOMMENT THE BELOW  LINES 
    /*  const res =  await axios.get(`https://swapi.co/api/planets/?page=${pages}&format=json&search=${queries}`);
      let response= res.data; 
      let maxPage = response.count/10;
        if(planets.length !== 0){
          let res = [...planets,...response.results];
          setPlanets(res);
        }else {
          setPlanets(response.results);
        }
        setCount(response.count);
        maxPage > page ?  setNext(response.next) : setNext("done"); */

    } catch (err){
        console.log('Error',err);
    }
    setLoading("none");
  }

  const handleSearch = debounce(function(target) {
    setPlanets([]);
    setQuery(target.value);
   // setPage(1);
  }, 600);
  

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
     {/* <button type="button" className="loadmore-btn btn btn-success transparent pull-left" data-pointer={loading} onClick={event => setPage(handleNavigationHelper(event.target))} data-nav={next}>{loading === "block" ? "loading..." : "Load More"}</button>
    <p  className="count col-md-2 pull-left text-white">Showing: {count}</p> */}
      <PlanetBody handleShowModal={handleShowModal} restricted={restricted} planets={planets} handleClose={handleClose} modalData={modalData} show={show} loading={loading}/>
    </div>
  )
}