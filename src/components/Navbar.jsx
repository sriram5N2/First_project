import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='logo'>
        <img src='src\assets\logo.png' alt='logo' style={{height:'70px',
            width:'100px',
            margin:'10px'
        }}/>
      </div>
      <div className='list'>
        <ul style={{display:'flex',
                alignItems:'end',
                justifyContent:'space-evenly'
                
        }}>
            <li>Home</li>
            <li>Exercises</li>
            <li> About</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
