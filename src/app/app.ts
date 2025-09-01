import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeclarativeDashboardComponent } from './declarative-dashboard.component';
import { ProceduralDashboardComponent } from './procedural-dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DeclarativeDashboardComponent, ProceduralDashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
