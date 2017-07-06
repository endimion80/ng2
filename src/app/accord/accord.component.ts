import { read } from 'fs';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-accord',
  templateUrl: './accord.component.html',
  styleUrls: ['./accord.component.css'],
  providers: [UsersService]
})
export class AccordComponent implements OnInit {
public usuarios;

  constructor(
    private _usersService: UsersService)
    { }
 ngOnInit(){
    this._usersService.readerjson()
     .subscribe(
                                        result => {
                                                this.usuarios = result;
                                                console.log(this.usuarios);
                                        },
                                    );
   }
}
