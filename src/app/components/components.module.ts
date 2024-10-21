import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { MatIconModule } from '@angular/material/icon';
import { MessageComponent } from './modals/message/message.component';
import { QuestionComponent } from './modals/question/question.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { PageTitlesComponent } from './page-titles/page-titles.component';

@NgModule({
  declarations:
  [
    LoadingComponent,
    MessageComponent,
    QuestionComponent,
    NotFoundComponent,
    ServerErrorComponent,
    PageTitlesComponent
  ],
  imports: [CommonModule, MatIconModule],
  exports: [
    LoadingComponent,
    MessageComponent,
    QuestionComponent,
    NotFoundComponent,
    ServerErrorComponent,
    PageTitlesComponent
  ],
})
export class ComponentsModule {}
