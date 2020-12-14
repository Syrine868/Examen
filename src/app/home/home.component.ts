import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listproducts: Product[] = [];
  constructor(private ps: ProductService , private router:Router) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe(
        (data:Product[])=> {
          this.listproducts = data
        }, (err) => {
          console.log(err);
        }
        );
  }

  addTocart(p : Product) {
    this.ps.addToCart(p).subscribe(
      result => {
        alert("ajouté à la carte");
        console.log(p);
        this.router.navigateByUrl('/shopping');
      }
    )
  }

}
