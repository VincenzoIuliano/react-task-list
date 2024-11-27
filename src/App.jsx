import tasks from "../tasks.js"

function App() {

  // prepraro array in progress e backlog
  const progressTasks = tasks.filter((task) => task.state === 'backlog' || task.state === 'in_progress')

  // preparo array completed 
  const completedTasks = tasks.filter((task) => task.state === 'completed')


  return (
    <>
      <header className="main-header">
        <div className="container">
          <h1>Task Manager</h1>
        </div>
      </header>
      <main>
        <section className="tasks-section">
          <div className="container">
            <h2 className="task-title">Current Tasks ({progressTasks.length})</h2>
          </div>
          <div className="container">
            <ul className="tasks-list">
              {progressTasks.map((task) => {

                const { id , title, priority, estimatedTime, state} = task

                return <li key={id} className="task-item">
                  <div className="task-item_head">
                    <span className="task-title">{title}</span>
                    <span className="task-state">{state}</span>
                  </div>
                  <div>
                    Priority : {priority}
                  </div>
                  <div>
                    Estimated time: {estimatedTime}
                  </div>
                </li>
              })}
            </ul>
          </div>
        </section>
        <section className="tasks-section">
          <div className="container">
            <h2 className="task-title">Current Tasks ({completedTasks.length})</h2>
          </div>
          <div className="container">
            <ul className="tasks-list">
              {completedTasks.map((task) => {

                const { id , title, priority, estimatedTime, state} = task

                return <li key={id} className="task-item">
                  <div className="task-item_head">
                    <span className="task-title">{title}</span>
                    <span className="task-state">{state}</span>
                  </div>
                  <div>
                    Priority : {priority}
                  </div>
                  <div>
                    Estimated time: {estimatedTime}
                  </div>
                </li>
              })}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
