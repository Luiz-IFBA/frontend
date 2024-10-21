import React, { useState } from "react";
import { StyledAlunoComponent, StyledButton, StyledDiv } from "./styles";
import { Aluno, SetCount } from "../../vite-env";

const AlunoComponent: React.FC<{item: Aluno, setCountFather: SetCount}> = ({item, setCountFather}) => {
    const [count, setCount] = useState<number>(0);

    const {nome, cpf} = item;

    const sumCount = ( setState :  SetCount ) => {
        setState(previous => previous + 1);
    };

    const isDisabled: boolean = count >=5 ? true : false;

    return (
        <StyledAlunoComponent>
            {isDisabled 
                ? 
                <p>desabilitado</p> 
                : 
                <p>habilitado</p>
            }
            <StyledDiv>      
                <p>{nome} {cpf}</p>

                <StyledButton 
                    count={count} 
                    disabled={isDisabled} 
                    onClick={() => sumCount(setCount)}
                >
                    filho count is {count}
                </StyledButton>

                <button onClick={() => setCount(0)}>zerar filho</button>
            </StyledDiv>

            <button onClick={() => sumCount(setCountFather)}>aumentar pai</button>
        </StyledAlunoComponent>
    );
};

export default AlunoComponent;