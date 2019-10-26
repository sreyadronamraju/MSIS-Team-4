-- USE msis_triage;

-- CREATE TABLE Patient (
--     patientGuid VARCHAR(64) PRIMARY KEY,
--     firstName VARCHAR(64),
--     lastName VARCHAR(64),
--     dob DATE DEFAULT NULL,
--     sexAtBirth CHAR(1) DEFAULT ''
-- );

CREATE TABLE Person (
    personID INTEGER PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(64),
    lastName VARCHAR(64),
    sexAtBirth CHAR(1) DEFAULT '',
    dob DATE DEFAULT NULL,
    phoneNumber VARCHAR(14),
    email VARCHAR(64),
    dateHired DATE DEFAULT NULL,
    position VARCHAR(64),
    isActive boolean DEFAULT TRUE,
    radioNumber INTEGER,
    stationNumber INTEGER

);

INSERT INTO Person (firstName, lastName, sexAtBirth, dob, phoneNumber,email, dateHired, position, isActive, radioNumber, stationNumber) VALUES
('Bobby','Jones','M','1902-03-17','555-555-1234','bjones@augusta.com','2015-08-08','Firefighter',TRUE,24,18),
('Sam','Snead','M','1912-05-27','555-123-5599','Sam.Snead1@gmail.com','2015-08-08','EMT',TRUE,25,18),
('Jack','Nicklaus','M','1940-01-21','555-233-1248','mostmajors18@goldenbear.com','2015-08-08','Firefighter',TRUE,26,18),
('Arnold','Palmer','M','1929-09-10','555-777-6565','icedtealemonade@ygmail.com','2015-08-08','EMT',TRUE,27,18),
('Lee','Trevino','M','1939-12-01','555-312-819','vinoman39@yahoo.com','2015-08-08','Firefighter',FALSE,14,18),
('Payne','Stewart','M','1957-01-30','555-404-5896','knickers30@yahoo.com','2015-08-08','EMT',TRUE,17,18),
('Ben','Hogan','M','1912-08-13','555-505-7787','bhogan@gmail.com','2015-08-08','Firefighter',TRUE,05,18);

-- INSERT INTO Patient (patientGuid, firstName, lastName, dob, sexAtBirth) VALUES
-- ("SOME-REALLY-LONG-1234", "Sylvia", "Hernandez", "2012-09-01",  "F"),
-- ("SOME-REALLY-SHORT-5678", "Vish", "Balasubramanian", "1950-12-15",  "M"),
-- ("SOME-UNIQUE-ABCDE1", "J", "Doe", "1950-00-00",  ""),
-- ("SOME-DUMMY-DATA", "Pepper", "Potts", "1990-01-31",  "F");
--
-- CREATE TABLE PatientVisit (
--     visitId INTEGER PRIMARY KEY AUTO_INCREMENT,
--     patientGuid VARCHAR(64) UNIQUE,
--     visitDescription TEXT NOT NULL,
--     visitDateUtc DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     priority ENUM('low', 'medium', 'high') NOT NULL DEFAULT 'low'
--
-- );
--
-- INSERT INTO PatientVisit (visitId, patientGuid, visitDescription) VALUES
-- (1, 'SOME-REALLY-LONG-1234', 'Anxiety from D&S');

