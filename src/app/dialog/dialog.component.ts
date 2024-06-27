import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  result = '';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    let user = 'you 👽';
    let dialogRef = this.dialog.open(DialogExampleComponent, {
      data: { name: user },
      disableClose: true,
      hasBackdrop: true,
      width: '350px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.result = result;
    });
  }
}
