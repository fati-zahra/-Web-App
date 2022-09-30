import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  products = [{title: 'test', image: "f", likes:0 }];
  selecte;

  constructor(private api: ServiceService, private router: Router) { 
    this.selecte = {id: -1, title: " ", image: '', likes:0};

  }

  ngOnInit(): void {
  }
  create = () => {
    this.api.create(this.selecte).subscribe(
      data => {
        this.products.push(data);
      
       // this.router.navigate(['../product']);

      },
      error => {
        console.log(error);
      }
    );
  }
}