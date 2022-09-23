import { Component } from "@angular/core";

@Component({
    selector: 'hero',
    template: `<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner" style="height: 393.6px; overflow: hidden;">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="../../../assets/img/one.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="../../../assets/img/two.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../../../assets/img/three.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`
})
export class HomeComponent{
    constructor(){
        console.log('hero is working successfully')
    }
}