import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


  export class AppComponent {
    //Sidebar toggle show hide function
    status = false;
    addToggle()
    {
      this.status = !this.status;       
    }

    }


    
    

