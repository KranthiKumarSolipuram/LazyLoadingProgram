export class Qualification{
    name! : string;
    university! : string;
    yearOfPass! : string;
    percentage! : string;
}

export class Student{
    stuNumber !: number;
    stuName !: string;
    studdob !: string;
    qualification : Qualification[]=[];
}