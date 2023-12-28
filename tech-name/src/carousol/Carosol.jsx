import React from 'react';

const Carosol = () => {
  return (
    <div className='carous'>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{width:'300px',height:'350px'}} src="https://5.imimg.com/data5/SELLER/Default/2023/4/303795306/IS/AR/YH/161854552/whatsapp-image-2023-04-26-at-11-10-08-am.jpeg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img style={{width:'300px',height:'350px'}} src="https://i.pinimg.com/736x/d9/df/fa/d9dffad7beefe2f40db55c6165835273.jpg" class="d-block w-100 " alt="..." />
    </div>
    <div class="carousel-item">
      <img style={{width:'300px',height:'350px'}} src="https://shop.gaatha.com/image/cache/catalog/data/Anagh%20Jewels/22-2-19/AJ-01-3-170x90.jpg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}

export default Carosol;
