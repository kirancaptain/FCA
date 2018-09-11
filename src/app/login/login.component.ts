import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  returnUrl: string;
  constructor(private userAuth: UserService, public snackBar: MatSnackBar, private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router) {  }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.myForm.controls;
  }

  signIn() {
    console.log('login');
    const user = {
      'email': this.myForm.controls.email.value,
      'password': this.myForm.controls.password.value
    };
    this.userAuth.verifyAuth(user).then((status) => {
      if (status) {
        this.router.navigateByUrl(this.returnUrl);
      } else {
        this.snackBar.open('Wrong Credentials', '', {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
    });
  }



}

