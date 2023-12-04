import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function TabelaUsuario(props) {
    const {status,mensagem, listaUsuarios } = useSelector((state) => state.usuario);

    return (
        <Container>
            <Button type="button" onClick={() => {
                props.exibirFormulario(true);
            }}>Novo Usuario</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nickname</th>
                        <th>Avatar</th>
                        <th>Data de Ingresso</th>
                    </tr>
                </thead>
                <tbody>
                {
                    listaUsuarios?.map((usuario) => {
                        return(<tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nickname}</td>
                            <td>
                                <img src={usuario.urlAvatar} alt={`Avatar de ${usuario.nickname}`} />
                            </td>
                            <td>{new Date(usuario.dataIngresso).toLocaleDateString()}</td>
                        </tr>)
                    })
                }
                </tbody>
            </Table>
        </Container>
    );
}
