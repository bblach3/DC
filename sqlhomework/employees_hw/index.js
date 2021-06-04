const pgp = require('pg-promise')();

const db = pgp('postgress://localhost:5432/employees_database');


const findAny= () => {
    return db.any(`select first_name, last_name from employees.employee`)
     .then(employee => {
         return employee;
     })
     .catch(err => console.log(err))
 }


const NumberOfEmployees= () => {
    return db.any(`SELECT COUNT(first_name) FROM employees.employee`)
     .then(employee => {
         return employee;
     })
     .catch(err => console.log(err))
 }

const HighestSalary= () => {
    return db.any(`SELECT MAX(amount) FROM employees.salary`)
     .then(employee => {
         return employee;
     })
     .catch(err => console.log(err))
 }
 
const DepartmentNames= () => {
    return db.any(`SELECT dept_name FROM employees.department`)
     .then(dept => {
         return dept;
     })
     .catch(err => console.log(err))
 }
 
const JobTitles= () => {
    return db.any(`SELECT COUNT(DISTINCT title) FROM employees.title`)
     .then(job => {
         return job;
     })
     .catch(err => console.log(err))
 }
 
const TopTen= () => {
    return db.any(`
    SELECT salary.amount, employee.first_name, employee.last_name FROM employees.employee
    INNER JOIN employees.salary
    ON employees.salary.employee_id = employees.employee.id
    ORDER BY salary.amount DESC LIMIT 10`
    )
     .then(name => {
         return name;
     })
     .catch(err => console.log(err))
 }
 
const LastEmployee= () => {
    return db.any(`
    SELECT employee.first_name, employee.last_name, employee.hire_date, dept_name FROM employees.employee
    INNER JOIN employees.department_employee
    ON employees.department_employee.employee_id = employees.employee.id
    INNER JOIN employees.department
    ON employees.department_employee.department_id = employees.department.id
    ORDER BY employee.hire_date DESC LIMIT 1`
    )
     .then(name => {
         return name;
     })
     .catch(err => console.log(err))
 }
 
 
 
 async function main() {

//    const name = await findAny();
//    console.log(name);

    // const numofemployees = await NumberOfEmployees();
    // console.log(numofemployees);

    // const maxsalary = await HighestSalary();
    // console.log(maxsalary);

    // const names = await DepartmentNames();
    // console.log(names);

    // const titles = await JobTitles();
    // console.log(titles);

    // const names = await TopTen();
    // console.log(names);

    const name = await LastEmployee();
    console.log(name);

 }
 main();