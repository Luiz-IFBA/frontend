import React from "react";

export type Aluno = {
    id: string;
    cpf: string;
    nome: string;
    telefone: string;
    nascimento: string;
    enderecoResidencia: string;
    enderecoEscola: string;
    turnoEstudo: string;
    email: string;
    codigoTurma: string;
};

export type SetCount = React.Dispatch<React.SetStateAction<number>>;