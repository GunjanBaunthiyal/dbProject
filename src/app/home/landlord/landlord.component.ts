import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landlord',
  templateUrl: './landlord.component.html',
  styleUrls: ['./landlord.component.scss']
})
export class LandlordComponent implements OnInit {

  constructor(){

  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  
  // public AddPropertyDialog() {
  //   debugger
  //   const dialogRef = this.dialog.open(AddPropertyComponent, {
  //    // data: data,
  //     height: '750px',
  //     width: '1050px',
  //     autoFocus: false
  //   });
  //   dialogRef.afterClosed().subscribe(data => {

  //   });
  //}
}
