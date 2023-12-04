import React from "react";
import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";

export default function TelaMensagem(props) {
    const [exibirFormulario, setExibirFormulario] = React.useState(false);
    const [mensagemParaEdicao, setMensagemParaEdicao] = React.useState({
        id: '',
        dataHora: '',
        lida: false,
        mensagem: '',
        usuario: ''
    });
    const [modoEdicao, setModoEdicao] = React.useState(false);
}