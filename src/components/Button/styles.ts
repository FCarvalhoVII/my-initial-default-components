import styled from 'styled-components'
import { lighten, darken } from 'polished'

import { Props } from './index'

export const Container = styled.button<Props>`
    background-color: ${props => props.outlined ? 'transparent' : props.backgroundColor};
    color: ${props => props.outlined ? '#007fff' : props.color};

    padding: 18px 45px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.07em;

    border-radius: ${props => props.borderRadius || '50px'};
    border: ${props => props.outlined ? `2px solid ${props.backgroundColor}` : 'none'};

    cursor: pointer;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25);
        border-color: transparent;
        color: #fff;
        background-color: ${props => 
            props.outlined 
                ? props.backgroundColor 
                : lighten(0.03, props.backgroundColor as string)};
    }

    &:active:not(:disabled) {
        box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25);
        background-color: ${props => darken(0.03 ,props.backgroundColor as string)};
    }
`;