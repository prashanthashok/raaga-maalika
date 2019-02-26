import { Component, OnInit } from '@angular/core';
import { TrackService } from '../shared/api/track.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  tracks;

  constructor(private trackService: TrackService) { }

  ngOnInit() {
  }

  getTracks(){
    this.trackService.getTracks().subscribe(
      (data) => {
        this.tracks = data;
        console.log(this.tracks);
      }
    );
  }

}
