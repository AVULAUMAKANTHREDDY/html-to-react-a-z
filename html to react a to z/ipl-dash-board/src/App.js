import {Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

const App = () => (
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/team-matches/:id" element={<TeamMatches/>} />
    <Route path="/Undefined-path" element={<NotFound/>} />
  </Routes>
)
export default App
