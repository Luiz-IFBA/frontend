import styled from "styled-components";

export const StyledAlunoComponent = styled.li`
    border: 1px solid white;
    background-color: gray;
`;

export const StyledDiv = styled.div<{count?: number}>`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 10px;
`;

export const StyledButton = styled.button<{count?: number}>`
    background-color: ${({count}) => (count && count > 3) ? 'orange' : 'green'} ;
        &:disabled{
        cursor: not-allowed;
        background-color: red;
        color: white;
    }
`