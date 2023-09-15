import React, { useState } from 'react'

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState()
  
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]))
    }
  }
  
  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(selectedImage);
  }

  return (
    <div>
      <h2>Image Upload</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input type="file" onChange={handleImageChange} />
        </div>
        {selectedImage && (
          <div>
            <img src={selectedImage} alt="Selected" className='h-9' />
          </div>
        )}
        <div>
          <button type="submit">Upload</button>
        </div>
      </form>
    </div>
  )
}

export default ImageUpload
