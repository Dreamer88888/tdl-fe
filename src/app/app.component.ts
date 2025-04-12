import { Component, OnInit } from '@angular/core';
import { Project } from './project/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public projects!: Project[];

  constructor() {}

  ngOnInit(): void {}
}
