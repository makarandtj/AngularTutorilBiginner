import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { User } from '../../Model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user!:User;
  @Output() userSelected= new EventEmitter<User>()

  constructor() { }

  ngOnInit(): void {
  }
  onUserSelect()
  {
   
     this.userSelected.emit(this.user);
  }

}
