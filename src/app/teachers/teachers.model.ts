import { Person, SchoolClass, Staff } from "../app.model";

export class Teacher extends Person implements Staff {
    private _prof: string;
    public get prof(): string {
        return this._prof;
    }
    public set prof(value: string) {
        this._prof = value;
    }
    private _classes: SchoolClass[];
    public get classes(): SchoolClass[] {
        return this._classes;
    }
    public set classes(value: SchoolClass[]) {
        this._classes = value;
    }
    private _seniority: number;
    public get seniority(): number {
        return this._seniority;
    }
    public set seniority(value: number) {
        this._seniority = value >= 0 ? value : 0;
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
        prof: string,
        seniority: number,
        hoursPerMonth: number,
        wage: number,
        classes: SchoolClass[] = []
    ) {
        super(id, name, age, city, photo);
        this.prof = prof;
        this.classes = classes;
        this.seniority = seniority;
        this.hoursPerMonth = hoursPerMonth;
        this.hourlyWage = wage;
    }
}