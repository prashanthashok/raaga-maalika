import { Component, OnInit,  } from '@angular/core';
import { TrackService } from '../shared/api/track.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  tracks$;
  dataSource;

  constructor(private trackService: TrackService) {

  }

  ngOnInit() {
  }

  getTracks(){
    this.tracks$ = this.trackService.getTracks();
    // .subscribe(
    //   (data) => {
    //     this.tracks$ = data;
    //     this.dataSource  = new MatTableDataSource(data);
    //     //TODO: Sorting doesn't work yet...
    //     //this.dataSource.sort = this.sort; 
    //     console.log("Inside Search ");
    //     console.log(this.tracks$);
    //   }
    // );
  }
  
}
