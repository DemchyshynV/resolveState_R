import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }


  login(form: FormGroup): void {
    const res = this.authService.login(form.getRawValue());
    if (res) {
      this.router.navigate(['users'], {state: {username: form.controls.username.value}});
    } else {
      this.error = true;
    }
  }
}
