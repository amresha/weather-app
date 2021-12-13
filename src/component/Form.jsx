import React from "react";
import "../style/formStyle.css";

const Form=props=>{
return(
    <div className="container">
    <form onSubmit={props.loadweather}>
    <div className="row">
            <div className="col-sm-6 col-lg-8">
                <input type="text" className="form-control" name="city" autoComplete="off" placeholder="Search City"/>
                <button type="submit">Search</button>

            </div>
        </div>    
    </form>    
    <div>{props.error ? error() : null}</div>   

    </div>

);

};

function error(){
    return(
        <div className="container" role="alert">
            <p className='err-msg'>No city is selected!</p>
            <p className='err-desc'>Type any city name to get weekly forecast data</p>
        </div>
    );
};

export default Form;