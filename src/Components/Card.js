
import heart from './heart.png'
import rocket from './rocket.png'
function Card({post}){

    
    return(
        <>
           <div className='card-container'>
            <nav>
                <div className='user-name'>
                    <h5>{post.author}</h5>
                    <p>{post.city}</p>
                </div>
                <h4 className='dots'>...</h4>
            </nav>
            <img src={`https://insta-back-xcxk.onrender.com/posts/${post.imagePath}`} alt="Shiv" width="300px" height="150px" />
            <div className='heart-box'>
                <img src={heart} alt="heart"  width="20px" height="17px"/>
                <img src={rocket} alt="rocket" width="20px" height="17px" />
                <p>{post.date}</p>
            </div>
            <p className='likes'> likes</p>
            <h5 className='tag'>{post.description}</h5>
            <p className='likes'>{(post.createdAt)}</p>
        </div>
        
        </>
    )
}

export default Card