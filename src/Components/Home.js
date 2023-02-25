import React from 'react'
import { Link } from 'react-router-dom'
import home from './home.jpg'

function Home(){
    return<>
    <div className='home'>
        <section className='home-section'>
            <img src={home} alt="home" width="50%" height="50%" />
        </section>
        <section className='home-section'>
            <h1>10x Team 04</h1>
            
            <Link to="/post-view"><button>Enter</button></Link>
            
        </section>
    </div>
    </>
}
export default Home