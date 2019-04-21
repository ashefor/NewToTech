import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
  }

  // callApi(){
  //   this.http.get('https://reqres.in/api/users?page=2').subscribe(data => {
  //     console.log(data)
  //   })
  // }
  
  subscriptionForm = this.fb.group({
    email: ['', Validators.compose([Validators.required])],
  })

  submitForm(){
    window.alert('me')
  }
}