import React from "react"
import classes from "../Pages/AddInfo.module.css"

const AddInfo = (props) => {
    return ( 
        <>
        <h2>Add a Contact</h2>
        <form className={classes.Form} onSubmit={props.handleSubmit}>
            <input type="text"
            name="name"
            required = "required"
            placeholder = "Enter a name"
            onChange= {props.handleAddition}></input>

            <input type="text"
            name="address"
            required = "required"
            placeholder = "Enter an address"
            onChange={props.handleAddition}></input>

            <input type="text"
            name="phoneNumber"
            required = "required"
            placeholder = "Enter a phoneNumber"
            onChange={props.handleAddition}></input>

            <input type="email"
            name="email"
            required = "required"
            placeholder = "Enter an email"
            onChange={props.handleAddition}></input>
            <button type="submit" onClick={props.handleSubmit}> ADD DETAILS</button>
        </form>
        </>
    );
}
 
export default AddInfo;