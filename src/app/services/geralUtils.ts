import {MatSnackBarConfig} from "@angular/material/snack-bar/snack-bar-config";

export class GeralUtils {

  static BASE_URL = 'http://localhost:8081/'

  static configAlert: MatSnackBarConfig = {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    duration: 2500,
  }
}
