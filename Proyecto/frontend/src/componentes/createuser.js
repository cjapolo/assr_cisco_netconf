import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class createuser extends Component {
    state = {
        users: [],

    }
    userRouter = (e) =>{
        console.log(e.target.value)
    }
    passRouter = (a) =>{
        console.log(a.target.value)
    }
    hostRouter = (b) =>{
        console.log(b.target.value)
    }

    onSubmit = async e =>{
        await axios.post('http://localhost:5000', {
            users: this.state.users
        })
        

        

    }
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

                                <form onSubmit={this.onSubmit}>
                                    <div class="mb-3">
                                        <input type="text" 
                                        class="form-control" 
                                        placeholder="username"
                                        onChange={this.userRouter} />

                                    </div>
                                    <div class="mb-3">
                                        <input type="password"
                                        class="form-control" 
                                        placeholder="Password"
                                        onChage={this.passRouter} />
                                    </div>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" placeholder="Host" onChange={this.hostRouter} />
                                    </div>
                                    <br></br>
                                    <div class="col-12">
                                        <Link to="/configure" class="btn btn-primary btn-lg" type="submit" >Empieza a configurar</Link>

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

