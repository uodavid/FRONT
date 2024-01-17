import React, { useEffect, useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [clave, setClave] = useState("");

    //useEffect(()=>{}) //ciclo de vida, se le conoce como fase de actualización o constante de monitoreo, se va a ejecutar siempre, cada que detecte que hay un cambio en un Hook, sin importar el hook que sea 
    //useEffect(()=>{},[]) //ciclo de vida, se le conoce como fase de montaje, se ejecuta una sola vez cuando carga el componente, sin importar que los demas hooks states cambien de estado
    //useEffect(()=>{},[usuario]) //ciclo de vida, se le conoce como fase de actualización, se ejecuta cuando arga el componente y cuando detecta que hay un cambio en el hook state que tiene como dependencia

    //useEffect(()=>{
    //    console.log("Mostrando Mensaje")
    //})

    //useEffect(()=>{
    //    console.log("Mostrando Mensaje")
    //},[])

    //useEffect(()=>{
    //    console.log("Mostrando Mensaje")
    //},[email])

    useEffect(()=>{
        return () => {
            console.log("Destruyendo el Componente")
        }
    },[])
    

    return(
        <section style={{height: '100vh'}}>
            <div className="container h-100 d-flex justify-content-center align-items-center">
                <div className="row d-flex justify-content-center w-100">
                    <div className='col-lg-6'>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title text-center">Login</div>

                                <div className="mb-3">
                                    <label>Correo</label>
                                    <input type="email" id="email" onBlur={(e)=>setEmail(e.target.value)} className="form-control" name="correo" />
                                </div>

                                <div className="mb-3">
                                    <label>Clave</label>
                                    <input type="password" id="password" onBlur={(e)=>setClave(e.target.value)} className="form-control" name="clave" />
                                </div>

                                <div className="mb-3">
                                    <button type="button" onClick={()=>navigate("/")} className='btn btn-success'>Enviar</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;