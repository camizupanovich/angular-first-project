import { Injectable } from "@angular/core";
@Injectable()
export class ProductsService{
    private products:Product[] = [
        {id:1,stock:true,name:"Smart Watch",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima hic beatae placeat, fugit numquam corrupti est vel, eum eligendi iure laudantium tenetur vero error! Aspernatur architecto sapiente possimus ipsum accusantium.",image:"https://image.freepik.com/free-psd/smartwatch-mockup-two-colors_266768-117.jpg"},
        {id:2,stock:false,name:"Smart Phone",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima hic beatae placeat, fugit numquam corrupti est vel, eum eligendi iure laudantium tenetur vero error! Aspernatur architecto sapiente possimus ipsum accusantium.",image:"https://cdn.dribbble.com/users/126818/screenshots/3388521/walkthrough_refresh.png"},
        {id:3,stock:true,name:"Tablet",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima hic beatae placeat, fugit numquam corrupti est vel, eum eligendi iure laudantium tenetur vero error! Aspernatur architecto sapiente possimus ipsum accusantium.",image:"https://th.bing.com/th/id/OIP.j1jDzeVn8Jh4q4lx00PLhAHaFj?w=265&h=199&c=7&r=0&o=5&dpr=1.25&pid=1.7"},
        {id:4,stock:true,name:"Laptop",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima hic beatae placeat, fugit numquam corrupti est vel, eum eligendi iure laudantium tenetur vero error! Aspernatur architecto sapiente possimus ipsum accusantium.",image:"https://th.bing.com/th/id/OIP.15vLxHuSrtfERhOFao8hzAHaE7?w=292&h=195&c=7&r=0&o=5&dpr=1.25&pid=1.7"},
        {id:5,stock:false,name:"Smart Tv",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima hic beatae placeat, fugit numquam corrupti est vel, eum eligendi iure laudantium tenetur vero error! Aspernatur architecto sapiente possimus ipsum accusantium.",image:"https://cdn.shopify.com/s/files/1/1038/1798/products/Smart-TV-Mockup-1.jpg?v=1525177760"},
        {id:6,stock:false,name:"Smart Glasses", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima hic beatae placeat, fugit numquam corrupti est vel, eum eligendi iure laudantium tenetur vero error! Aspernatur architecto sapiente possimus ipsum accusantium.",image:"https://scontent.faep8-2.fna.fbcdn.net/v/t39.8562-6/275179936_688348809186365_4501344900336004215_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6825c5&_nc_ohc=KviegxR0bXsAX_3KmVk&_nc_ht=scontent.faep8-2.fna&oh=00_AT8a1lVh2LYnq3mu0Rbupx69Dw6kqinbJ0PMSiRV3rY3qQ&oe=633330F7"},
        {id:7,stock:true,name:"Meta Quest",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima hic beatae placeat, fugit numquam corrupti est vel, eum eligendi iure laudantium tenetur vero error! Aspernatur architecto sapiente possimus ipsum accusantium.", image:"https://lookaside.fbsbx.com/elementpath/media/?media_id=1350676825378065&version=1660254173"}
    ]
    constructor(){
        console.log("Service works")
    }
    getProducts():Product[]{
        return this.products
    }
    getProductDetail(i:string){
        return this.products.filter(p=>p.id == i);
    }
}
export interface Product{
    id: any;
    name: string;
    description:string;
    image: string;
    stock: boolean;
}