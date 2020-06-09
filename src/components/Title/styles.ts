import styled from 'styled-components'

import { Props } from './index'

export const H1 = styled.h1<Props>`
    font-size: ${props => props.fontSize};

    background: -webkit-linear-gradient(${props => props.color});
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;