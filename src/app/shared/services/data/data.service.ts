import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Client } from '../../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  client: BehaviorSubject<Client>;
  constructor() {
    this.client = new BehaviorSubject(new Client());
  }

  nextClient(client: Client) {
    this.client.next(client);
  }
}
