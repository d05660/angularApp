import { Component, OnInit,  Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';

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

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    
  }

  openNewProjectDialog(){
    this.dialog.open(NewProjectComponent);
  }

}
