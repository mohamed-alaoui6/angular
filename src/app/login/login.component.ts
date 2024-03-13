import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  userformgroup!:FormGroup;

  constructor(private fb:FormBuilder){
  }

  ngOnInit(): void {
    this.userformgroup=this.fb.group({
      username : this.fb.control(""),
      password:this.fb.control("")
    })
  }
 
  handlelogin() {

  }
}
