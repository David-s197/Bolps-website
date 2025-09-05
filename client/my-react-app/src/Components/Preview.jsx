import React from 'react'

const Preview = ({img}) => {
  return (
    <div className='prevCard'>
        <img className = 'previewImg' src={img.imgURL} alt='previews'/>
    </div>
  )
}

export default Preview