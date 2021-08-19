import styled from "styled-components";

const Button = styled.button`
   width: 50px;
   height: 50px;
   margin: -1px;
   background: #fff;
   border: 1px solid rgba(119,136,153,1);

   &:hover { 
      background: rgba(119,136,153, .1);
   }
`;

export default Button;