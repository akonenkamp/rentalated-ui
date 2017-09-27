import { Component, OnInit } from '@angular/core';
import { Apartment } from '../apartment';
import { ApartmentDataService } from '../apartment-data/apartment-data.service';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit {
  apartments : Apartment[];
  error: string;
  selectedApartment: Apartment;
  constructor(private data: ApartmentDataService) { }
  

  ngOnInit() {
    this.data
    .getMyListings()
    .subscribe (
      apartments => this.apartments =
      apartments,
      () => this.error = 'could not load apartment data'
    );
    
  }

  selectApartment(apartment : Apartment) {
    this.selectedApartment = apartment;
  }

  nullSelectedApartment() {
    this.selectedApartment=null;
 
  }
}
