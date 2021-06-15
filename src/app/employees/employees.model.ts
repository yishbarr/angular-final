import { Person, Staff } from "../app.model";

export class Employee extends Person implements Staff {
    private _job: string;
    public get job(): string {
        return this._job;
    }
    public set job(value: string) {
        this._job = value;
    }
    private _hoursPerMonth: number;
    public get hoursPerMonth(): number {
        return this._hoursPerMonth;
    }
    public set hoursPerMonth(value: number) {
        this._hoursPerMonth = value > 0 ? value : 1;
    }
    private _hourlyWage: number;
    public get hourlyWage(): number {
        return this._hourlyWage;
    }
    public set hourlyWage(value: number) {
        this._hourlyWage = value > 0 ? value : 1;
    }
}
