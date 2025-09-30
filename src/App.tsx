import './App.css'
import { coursesArray } from "./data/courses";
import Course from "./components/Course";

function App() {
  return (
      <div>
        {coursesArray.map((course, index) => (
            <Course key={index} course={course} />
        ))}
      </div>
  )
}

export default App;
