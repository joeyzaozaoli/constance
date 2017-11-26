DROP DATABASE IF EXISTS constance;

CREATE DATABASE constance;

USE constance;

CREATE TABLE processes (
  id INT NOT NULL AUTO_INCREMENT,
  acronym VARCHAR(5),
  expansion VARCHAR(45),
  overview TEXT,
  UNIQUE (acronym),
  PRIMARY KEY (id)
);

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Dummy Data
* * * * * * * * * * * * * * * * * * * * * * * * * * */

INSERT INTO processes(acronym, expansion, overview) VALUES
('HRP', 'Human Resources & Payroll', 'The Company has a hiring process in place to ensure quality of talents.'),
('PTP', 'Procure-to-Pay', 'The Company maintains an authorization matrix for approvals of purchase requisitions and purchase orders.'),
('TCM', 'Treasury & Cash Management', 'Investments are required to be in compliance with the Company\'s Investment Policy.');
