interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key:string]:any
}

interface Directors extends Teacher {
    fullTimeEmployee: boolean;
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string) {
    return `${firstName[0]}. ${lastName}`
}

interface StudentConstructor {
	new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}

const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;

	constructor (firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework() {
		return 'Currently working';
	}

	displayName() {
		return `${this.firstName}`;
	}
}

export {
	printTeacher,
	StudentClass
}

const obj:StudentClassInterface = new StudentClass('Jordan', 'Peterson');
console.log(obj);
