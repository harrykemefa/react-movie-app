import styled from "styled-components";

export const Loader = styled.div`
height: 50px;
width: 30px;
margin: 20px auto;

/**
  * Scan
  *
  * @author jh3y
  * Source https://whirl.netlify.app/
*/

@-webkit-keyframes side-to-side {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-150%);
            transform: translateX(-150%); }
  50% {
    opacity: 1; }
  100% {
    opacity: 0;
    -webkit-transform: translateX(150%);
            transform: translateX(150%); } }
@keyframes side-to-side {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-150%);
            transform: translateX(-150%); }
  50% {
    opacity: 1; }
  100% {
    opacity: 0;
    -webkit-transform: translateX(150%);
            transform: translateX(150%); } 
            }

    &:before {
               
  -webkit-animation: side-to-side .5s infinite alternate ease-in-out;
          animation: side-to-side .5s infinite alternate ease-in-out;
  background-color: var(--yellow);
  border-radius: 100%;
  content: '';
  height: 50px;
  width: 50px; 
  position: absolute;
}
            
`;