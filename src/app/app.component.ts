import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TextDialogComponent } from './text-dialog/text-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    text: string = '';

    constructor(private readonly dialog: MatDialog) {}

    openDialog(): void {
        const dialog = this.dialog.open(TextDialogComponent, { data: this.text });
        dialog.afterClosed().subscribe((result?: string) => {
            if (result) {
                this.text = result;
            }
        });
    }
}
