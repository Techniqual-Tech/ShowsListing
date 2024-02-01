import React from "react";
import './summary.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Summary() {
    const navigate=useNavigate();
    const location = useLocation();
    console.log("receiver" + location.state.data.id);
    function send() {
        const objectString = JSON.stringify( location.state.data);
        sessionStorage.setItem('book',objectString);
        navigate(`/book`);
    }
    return (<>
        <div className="parent">
            <div className="showinfo">
                {location.state.data.image != null ? <div className='showimg' style={{ backgroundImage: `url(${location.state.data.image.original})` }}></div> : <div className='showimg' alt="No image">No image</div>}
                <div className="showinfom">
                    <a href={location.state.data.url} className="name font" target="_blank"><p>{location.state.data.name}</p></a>
                    <p className="lang font">language: {location.state.data.language}</p>
                    <p className="status font">status: {location.state.data.status}</p>
                    <p className="runtime font">duration: {location.state.data.runtime} mins</p>
                    <p className="permier font">premiered: {location.state.data.premiered}</p>
                    <p className="end font">ended: {location.state.data.ended}</p>
                    <p className="time font">timing: {location.state.data.schedule.time} hrs</p>
                    <p className="day font">day: {location.state.data.schedule.days}</p>
                    {location.state.data.network!=null?<p className="Nname font">network: {location.state.data.network.name}</p>:<p className="Nname font">network: ------</p>}
                    {location.state.data.network!=null?<p className="Ncountry font">country: {location.state.data.network.country.name}</p>:<p className="Ncountry font">country: -------</p>}
                    <a href="" className="official font"><p>{location.state.data.officialSite}</p></a>
                </div>
            </div>
            <div className="showsummery">
                <p className="summary">
                <div dangerouslySetInnerHTML={{ __html:location.state.data.summary }} />{/* for render api html in jsx dangersetInnerHtml use */}
                </p>
            </div>
            <div className="bookbtn">
                <button onClick={()=>{send()}}>Book ticket</button>
            </div>
        </div>
    </>);
}
export default Summary;

/* url,name,language,status,runtime,premier ended,officialsite,schedure,network name,countr,image,summary */