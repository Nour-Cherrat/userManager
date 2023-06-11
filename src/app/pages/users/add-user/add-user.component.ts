import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import {UsersService} from "../../../services/users.service";


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  public formData!: FormGroup;
  private users: any[] = [];

  constructor(private http: HttpClient,
              private router: Router,
              private usersService: UsersService) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      lastName : new FormControl("", Validators.required),
      firstName : new FormControl("", Validators.required),
      email : new FormControl("", Validators.required),
      job : new FormControl("", Validators.required),
      numTel : new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern(/^[0-9]{10}/)
      ]))

      /*
      password : new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-zA-Z]\w{3,14}$/)
      ]))
       */
    })
  }



  onClickSubmit(user: any) {
    console.log("VALUE :", this.formData.value);

    const userData = this.formData.value;

    this.http.post('https://reqres.in/api/users', userData).pipe(
      tap(response => {
        console.log('Enregistrement réussi :', response);
        this.usersService.addUser(userData);
        this.users.push(userData); // Add the new user to the local users array
        const usersLength = this.users.length;
        console.log('Users length:', usersLength);
        console.log('Users:', this.users);

        this.router.navigate(['/users']);
      }),
      catchError(error => {
        console.log('Erreur lors de l enregistrement :', error);
        throw error;
      })
    ).subscribe();
  }

  private fetchUpdatedUserList(): void {
    this.usersService.getUsers(1).subscribe(
      users => {
        this.users = users; // Update the local users array with the fetched user list
        const usersLength = this.users.length;
        console.log('Users length:', usersLength);
      },
      error => {
        console.log('Error fetching user list:', error);
      }
    );
  }



  /*
  email: string = '';
  nom: string = '';

  ngOnInit(): void {
  }

  onClickSubmit(value: any) {
    console.log("VALUE :", value);

    console.log('Form submitted!');
    console.log('Email:', this.email);
    console.log('Nom:', this.nom);
  }
  */



}
