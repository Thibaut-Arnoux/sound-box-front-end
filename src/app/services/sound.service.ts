import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISound } from '../models/sound.model';

// TODO dotenv
const protocol : String = 'http';
const host : String = 'localhost';
const port : String = '3000';
const url : String = '/api';
const service_url : String = '/sound';
const API = `${protocol}://${host}:${port}${url}${service_url}`;

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  constructor(
    private http: HttpClient
  ) { }

  createNewSoundWithFile(sound: ISound, audio: File) {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('sound', JSON.stringify(sound));
      formData.append('audio', audio);

      this.http.post(API, formData).subscribe(
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
