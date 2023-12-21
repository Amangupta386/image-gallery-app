import CustomRoutes from './routes/customRoutes'
import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="hello">
       {/* <Link to="/">Hello</Link> */}
       <CustomRoutes />
    </div>
  )
}

export default App
