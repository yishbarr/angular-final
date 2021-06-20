import { Observable } from "rxjs";
import { Pupil } from "./pupils/pupils.model";
import { Teacher } from "./teachers/teachers.model";

export class Person {
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value + "";
    }
    private _fullname: string;
    public get fullname(): string {
        return this._fullname;
    }
    public set fullname(value: string) {
        this._fullname = value;
    }
    private _age: number;
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value > 0 && value < 130 ? value : 18;
    }
    private _city: string;
    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }
    private _photo: string;
    public get photo(): string {
        return this._photo;
    }
    public set photo(value: string) {
        this._photo = value;
    }
    constructor(id: string | number, name: string, age: number, city: string, photo: string) {
        this.id = id + "";
        this.fullname = name;
        this.age = age;
        this.city = city;
        this.photo = photo;
    }
}
export class SchoolClass {
    private _id: string;
    public get id(): string | number {
        return this._id;
    }
    public set id(value: string | number) {
        this._id = value + "";
    }
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _mainTeacher: Teacher;
    public get mainTeacher(): Teacher {
        return this._mainTeacher;
    }
    public set mainTeacher(value: Teacher) {
        this._mainTeacher = value;
    }
    private _numOfPupils: number;
    public get numOfPupils(): number {
        return this._numOfPupils;
    }
    public set numOfPupils(value: number) {
        this._numOfPupils = value;
    }
    private _indoorLocation: string;
    public get indoorLocation(): string {
        return this._indoorLocation;
    }
    public set indoorLocation(value: string) {
        this._indoorLocation = value;
    }
    constructor(id: string | number, name: string, mainTeacher: Teacher, numOfPupils: number, location: string) {
        this.id = id;
        this.name = name;
        this.mainTeacher = mainTeacher;
        this.numOfPupils = numOfPupils;
        this.indoorLocation = location;
    }
}

export interface Staff {
    hoursPerMonth: number;
    hourlyWage: number;
}
export interface Editor {
    applyChanges(): void;
}
export interface iGetClasses {
    getClasses(): Observable<SchoolClass[]>;
}
export interface iGetPupils{
    getPupils():Observable<Pupil[]>
}