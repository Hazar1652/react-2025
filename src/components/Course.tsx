import type { ICourse } from "../data/courses";

interface CourseProps {
    course: ICourse;
}

const Course = ({ course }: CourseProps) => {
    return (
        <div className="my-10 p-4 border rounded-lg">
            <h2 className="text-2xl">{course.title}</h2>
            <p><b>Month duration:</b> {course.monthDuration}</p>
            <p><b>Hour duration:</b> {course.hourDuration}</p>
            <p><b>Modules:</b></p>
            <ul className="flex gap-5 flex-wrap">
                {course.modules.map((module, i) => (
                    <li key={i} className="px-2 py-1 border rounded-md">
                        {module}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Course;
