import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-text-dialog',
    templateUrl: './text-dialog.component.html',
    styleUrls: ['./text-dialog.component.scss'],
})
export class TextDialogComponent {
    text: string = '';

    constructor(
        @Inject(MAT_DIALOG_DATA) private readonly data: string,
        private readonly dialogRef: MatDialogRef<TextDialogComponent>
    ) {
        this.text = this.data;
    }

    save(): void {
        this.dialogRef.close(this.text);
    }
}
