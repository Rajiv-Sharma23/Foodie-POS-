import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Auth, Home, Orders } from './pages'
import Header from './components/shared/Header.jsx'
import BottomNav from './components/shared/BottomNav.jsx'

const App = () => {
  return (
   <>
     <Router>
          <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/auth' element={<Auth/>}/>
        </Routes>
         <BottomNav />
     </Router>
   </>
  )
}

export default App