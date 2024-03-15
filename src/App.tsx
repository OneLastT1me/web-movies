import { Routes, Route, Outlet } from 'react-router-dom'
import  PopularMovies  from './pages/popular'
import Header from './components/header';
import './Constants/axiosBase'
import './App.css';
import Main from './pages/Main';
import Home from './pages/Home';

const Layout = () => (
  <>
    <Header />
    <Main />
  </>
)

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home />}/>
          <Route path='/Popular' element={<PopularMovies />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
