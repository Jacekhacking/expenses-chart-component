import styled from "styled-components";

const FooterDiv = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <>
      <FooterDiv class="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="#https://www.frontendmentor.io/profile/Jacekhacking"
          rel="noreferrer"
          target="_blank"
        >
          Jacek Hacking
        </a>
        .
      </FooterDiv>
    </>
  );
};
export default Footer;
