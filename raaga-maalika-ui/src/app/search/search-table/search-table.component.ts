import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TrackService } from '../../shared/api/track.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.css']
})
export class SearchTableComponent implements OnInit {

  tracks;
  columnsToDisplay = ['id', 'trackName', 'artist', 'album', 'genre'];
  @ViewChild(MatSort) sort: MatSort;
  @Input() dataSource: any;

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    console.log("Inside Search Table");
        //console.log(this.dataSource);
  }

  getTracks(){
    this.trackService.getTracks().subscribe(
      (data) => {
        this.tracks = data;
        this.dataSource  = new MatTableDataSource(this.tracks);
        //TODO: Sorting doesn't work yet...
        //this.dataSource.sort = this.sort; 
        console.log(this.tracks);
      }
    );
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
