import React, { useEffect, useState } from 'react';
import * as usuariosService from '../../services/usuarios/usuariosService'
import { Link } from 'react-router-dom';

const UsuariosPage = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(()=>{
        handleGetUsuarios();
    },[])

    const handleGetUsuarios = async () => {
        try {
            const result = await usuariosService.GetUsuarios();
            setUsuarios(result);
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
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Correo</th>
                                <th>Clave</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.length > 0 && usuarios.map((data)=>(
                                <tr key={data}>
                                    <td>{data.id}</td>
                                    <td>{data.nombre}</td>
                                    <td><Link className="btn btn-success" to={"/usuarios/"+data.id}>Editar</Link></td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                </div>
            </div>

        </div>
    )
}

export default UsuariosPage;