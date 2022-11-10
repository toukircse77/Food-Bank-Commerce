import React from 'react';

const Carousel = () => {
    return (
        <div>
            <div className="carousel h-80 object-center  w-full">
  <div id="item1" className="carousel-item  w-full">
    <img src="https://gttp.imgix.net/352610/x/0/14-best-pampanga-restaurants-kapampangan-food-best-sisig-buffet-fine-dining-private-dining-28.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item  w-full">
    <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://media.istockphoto.com/photos/the-concept-of-indian-cuisine-baked-chicken-wings-and-legs-in-honey-picture-id1098318646" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://media-cdn.tripadvisor.com/media/photo-s/05/d4/83/3f/fast-food-restaurant.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Carousel;