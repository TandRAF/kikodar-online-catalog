import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Book.css'
import './App.css'
import Book from './Book.jsx'
import Header from './layout/Header/Header.jsx'

function App() {
  return (
    <>
    <Header/>
     <div className='book-container'>
    <Book />
    </div>
    </>
  )
}

export default App
