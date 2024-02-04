import apiFetch from "../../utils/apiFetch"

const GetClientes = async () => {
    try {
        const {data} = await apiFetch().get('/clientes');
        console.log("Mostrando clientes service", data)
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
}

const GetClientesById = async (id) => {
    try {
        const {data} = await apiFetch().get('/clientes/'+id);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
}

const PostClientes = async (payload) => {
    try {
        const {data} = await apiFetch().post('/clientes', payload);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
}

const PutClientes = async (id, payload) => {
    try {
        const {data} = await apiFetch().put('/clientes/'+id, payload);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
}

const DeleteClientes = async (id) => {
    try {
        const {data} = await apiFetch().delete('/clientes/'+id);
        return data;
    } catch (error) {
        return Promise.reject(error)
    }
}

export {
    GetClientes,
    GetClientesById,
    PostClientes,
    PutClientes,
    DeleteClientes
}