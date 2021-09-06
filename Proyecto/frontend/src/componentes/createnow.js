import React, { Component } from 'react'
import axios from 'axios'

export default class createnow extends Component {
    state = {
        p: [],

    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:5000/api/config');
        this.setState({ p: res.data })
        console.log(this.state.p)

    }
    getsalida = async ()=>{
        
        
    }
    entrada = (b) => {
        console.log(b.target.value)
    }
    render() {
        return (
            <div className="conatiner text-center">
                <span class="placeholder col-12 bg-info"></span>
                <div class="container">
                    <div class="row">
                        <div class="col-sm  bg-info">

                        </div>
                        <div class="col-sm">
                            <br></br>
                            <br></br>
                            <br></br>
                            <form>

                                <input type="text" id="input" class="form-control" onChange={this.entrada}></input>
                                <div class="form-text">
                                    Aqui digite su linea de comandos que desea insertar en su router.
                                </div>
                                <br></br>
                                <button type="button" class="btn btn-info">Enviar</button>
                            </form>
                            <br></br>
                            <br></br>

                            <ul >
                                {
                                    this.state.p
                                }
                            </ul>



                        </div>
                        <div class="col-sm bg-info" >
                            
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}


