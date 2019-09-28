import { Component, OnInit } from '@angular/core';
import { Language } from '../../models/language.model'

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent implements OnInit {
  public languages: Array<Language> = [];
  constructor() { }

  ngOnInit() {
    this.languages = [
      { id: 1, displayText: "English", logo: "assets/images/languages/english.png" },
      { id: 2, displayText: "Poland", logo: "assets/images/languages/poland.png" },
      { id: 3, displayText: "Czech", logo: "assets/images/languages/czech.png" },
    ]
  }

}
