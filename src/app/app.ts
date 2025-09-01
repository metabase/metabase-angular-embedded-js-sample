import { Component, signal, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.createMetabaseDashboard();
  }

  private createMetabaseDashboard() {
    const container = this.elementRef.nativeElement.querySelector('#metabase-container');
    if (container) {
      const dashboard = this.renderer.createElement('metabase-dashboard');
      this.renderer.setAttribute(dashboard, 'dashboard-id', '1');
      this.renderer.setAttribute(dashboard, 'with-title', 'true');
      this.renderer.setAttribute(dashboard, 'with-downloads', 'false');
      this.renderer.setAttribute(dashboard, 'drills', 'true');
      this.renderer.appendChild(container, dashboard);
    }
  }
}
