
import styled from "styled-components";

// export const MainContainerV = styled.div`
//   height: 100vh;
//   display:flex-start;
 
//   button {
//     width:250px;
//     height: 50px;
//     margin-top: 10px;
//     background-color: white;
//   }
  
//   img {
//     width:250px;
//     height: 250px;
//   }
  
//   input[type=text] , input[type=password] {
//     width:250px;
//     height: 30px;
//     margin-bottom: 10px;
//   }
// `;

export const VerificationWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 600px) and (min-width: 320px) {
    margin-top: -670px;
    justify-content: center;
    img{
    z-index: 999;
  }
  }
  
`;

export const  MainContainerV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0px 5px 15px #888888;
  border-radius: 40px;
  width:350px;
  min-height: 500px;
  .link{
    text-decoration: none;
  }
  .linkbutton{
    color: white;
  }
  h4{
   color: #6d82e5;
 }


  @media only screen and (max-width: 600px) and (min-width: 320px) {
    z-index: 999;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  input{
    width:250px;
    height: 40px;
    margin-bottom: 1rem;
    border: solid 1px lightgray;
    padding-left: 1.25rem;
    border-radius: 10px;
  }

`;