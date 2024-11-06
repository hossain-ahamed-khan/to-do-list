import TodoCard from './components/TodoCard'

function App() {

  return (
    <div className='flex gap-4 w-[2000px] overflow-x-scroll'>

      <div className='overflow-y-scroll bg-gray-300 w-80 font-semibold h-screen scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-slate-300'>
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

      <div className='overflow-y-scroll bg-gray-300 w-80 font-semibold h-screen scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-slate-300'>
        <div className='flex justify-between p-4'>
          <h1>To Do</h1>
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

      <div className='overflow-y-scroll bg-gray-300 w-80 font-semibold h-screen scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-slate-300'>
        <div className='flex justify-between p-4'>
          <h1>Doing</h1>
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

      <div className='overflow-y-scroll bg-gray-300 w-80 font-semibold h-screen scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-slate-300'>
        <div className='flex justify-between p-4'>
          <h1>Under Review</h1>
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

      <div className='overflow-y-scroll bg-gray-300 w-80 font-semibold h-screen scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-slate-300'>
        <div className='flex justify-between p-4'>
          <h1>Completed</h1>
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

      <div className='overflow-y-scroll bg-gray-300 w-80 font-semibold h-screen scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-slate-300'>
        <div className='flex justify-between p-4'>
          <h1>Overdue</h1>
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

    </div>
  )
}

export default App
