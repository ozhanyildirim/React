import React from 'react'
import "./App.css"

 const List = ({images}) => {

    const preparedImage = images.map(image => {
        return (
            <img key={image.id} src={image.urls.small} alt="" />
        )
    }) ;

    return (
    
        <div className="image">
            {preparedImage}
        </div>
    )
}
export default List;