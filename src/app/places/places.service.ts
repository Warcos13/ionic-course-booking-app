import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In  the heart of the New York City.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/1200px-Above_Gotham.jpg',
      149.99
    ),
    new Place(
      'p2',
      "L'Amour Toujour",
      'A romantic place in Paris!',
      'https://live.staticflickr.com/614/31628747276_00dedc1560_b.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://i.pinimg.com/originals/9c/88/44/9c8844b217bdb6c17db14f51ad2e51a5.jpg',
      99.99
    )
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return { ...this._places.find(place => place.id === id) };
  }

  constructor() {}
}
