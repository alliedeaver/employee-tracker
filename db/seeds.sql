INSERT INTO department (name)
VALUES ("Human Resources"),
       ("Management"),
       ("Marketing"),
       ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Human Resources Rep", 80000, 1),
       ("Manager", 120000, 2),
       ("Marketing Head", 90000, 3),
       ("Sales Manager", 85000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Allie", "Deaver", 2, NULL),
       ("Linda", "Vuong", 3, 1),
       ("Brooke", "Deaver", 1, 1),
       ("Chan", "Nguyen", 4, 1);




