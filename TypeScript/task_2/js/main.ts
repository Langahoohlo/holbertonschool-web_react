// Unified interface for both Director and Teacher
interface EmployeeInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

class Director implements EmployeeInterface {
	workFromHome(): string {
		return 'Working from home';
	}

	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}

	workDirectorTasks(): string {
		return 'Getting to director tasks';
	}
}

class Teacher implements EmployeeInterface {
	workFromHome(): string {
		return 'Cannot work from home';
	}

	getCoffeeBreak(): string {
		return 'Cannot have a break';
	}

	workDirectorTasks(): string {
		return 'Getting to work';
	}
}

function createEmployee(salary: number): Director | Teacher {
	return salary < 500 ? new Teacher() : new Director();
}

function isDirector(employee: EmployeeInterface): employee is Director {
	return employee instanceof Director;
}

function executeWork(employee: EmployeeInterface): string {
	return employee.workDirectorTasks();
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
	return `Teaching ${todayClass}`;
}

export {
	Director,
	Teacher,
	createEmployee,
	isDirector,
	executeWork,
	teachClass,
};
