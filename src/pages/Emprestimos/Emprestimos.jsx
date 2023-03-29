import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getEmprestimos } from "../../firebase/emprestimos";

export function Emprestimos() {

    const [emprestimos, setEmprestimos] = useState([])

    useEffect(()=>{
        inicializarTabela();
    },[])

    function inicializarTabela() {
        getEmprestimos().then(result =>{
            setEmprestimos(result)
            console.log(result)
        })
    }

    return (
        <div className="emprestimos">
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Emprestimos</h1>
                    <Button as={Link} to="/emprestimos/adicionar" variant="success">Adicionar emprestimo</Button>
                </div>
                <hr />  
                <Table>
                    <thead>
                        <tr>
                            <th>Leitor</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Livro</th>
                            <th>Data</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emprestimos.map(emprestimo =>{
                            return(
                                <tr key={emprestimo.id}>
                                    <td>{emprestimo.leitor}</td>
                                    <td>{emprestimo.email}</td>
                                    <td>{emprestimo.telefone}</td>
                                    <td>{emprestimo.livro.titulo}</td>
                                    <td>{emprestimo.dataEmprestimo.toDate().toLocaleDateString('pt-br')}</td>
                                    <td>{emprestimo.status}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            
            </Container>
        </div>
    )
}
