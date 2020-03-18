import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Post } from 'src/app/classes/Post';

@Component({
    selector: 'app-list-interested',
    templateUrl: './list-interested.component.html',
    styleUrls: ['./list-interested.component.css']
})
export class ListInterestedComponent implements OnInit{

    posts: Post[];
    constructor(public dialogRef: MatDialogRef<ListInterestedComponent>, @Inject(MAT_DIALOG_DATA) public passedData: any) {
    }

    ngOnInit(): void {
      this.posts = this.passedData;
    }

    onClickClose() {
        this.dialogRef.close();
    }
}

