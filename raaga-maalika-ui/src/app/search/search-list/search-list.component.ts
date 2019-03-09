import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from 'src/app/shared/models/track.model';
import { TrackService } from 'src/app/shared/api/track.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
@Input() tracks$: Observable<Track[]>;

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    //this.tracks$ = this.trackService.getTracks();
    console.log("Inside search list");
    console.log(this.tracks$);
  }


}
