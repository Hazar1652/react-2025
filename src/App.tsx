import './App.css'
import {Outlet} from "react-router";
import {Menu} from "./components/menu/Menu.tsx";


function App() {
  return (
    <>
        <Menu/>
        This is app comp
        <Outlet/>
    </>
  )
}

export default App
