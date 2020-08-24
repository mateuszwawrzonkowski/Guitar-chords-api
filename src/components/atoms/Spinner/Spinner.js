import styled from 'styled-components';
import { rotate360 } from 'theme/keyframes';

const Spinner = styled.div`
animation: ${rotate360} 1s linear infinite;
transform: translateZ(0);
border-top: 2px solid gray;
border-right: 2px solid gray;
border-bottom: 2px solid gray;
border-left: 4px solid ${({ theme }) => theme.header};
background: transparent;
width: 32px;
height: 32px;
border-radius: 50%;
`;

export default Spinner;
