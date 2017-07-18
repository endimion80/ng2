import { read } from 'fs';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-accord',
  templateUrl: './accord.component.html',
  styleUrls: ['./accord.component.css'],
  providers: [UsersService],
})
export class AccordComponent implements OnInit {
public usuarios;
loading: boolean = false;
failed: boolean = false;
  constructor(
    private _usersService: UsersService){ }
  ngOnInit() {
    this.loading = true;
    this.failed = false;
    this._usersService.readerjson()
     .subscribe(
                                        result => {
                                                this.usuarios = result;
                                                console.log(this.usuarios);
                                                this.loading = false;
                                        },
                                    );
   }
}
