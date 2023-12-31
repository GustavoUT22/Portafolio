import ProfilePresentacion from "./pages/ProfilePresentacion/profile-presentacion";
import Container from "./utils/container/Container";
import About from "./pages/AboutMe/About";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import ContactMe from "./pages/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styled from "styled-components";

const PageWrapper = styled.div`
  height: 100vh;
`

function App() {
  return (
    <PageWrapper>
      <Header/>
      <Container size="xl">
        <ProfilePresentacion/>
        <About/>
        <Projects/>
        <Skills/>
        <ContactMe/>
      </Container>
      <Footer/>
    </PageWrapper>
  );
}

export default App;
