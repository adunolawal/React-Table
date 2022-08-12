import React from "react";

const Row = (props) => {
    return ( 
        <tr>
            <td> 
                <input 
                onChange={props.handleEditFormData}
                value={props.editFormData.name}
                type="text" required="required" placeholder="Enter a name" name="name"></input>    
            </td>
            <td> 
                <input type="text"
                value={props.editFormData.address}
                onChange={props.handleEditFormData} required="required" placeholder="Enter an address" name="address"></input>       
            </td>
            <td>  
                <input type="text" 
                value={props.editFormData.phoneNumber}
                 onChange={props.handleEditFormData} required="required" placeholder="Enter a PhoneNumber" name="phoneNumber"></input>   
            </td>
            <td> 
                <input type="email"
                value={props.editFormData.email} 
                onChange={props.handleEditFormData} required="required" placeholder="Enter an Email" name="email"></input>       
            </td>
            <td>
                <button type="submit" > Save </button>
            </td>
        </tr>
     );
}
 
export default Row;