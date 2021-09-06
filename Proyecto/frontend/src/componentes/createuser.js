import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class createuser extends Component {
    render() {
        return (
            <div className="container-fluid text-center">
                <h3>
                    ¡Router XE
                    <small class="text-muted">-Netconf!</small>
                </h3>
                <br></br>
                <div class="container">
                    <div class="row">
                        <div class="col-md">
                            <div className="container-row">
                                <span class="placeholder col-12 bg-info"></span>
                                <div class="p-3 mb-2 bg-light text-black"><h3>Login</h3></div>

                                <form>
                                    <div class="mb-3">
                                        <input type="email" class="form-control" placeholder="username"></input>

                                    </div>
                                    <div class="mb-3">
                                        <input type="password" class="form-control" placeholder="Password" ></input>
                                    </div>
                                    <div class="mb-3">
                                        <input type="password" class="form-control" placeholder="Host" ></input>
                                    </div>
                                    <br></br>
                                    <div class="col-12">
                                        <Link to="/configure" class="btn btn-primary btn-lg">Empieza a configurar</Link>

                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>



                <span class="placeholder col-12 bg-info"></span>



            </div>
        )
    }
}

