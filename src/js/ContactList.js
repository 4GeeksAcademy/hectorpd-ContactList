import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { UserView } from "./secondview";

export const UserList = () => {
    const [List, setList] = useState ([]);
    const [addnewcontact, setAddNewContact] = useState ("");
    const host= "https://jsonplaceholder.typicode.com";

    const localList = async () => {
        if (localStorage.getItem("userLocal") !== null) {
            setList(JSON.parse(localStorage.getItem("userLocal")))
        } else {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (response.ok) {
                const data = await response.json();
                setList(data);
                localStorage.setItem("userLocal", JSON.stringify(data));
            } else {
                console.log("Error: ", response.status, response.statusText);
            } 
        }   
    }
    const handleAddContact = async () => {
        if (addnewcontact !== "") {
            const newcontact = {
                id: List.length + 1,
                title: addnewcontact,
                completed: false,
            };
            
                const response = await fetch(`${host}/users`, {
                    method: 'POST',
                    body: JSON.stringify(newcontact),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setList([...List, data]); 
                    setAddNewContact(""); 
                    } else {
                        console.log("Error al agregar el contacto");
                    }
        };
    };
    const handleDeleteContact = async (contactId) => {
        
            const response = await fetch(`${host}/users/${contactId}`, {
                method: "DELETE",
            });
            if (response.ok) {
                const updatedTasks = List.filter((contact) => contact.id !== contactId);
                setList(updatedTasks);
            } else {
                console.log("Error al eliminar el contacto");
            } 
        }    
    useEffect(() => {
        localList();
    }, []);


    return (
        <>
        <h1>User List</h1>
        <div className="userlist-container">
            
            <button type="button" className="btn btn-success" onClick={handleAddContact}>Add new contact</button>
            <ul className="userlist">
                {List.map((user) => (
                <li key={user.id} className="useritem">
                    <Link to={`/user/${user.id}`}>
                        <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="User" className="userimage" />
                    </Link>
                        <div className = "userinfo">
                            <h3>{user.name}</h3>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                        </div>
                        <div className="usericons">
                            <i className="fas fa-edit usericon usericon-edit" title="Edit"></i>
                            <i className="fas fa-trash-alt usericon usericon-delete" title="Delete" onClick= { () => handleDeleteContact(user.id) }></i>
                        </div>
                </li>
                ))}
            </ul>
        </div>
        </>
    )
}