import React, { useState } from 'react';
import './bookingform.css'

const Book = () => {
    const storedData = sessionStorage.getItem('book');
    if (storedData) {
        var parsedApiObject = JSON.parse(storedData);
        console.log(parsedApiObject);
    }
    function book() {
        console.log("Ticket book Successfully");
    }
    return (
        <div className='parents'>
            <div className='header'>
                <p>TicketBooking</p>
            </div>
            <div className='bodys'>
                <form className="form">
                    <div className='inputelements'>
                        <p className='fonts'><b>Id: </b>{parsedApiObject.id} </p>
                        <p className='fonts'><b>Name: </b>{parsedApiObject.name} </p>
                        <p className='fonts'><b>Language: </b>{parsedApiObject.language}</p>
                        <p className='fonts'><b>Duration: </b>{parsedApiObject.runtime} mins </p>
                        <p className='fonts'><b>Status: </b>{parsedApiObject.status} </p>
                        <p className='fonts'><b>timing: </b>{parsedApiObject.schedule.time} hrs </p>
                        <p className='fonts'><b>Day: </b>{parsedApiObject.schedule.days} </p>
                        {parsedApiObject.network!=null?<p className='fonts'><b>Country: </b>{parsedApiObject.network.country.name}</p>:<p className='fonts'><b>Country: -----</b></p>}
                    </div>
                    <button className='book' onClick={() => { book() }}><b>Book</b></button>
                </form>
            </div>
        </div>
    );
};

export default Book;
/* id,name,laguage,runtime,status,timeday,country */