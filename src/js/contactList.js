import React, {useEffect, useState} from "react";

export const UserList = () => {
    const [List, setList] = useState ([]);
    //const host= "https://jsonplaceholder.typicode.com";

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
    useEffect(() => {
        localList();
    }, []);


    return (
        <div className="userlist-container">
            <h1>User List</h1>
            {/* Render the List data here */}
            <ul className="userlist">
                {List.map((user) => (
                <li key={user.id} className="useritem">
                    {/*<Link to={`/user/${user.id}`}></Link>*/}
                    <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="User" className="userimage" />
                    <div className = "userinfo">
                        <h3>{user.name}</h3>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                    </div>
                    <div className="usericons">
                        <i className="fas fa-edit usericon usericon-edit" title="Edit"></i>
                        <i className="fas fa-trash-alt usericon usericon-delete" title="Delete"></i>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}


