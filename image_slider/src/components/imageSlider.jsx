import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill    } from 'react-icons/bs';

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setloading] = useState(false);

    const fetchImages = async (getUrl) => {
        setloading(true);
        try {
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data)
            }
        } catch (e) {
            setErrorMsg(e.message);
            
        }
        finally{
            setloading(false);
        }  
    }


    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url]) 
    if (loading) {
        return <div className="message">Loading</div>
    }

    if (errorMsg !== null) {
        return <div className="errormessagee">error,{errorMsg}</div>
    }
    return (
        <div>
            <div className="container">
                <BsArrowLeftCircleFill className='arrow arrow-left' />
                {
                    images && images.length ?
                        images.map((imageItem) => (
                            <img 
                            key={imageItem.id} 
                            src={imageItem.download_url} 
                            alt={imageItem.download_url} className='current-image'/>
                        ))
                :null   }
                <BsArrowRightCircleFill className='arrow arrow-right' />
                <span className="circle-indicators">
                    {
                        images && images.length?
                        images.map((_,index) =>(
                            <button key={index} className='current-indicator'></button>
                        ))
                    :null}
                </span>
            </div>
        </div>
    )
}

export default ImageSlider
