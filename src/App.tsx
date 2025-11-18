import './App.css'
import {UsersComponent} from "./components/UsersComponent.tsx";

function App() {
  console.log('App');
    return (
    <div>
        {/*викликаємо UsersComponent*/}
        <UsersComponent/>
    </div>
  )
}

export default App
