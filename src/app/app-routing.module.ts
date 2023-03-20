import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerUpdateComponent } from './answer-update/answer-update.component';
import { AnswerComponent } from './answer/answer.component';
import { AuthGuardService } from './auth-guard.service';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { ChatComponent } from './chat/chat.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MessageServiceComponent } from './message-service/message-service.component';
import { MessageComponent } from './message/message.component';
import { PendingAnswerComponent } from './pending-answer/pending-answer.component';
import { PendingQuestionComponent } from './pending-question/pending-question.component';
import { QuestionApprovedComponent } from './question-approved/question-approved.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionComponent } from './question/question.component';
import { SearchComponent } from './search/search.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},    
  {path:'msg',component:MessageServiceComponent},
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'updateAccount', component:UpdateAccountComponent,canActivate:[AuthGuardService],data:{role:'user'}},
  {path:'chat', component:ChatComponent,canActivate:[AuthGuardService],data:{role:'user'}},
  {path:'chatDetail/:userName', component:ChatDetailComponent,canActivate:[AuthGuardService],data:{role:'user'}},
  {path:'search',component:SearchComponent,canActivate:[AuthGuardService],data:{role:'user'}},
  {path:'createQuestion',component:CreateQuestionComponent,canActivate:[AuthGuardService],data:{role:'user'}},
  {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuardService],data:{role:'user'}},
  {path:'userManager',component:UserManagerComponent,canActivate:[AuthGuardService],data:{role:'admin'}},
  {path:'userUpdate/:id',component:UserUpdateComponent,canActivate:[AuthGuardService],data:{role:'admin'}},
  {path:'question',component:QuestionComponent,canActivate:[AuthGuardService],data:{role:'admin'}},
  {path:'questionDetail/:id',component:QuestionDetailComponent,canActivate:[AuthGuardService],data:{role:'user'}},
  {path:'approvedQuestion',component:QuestionApprovedComponent,canActivate:[AuthGuardService],data:{role:'user'}},
  {path:'pendingQuestion',component:PendingQuestionComponent,canActivate:[AuthGuardService],data:{role:'admin'}},
  {path:'pendingAnswer',component:PendingAnswerComponent,canActivate:[AuthGuardService],data:{role:'admin'}},
  {path:'answer',component:AnswerComponent,canActivate:[AuthGuardService],data:{role:'admin'}},
  {path:'answerUpdate/:id',component:AnswerUpdateComponent,canActivate:[AuthGuardService],data:{role:'user'}},
  {path:'message', component:MessageComponent,canActivate:[AuthGuardService],data:{role:'admin'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
