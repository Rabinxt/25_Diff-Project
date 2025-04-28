import React from 'react'
import ImageSlider from './components/imageSlider.jsx';

const App = () => {
  return (
    <div>
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} />
    </div>
  )
}

export default App
 