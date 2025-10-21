import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
    {
    path: ':lang',
    renderMode: RenderMode.Client   
  },
  {
    path: ':lang/**',
    renderMode: RenderMode.Client   
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
