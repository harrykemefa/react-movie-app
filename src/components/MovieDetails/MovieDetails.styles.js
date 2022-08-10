import styled from "styled-components";

export const Wrapper = styled.div`
 max-width: var(--maxWidth);
 margin: 0 auto;
 padding: 0 15px;
`;

export const Content = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
grid-gap: 1.6rem;
margin: 0 auto;
@media (max-width: 500px){
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr))
}
/* max-width: 1000px; */
h1{
     font-size: var(--fontLarge2);
     color: var(--white);
     @media (max-width: 500px){
   font-size: 2em;
}
 }
 span{
    display: block;
    font-size: 1em;
     color: var(--lightGrey);
     font-weight: bold;
 }

 p{
     font-size: var(--fontSmall);
     line-height: 1.5em;
     color: var(--white);
     margin: 5px;
 }
`;

export const Left = styled.div`
flex: 2;
 
`;

export const Right = styled.div`
flex: 1;

img{
    border-radius: 15px;
    width: 100%;
    height: 80vh;
    object-fit: contain;
}
 
`;

export const LabelContainer = styled.div`
display: flex;
justify-content: flex-start;
`;

export const Label = styled.div`
border: 1px solid var(--lightGrey);
display: flex;
padding: 8px 8px;
border-radius: 5px;
/* width: auto; */
align-items: center;
justify-content: space-evenly;
margin-bottom: 25px;
margin-left: 16px;
cursor: pointer;
&:hover{
     border: none;
    }

div{
    background-color: var(--yellow);
}



span{
    color: var(--lightGrey);
    font-size: 1em;
    margin-left: 6px;
}

`;

export const Label2 = styled.div`
display: flex;
padding: 8px 8px;
border-radius: 5px;
/* width: auto; */
align-items: center;
justify-content: space-evenly;
margin-bottom: 25px;
margin-left: 16px;
cursor: pointer;
background-color: var(--red);
color: var(--white);
span{
    color: var(--white);
    font-size: 1em;
    margin-left: 6px;
}

`;

export const RLabel = styled.ul`
color: darkgrey;
list-style: none;
display: flex;
li{
margin-left: 10px;
font-size: var(--fontRegular);
    span{
        background-color: var(--lightGrey);
        padding: 4px 6px;
        border-radius: 4px;
        color: var(--dark);
        margin-top: -6px;
    }
}

`;

export const InfoContainer = styled.div`
display: flex;
`;

export const Info = styled.div`
 flex: 1;

 ul{
    list-style: none;
    color: var(--white);

    li{
        margin: 10px 0;
    }
 }
 @media (max-width: 500px){
   display: none;
}
`;