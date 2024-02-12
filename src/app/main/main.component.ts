import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableComponent } from '../mat-table/mat-table.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, MatTableComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {}
