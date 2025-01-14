import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(
    private userService:UserService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit(): void{
  }

  onClick(){
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
    }
}
