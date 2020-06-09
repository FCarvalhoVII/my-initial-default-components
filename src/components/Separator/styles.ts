import styled from 'styled-components'

import { Props } from './index'

export const Hr = styled.hr`
    width: 100%;
    height: 2px;
    margin: 0;
    border: none;
    background: linear-gradient(to right, ${(props: Props) => props.color});
`;