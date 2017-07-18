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
public title;
  constructor(
    private _usersService: UsersService)
    { this.title = "Componente de Consultores falta añadir la api en symphony";}
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
