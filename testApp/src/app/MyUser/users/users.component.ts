import { Component, OnInit } from '@angular/core';
import { User } from '../../Model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[]|null=null;
  Selecteduser:User|null=null;


  constructor() { 
    this.users=[
      {UserId:1,Address:'',EmailID:'',UserFirstName:'',UserLastName:'',IsActive:true,MobileNumber:'123'},
      {UserId:2,Address:'',EmailID:'',UserFirstName:'',UserLastName:'',IsActive:true,MobileNumber:'123'},
      {UserId:3,Address:'',EmailID:'',UserFirstName:'',UserLastName:'',IsActive:true,MobileNumber:'123'},
      {UserId:4,Address:'',EmailID:'',UserFirstName:'',UserLastName:'',IsActive:true,MobileNumber:'123'}
  ]
  }

  ngOnInit(): void {
    console.log(this.users);
  }
  trackUser(index:number,user:User)
  {
    
  }
  OnSelectedUserClick(event:User)
  {
      this.Selecteduser=event;
       
  } 
 

}
