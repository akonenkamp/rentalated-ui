import { Component, OnInit } from '@angular/core';
import { ApartmentDataService } from '../apartment-data/apartment-data.service';
import { Apartment } from "../apartment";


@Component({
  selector: 'app-apartment-listings',
  templateUrl: './apartment-listings.component.html',
  styleUrls: ['./apartment-listings.component.css']
})
export class ApartmentListingsComponent implements OnInit {
  apartments : Apartment[];
  error: string;
  selectedApartment: Apartment;
  constructor(private data: ApartmentDataService) { }
  selectApartment(apartment : Apartment) {
    this.selectedApartment = apartment;
  }

  ngOnInit() {
    this.data
      .getActiveListings()
      .subscribe(
        apartments => this.apartments = apartments,
        () => this.error = 'could not load apartment data'
      );
  }

 nullSelectedApartment() {
   this.selectedApartment=null;

 }

}
