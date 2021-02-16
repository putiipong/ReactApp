import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
export default function AddPostPage(){

  let history = useHistory()


  function handleCancelClick(){
    history.push("/home")
}


  return (
  <div className="PageBox">
    <h1>Post App</h1>
    <div className="TitleBox">
    <h3 className="Title">Title :</h3>
    <input className="TextTitle" type={Text} placeholder="Enter Post Title"></input>
    </div>
    <div className="DescriptionBox">
    <h3 className="Description">Description :</h3>
    <input className="TextDescription" type={Text} placeholder="Enter Post Description"></input>
    </div>
    <div className="Button-Submit-Cancel">
      <button className="button">Add</button>
      <button className="button" onClick={handleCancelClick}>Cancel</button>
    </div>
    </div>
    )
}