import styled from 'styled-components'

import { ILabel } from './index'

export const Label = styled.label<ILabel>`
    display: flex;
    position: relative;
    margin-bottom: 2rem;

    > input {
        background-color: ${props => props.backgroundColor};
        border: 2px solid #39383d;
        border-radius: ${props => props.borderRadius};

        padding: 16px;
        padding-left: ${props => props.icon ? '40px' : '16px'};

        color: ${props => props.color};
        font-size: 16px;

        transition: 180ms ease-in-out;

        &::placeholder {
            color: ${props => props.placeholderColor};
        }

        ~ svg {
            fill: ${props => props.placeholderColor};
            position: absolute;
            left: 12px;
            top: 16px;
            width: 24px;
            height: 24px;
            transition: 180ms ease-in-out;
        }

        &:focus {
            border: 2px solid ${props => props.inputColor};

            ~ svg {
                fill: ${props => props.inputColor};
            }
        }
    }
`;