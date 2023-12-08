import styled from "styled-components";

const ContainerContactMe = styled.section`
  height: 40vh;
  background-color: blanchedalmond;
  width: 100%;
`;

const ContactMe = () => {
  return (
    <ContainerContactMe>
      <h2> Contact me</h2>
      <form>
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="text" />
        <label>Message</label>
        <input type="text" />
        <button>Send</button>
      </form>
    </ContainerContactMe>
  );
};

export default ContactMe