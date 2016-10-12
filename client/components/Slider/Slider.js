import React from 'react';

import Carousel from 'nuka-carousel';

const Slider = React.createClass({
  mixins: [Carousel.ControllerMixin],

  render () {
    return (
      <div>
        <Carousel>
          <img src='http://placehold.it/1000x400/ffffff/c0392b/&text=slide1' />
          <img src='http://placehold.it/1000x400/ffffff/c0392b/&text=slide2' />
          <img src='http://placehold.it/1000x400/ffffff/c0392b/&text=slide3' />
          <img src='http://placehold.it/1000x400/ffffff/c0392b/&text=slide4' />
        </Carousel>
        <h1>Slider</h1>
      </div>
    );
  }
});

export default Slider;
