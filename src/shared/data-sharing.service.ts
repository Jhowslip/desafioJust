import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataSharingService {
    public data: any;
    public currentAccount = undefined;

    public dataToShare = new BehaviorSubject(this.data);
    dataShared = this.dataToShare.asObservable();



    constructor() { }

    setValue(data: any) {
        this.dataToShare.next(data)
    }


}