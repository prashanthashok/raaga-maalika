import { Injectable } from '@angular/core';
import { tracks } from '../data/mock-tracks';
import { of, Observable } from 'rxjs';
import { Track } from '../models/track.model';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor() { }

  getTracks(): Observable<Track[]>{
    return of(tracks);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
