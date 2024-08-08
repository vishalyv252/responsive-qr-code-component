import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css'
})
export class NotFoundPageComponent {

  // Status code to be displayed on the page (e.g., 404 for "Not Found")
  status_code: number = 404;

  // Description message associated with the status code
  status_code_description: string = "Sorry, we couldn't find this page";

  // Text for the button to navigate back to the home page
  button_name: string = "Back to Home Page";

}
