import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-list-interested',
    templateUrl: './list-interested.component.html',
    styleUrls: ['./list-interested.component.css']
})
export class ListInterestedComponent {
    constructor(public dialogRef: MatDialogRef<ListInterestedComponent>, @Inject(MAT_DIALOG_DATA) public passedData: any) {}

    onClickClose() {
        this.dialogRef.close();
    } 
}

