DROP DATABASE IF EXISTS constance;
CREATE DATABASE constance;
USE constance;

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Schema
* * * * * * * * * * * * * * * * * * * * * * * * * * */

CREATE TABLE companies (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(35),
  UNIQUE (name),
  PRIMARY KEY (id)
);

CREATE TABLE processes (
  id INT NOT NULL AUTO_INCREMENT,
  company_id INT,
  shortName VARCHAR(5),
  name VARCHAR(45),
  overview TEXT,
  UNIQUE (shortName),
  PRIMARY KEY (id),
  FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Dummy Data
* * * * * * * * * * * * * * * * * * * * * * * * * * */

INSERT INTO companies(name) VALUES ('Apple'), ('Orange');

INSERT INTO processes(company_id, shortName, name, overview) VALUES
(2, 'HRP', 'Human Resources & Payroll', 'The Company has a hiring process in place to ensure quality of talents.'),
(2, 'PTP', 'Procure-to-Pay', 'The Company maintains an authorization matrix for approvals of purchase requisitions and purchase orders.'),
(2, 'TCM', 'Treasury & Cash Management', 'Investments are required to be in compliance with the Company\'s Investment Policy.');
