import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  durationInSeconds: number = 1;

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string = 'operation successfull', action: string = 'ok') {
    this._snackBar.open(message, action, {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top'
    });
  }
}
