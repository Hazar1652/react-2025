import type { ICourse } from "../../models/ICourse";

type Props = {
    item: ICourse;
};

const CourseComponent = ({ item }: Props) => {
    return (
        <div className="my-6 p-4 border rounded-lg">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p><b>Month duration:</b> {item.monthDuration}</p>
            <p><b>Hour duration:</b> {item.hourDuration}</p>
            <p><b>Modules:</b></p>
            <ul className="flex gap-3 flex-wrap">
                {item.modules.map((m, i) => (
                    <li key={i} className="px-2 py-1 border rounded">{m}</li>
                ))}
            </ul>
        </div>
    );
};

export default CourseComponent;
