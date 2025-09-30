import { coursesArray } from "../data/courses";
import CourseComponent from "./course-component/CourseComponent";

const CoursesComponent = () => {
    return (
        <div>
            {coursesArray.map((course, i) => (
                <CourseComponent key={i} item={course} />
            ))}
        </div>
    );
};

export default CoursesComponent;
