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




}
