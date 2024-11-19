import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('productId'))
      )
      .subscribe(id => console.log(id));
  }
}
