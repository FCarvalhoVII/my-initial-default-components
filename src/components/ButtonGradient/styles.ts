import styled from 'styled-components'
import { readableColor } from 'polished'

import { Props } from './index'

export const Button = styled.button<Props>`
    background: linear-gradient(to ${props => props.gradientColor});
    color: ${({ color }: Props) => readableColor(color as string, '#fff', '#090909')};
    box-shadow: 1px 2px 2px 1px ${props => props.shadowColor};

    padding: 5px 10px;
    font-weight: 600;
    letter-spacing: 0.02em;

    border-radius: ${props => props.borderRadius || '20px'};
    border: 1px;

    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(120%);
    }

    &:active {
        filter: brightness(90%);
    }
`;