import React , { useState }from 'react'
import "./HomePage.css"
import Add from '../../Components/Add/Add'
import BlogCard from '../../Components/BlogCard/BlogCard'
import blogData from "../../BlogData"
import Sidebar from '../../Components/Sidebar/Sidebar'


const HomePage = () => {

  
  const [visiblePosts, setVisiblePosts] = useState(9);

  const showMorePosts = () => {
    setVisiblePosts(prev => prev + 9); // Load 9 more posts on each click
  };


  
  return (


    <>
    
      <div className="Home-page ">
      <Sidebar/>
     
          <div className="home-content  ">
          <img src="./src/assets/h-1.png" alt="hero-img" />
         
         
        <div className="overlay">
           <span>Technology</span>
            <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
            <div className='over-end'>
              <img src="./src/assets/au-1.png" alt="img" />
              <p>Jason Frankalio</p>
              <p>August 20, 2022</p>
            </div>
          </div>
       
          
        
        </div>
            <Add/>
        <h3>Latest Posts</h3>
        <div className="card-area">
        
   {/* mapping the data from BlogData to shoe BlogCard on HomePage and slicing it into only 9 cards*/ }

    {blogData.slice(0, visiblePosts).map(blog =>(
        <BlogCard key={blog.id} blog={blog}/>
    ))}
      </div>
   {/* button for view more !!!! functionality addition expexcted !!!! */ }
      
  <div className="universal-btn" onClick={showMorePosts}><button >view more</button></div>

  <Add/>
</div>
    </>
  )
}

export default HomePage

{/*const data = [
  {
   
    cate:"Technology",
    contant:"The Impact of Technology on the Workplace: How Technology is Changing",
    img:{au_on},
    au_name:"Jason Frankalio",
    info:'August 20, 2022'
  },{
  
    cate:"Economy",
    contant:"The Impact of Technology on the Workplace: How Technology is Changing",
    img:{au_two},
    au_name:"Jhonson Doe",
    info:'August 20, 2022'
  },{
    
    cate:"Technology",
    contant:"The Impact of Technology on the Workplace: How Technology is Changing",
    img:{au_three},
    au_name:"Alen franki",
    info:'August 20, 2022'
  }
]
  */}