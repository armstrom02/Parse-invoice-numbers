import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  number_patterns = [
    [" _ ", "| |", "|_|"],
    ["   ", "  |", "  |"],
    [" _ ", " _|", "|_ "],
    [" _ ", " _|", " _|"],
    ["   ", "|_|", "  |"],
    [" _ ", "|_ ", " _|"],
    [" _ ", "|_ ", "|_|"],
    [" _ ", "  |", "  |"],
    [" _ ", "|_|", "|_|"],
    [" _ ", "|_|", " _|"]
  ];

  constructor() { }

  getValue(data) {
    return this.number_patterns.findIndex(data)
  }




}
