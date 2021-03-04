import Header from 'components/Header'
import Main from 'router'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App overflow-hidden relative flex flex-col h-screen bg-gray-100">
        <Header />
        <Main />
      </div>
    </Router>
  )
}

export default App;
