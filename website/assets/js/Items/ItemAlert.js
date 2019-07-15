import React, { useState, useEffect } from 'react';

export default function Home() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('fred');

    useEffect(() => {

        console.log('Effect!');

    });


    return (
        <div>
            <form>

                <div className="form-group">
                    <label htmlFor="name">Give your alert a name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Name" />
                </div>

                <div className="row">
                    <div className="col">
                        <div>
                            <small>Decide if the trigger should check NQ/HQ or Both</small>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="nq" />
                            <label className="form-check-label" htmlFor="nq">Normal Quality</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="hq" />
                            <label className="form-check-label" htmlFor="hq">High-Quality</label>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <small>Should the alert check the whole Data-Center?</small>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="nq" />
                            <label className="form-check-label" htmlFor="nq">Data-Center (Light)</label>
                        </div>
                    </div>
                </div>


                <div>
                    <small>Alert Conditions</small>
                    <div className="row">
                        <div children="col">
                            <div className="form-group">
                                <select className="form-control" defaultValue="">
                                    <option disabled="disabled" value="">- Select a field -</option>
                                    <optgroup label="Prices">
                                        <option value="PRICES_001">Price Per Unit</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>

                        <div children="col">
                            <div className="form-group">
                                <select className="form-control" defaultValue="">
                                    <option disabled="disabled" value="">- Select an operator -</option>
                                    <option value="PRICES_001">[>] Greater Than</option>>
                                </select>
                            </div>
                        </div>

                        <div children="col">
                            <div className="form-group">
                                <input type="text" className="form-control" id="condition" placeholder="Value" />
                            </div>
                        </div>

                        <div children="col">
                            <div className="form-group">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <small>How do you want to be notified?</small>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="nq" />
                        <label className="form-check-label" htmlFor="nq">Discord (username)</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="hq" />
                        <label className="form-check-label" htmlFor="hq">Email (email@address.com</label>
                    </div>
                </div>

            </form>
        </div>
    )
}
