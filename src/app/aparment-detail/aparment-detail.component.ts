import { Component, OnInit, Input } from '@angular/core';
import { Apartment } from "../apartment";

@Component({
  selector: 'app-aparment-detail',
  templateUrl: './aparment-detail.component.html',
  styleUrls: ['./aparment-detail.component.css']
})
export class AparmentDetailComponent implements OnInit {
  @Input()
  apartment: Apartment;
  
  constructor() { }

  ngOnInit() {
  }

}
