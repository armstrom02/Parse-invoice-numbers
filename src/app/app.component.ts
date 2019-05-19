import { Component } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  text;
  textArray = [];

  fileUpload(event) {
    var reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    var me = this;
    reader.onload = function () {
      me.text = reader.result;
      me.decryptText()
    }
  }

  decryptText() {
    for (let i = 0; i < this.text.length / 85; i++) {
      // console.log((85 * i) + '--' + ((85 * i) + 84));
      this.textArray.push(this.decryptElement(this.text.substring(85 * i, (85 * i) + 84)))
    }
    // console.log(this.textArray);
  }


  decryptElement(ele) {
    const element = [];
    let i = 0
    do {
      let letterArray = []
      letterArray[0] = ele[i] + ele[i + 1] + ele[i + 2]
      letterArray[1] = ele[(28 + i)] + ele[(28 + 1 + i)] + ele[(28 + 2 + i)]
      letterArray[2] = ele[(28 * 2) + i] + ele[(28 * 2) + 1 + i] + ele[(28 * 2) + 2 + i]
      element.push(letterArray);
      i = i + 3
    }
    while (i < 27)
    return element;
  }
}
