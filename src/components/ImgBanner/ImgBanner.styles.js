import styled from "styled-components";
export const Wrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
border-radius: 40px;
/* background: rgb(46,196,182); */
background: linear-gradient(90deg, rgba(46,196,182,0.6489189425770308) 0%, rgba(255,159,28,1) 35%, rgba(255,64,64,0.6489189425770308) 100%), url(${({image}) => image});
background-size: 100%, cover;
background-position: top;
object-fit: cover;
height: 400px;
position: relative;
animation: fadeImage 2s;
@media (max-width: 720px){
      height: 250px;
      border-radius: 10px;
}


@keyframes fadeImage {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
`;
export const Content = styled.div`
padding: 15px;
position: absolute;
`;

export const Info = styled.div`
max-width: 500px;
margin-left: 20px;
position: relative;
top: 130px;

@media (max-width: 480px){
      top: 50px;
    }

h1{
    font-size: var(--fontMedium2);
  
    @media (max-width: 720px){
        font-size: var(--fontMedium2);
    }
}

button {
    padding: 12px 12px 12px 16px;
    background: none;
    border: 2px solid var(--dark);
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background: var(--red);
        border: none;
    }
}
`;

