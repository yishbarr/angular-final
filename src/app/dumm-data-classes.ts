import { SchoolClass } from "./app.model";
import { TEACHERS } from "./teachers/dummy-data-teachers";

export const CLASSES = [
    new SchoolClass(2, "Maths", TEACHERS[0], 20, "Room 2"),
    new SchoolClass(1, "Science", TEACHERS[2], 20, "Room 1"),
    new SchoolClass(3, "Astronomy", TEACHERS[5], 20, "Room 3"),
]