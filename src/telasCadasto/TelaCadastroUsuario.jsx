import Pagina from "../templates/Pagina";
import FormCadUsuario from "../formularios/FormCadUsuario";
import { useState } from "react";
import { Container } from "react-bootstrap";
import TabelaUsuario from "../tabelas/TabelaUsuario";

export default function TelaCadastroUsuario(){
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [usuario, setUsuario] = useState({
        id:'0',
        nickname:'',
        urlAvatar:'',
        dataIngresso:''
    });

    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario?
                    <FormCadUsuario exibirFormulario={setExibirFormulario}
                                    setExibirFormulario={setExibirFormulario}
                                    usuario={usuario}
                                    setUsuario={setUsuario}/> 
                    :
                    <TabelaUsuario exibirFormulario={setExibirFormulario}
                                   setExibirFormulario={setExibirFormulario}
                                   usuario={usuario}
                                   setUsuario={setUsuario}/> 
                }
            </Pagina>
        </Container>
    )
}