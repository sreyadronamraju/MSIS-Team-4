USE msis_Team4;

CREATE TABLE Cert (
    certID VARCHAR(64) PRIMARY KEY,
    certName VARCHAR(64),
    certAgency VARCHAR (64),
    expPeriod INTEGER (2)
    personIDcertID
);

INSERT INTO Cert (certID, certName, certAgency, expPeriod) VALUES

CREATE TABLE PersonCert (
    personIDCertID INTEGER PRIMARY KEY AUTO_INCREMENT,
    certID VARCHAR(64),
    personID VARCHAR (64),
    certDate DATE

);

INSERT INTO PersonCert (personIDCertID, certID, personID, certDate) VALUES
