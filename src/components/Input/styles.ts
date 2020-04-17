import styled from 'styled-components'

import { ILabel } from './index'

export const Label = styled.label<ILabel>`
    display: flex;
    position: relative;
    margin-bottom: 2rem;

    > input {
        background-color: #1c1b20;
        border: 2px solid #39383d;
        border-radius: 5px;

        padding: 16px;
        padding-left: ${props => props.icon ? '40px' : '16px'};

        color: #fff;
        font-size: 16px;

        transition: 180ms ease-in-out;

        &::placeholder {
            color: rgba(255, 255, 255, 0.2);
        }

        ~ svg {
            fill: rgba(255, 255, 255, 0.2);
            position: absolute;
            left: 12px;
            top: 16px;
            width: 24px;
            height: 24px;
            transition: 180ms ease-in-out;
        }

        &:focus {
            border: 2px solid ${props => props.color};

            ~ svg {
                fill: ${props => props.color};
            }
        }
    }
`;