import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  currentproduct = null;
  message = '';

  constructor(private services: ServiceService, private route: ActivatedRoute,
    private router: Router) {
    
      this.currentproduct = {id: -1, title: " ", image: '', likes:0};


  }
  ngOnInit(): void {
    this.message = '';
    this.getProduct(this.route.snapshot.paramMap.get('id'));
  }
  getProduct(id): void {
    this.services.read(id)
      .subscribe(
        product => {
          this.currentproduct = product;
          console.log(product);
        },
        error => {
          console.log(error);
        });
  }

  updateProduct(): void {
    this.services.update(this.currentproduct.id, this.currentproduct)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was updated!';
        },
        error => {
          console.log(error);
        });
  }
/*

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
  update = () => {
    this.services.update(this.product).subscribe(
     
      error => {
        console.log(error);
      }
    );
  }*/
}
