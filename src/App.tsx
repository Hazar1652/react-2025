import './App.css'

export interface ICourse {
  title: string;
  monthDuration: number;
  hourDuration: number;
  modules: string[];
}

const coursesArray: ICourse[] = [
  {
    title: 'JavaScript Complex',
    monthDuration: 5,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
  },
  {
    title: 'Java Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'git',
      'java core',
      'java advanced']
  },
  {
    title: 'Python Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'python core',
      'python advanced']
  },
  {
    title: 'QA Complex',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
  },
  {
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'react',
      'angular',
      'aws',
      'docker',
      'git',
      'node.js',
      'python',
      'java']
  },
  {
    title: 'Frontend',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
  }
];
function App() {
  return (
      <div>
        {coursesArray.map((course, index) => (
            <div key={index} className='my-10 p-4 border rounded-lg'>
              <h2 className='text-2xl'>{course.title}</h2>
              <p><b>Month duration:</b> {course.monthDuration}</p>
              <p><b>Hour duration:</b> {course.hourDuration}</p>
              <p><b>Modules:</b></p>
              <ul className="flex gap-5">
                {course.modules.map((module, i) => (
                    <li key={i}>{module}</li>
                ))}
              </ul>
            </div>
        ))}
      </div>
  )
}


export default App
