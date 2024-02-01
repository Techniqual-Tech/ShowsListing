import React, { useState, useEffect } from 'react';
// Import necessary modules from react-router-dom
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './showlist.css';

const Showlist = () => {
    // Get access to the history object
    const navigate = useNavigate();

    const [showlists, setShows] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
                const fetchedShows = response.data;
                setShows(fetchedShows);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    function send(data) {
        // Use the push method to redirect to another page
        console.log("Mydata"+data.id);
        navigate(`/summary/${data.id}`, { state: { data:data } });
    }

    return (
        <div className='parent'>
            <div className='content'>
                <div className='head'>
                    <div className='logo'></div>
                </div>
                <div className='body'>
                    <div className='cards'>
                        {showlists && showlists.map((show) => (
                            <div className='card' key={show.show.id}>
                                {console.log(show)}
                                {show.show.image != null ? <img className='image' style={{ backgroundImage: `url(${show.show.image.original})` }}></img> : <img className='image' alt="No image"></img>}
                                <div className='info'>
                                    <a className='showname infofont' href={show.show.url}><p>{show.show.name}</p></a>
                                    <p className='showlang infofont'>lang:{show.show.language}</p>
                                    <p className='showstatus infofont'>status:{show.show.status}</p>
                                    <p className='showtimeday infofont'>schedule:{show.show.schedule.time}hr({show.show.schedule.days})</p>
                                    <p className='showduration infofont'>duration:{show.show.runtime}mins</p>
                                    <a className='officialsite infofont ' href={show.show.officialSite}><p>{show.show.officialSite}</p></a>
                                    <button onClick={() => send(show.show)} className='showbutton'> more </button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className='foot'></div>
            </div>

            {/* <h1>TV Shows</h1>
      <ul>
        {showlists.map((show) => (
          <li key={show.show.id}>{show.show.name}</li>
        ))}
      </ul> */}
        </div>
    );
};

export default Showlist;
/* url,name,language,status,time,day,network name and country,official site,image,summarty */
