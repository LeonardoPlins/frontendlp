import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";
const urlBase = "https://backend-bcc-2-b.vercel.app/usuario";

export const incluirUsuario = createAsyncThunk('incluirUsuario', async (usuario) => {
    try {
        const resposta = await fetch(urlBase, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });
        const dados = await resposta.json();
        if (dados.status){
            usuario.id = dados.idGerado
            return {
                status: dados.status,
                usuario,
                mensagem: dados.mensagem
            }
        }
        else{
            return {
                status: dados.status,
                mensagem: dados.mensagem
            }
        }
    }
    catch (erro) {
        return {
            status: false,
            mensagem: "Não foi possível cadastrar o usuario: " + erro.message
        }
    }
});


const estadoInicial = {
    estado: ESTADO.OCIOSO,
    mensagem: "",
    usuarios: []
}

const usuarioSlice = createSlice({
    name: 'usuario',
    initialState: estadoInicial,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(incluirUsuario.pending, (state, action) =>{
                state.estado = ESTADO.PENDENTE;
                state.mensagem = 'Processando a requisição...'
            })
            .addCase(incluirUsuario.fulfilled, (state, action) =>{
                if (action.payload.status){
                    state.estado = ESTADO.OCIOSO;
                    state.mensagem = action.payload.mensagem;
                    //É preciso também atualizar o estado da aplicação e não somente o backend
                    state.usuarios.push(action.payload.usuario);
                }
                else{
                    state.estado = ESTADO.ERRO;
                    state.mensagem = action.payload.mensagem;
                }
            })
            .addCase(incluirUsuario.rejected, (state, action) => {
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
            })
    }
});

export default usuarioSlice.reducer;