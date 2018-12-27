import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { DropZoneDirective } from './drop-zone.directive';
import { FileSizePipe } from './file-size.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UploadComponent, DropZoneDirective, FileSizePipe]
})
export class UploadModule { }
