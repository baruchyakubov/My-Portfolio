import "./assets/styles/main.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./cmps/Header";
import { About } from "./cmps/About";
import { Hero } from "./cmps/Hero";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
    </>
  )
}
export default App
