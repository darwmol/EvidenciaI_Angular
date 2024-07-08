import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatButtonModule, FormsModule],
  exports: [CommonModule, MatCardModule, MatButtonModule, FormsModule],
})
export class MaterialModule {}
  