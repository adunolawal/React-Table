import React, { Fragment, useState } from "react";
import classes from "../Pages/Home.module.css"
import data from "./mock-data.json"
import Row from "./Row";
import AddInfo from "./AddInfo";


const Home = () => {

    const [editContactId, setEditContactId] = useState(null);
    const [contacts, setContacts] = useState(data);
    const [addData, setAddData] = useState({
        name : '',
        address : '',
        phoneNumber : '',
        email : ''
    })
    const [editFormData, setEditFormData] = useState({
        name : '',
        address : '',
        phoneNumber : '',
        email : ''
    })

    
    const handleEditFormData = (event)=> {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData }
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData)
    }

    // handles addition of contacts
    const handleAddition = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value;
        const newData = { ...addData }
        newData[fieldName] = fieldValue;
        
        setAddData(newData)
    }

    // handles submiting of the edited data
    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id : editContactId,
            name: editFormData.name,
            address : editFormData.address,
            phoneNumber : editFormData.phoneNumber,
            email : editFormData.email
        }
        const newContact = [...contacts]

        const index = contacts.findIndex((contact) => contact.id === editContactId)
        newContact[index] = editedContact;

        setContacts(newContact);
        setEditContactId(null)
    }

    // handles display of contact information
    const handleSubmit = (event) =>{
        event.preventDefault();

        const newContact = {
            id : Math.floor(Math.random()* 1000) + 1,
            name : addData.name,
            address : addData.address,
            phoneNumber : addData.phoneNumber,
            email : addData.email
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts)
    }

    // handles editing of data with the click of a button
    const handleEdit = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id)

        const formValue = {
            name: contact.name,
            address: contact.address,
            phoneNumber: contact.phoneNumber,
            email: contact.email,
        }

        setEditFormData(formValue)
    }

    // handles deleting of contacts on Double click
    const handleDelete = (contactId) => {
        const newContact = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId)

        newContact.splice(index, 1)

        setContacts(newContact)
    }

    return ( 
        <div>
            <AddInfo  handleAddition={handleAddition} 
                handleSubmit={handleSubmit}  > 
            </AddInfo>
            <form onSubmit={handleEditFormSubmit}> 
                <table className={classes.Table}>
                    <thead>
                        <tr className={classes.tr}>
                            <th>S/N</th>
                            <th>Name</th>                      
                            <th>Address</th>                       
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index) => (
                        <Fragment>
                                {editContactId === contact.id ?
                                <Row index={index} editFormData={editFormData} 
                                handleEditFormData={handleEditFormData}/> :
                            <tr onDoubleClick={() => handleDelete(contact.id)}>
                                <td>{index + 1}</td>
                                <td> {contact.name} </td>
                                <td> {contact.address} </td>
                                <td> {contact.phoneNumber} </td>
                                <td> {contact.email} </td>
                                <td>
                                    <button type="button"
                                    onClick={(event) =>handleEdit(event, contact) } > Edit </button>
                                </td>
                                </tr>
                            }
                        </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>
        </div>
    );
}
 
export default Home;