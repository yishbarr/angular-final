import { SchoolClass } from "../app.model";
import { TEACHERS } from "../teachers/dummy-data-teachers";
import { Pupil } from "./pupils.model";
const CLASSES = [
    new SchoolClass(2, "Class 2", TEACHERS[0], 20, "Room 2"),
    new SchoolClass(1, "Class 1", TEACHERS[2], 20, "Room 1"),
    new SchoolClass(3, "Class 3", TEACHERS[5], 20, "Room 3"),
]
export const PUPILS:Pupil[] = [
    new Pupil(23423, "Boris Sholkov", 18, "Migdal HaEmek", "", CLASSES[0], [{ grade: 100, prof: "Maths" }, { grade: 98, prof: "Science" }, { grade: 97, prof: "Tanach" }]),
    new Pupil(2653423, "Yishai Barr", 17, "Bet Shemesh", "", CLASSES[1], [{ grade: 99, prof: "Maths" }]),
    new Pupil(3653423, "Shai Zaltzman", 18, "Hadera", "", CLASSES[2], [{ grade: 98, prof: "Maths" }]),
    new Pupil(65423, "Yosef Schreider", 16, "Hashmonaim", "", CLASSES[0], [{ grade: 97, prof: "Maths" }]),
    new Pupil(8976523, "Harel Eliyahu", 18, "Bet Shemesh", "", CLASSES[1], [{ grade: 98, prof: "Maths" }]),
    new Pupil(4354363, "Yonatan Altman", 13, "Nechusha", "", CLASSES[2], [{ grade: 99, prof: "Maths" }]),
    new Pupil(9573, "Gordon Freeman", 14, "Black Mesa", "", CLASSES[1], [{ grade: 100, prof: "Maths" }]),
    new Pupil(2523, "Eli Vance", 17, "Black Mesa", "", CLASSES[0], [{ grade: 95, prof: "Maths" }]),
]