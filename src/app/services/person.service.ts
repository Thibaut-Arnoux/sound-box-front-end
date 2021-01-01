import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPerson } from '../models/person.model';

// TODO dotenv
const protocol : String = 'http';
const host : String = 'localhost';
const port : String = '3000';
const url : String = '/api';
const service_url : String = '/person';
const API = `${protocol}://${host}:${port}${url}${service_url}`;

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http: HttpClient
  ) { }

  createPerson(person: IPerson) {
    return new Promise((resolve, reject) => {
      this.http.post(API, person).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getAllPerson() {
    return new Promise((resolve, reject) => {
      this.http.get(API).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
