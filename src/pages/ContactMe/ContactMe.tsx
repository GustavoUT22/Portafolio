import styled from "styled-components";

const ContainerContactMe = styled.section`
  height: auto;
  background-color: #272727;
  width: 100%;
  color: #c6fff9;
  border: 1px solid #086467;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 20px;
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