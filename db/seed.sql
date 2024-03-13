use employees;

INSERT INTO department (name) VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role (title, salary, department_id) VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Data Engineer', 150000, 2),
    ('Software Engineer (SWE)', 120000, 2),
    ('Accountants', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Bucky', 'McDonald', 1, NULL),
    ('Bucky', 'McDonald', 2, 1),
    ('Bucky', 'McDonald', 3, NULL),
    ('Bucky', 'McDonald', 4, 3),
    ('Bucky', 'McDonald', 3, NULL),
    ('Bucky', 'McDonald', 4, 3),
    ('Bucky', 'McDonald', 5, 3),
    ('Bucky', 'McDonald', 6, NULL),
    ('Bucky', 'McDonald', 7, 6),
    ('Bucky', 'McDonald', 6, NULL);