import styled from "styled-components";

export const Wrapper = styled.div`
 padding: 0 120px;
`;

export const Content = styled.div`
 display: flex;
 max-width: var(--maxWidth);
 padding: 20px 0;
 margin: 0 auto;
`;

export const LogoImg = styled.img`
width: 115px;

@media (max-width: 500px){
    width: 100px;
}
`; 