CREATE TABLE Messages (
    id int NOT NULL AUTO_INCREMENT,
    titleMessage varchar(255),
    messageField varchar(255),
    imgField LONGTEXT,
    PRIMARY KEY (id)
)  ENGINE=MyISAM;


INSERT INTO Messages values(1,1,"TesteTitulo", "TesteCampoMessagem", "PHOTO");
INSERT INTO Messages values(2,2,"TesteTitulo2", "TesteCampoMessagem2", "PHOTO2");