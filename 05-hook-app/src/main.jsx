import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemorizeHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './08-useReducer/intro-reducer';
// import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'


import './index.css'

const router = createBrowserRouter([
  {
    path: "*",
    element: <MainApp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)

{/* <HooksApp /> */}
{/* <CounterApp /> */}
{/* <CounterWithCustomHook /> */}
{/* <SimpleForm /> */}
{/* <FormWithCustomHook />  */}
{/* <MultipleCustomHook /> */}
{/* <FocusScreen /> */}
{/* <Layout /> */}
{/* <Memorize /> */}
{/* <MemoHook /> */}
{/* <CallbackHook /> */}
{/* <Padre /> */}
{/* <TodoApp /> */}
{/* <MainApp /> */}