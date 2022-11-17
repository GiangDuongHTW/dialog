import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {
    private nums: number[] = [1, 2, 3];

    getNums(): Observable<number[]> {
        return of(this.nums);
    }

    addNum(num: number): void {
        this.nums.push(num);
    }

    changeFirst(num: number): void {
        this.nums[0] = num;
    }
}
