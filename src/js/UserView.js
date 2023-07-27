import React from "react";
import { useParams } from "react-router-dom";


export const UserView = () => {
    const params = useParams();
    const  id  = params.usersId - 1;
    const viewString = JSON.parse(localStorage.getItem("userLocal"));
    console.log(viewString);
    
    // Verificar si hay datos válidos en el localStorage
    if (!viewString) {
        return <h1>Loading</h1>;
    }
    
    // Convertir la cadena JSON a un objeto JavaScript (si ya no lo es)
    const view = typeof viewString === "string" ? JSON.parse(viewString) : viewString;
    console.log(view);
    
    // Verificar si el objeto view es un array y si el id es válido
    if (!Array.isArray(view) || id < 0 || id >= view.length) {
        return <h1>User data not found</h1>;
    }

    const perfil = view[id];
    console.log(perfil);
    
    // Verificar si el objeto user está definido y tiene la propiedad 'name'
    if (!perfil || !perfil.hasOwnProperty('name')) {
        return <h1>User data is incomplete</h1>;
    }
    
    return (
            <>
                <div className="container" style={{ maxWidth: 550 }}>
                    <div className="card my-1 mx-4 d-flex align-items-center justify-content-center">
                        <h5 className="pt-3">Users: {perfil.name}</h5>
                        <div>
                            <img src="https://tse3.mm.bing.net/th?id=OIP.zUdfLxrDwJVBcv9h-_mSEQAAAA&pid=Api" className='mb-4 me-4' style={{ width: 50, height: 50 }} alt="..." />
                            <h1 className="card-text ms-3 d-inline">{perfil.name}</h1>
                        </div>
                            <p className="card-text">Company: {perfil.company}</p>
                            <p className="card-text">Email: {perfil.email}</p>
                            <p className="card-text">Website: {perfil.website}</p>
                            <p className="card-text">Phone: {perfil.phone}</p>
                            <p className="card-text">Username: {perfil.username}</p>
                            <p className="card-text pb-3">Addres: {perfil.address.city}, zipcode: {perfil.address.zipcode}</p>
                    </div>
                </div>
            </>
    );
}