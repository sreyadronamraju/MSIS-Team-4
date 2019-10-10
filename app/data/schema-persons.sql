USE msis_Team4;

CREATE TABLE Cert (
    certID INTEGER PRIMARY KEY AUTO_INCREMENT,
    certName VARCHAR(64),
    certAgency VARCHAR (64),
    expPeriod INTEGER (2),
    FOREIGN KEY (PersonCert) REFERENCES PersonCert(PersonIDcertID)
);

INSERT INTO Cert (certID, certName, certAgency, expPeriod) VALUES
(1, "firefighter", "RedCross", 4);

CREATE TABLE PersonCert (
    PersonCertID INTEGER PRIMARY KEY AUTO_INCREMENT,
    FOREIGN KEY (Cert) REFERENCES Cert (CertID),
    FOREIGN KEY (Person) REFERENCES Person(personID),
    certDate DATE

);

INSERT INTO PersonCert (personCertID, certID, personID, certDate) VALUES
(1,1, 1, 2018-10-10)
