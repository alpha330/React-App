import React ,{useState, useEffect,useCallback} from "react";
import Button from "../Button/Button";
import './Blog.css'

const Blog = ()=>{
    const [posts,setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageCounts,setPageCounts] = useState(0)
    const [activePageNumber,setActivePageNumber] = useState(1)
    
    const loadPosts= async() => {
        setLoading(true)
        const response = await fetch('https://run.mocky.io/v3/df9eed21-f02a-483f-9eb8-1d26c6fc7512')
        const posts = await response.json()
        setTimeout(()=>{
            setPosts(posts);
            setLoading(false)
        },3000)
        
    }

    useEffect(()=>{
        loadPosts();
    },[])

    

    const calculatePageCount = () => {
        if(posts.length % 3 > 0){
            return parseInt(posts.length /3 + 1)
        }
        return parseInt(posts.length /3);
    }

    useEffect(()=>{
        setPageCounts(calculatePageCount());
     },[posts])
     
    const handleClickOnPages = useCallback((pageNumber) => {
        setActivePageNumber(pageNumber);
    },[]) 
    return (
        <div className="blog">
            {loading && <h3 className="loading-title">LOADING ...</h3>}
            {posts.length === 0 && <div>No Posts</div>}
            {posts.length > 0 && (
                <ul className="posts-list">
                    {posts.slice(3*activePageNumber,3*(activePageNumber+1)).map((post,index)=>(
                        <li className="post-item" key={`post-b-${index}`}>
                            <h3 className="title-post">{post.title}</h3>
                            <p className="content-post">{post.content}</p>
                        </li>
                    ))}
                </ul>
            )}
            <div className="pag-section">
                <ul className="pag-list">
                    {new Array(pageCounts).fill(0).map((item,index)=>(
                        <li className={activePageNumber === index+1 ? 'active':""} key={`key-b-${index}`}>
                        <Button handleClick={()=>handleClickOnPages(index+1)}>{index+1}</Button>
                        </li>  
                    ))}                              
                </ul>
            </div>
        </div>
    )   
}

export default Blog;