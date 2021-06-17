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

    constructor(
        id: string | number,
        name: string,
        age: number,
        city: string,
        photo: string,
        job: string, hoursPerMonth: number,
        wage: number
    ) {
        super(id, name, age, city, photo);
        this.job = job;
        this.hoursPerMonth = hoursPerMonth;
        this.hourlyWage = wage;
    }
}
