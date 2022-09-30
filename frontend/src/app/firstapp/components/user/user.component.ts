import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  products = [{id: 0, title: 'test', image:"https://previews.123rf.com/images/serezniy/serezniy1105/serezniy110500705/9596456-cace-isolated-on-white.jpg", likes:2}];
  product;
 
  constructor(private services: ServiceService) {
    this.get();
    //this.product = {id: -1, title: '', image: '', likes: 4};

  }
  refresh(): void {
    window.location.reload();
}

  like(id:number){

    this.services.like(id).subscribe()
  

    
    
  }
  get = () => {
    this.services.getAll_user_pro().subscribe(
      data => {
        this.products = data;

      },
      
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
  }
  
}

