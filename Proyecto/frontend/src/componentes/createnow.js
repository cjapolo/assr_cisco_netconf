import React, { Component } from 'react'

export default class createnow extends Component {
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

                            <input type="text" id="input" class="form-control" ></input>
                            <div class="form-text">
                                Aqui digite su linea de comandos que desea insertar en su router.
                            </div>
                            <br></br>
                            <button type="button" class="btn btn-info">Enviar</button>


                        </div>
                        <div class="col-sm bg-info" >
                            
                        </div>
                    </div>
                </div>
               
            </div>

        )
    }
}
