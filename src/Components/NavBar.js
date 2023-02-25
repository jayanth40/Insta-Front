

import { Link } from 'react-router-dom'
import camera from './camera.png'
import clone from './cloneLogo.png'
function NavBar(){
    return <>
    <nav >
    <img src={clone} alt="clone" className='clone' />
        <p className="insta">Instaclone</p>
        <Link to="/new-post" className='post'><img src={camera}  alt='camera' className="camera" />
        </Link>
       
             
       
    </nav>
    </>
}
export default NavBar