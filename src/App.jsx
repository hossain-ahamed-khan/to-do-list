import './App.css'
import TodoCard from './components/TodoCard'

function App() {

  return (
    <>
      <div className='bg-gray-300 w-72 h-screen font-semibold'>
        <div className='flex justify-between p-4'>
          <h1>Incomplete</h1>
          <p className='bg-gray-400 px-2 rounded-md'>0</p>
        </div>

        <div>
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </>
  )
}

export default App
