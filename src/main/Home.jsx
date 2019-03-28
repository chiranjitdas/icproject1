import React, { Component } from "react";
import Slider from "react-slick";
//import Sidebar from '../../components/Sidebar';
//import Content from '../../components/Content';
class Home extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      
    };
    return (
      <div className="container">
      <div className="row">
        <div className="col-md-12">hello</div>
      </div>
     

        {/*<h2>Swipe To Slide</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>*/}
        {/*<Sidebar />*/}
        {/*<Content />*/}
      </div>
     
    );
  }
}
export default Home;
{/*const dataslide = [
  {
      "id": "1",
      "title": "One"
  },
  {
      "id": "2",
      "title": "Two"
  },
  {
      "id": "3",
      "title": "Three"
  },
  {
      "id": "4",
      "title": "Four"
  },
  {
      "id": "5",
      "title": "Five"
  },
  {
      "id": "6",
      "title": "Six"
  }
]
class Home extends Component {
  render() {
      let settings = {
          draggable: false,
          slideToShow: 4,
          autoplay: false,
          dots: true,
          lazyLoad: 'ondemand',
          arrows: true,
      }
      return (
          <ul>
              <Slider {...settings}>
                  {
                      dataslide.map((item, i) => {
                          return (
                              <li key={i}>

                                  
                                  <div className="left">
                                      <div className="item">{item.title}</div>
                                  </div>

                                 
                                  <div className="right">
                                      <div className="item">{item.title}</div>
                                      <div className="item">{item.title}</div>
                                  </div>

                              </li>
                          )
                      })
                  }
              </Slider>
          </ul>
      )
  }
}
export default Home;*/}