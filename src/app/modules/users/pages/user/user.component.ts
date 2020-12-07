import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId:number;

  constructor(private route : ActivatedRoute,
              private us : UserService) { }


  //Leer el id del usuario que viene por parámetro
  //lamar al servicio UserService pasando el id
  //crear un método en UserService llamado:
    //getUserById$(id) : Observable<User>{}
  //Subscribirse al método y recoger el user que devuelve
  //pimtar los datos del user

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = Number(params.get("id"))
      this.us.getUserById$(this.userId);
    })
  }


}
