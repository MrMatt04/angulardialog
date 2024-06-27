import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dialog-example',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './dialog-example.component.html',
  styleUrl: './dialog-example.component.css',
})
export class DialogExampleComponent {
  onsubmit = () => {
    this.dialogref.close(this.form.controls.message.value);
  };
  form = new FormGroup({
    message: new FormControl(''),
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { name: string },
    private readonly dialogref: MatDialogRef<DialogExampleComponent>
  ) {}
}
