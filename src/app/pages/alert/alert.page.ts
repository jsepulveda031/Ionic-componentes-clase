import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController ) { }

  ngOnInit() {
  }
  
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss:false,
     
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

  }
  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {

        text:'Ok!',
        handler: () =>{
          console.log('click en OK!')
        }
      },
      {

        text:'Cancelar',
        role:'cancel',
      cssClass:'rojo'
      }
    ]
    });

    await alert.present();
  }
  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          //value: 'hello',
          placeholder: 'apellido'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'correo'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date',
        
        },
        {
          name: 'name6',
          type: 'number',
          placeholder: 'telefono',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number', 
           placeholder: 'edad'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'ingrese contraseña',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass:'rojo',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data:any) => {
            console.log(data);

          }
        }
      ]
    });

    await alert.present();
  }
}
