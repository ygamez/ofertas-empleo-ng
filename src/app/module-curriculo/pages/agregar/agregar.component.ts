import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CurriculoResponse } from '../../interfaces/curriculo.interface';
import { CurriculoService } from '../../services/curriculo.service';
import { AuthService } from '../../../auth/services/auth.service';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

export interface Fruit {
  name: string;
}

interface Genero {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: '',
  // });
  isOptional = false;

  // formNameGroup : FormGroup;

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'Angular'}, {name: 'React'}, {name: 'Django'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
  }

  // get usuario (){
  //   return { ...this.authService.usuario };
  // }
  
  email = new FormControl('', [ Validators.email]);
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  curriculo : CurriculoResponse = {
    experiencialaboral  : '',
    educacion  : '',
    nombre  : '',
    telefono  : '',
    correo  : '',
    // usuarioid :  this.authService.usuario.id || '' ,
  }

  // constructor( private curriculoService: CurriculoService,
  //              private authService: AuthService,
  //              private activatedRoute: ActivatedRoute,
  //              private router : Router,
  //              private snackBar : MatSnackBar,
  //              public dialog : MatDialog,
  //              private _formBuilder: FormBuilder   ) { this.createForm(); }

  ngOnInit() {

    // this.activatedRoute.params
    //     .pipe(
    //       switchMap( ({id })=> this.curriculoService.getCurriculoXId( id ) )
    //     )
    //     .subscribe( curr => this.curriculo = curr );
          
        

  }

  // createForm() {
  //   this.formNameGroup  = this._formBuilder.group({
  //     userName: ['', Validators.required]
  //   });

  //  }

  // guardar(){

  //     if( this.curriculo.nombre.trim().length === 0 ){
  //       return;
  //     }
  //       //actualizar
  //     if ( this.curriculo.id ){
  //       this.curriculoService.actualizarCurriculo( this.curriculo )
  //           .subscribe( curri => {
  //             console.log( 'Editando', curri );
  //             this.mostrarSnackBar( 'Curriculo actualizado' );
  //             this.router.navigate(['/curriculo/curriculo' ]);
  //           })
  //     }
  //     else {
  //       //agregar un registro
  //       this.curriculoService.addCurriculo( this.curriculo )
  //           .subscribe(  resp => {
  //             this.router.navigate(['/curriculo/curriculo', resp.id]);
  //             this.mostrarSnackBar( 'Curriculo creado' );
  //           })
  //     }
  //   }

    // borrar(){

    //   const dialogo = this.dialog.open( ConfirmarComponent, {
    //     width: '400px',
    //     data: { ...this.curriculo } 
    //   } ) ;

    //   dialogo.afterClosed()
    //         .subscribe( resul =>{
    //           if ( resul ){

    //             this.curriculoService.borrarCurriculo( this.curriculo.id )
    //                 .subscribe(
    //                   resul=> {
    //                     this.router.navigate(['/curriculo/curriculo'])
    //                     this.mostrarSnackBar( 'Curriculo eliminado' );
    //                   }
    //                 )}
    //         })
    // }

    // mostrarSnackBar( mensaje : string ): void{
    //   this.snackBar.open( mensaje, 'Ok!', {
    //     duration: 3000,
    //   } )
    // }

    // remove(fruit: Fruit): void {
    //   const index = this.fruits.indexOf(fruit);
  
    //   if (index >= 0) {
    //     this.fruits.splice(index, 1);
    //   }
    // }


    generos: Genero[] = [
      {value: 'F', viewValue: 'Femenino'},
      {value: 'M', viewValue: 'Masculino'},
    ];

  isLinear = true;
  formNameGroup : FormGroup;
  formFormacionGroup : FormGroup;
  formEmailGroup : FormGroup;
  formPhoneGroup : FormGroup;
  constructor(private fb: FormBuilder) { this.createForm(); }
  ngOnit() {}
  createForm() {
  this.formNameGroup  = this.fb.group({
    userName: ['', 
    // Validators.required
  ],
    userGenero: ['', 
    // Validators.required
  ],
    userPiel: ['', 
    // Validators.required
  ],
    userDireccion: ['', 
    // Validators.required
  ],
    userPerfil: [''],
  });

  this.formFormacionGroup  = this.fb.group({
    userFormacion: ['', 
     Validators.required
  ],
    userCentroformador: ['', 
     Validators.required
  ],
  });

  this.formEmailGroup  = this.fb.group({
    emailID: ['', Validators.compose([Validators.required, Validators.email])]
  });
  this.formPhoneGroup  = this.fb.group({
    mobile: ['', Validators.compose([Validators.required, Validators.min(10)])]
  });
  }

}
