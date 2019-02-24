import { Injectable } from '@angular/core';
import { Track } from '../models/track.model';

const tracks: Track[] = [
  {id: '1',
  trackName: 'He Aloha Ke\'ei',
  album: 'Pali Ke Kua',
  artist: 'Mailani',
  genre: 'Hawaiian'
  },
  {id: '2',
  trackName: 'Into Each Life Some Rain Must Fall',
  album: 'Ella & Friends',
  artist: 'Ella Fitzgerald',
  genre: 'Jazz'
  },
  {id: '3',
  trackName: 'Teri Talash',
  album: 'Humnasheen',
  artist: 'Shreya Ghoshal',
  genre: 'Hindustani'
  },
  
];


@Injectable({
  providedIn: 'root'
})
export class MockTracksService {

  constructor() { }

  getTracks(){
    return tracks;
  }

}
