import styled from "styled-components";

export const Wrapper = styled.div`
 padding: 0 120px;
@media (max-width: 500px){
padding: 0 10px;
}
`;

export const Content = styled.div`
  max-width: 1000px;
  display: flex;
  margin: 10px auto;
  /* background: var(--white); */
  padding: 12px 12px 12px 16px;
  border-radius: 9px;
  &:hover{
   border: 1px solid var(--lightGrey);
   animation: fadeIn 2s;
  }
  @keyframes fadeIn {
    from{
      width: 80%;
        opacity: 0;
    }
    to{
      width: 100%;
        opacity: 1;
    }
}
`;

export const SearchIcon = styled.img`
  width: auto;
  margin: 0 9px;
`;

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  background: none;
  font-weight: 100;
  color: var(--lightGrey);
  animation: fadeInput 3s;
  font-size: 1em;
  &:focus{
    outline: none;
  }

 @keyframes fadeInput {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

`;