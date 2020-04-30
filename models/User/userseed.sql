DROP DATABASE IF EXISTS Users_DB;
CREATE database Users_DB;
USE Users_DB;

CREATE TABLE user (
 id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR (100) NOT NULL,
  jedi BOOLEAN DEFAULT false,
  sith BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
); 

SELECT * FROM user WHERE id = 1;

SELECT * FROM user;
SELECT * FROM user;

DELETE FROM user WHERE name = "fanuel";

SELECT * FROM user WHERE id = 5;
 DELETE FROM user WHERE id = 1;
 INSERT INTO user (name,jedi,sith) VALUES ("rob",true,false);
  
DELETE FROM users WHERE sith= true;
 
  
 SELECT jedi FROM user WHERE id = 1;
SELECT sith from user WHERE id = 1;
 SELECT * FROM user WHERE sith = true;
SELECT name FROM user WHERE sith = true;
SELECT name FROM user WHERE sith = true;

INSERT INTO user (name,jedi,sith) VALUES ('manny',true,false);
INSERT INTO user (name,jedi,sith) VALUES ("new",false,true);

INSERT INTO user (name,jedi,sith)
VALUES("yoda",true,default),
 ("darth-vader",default,true),
 ("obi-wan kanobi",true,default);


 


