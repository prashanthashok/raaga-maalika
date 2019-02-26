import { Component, OnInit } from '@angular/core';
import { TrackService } from '../shared/api/track.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  tracks;
  dataSource;
  columnsToDisplay = ['id', 'trackName', 'artist', 'album', 'genre'];

  constructor(private trackService: TrackService) { }

  ngOnInit() {
  }

  getTracks(){
    this.trackService.getTracks().subscribe(
      (data) => {
        this.tracks = data;
        this.dataSource  = new MatTableDataSource(this.tracks);
        console.log(this.tracks);
      }
    );
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
