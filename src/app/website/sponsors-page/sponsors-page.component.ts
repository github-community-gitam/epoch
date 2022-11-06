import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors-page',
  templateUrl: './sponsors-page.component.html',
  styleUrls: ['./sponsors-page.component.scss']
})
export class SponsorsPageComponent implements OnInit {

  pdf_src = "http://docs.google.com/gview?url=http://infolab.stanford.edu/pub/papers/google.pdf&embedded=true"
  constructor() { }

  ngOnInit(): void { }

}
