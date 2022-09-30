import { Component, OnInit } from '@angular/core';
//import {ServiceService} from "./../services/service.service";
import {Observable} from "rxjs";
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ServiceService]

})
export class ProductComponent implements OnInit {
  products = [{id: 0, title: 'test', image:"https://previews.123rf.com/images/serezniy/serezniy1105/serezniy110500705/9596456-cace-isolated-on-white.jpg", likes:2}];

  currentProduct = null;
  message = '';

  constructor(private services: ServiceService, private route: ActivatedRoute,
    private router: Router) {
    this.get();

  }
  ngOnInit(): void {
    this.message = '';
    this.getProduct(this.route.snapshot.paramMap.get('id'));
  }
  getProduct(id): void {
    this.services.read(id)
      .subscribe(
        product => {
          this.currentProduct = product;
          console.log(product);
        },
        error => {
          console.log(error);
        });
  }
  deleteProduct(id): void {
    this.services.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/products']);
        },
        error => {
          console.log(error);
        });
  }
  refresh(): void {
    window.location.reload();
}
  get = () => {
    this.services.getAll().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  delete(id:number){

    this.services.delete(id).subscribe()

  }
  
 
  /*delete = () => {
    this.services.delete(this.product.id).subscribe(
      data => {
        this.get();
      },
      error => {
        console.log(error);
      }
    );
  }*/
 
 
}

