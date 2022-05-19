class Employee {
    empName: string;

    constructor(name:string){
        this.empName = name;
    }

    getName(){
        console.log(`\n Name of Employee is ${this.empName}`);
    }
}

let emp1 = new Employee("Anamika");
console.log(`\n`, emp1.empName);
emp1.getName();

class Manager extends Employee{

    constructor(name: string){
        super(name)
    }

    getManagerName(){
        this.getName()
    }
}

let m1 = new Manager("abc");
console.log("\n", m1.empName);
m1.getName();
m1.getManagerName();