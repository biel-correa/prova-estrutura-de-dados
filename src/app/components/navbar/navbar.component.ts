import { NavItenModel } from './../../models/NavIten.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  routes: NavItenModel[] = [
    { name: 'Pilha', path: 'pilha' },
    { name: 'Fila', path: 'fila' },
    { name: 'Fila Circular', path: 'fila-circular' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
