# Metabase Angular Embedded JS Sample

This project demonstrates how to embed Metabase dashboards in an Angular application using two different approaches.

## Configuration

Configure your Metabase instance in `src/index.html`:

```javascript
defineMetabaseConfig({
  "useExistingUserSession": true,
  "instanceUrl": "http://localhost:3000",  // Your Metabase URL
  "theme": {
    "colors": {
      "brand": "red",  // Customize theme colors
    },
  },
});
```

## Components

The application includes two dashboard components showcasing different implementation approaches:

### 1. ProceduralDashboardComponent
- **Location**: `src/app/procedural-dashboard.component.ts`
- **Approach**: Uses `Renderer2.createElement()` and `setAttribute()` to create dashboard elements programmatically
- **Usage**: 
```html
<procedural-dashboard 
  dashboardId="1" 
  withTitle="true" 
  withDownloads="false" 
  drills="true">
</procedural-dashboard>
```

### 2. DeclarativeDashboardComponent
- **Location**: `src/app/declarative-dashboard.component.ts`
- **Approach**: Uses Angular template binding with `[attr.]` syntax
- **Usage**:
```html
<declarative-dashboard 
  dashboardId="2" 
  withTitle="false" 
  withDownloads="true" 
  drills="false">
</declarative-dashboard>
```

## Development

Start the development server:

```bash
ng serve
```

Navigate to `http://localhost:4200/` to see both dashboard components in action.

## Building

Build the project:

```bash
ng build
```