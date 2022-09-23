import { Component,OnInit } from "@angular/core";
import { HomePageData,HomePageDataService } from "src/app/services/homepageData.service";
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
  </div>
  <div class="container mt-4" style=" box-shadow: 0px 0px 10px #21021021; padding:30px; border-radius:20px;" *ngFor="let data of homepagedata">
    <h2>{{data.title}}</h2>
    <hr/>
      <p class="card-text">{{data.description}}</p>
  </div>`
})
export class HomeComponent implements OnInit{
  homepagedata:HomePageData[]=[];
    constructor(private _homepagedataservice :HomePageDataService){
        console.log('hero is working successfully')
    }
    ngOnInit(){
      this.homepagedata = this._homepagedataservice.getHomePageData();
    }
}