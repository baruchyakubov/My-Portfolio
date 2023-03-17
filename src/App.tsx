import "./assets/styles/main.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./cmps/Header";
import { About } from "./cmps/About";
import { Hero } from "./cmps/Hero";
import { ProjectList } from "./cmps/ProjectList";
import { Skills } from "./cmps/Skills";
import { ContactMe } from "./cmps/ContactMe";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <ProjectList></ProjectList>
      <Skills></Skills>
      <ContactMe></ContactMe>
    </>
  )
}
export default App
