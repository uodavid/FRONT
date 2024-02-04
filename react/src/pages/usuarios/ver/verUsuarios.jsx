import React, { useEffect, useState } from 'react';
import * as usuariosService from '../../../services/usuarios/usuariosService'
import { useParams } from 'react-router-dom';
const VerUsuariosPage = (props) => {

    const {id} = useParams();

    const [usuarioData, setUsuarioData] = useState(null);

    useEffect(()=>{
        getUsuarioById();
    },[])

    const getUsuarioById = async () => {
        try {
            const result = await usuariosService.GetUsuariosById(id)
            setUsuarioData(result);
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        {usuarioData &&
        <div className='container'>
            <div className="row">
                <div className="col-lg-12">
                    <div className="mb-3">
                        <label>Nombre</label>
                        <input type="text" className='form-control' name="nombre" value={usuarioData.nombre}/>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default VerUsuariosPage;

