import React ,{useEffect, useState}from 'react'

const ImageSlider = (url , limit) => {
    const [images , setImages] = useState([])
    const [currentSlide , setCurrentSlide] = useState(0);
    const [errorMsg , setErrorMsg] = useState(null);
    const [loading , setloading] = useState(false);

    const fetchImages = async(getUrl) =>{
        try{
            const response = await fetch(getUrl);
            const data = await response.json();
            
            if (data){
                setImages(data)
                setloading(false);
            }
        }catch(e){
            setErrorMsg(e.message);
            setloading(false);
        }
    }


    useEffect(()=>{
        if(url !== '') fetchImages()
    },[url])
if (loading){
return <div className="message">Loading</div>
}

if(errorMsg !== null){
    return <div className="errormessagee">error</div>
}
  return (
    <div>
      <div className="container">

      </div>
    </div>
  )
}

export default ImageSlider
