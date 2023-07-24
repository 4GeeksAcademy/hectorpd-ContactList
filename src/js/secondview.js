import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const UserView = () => {

    const [user, setUser] = useState(null);
    const params = useParams();
    const id = params.userId;
    const UserView = JSON.parse(localStorage.getItem('usersLocal'));
    
    useEffect(() => {
        const userList = JSON.parse(localStorage.getItem("userLocal"));
        if (userList) {
            const selectedUser = userList.find((user) => user.id === parseInt(id, 10));
            setUser(selectedUser);
        }
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }
        return (
            <div className="container" style={{ maxWidth: 550 }}>
                <div className="card my-1 mx-4 d-flex align-items-center justify-content-center">
                    <h5 className="pt-3">User: {id}</h5>
                    <div>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.zUdfLxrDwJVBcv9h-_mSEQAAAA&pid=Api" className='mb-4 me-4' style={{ width: 50, height: 50 }} alt="..." />
                        <h1 className="card-text ms-3 d-inline">{user.name}</h1>
                    </div>
                    <p className="card-text">Company: {user.company.name}</p>
                    <p className="card-text">Email: {user.email}</p>
                    <p className="card-text">Website: {user.website}</p>
                    <p className="card-text">Phone: {user.phone}</p>
                    <p className="card-text"> {user.username}</p>
                    <p className="card-text pb-3"></p>
                    {user.address.city}, zipcode: {user.address.zipcode}
                </div>
            </div>
        );
}