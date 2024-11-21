import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  public email:string="";

  constructor(
    private userService: UserService,
    private router: Router,
    private popoverController: PopoverController,
  ) { }

  ngOnInit() {
  }

  sendLinkReset(){

    if (this.email != "") {
      this.userService.resetPassword(this.email).then(()=>{
        console.log('enviado');
        }).catch(()=>{
        console.log('error');
      })

    } else {
      alert('El correo no es correcto, por favor intentelo nuevamente...')
    }

  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  
}
