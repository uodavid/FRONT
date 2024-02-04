import React, { useEffect, useState } from 'react';
import * as clientesService from '../../services/clientes/clientesService'
import { Link } from 'react-router-dom';


const ClientesPage = () => {
    const [clientes, setClientes] = useState([])

    useEffect(()=>{
        handleGetClientes();
    },[])

    const handleGetClientes = async () => {
        try {
            const result = await clientesService.GetClientes();
            setClientes(result);
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className='container'>
            <div className='row'>
                <h3>Lista de clientes</h3>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                <table className='table table-stripped'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>tipoDocumento</th>
                                <th>noDocumento</th>
                                <th>edad</th>
                                <th>nombres</th>
                                <th>apellidos</th>
                                <th>correo</th>
                                <th>telefono</th>
                                <th>direccion</th>
                                <th>ciudad</th>
                                <th>notas</th>
                                <th>pedidos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.length > 0 && clientes.map((data)=>(
                                <tr key={data}>
                                    <td>{data.id}</td>
                                    <td>{data.nombre}</td>
                                    <td><Link className="btn btn-success" to={"/clientes/"+data.id}>Editar</Link></td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                </div>
            </div>

        </div>
    )
}

export default ClientesPage;