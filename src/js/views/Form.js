import React from "react";

export const Form = () => {


    return (
        <>
            <div className="form">
                <h1>Add a new contact</h1>
                <form>
                    <div className="mb-3">
                        <label for="formFullName" className="form-label">Full Name</label>
                        <input type="text" className="formName" id="formFullName" aria-describedby="emailHelp" placeholder="Full Name" />
                    </div>
                    <div className="mb-3">
                        <label for="formEmail" className="form-label">Email</label>
                        <input type="email" className="formEmail" id="formEmail" placeholder="Enter Email" />
                    </div>
                    <div className="mb-3">
                        <label for="formPhone" className="form-label">Phone</label>
                        <input type= "number" className="formPhone" id="formPhone" placeholder="Enter Phone" />
                    </div>
                    <div className="mb-3">
                        <label for="eformAddress" className="form-label">Address</label>
                        <input type="text" className="formAddress" id="formAddress" placeholder="Enter Address" />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <button type="button" className="btn btn-link">or get back to contacts</button>
                </form>
            </div>
        </>
    )
}