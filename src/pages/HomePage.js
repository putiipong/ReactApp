import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function HomePage(){
    
    let history = useHistory()

    useEffect(() => {
        async function getPost() {
          let results = await fetch('http://127.0.0.1:8000/posts')
          console.log(results)
        }
        getPost();
    
      }, [])

      function handleAddPostClick(){
          history.push("/add")
      }

    return (
        < div className = "App" >
      <div className="header-post">
        <h1>Post App</h1>
        <button className="button" onClick={handleAddPostClick}>Add Post</button>
      </div>
      <div className="Post-list">
        <div className="Post-item">
          <h3>Titel</h3>
          <h4>Content</h4>
          <div className="foot-Post-item">
            <h4>Jack</h4>
            <div className="button-edit-delete">
              <button className="button">Edit</button>
              <button className="button">Delete</button>
            </div>
          </div>
        </div>

        <div className="Post-item">
          <h3>Titel</h3>
          <h4>Content</h4>
          <div className="foot-Post-item">
            <h4>Jack</h4>
            <div className="button-edit-delete">
              <button className="button">Edit</button>
              <button className="button">Delete</button>
            </div>
          </div>
        </div>

        <div className="Post-item">
          <h3>Titel</h3>
          <h4>Content</h4>
          <div className="foot-Post-item">
            <h4>Jack</h4>
            <div className="button-edit-delete">
              <button className="button">Edit</button>
              <button className="button">Delete</button>
            </div>
          </div>
        </div>

      </div>
    </div >
    )
}
export default HomePage;