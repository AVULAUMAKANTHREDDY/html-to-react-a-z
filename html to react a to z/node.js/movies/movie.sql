CREATE TABLE director (
    director_id	INTEGER PRIMARY KEY AUTOINCREMENT,
    director_name	TEXT
);

PRAGMA TABLE_INFO(director);

INSERT INTO 
    director(director_name)
VALUES
  
('Parasuram'),
('Trivikram Srinivas'),
('Puri Jagannadh'),
('Vamshi Paidipally'),
('Koratala Siva'),
('Puri Jagannadh'),
('A. R. Murugadoss'),
('Sukumar'),
('Trivikram Srinivas'),
('Srinu Vaitla'),
('S.J.Surya'),
('Gunasekhar'),
('Krishna Vamsi')





SELECT*FROM director



CREATE TABLE movie (
    movie_id	INTEGER PRIMARY KEY AUTOINCREMENT,
    director_id	INTEGER,
    movie_name	TEXT,
    lead_actor	TEXT,
    CONSTRAINT FK_director_id FOREIGN KEY (director_id) REFERENCES director (director_id) ON DELETE CASCADE
);


PRAGMA TABLE_INFO(movie);
 
INSERT INTO 
    movie(director_id,movie_name,lead_actor)
VALUES
   
    
(1,'Sarkaru Vaari Paata','maheshbabu'),
(1,'Guntur Kaaram','maheshbabu'),
(2,'Sarileru Neekevvaru','maheshbabu'),
(2,'Maharshi','maheshbabu'),
(3,'Srimanthudu','maheshbabu'),
(3,'Businessman','maheshbabu'),
(4,'Spyder','maheshbabu'),
(4,'1: Nenokkadine','maheshbabu'),
(5,'Athadu','maheshbabu'),
(5,'Dookudu','maheshbabu'),
(6,'Naani','maheshbabu'),
(7,'Okkadu','maheshbabu'),
(8,'Murari','maheshbabu')
   

SELECT*FROM movie

SELECT movie_name FROM movie WHERE director_id = 2;




























-- CONSTRAINT FK_director_id FOREIGN KEY (director_id) REFERENCES director (director_id) ON DELETE CASCADE