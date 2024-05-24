import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createStore} from 'redux'
import { Provider } from 'react-redux'

const defaultState = [
  {
    id: 1,
    title: 'Задача 1',
    description: 'Собрать JSX компонент задача, который будет отображать задачу',
    data: '24.05.2024',
    pathFile: '',
    isActive: true
  },
  {
    id: 2,
    title: 'Задача 2',
    description: 'Lorem item',
    data: '24.05.2024',
    pathFile: '',
    isActive: false
  },
  {
    id: 3,
    title: 'Задача 3',
    description: 'Собрать JSX компонент задача, который будет отображать задачу',
    data: '24.05.2024',
    pathFile: '',
    isActive: false
  },
  {
    id: 4,
    title: 'Задача 4',
    description: 'Lorem item',
    data: '24.05.2024',
    pathFile: '',
    isActive: false
  },
  {
    id: 5,
    title: 'Задача 5',
    description: 'Собрать JSX компонент задача, который будет отображать задачу',
    data: '24.05.2024',
    pathFile: '',
    isActive: false
  },
  {
    id: 6,
    title: 'Задача 6',
    description: 'Lorem item',
    data: '24.05.2024',
    pathFile: '',
    isActive: false
  },
  {
    id: 7,
    title: 'Задача 7',
    description: 'Lorem item',
    data: '24.05.2024',
    pathFile: '',
    isActive: false
  },
  {
    id: 8,
    title: 'Задача 8',
    description: 'Собрать JSX компонент задача, который будет отображать задачу',
    data: '24.05.2024',
    pathFile: '',
    isActive: false
  },
  {
    id: 9,
    title: 'Задача 9',
    description: 'Lorem item',
    data: '24.05.2024',
    pathFile: '',
    isActive: false
  },
  {
    id: 10,
    title: 'Сделать компонетр "Задача"',
    description: 'Собрать JSX компонент задача, который будет отображать задачу',
    data: '24.05.2024',
    pathFile: '',
    isActive: true
  },
  {
    id: 11,
    title: 'Собрать То-до лист',
    description: 'Lorem item',
    data: '24.05.2024',
    pathFile: '',
    isActive: true
  },
  {
    id: 12,
    title: 'Сделать компонетр "Задача"',
    description: 'Собрать JSX компонент задача, который будет отображать задачу',
    data: '24.05.2024',
    pathFile: '',
    isActive: true
  },
  {
    id: 13,
    title: 'Собрать То-до лист',
    description: 'Lorem item',
    data: '24.05.2024',
    pathFile: '',
    isActive: true
  },
  {
    id: 14,
    title: 'Сделать компонетр "Задача"',
    description: 'Собрать JSX компонент задача, который будет отображать задачу',
    data: '24.05.2024',
    pathFile: '',
    isActive: true
  }
]

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return [...state, 
        {
          id: state.id + 1,
          title: state.title,
          description: state.description,
          data: state.data,
          pathFile: state.pathFile,
          isActive: state.isActive,
        },
      ]
    case 'CHANGE_TASK':
      return [...state, 
        {
          id: state.id + 1,
          title: state.title,
          description: state.description,
          data: state.data,
          pathFile: state.pathFile,
          isActive: state.isActive,
        }
      ]
    case 'DELITE_TASK':
      return state.filter((task) => task.id !== action.id)
    case 'RESTATUS_TASK':
      return [...state, 
        {
          id: state.id + 1,
          title: state.title,
          description: state.description,
          data: state.data,
          pathFile: state.pathFile,
          isActive: state.isActive,
        }
      ]
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
