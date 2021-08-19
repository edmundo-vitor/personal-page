import styled from 'styled-components';

const MenuLink = styled.a`
   text-decoration: none;
   color: black;
   font: 300 14px 'Inter';
   margin: 15px;
   cursor: pointer;
`;

export default function MenuItem( { children, href }) {
   return (
      <MenuLink href={href}>{children}</MenuLink>
   );
}