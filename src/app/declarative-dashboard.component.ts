import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

@Component({
  selector: 'declarative-dashboard',
  template: `
    <div class="dashboard-container">
      <h2>Declarative Approach</h2>
      <metabase-dashboard 
        [attr.dashboard-id]="dashboardId" 
        [attr.with-title]="withTitle" 
        [attr.with-downloads]="withDownloads" 
        [attr.drills]="drills">
      </metabase-dashboard>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin: 20px 0;
      background: #f9f9f9;
    }
    h2 {
      color: var(--gray-700);
      margin-bottom: 16px;
    }
  `],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DeclarativeDashboardComponent {
  @Input() dashboardId: string = '1';
  @Input() withTitle: string = 'true';
  @Input() withDownloads: string = 'false';
  @Input() drills: string = 'true';
}