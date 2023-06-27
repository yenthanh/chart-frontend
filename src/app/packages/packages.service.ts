import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { PackageResponse } from './../_models/packages'; // Import the Item model


@Injectable({ providedIn: 'root' })
export class PackagesService {
    constructor(private http: HttpClient) { }
    getItems(): Observable<PackageResponse> {
        const apiUrl = 'http://127.0.0.1:8000/api/package-warehouses/chart?time=day&warehouses[]=FRANCE&warehouses[]=PORTUGAL&date_start=2023-06-01&date_end=2023-06-15&action_ids[]=3&action_ids[]=5&action_ids[]=10&action_ids[]=31&action_ids[]=12&action_ids[]=14&action_ids[]=20&action_ids[]=23&action_ids[]=36'; // Replace with your API endpoint URL
        return this.http.get<PackageResponse>(apiUrl);
    }
}