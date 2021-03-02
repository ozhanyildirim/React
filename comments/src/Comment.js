import React from 'react'

 const Comment = ({name , timeAgo , star ,comment,avatar}) => {
    // const {name , timeAgo , star ,comment}=props; yada yukarı yazabiliriz
    
    return (
        <div>
    <div className="comment">
    <a className="avatar" href="/">
      <img alt ="" src={avatar}/>
    </a> 
    <div className="content">
      <a className="author" href="/">{name}</a>
      <div className="metadata">
        <div className="date">{timeAgo} gün önce</div>
        <div className="rating">
          <i className="star icon"></i>
          {star} Favori
        </div>
        
      </div>
      <div className="text">
        {comment}
      </div>
    </div>
  </div>
        </div>
    )
}
export default Comment;
