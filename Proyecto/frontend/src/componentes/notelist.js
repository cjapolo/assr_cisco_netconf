import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import herra from '../build_black_24dp.svg';

export default class notelist extends Component {
    render() {
        return (
            <div>
                <head>
                    <meta charSet="utf-8"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <Link to="/"></Link>
                    <title>TRABANDO EN PAGINA</title>

                </head>
                <body >
                    <h1></h1>
                    <div className="container-fluid">
                        <div className="jumbotron">
                            <div className="container" >
                                <div class="p-3 mb-2 bg-info text-white text-center">
                                    <h1>Configuración de Router Cisco XE usando NETCONF</h1>
                                    <p>Usando NETCONFIG se realizan operaciones de configuraciones en los Router Cisco XE.</p>

                                </div>
                                <div class="d-grid gap-2 col-6 mx-auto">

                                    <Link to="/login" class="btn btn-primary btn-lg">Empieza a configurar</Link>

                                </div>
                                <div class="text-center">
                                    <div className="App">


                                        <header >
                                            <img src={herra} className="App-logo" alt="logo" />

                                        </header>
                                    </div>
                                </div>



                                <div className="container-fluid">
                                    <span class="placeholder col-12 bg-info"></span>

                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">Sitio web desarollado por Grupo 4</h5>
                                                    <p class="card-text">Creado por estudiantes de la Escuela Superior Politecnica del Litoral (ESPOL), componente practico de la materia de administracion de sistemas y servicios en red basado en tecnologia API-Rest.</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">Informacion Adiccional</h5>
                                                    <p class="card-text">Recursos: React.js-Bootstrap-Node.js </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </body>
            </div>
        )
    }
}
