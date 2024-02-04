import React, { useEffect, useState } from 'react';
import * as clientesService from '../../../services/clientes/clientesService'
import { useParams } from 'react-router-dom';
const VerClientesPage = (props) => {

    const {id} = useParams();

    const [clienteData, setClienteData] = useState(null);

    useEffect(()=>{
        getClienteById();
    },[])

    const getClienteById = async () => {
        try {
            const result = await clientesService.GetClientesById(id)
            setClienteData(result);
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        {clienteData &&
        <div className='container'>
            <div className="row">
                <div className="col-lg-12">
                    <div className="mb-3">
                        <label>Nombre</label>
                        <input type="text" className='form-control' name="nombre" value={clienteData.nombre}/>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default VerClientesPage;