import tasks from "../tasks.js"

function App() {

  // prepraro array in progress e backlog


  // preparo array completed 

  return (
    <>
      <header className="main-header">
        <div className="container">
          <h1>Task Manager</h1>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <h2 className="task-title"></h2>
          </div>
          <div className="container">
            <ul className="task-list">
              <li>task</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
