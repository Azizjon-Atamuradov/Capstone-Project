
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

function Home() {
  return (
    <> 
    <div className='slogan'>Shop Smart, Shop AzzEx!</div>
   
    <div className="Home">
      <h1>Welcome to the Home Page</h1>
      
      <Carousel>
        {/* First Video Slide */}
        <Carousel.Item>
          <video
            className="d-block w-100"
            controls  // Allows play/pause controls
            autoPlay
            loop
            muted
          >
            <source src="https://www.apple.com/105/media/us/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/xlarge_2x.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Carousel.Caption>
            <h3>First Video</h3>
            <p>Some description for the first video.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Second Video Slide */}
        <Carousel.Item>
          <video
            className="d-block w-100"
            controls
            autoPlay
            loop
            muted
          >
            <source src="https://vod.freecaster.com/louisvuitton/9c294607-9793-401b-85ea-43dcc6a0ea65/1aqs4xOgY1_24.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Carousel.Caption>
            <h3>Second Video</h3>
            <p>Some description for the second video.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Third Video Slide */}
        <Carousel.Item>
          <video
            className="d-block w-100"
            controls
            autoPlay
            loop
            muted
          >
             <source src="https://the1916company.imgix.net/cms/PP_Product_2024_April_Novelties_16x9_0c964230d6.mp4" type="video/mp4" />
           
            Your browser does not support the video tag.
          </video>
          <Carousel.Caption>
            <h3>Third Video</h3>
            <p>Some description for the third video.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </>
  )
}

export default Home