import { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useSelector, useDispatch} from 'react-redux';
import { incluirUsuario } from '../redux/usuarioReducer';

export default function FormCadUsuario(props) {
    const usuarioVazio = {
        id:'0',
        nickname:'',
        urlAvatar:'',
        dataIngresso:''
    }
    const estadoInicialUsuario = props.usuario;
    const [usuario, setUsuario] = useState(estadoInicialUsuario);
    const [formValidado, setFormValidado] = useState(false);
    const {status,mensagem,listaUsuarios} = useSelector((state)=>state.usuario);
    const dispatch = useDispatch();
    
    function manipularSubmissao(e){
        const form = e.currentTarget; 
        if (form.checkValidity()){
            dispatch(adicionar(usuario));
            setUsuario(usuarioVazio);
            setFormValidado(false);
        }
        else
        {
            setFormValidado(true);
        }
        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Container>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="id:"
                                className="mb-3"
                            >

                                <Form.Control 
                                    type="text" 
                                    placeholder="0" 
                                    id="id" 
                                    name="id" 
                                    value={usuario.id}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o id!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Nickname:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Informe o nickname" 
                                    id="nickname" 
                                    name="nickname" 
                                    value={usuario.nickname}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nickname!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <Form.Group>
                            <FloatingLabel
                                label="Avatar:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="url do avatar" 
                                    id="urlAvatar" 
                                    name="urlAvatar" 
                                    value={usuario.urlAvatar}
                                    required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a url do avatar</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="Data Ingressada:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="date" 
                                    placeholder="" 
                                    id="dataIngresso"
                                    name="dataIngresso" 
                                    value={usuario.dataIngresso}
                                    required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a data ingressada!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"primary"}>{"Cadastrar"}</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={() => {
                                props.exibirFormulario(false)
                            }
                        }>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}