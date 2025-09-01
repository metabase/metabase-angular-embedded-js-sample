import { Component, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'procedural-dashboard',
  template: `
    <div class="dashboard-container">
      <h2>Procedural Approach</h2>
      <div id="metabase-container"></div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      margin: 20px 0;
    }
    h2 {
      color: var(--gray-700);
      margin-bottom: 16px;
    }
  `]
})
export class ProceduralDashboardComponent implements OnInit {
  @Input() dashboardId: string = '1';
  @Input() withTitle: string = 'true';
  @Input() withDownloads: string = 'false';
  @Input() drills: string = 'true';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.createMetabaseDashboard();
  }

  private createMetabaseDashboard() {
    const container = this.elementRef.nativeElement.querySelector('#metabase-container');
    if (container) {
      const dashboard = this.renderer.createElement('metabase-dashboard');
      this.renderer.setAttribute(dashboard, 'dashboard-id', this.dashboardId);
      this.renderer.setAttribute(dashboard, 'with-title', this.withTitle);
      this.renderer.setAttribute(dashboard, 'with-downloads', this.withDownloads);
      this.renderer.setAttribute(dashboard, 'drills', this.drills);
      this.renderer.appendChild(container, dashboard);
    }
  }
}