import React from 'react'
import NotesCategoryListContainer from '../../components/NotesCategoryListContainer/NotesCategoryListContainer'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='gridThree'>
      <h1 className='appTitle'>Notes App</h1>
      <NotesCategoryListContainer className='dashboardGrid'/>
    </div>
  )
}

export default Dashboard