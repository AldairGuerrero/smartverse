import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { ConfirmMailComponent } from './confirm-mail/confirm-mail.component';
import { LogoutComponent } from './logout/logout.component';
import { UiModule } from 'src/app/components/ui/ui.module';

@NgModule({
	declarations: [
		LoginComponent,
		RegisterComponent,
		RecoverPasswordComponent,
		LockScreenComponent,
		ConfirmMailComponent,
		LogoutComponent,
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		NgbAlertModule,
		UiModule,
		AuthRoutingModule,
	],
})
export class AuthModule {}