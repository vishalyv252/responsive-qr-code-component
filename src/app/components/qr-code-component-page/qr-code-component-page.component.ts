import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-qr-code-component-page',
  templateUrl: './qr-code-component-page.component.html',
  styleUrl: './qr-code-component-page.component.css',
  encapsulation: ViewEncapsulation.None
})
export class QrCodeComponentPageComponent {

  // Path to the QR code image.
  image_path_link : string = "images/image-qr-code.png";

  // Alternate text description for QR code image.
  image_description : string = "I have attached QR-Code image.";

  // Title text to be displayed on this component.
  title : string = "Improve your front-end skills by building projects";

  // Description text to be displayed on this component.
  description : string = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level";

}
