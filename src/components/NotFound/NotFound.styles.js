import styled from "styled-components";

export const Wrapper = styled.div`
 padding: 0 120px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;

  h3{
    color: var(--white);
    font-size: var(--fontMedium2);
    @media (max-width: 500px){
      font-size: var(--fontRegular);
    }
  }

  p{
    color: var(--lightGrey);
  }
`;