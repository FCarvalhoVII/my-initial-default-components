import styled from 'styled-components'

import { IFullScreen, IContainer, IClose } from './index'

export const FullScreen = styled.div<IFullScreen>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.7);
    display: ${props => props.open ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    z-index: 100;

    animation: fadeModal 380ms ease-in-out 1;

    @keyframes fadeIn {
        from {
            background-color: rgba(0, 0, 0, 0);
        }

        to {
            background-color: rgba(0, 0, 0, 0.7);
        }
    }
`;

export const Container = styled.div<IContainer>`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;

    background-color: ${props => props.backgroundColor};
    border-radius: ${props => props.borderRadius};

    animation: slideIn 350ms cubic-bezier(0.42, 0, 0.21, 1) 1;

    @keyframes slideIn {
        from {
            transform: translateY(-120px);
            opacity: 0;
        }

        25% {
            opacity: 0;
        }

        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    color: ${props => props.color};

    h2 {
        color: ${props => props.colorTitle};
        margin-bottom: 28px;
    }
`;

export const Close = styled.button<IClose>`
    cursor: pointer;
    align-items: flex-end;

    margin-bottom: 24px;

    color: ${props => props.closeColor};

    background: transparent;

    border: 0;

    font-size: 16px;

    &:hover {
        opacity: 0.6;
    }
`;