/*INICAR BASE DE DATOS*/
CREATE DATABASE game_box;

USE game_box;

CREATE TABLE User(
    idUser INT auto_increment,
    nickname VARCHAR (10) NOT NULL,
    passwrd VARCHAR (10) NOT NULL,
    PRIMARY KEY (idUser)
);

CREATE TABLE Ranking(
    idRank INT auto_increment,
    id_user INT NOT NULL,
    score INT NOT NULL,
    PRIMARY KEY (idRank),
    FOREIGN KEY(id_user) REFERENCES User(idUser)
);

CREATE TABLE Medal(
    idM INT auto_increment,
    tp VARCHAR (30) NOT NULL,
    descriptn VARCHAR (100) NOT NULL,
    PRIMARY KEY (idM)
);

CREATE TABLE MedalTable(
    idMT INT auto_increment,
    id_user INT NOT NULL,
    id_medal INT NOT NULL,
    PRIMARY KEY (idMT),
    FOREIGN KEY(id_medal) REFERENCES Medal(idM)
);

CREATE TABLE Game(
    idGame INT auto_increment,
    nameGame VARCHAR (100) NOT NULL,
    passwrd VARCHAR (10) NOT NULL,
    descriptn VARCHAR (100) NOT NULL,
    PRIMARY KEY (idGame)
);

CREATE TABLE ResorcesGI(
    idRGI INT auto_increment,
    id_game INT NOT NULL,
    img LONGBLOB NOT NULL,
    PRIMARY KEY (idRGI),
    FOREIGN KEY(id_game) REFERENCES Game(idGame) 
);

CREATE TABLE ResorcesGD(
    idRGD INT auto_increment,
    id_game INT NOT NULL,
    dataGD VARCHAR(100) NOT NULL,
    PRIMARY KEY (idRGD),
    FOREIGN KEY(id_game) REFERENCES Game(idGame) 
);

CREATE TABLE Notification(
    idNot INT auto_increment,
    id_user INT NOT NULL,
    id_game INT NOT NULL,
    descriptn VARCHAR (100) NOT NULL,
    PRIMARY KEY (idNot),
    FOREIGN KEY(id_user) REFERENCES User(idUser),
    FOREIGN KEY(id_game) REFERENCES Game(idGame)   
);

CREATE TABLE Scores(
    idScore INT auto_increment,
    id_user INT NOT NULL,
    id_game INT NOT NULL,
    score INT NOT NULL,
    PRIMARY KEY (idScore),
    FOREIGN KEY(id_user) REFERENCES User(idUser),
    FOREIGN KEY(id_game) REFERENCES Game(idGame)   
);

CREATE TABLE Comment(
    idComm INT auto_increment,
    id_user INT NOT NULL,
    id_game INT NOT NULL,
    information VARCHAR (100) NOT NULL,
    PRIMARY KEY (idComm),
    FOREIGN KEY(id_user) REFERENCES User(idUser),
    FOREIGN KEY(id_game) REFERENCES Game(idGame)   
);

CREATE TABLE GameBox(
    idGB INT auto_increment,
    id_user INT NOT NULL,
    id_game INT NOT NULL,
    PRIMARY KEY (idGB),
    FOREIGN KEY(id_user) REFERENCES User(idUser),
    FOREIGN KEY(id_game) REFERENCES Game(idGame)   
);