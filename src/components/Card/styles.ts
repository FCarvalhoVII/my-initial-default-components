import styled from 'styled-components'

import { Props } from './index'

export const Container = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 20px;
    border-radius: ${props => props.borderRadius || '10px'};
    box-shadow: 1px 5px 5px 1px rgba(0, 0, 0, 0.77);

    background-color: ${props => props.backgroundColor || '#2f2e35'};
    color: ${props => props.color || '#ddd'};

    h2 {
        color: ${props => props.color || '#ddd'};
        margin-bottom: 10px; 
    }
`;