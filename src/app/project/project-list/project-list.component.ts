import { Component, OnInit,  Input } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      "name": "qqeqw",
      "desc": "asdfadsfadsfasd",
      "coverImg": "assets/img/covers/0.jpg"
    },
    {
      "name": "qqeqw",
      "desc": "asdfadsfadsfasd",
      "coverImg": "assets/img/covers/1.jpg"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
