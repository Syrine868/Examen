import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  p: Product = new Product();
  constructor(private ps: ProductService, private router: Router) { }

  ngOnInit(): void {
  }


  save() {
    this.ps.addp(this.p).subscribe(
      result => {
        alert("Produit ajouté");
        
        console.log
        this.router.navigateByUrl('/home')

      },
      (err) => {
        alert('erreur')
      
      }
    )
  }


}
