import { SchoolClass } from "./app.model";
import { TEACHERS } from "./teachers/dummy-data-teachers";

export const CLASSES = [
    new SchoolClass(1, "Class 1", TEACHERS[2], 20, "Room 1"),
    new SchoolClass(2, "Class 2", TEACHERS[0], 20, "Room 2"),
    new SchoolClass(3, "Class 3", TEACHERS[5], 20, "Room 3"),
]