import { Component } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  textArray = [];

  constructor(private characterService: CharacterService) {

  }

  fileUpload(event) {
    var reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    var me = this;
    reader.onload = function () {
      me.decryptTextData(reader.result)
    }
  }

  decryptTextData(data) {
    for (let i = 0; i < data.length / 85; i++) {
      this.textArray.push(this.decryptElement(data.substring(85 * i, (85 * i) + 84)))
    }
    console.log(this.textArray)
  }


  decryptElement(ele) {
    let number = '';
    for (let i = 0; i < 9 * 3; i += 3) {
      let letterArray = []
      letterArray[0] = ele[i] + ele[i + 1] + ele[i + 2]
      letterArray[1] = ele[(28 + i)] + ele[(28 + 1 + i)] + ele[(28 + 2 + i)]
      letterArray[2] = ele[(28 * 2) + i] + ele[(28 * 2) + 1 + i] + ele[(28 * 2) + 2 + i]
      number = number + this.characterService.getValue(letterArray);
      i = i + 3
    }
    return element;
  }
}
