import React, { useState } from "react";
import { Aluno } from "../../vite-env";
import { StyledAlunoForm } from "./styles";
import axios from "axios";

const AlunoForm: React.FC = () => {

    type AlunoInput = Omit<Aluno, "id">;

    const defaultAlunoInput: AlunoInput = {
        cpf: '',
        nome: '',
        telefone: '',
        nascimento: '',
        enderecoResidencia: '',
        enderecoEscola: '',
        turnoEstudo: '',
        email: '',
        codigoTurma: ''
    }

    const [alunoInput, setAlunoInput] = useState<AlunoInput>(defaultAlunoInput);

    const changeAlunoInput = ({key, value}: {key: keyof AlunoInput, value: string}) => {
        setAlunoInput(previous => ({...previous, [key]: value}))
    };

    const createAluno = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post<Aluno>('http://localhost:3000/aluno', alunoInput);
            console.log(response);
            setAlunoInput(defaultAlunoInput);
        } catch(err: unknown) {
            console.log(err);
        }
    };

    return (
        <StyledAlunoForm onSubmit={e => createAluno(e)}>
            <input 
                onChange={({target: {value}}) => changeAlunoInput({key: "nome", value})} 
                value={alunoInput.nome} 
                placeholder='digite seu nome'
            />

            <button type="submit">criar</button>
        </StyledAlunoForm>
    )
};

export default AlunoForm;