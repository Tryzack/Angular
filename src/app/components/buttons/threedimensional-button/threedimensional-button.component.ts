import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-threedimensional-button',
  standalone: true,
  imports: [],
  templateUrl: './threedimensional-button.component.html',
  styleUrl: './threedimensional-button.component.css',
})
export class ThreedimensionalButtonComponent {
  @Input() title: string = '3D Button';
  @Input() clickHandler: () => void = () => {};
}
