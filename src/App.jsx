import './App.css'
import Login from './pages/Login'

function App() {

  return (
    <div className="app">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="form-signin w-100 m-auto">
      <Login/>
    </main>
  </div>
  )
}

export default App
