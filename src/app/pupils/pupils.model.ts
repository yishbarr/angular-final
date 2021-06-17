import { Person, SchoolClass } from "../app.model";

export class Pupil extends Person {
    private _schoolClass: SchoolClass;
    public get schoolClass(): SchoolClass {
        return this._schoolClass;
    }
    public set schoolClass(value: SchoolClass) {
        this._schoolClass = value;
    }
    private _grades: Grade[];
    public get grades(): Grade[] {
        return this._grades;
    }
    public set grades(value: Grade[]) {
        if (value.length > 3)
            value.length = 3
        this._grades = value;
    }
    constructor(
        id: string | number,
        name: string,
        age: number,
        city: string,
        photo: string,
        schoolClass: SchoolClass,
        grades: Grade[] = []
    ) {
        super(id, name, age, city, photo);
        this.schoolClass = schoolClass;
        this.grades = grades;
    }
}
export interface Grade {
    prof: string;
    grade: number;
}