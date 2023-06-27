import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PackagesService {
    constructor(private http: HttpClient) { }
    getItems() {
        const apiUrl = 'http://127.0.0.1:8000/api/package-warehouses/chart?time=day&warehouses[]=FRANCE&warehouses[]=PORTUGAL&date_end=2023-06-27&action_ids[]=3&action_ids[]=5&action_ids[]=10&action_ids[]=31&date_start=2023-06-01'; // Replace with your API endpoint URL
        return this.http.get(apiUrl);
    }
}