import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { QuestionComponent } from './question/question.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { AnswerComponent } from './answer/answer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { SearchComponent } from './search/search.component';
import { PendingQuestionComponent } from './pending-question/pending-question.component';
import { ControlTableComponent } from './control-table/control-table.component';
import { DetailTableComponent } from './detail-table/detail-table.component';
import { CreateAnswerComponent } from './create-answer/create-answer.component';
import { PendingAnswerComponent } from './pending-answer/pending-answer.component';
import { TablePendingComponent } from './table-pending/table-pending.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { MessageComponent } from './message/message.component';
import { AnswerUpdateComponent } from './answer-update/answer-update.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { QuestionApprovedComponent } from './question-approved/question-approved.component';
import { TitleComponent } from './title/title.component';
import { NavbarBootstrapComponent } from './navbar-bootstrap/navbar-bootstrap.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { MessageServiceComponent } from './message-service/message-service.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    QuestionComponent,
    BasicTableComponent,
    AnswerComponent,
    LoginComponent,
    SignUpComponent,
    QuestionDetailComponent,
    CreateQuestionComponent,
    SearchComponent,
    PendingQuestionComponent,
    ControlTableComponent,
    DetailTableComponent,
    CreateAnswerComponent,
    PendingAnswerComponent,
    TablePendingComponent,
    DashboardComponent,
    NavbarComponent,
    ChatDetailComponent,
    MessageComponent,
    AnswerUpdateComponent,
    UserManagerComponent,
    UserUpdateComponent,
    QuestionApprovedComponent,
    TitleComponent,
    NavbarBootstrapComponent,
    UpdateAccountComponent,
    MessageServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
