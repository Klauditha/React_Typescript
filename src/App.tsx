import React, { Fragment, useState } from 'react';
type FormElement = React.FormEvent<HTMLFormElement>;

interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);

    setNewTask('')
    console.log(tasks)
  }

  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  }
  return (
    <Fragment>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setNewTask(e.target.value)} value={newTask} />
            <button>Save</button>
          </form>
          {
        tasks.map((t: ITask, i: number) => {
          return <h1 key={i}>{t.name}</h1>
        })
      }
        </div>
      </div>

    </Fragment>
  );
} 

export default App;
