import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProdutosComponent } from './pages/produtos/produtos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProdutosComponent],
  template: `
    <div class="app-container">
      <header class="app-header">
          <h1>Sistema de Produtos</h1>
      </header>
      <main class="app-main">
        <app-produtos></app-produtos>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
     font-family: 'Open Sans', Arial, sans-serif;
      min-height: 100vh;
      background: linear-gradient(135deg, #777777ff 0%, #4b4b4bff 50%, #575757ff);
    }
    
    .app-header {
      backdrop-filter: blur(10px);
      padding: 20px;
      text-align: center;
      color: #e4e5e6;
      font-size: 24px;
    }
    
    .app-main {
      padding: 20px;
    }
  `]
})
export class App {
  title = 'app-angular';
}