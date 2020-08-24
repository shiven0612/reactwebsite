import React, { useState } from 'react';

const Contact = () => {
    const [data, setValue] = useState({
        fullName: "",
        phone: "",
        email: "",
        msg: ""
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setValue((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My Name is ${data.fullName}. My  cell# is ${data.phone}. My email is ${data.email}. Here I want to mention that app is ${data.msg}`)
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label for="exampleInputFullname">FullName</label>
                                <input name="fullName"
                                    value={data.fullName}
                                    onChange={InputEvent}
                                    type="text"
                                    className="form-control"
                                    id="exampleInputFullname"
                                />

                            </div>
                            <div className="form-group">
                                <label for="exampleInputPhone">Phone</label>
                                <input name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    type="number"
                                    className="form-control"
                                    id="exampleInputPhone"
                                    ria-describedby="emailHelp" />

                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail">Email address</label>
                                <input name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail"
                                    aria-describedby="emailHelp" />

                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"></textarea>
                            </div>
                            <div className="form-group form-check">
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
};

export default Contact;