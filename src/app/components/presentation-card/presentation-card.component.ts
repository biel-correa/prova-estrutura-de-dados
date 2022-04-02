import { Component, Input, OnInit } from '@angular/core';
import { PresentationCardContent } from 'src/app/models/PresentationCardContent.model';

@Component({
  selector: 'app-presentation-card',
  templateUrl: './presentation-card.component.html',
  styleUrls: ['./presentation-card.component.scss'],
})
export class PresentationCardComponent implements OnInit {
  @Input() data: PresentationCardContent;

  constructor() {}

  ngOnInit(): void {}
}
