import { read } from 'fs';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css'],
  providers: [UsersService]
})
export class ConsultantComponent implements OnInit {
public consultors;

  constructor(
    private _usersService: UsersService)
    { }
 ngOnInit(){
    this._usersService.readerjson()
     .subscribe(
                                        result => {
                                                this.consultors = result;
                                                console.log(this.consultors);
                                        },
                                    );
   }
}
