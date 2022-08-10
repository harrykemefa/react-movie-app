import styled from "styled-components";

export const Overlay = styled.div`
display: none;
position: absolute;
background: var(--dark);
opacity: 0.8;
width: 200px;
height: 300px;

h3{
    position: relative;
    top: 50%;
    color: var(--white);
    font-size: var(--fontRegular);
    margin-left: 4px;
    @media (max-width: 500px){
        top: 50%;
        font-size: var(--fontRegular)
    }
}
img{
    position: relative;
    left: 80%;
    margin-top: 20px;
}
`;

export const ImgWrapper = styled.div`
max-width: 200px;
width: 100%;
transition: all 0.3s;
border-radius: 5px;
animation: fadeIn 3s;
cursor: pointer;
&:hover ${Overlay} {
    display: block;
  }

@keyframes fadeIn {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
  
`;

export const Img = styled.img`
border-radius: 5px;
width: inherit;
object-fit: cover;
`;


