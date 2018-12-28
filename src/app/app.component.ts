import { Component} from '@angular/core';

//Import ToastsManager
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'design3-jobconnect';
}
export class YourComponent {
  constructor(private toastr: ToastrService) {}
 
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}




