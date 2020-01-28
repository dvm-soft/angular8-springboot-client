import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Person} from '../person';
import {PersonService} from '../person.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Observable<Person[]>;

  constructor(private personService: PersonService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.persons = this.personService.getPersonsList();
  }

  deletePerson(id: number) {
    this.personService.deletePerson(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  personDetails(id: number) {
    this.router.navigate(['details', id]);
  }
}
