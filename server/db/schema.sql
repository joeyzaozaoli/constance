DROP DATABASE IF EXISTS constance;
CREATE DATABASE constance;
USE constance;

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Schema
* * * * * * * * * * * * * * * * * * * * * * * * * * */

CREATE TABLE companies (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(35),
  PRIMARY KEY (id)
);

CREATE TABLE processes (
  id INT NOT NULL AUTO_INCREMENT,
  company_id INT,
  shortName VARCHAR(5),
  name VARCHAR(45),
  overview TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);

CREATE TABLE controlOwners (
  id INT NOT NULL AUTO_INCREMENT,
  company_id INT,
  title VARCHAR(100),
  name VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);

CREATE TABLE acronyms (
  id INT NOT NULL AUTO_INCREMENT,
  company_id INT,
  acronym VARCHAR(15),
  expansion VARCHAR(100),
  PRIMARY KEY (id),
  FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);

CREATE TABLE sampleSizeMatrix (
  id INT NOT NULL AUTO_INCREMENT,
  company_id INT,
  controlFrequency VARCHAR(50),
  populationSize VARCHAR(50),
  sampleSizeLow VARCHAR(50),
  sampleSizeMedium VARCHAR(50),
  sampleSizeHigh VARCHAR(50),
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

INSERT INTO controlOwners(company_id, title, name) VALUES
(2, 'Director of HR', 'Rachel Whimmy'),
(2, 'AP Manager', 'Michael Johnson'),
(2, 'Senior Director of Treasury', 'Debbie Herrington');

INSERT INTO acronyms(company_id, acronym, expansion) VALUES
(2, 'JE', 'Journal Entry'),
(2, 'Recon', 'Reconciliation'),
(2, 'PM', 'Project Management');

INSERT INTO sampleSizeMatrix(company_id, controlFrequency, populationSize, sampleSizeLow, sampleSizeMedium, sampleSizeHigh) VALUES
(2, 'Annual', '1', '1', '1', '1'),
(2, 'Quarterly', '4', '2', '2', '2'),
(2, 'Monthly', '12', '5', '4', '3');


