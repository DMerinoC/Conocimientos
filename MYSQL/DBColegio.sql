CREATE DATABASE Colegio;
USE Colegio;
CREATE TABLE Alumnos (
    id_alumno INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Nombre VARCHAR(45) NOT NULL,
    Apellido VARCHAR(45) NOT NULL,
    Edad INT,
    Grado VARCHAR(20),
    Aula VARCHAR(20),
    Aprobado BIT,
    Cantidad_Cursos INT,
    Matriculado BIT,
    id_aula INT
);
CREATE TABLE Profesores(
	id_profesor INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	Nombre VARCHAR(45) NOT NULL,
	Apellido VARCHAR(45) NOT NULL,
	Edad INT,
	Grado_academico VARCHAR(20),
    Aulas_a_cargo INT,
    Tutor BIT,
    Estado BIT
);
CREATE TABLE Aulas(
	id_aula INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	Asientos int,
    Estado BIT
);
CREATE TABLE Cursos (
    id_curso INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Curso VARCHAR(30),
    Estado BIT
);

INSERT INTO Alumnos(Nombre,Apellido,Edad,Grado,Aula,Aprobado,Cantidad_Cursos,Matriculado)
VALUES ('Luis','Canevaro',13,'Tercero','A',1,9,1),
('Alma','Caplo',12,'Segundo','B',1,8,1),
('Pedro','Feswuin',15,'Quinto','A',1,10,1),
('Jinx','Licsna',15,'Quinto','A',1,10,1),
('Esmeralda','Perpef',15,'Quinto','A',1,10,1),
('Juan','Cervantes',12,'Segundo','A',1,8,1);

INSERT INTO Profesores(Nombre,Apellido,Edad,Grado_academico,Aulas_a_cargo,Tutor,Estado)
VALUES ('Francisco','Lamentos',33,'Magister',5,1,1),
('Rodolfo','Casas',26,'Bachiller',4,1,1),
('Miguel','Alfaro',61,'Doctor',6,1,1),
('Carlos','Dimitri',44,'Doctor',6,1,1);

INSERT INTO Aulas(Asientos,Estado)
VALUES (25,1),(25,1),(25,1),(25,1),(25,1),(25,1);

INSERT INTO Cursos(Curso,Estado)
VALUES ('Matemática',1),('Física',1),('Historia',1),('Literatura',1),('Biología',1),('Filosofía',1);

-- AGREGUÉ UNA NUEVA COLUMNA A LA TABLA ALUMNOS
ALTER TABLE Alumnos ADD COLUMN id_aula INT;
-- LE DI EL VALOR DE LLAVE FORANEA A ESA COLUMNA
ALTER TABLE Alumnos ADD FOREIGN KEY (id_aula) REFERENCES Aulas (id_aula);
-- TENGO QUE MODIFICAR LAS AULAS DE LOS ALUMNOS CON ID 3456 EL 6 TIENE QUE SER DIFERENTE POR ESTAR EN UN GRADO DISTINTO
UPDATE Alumnos SET Aula='C' WHERE id_alumno=3;
UPDATE Alumnos SET Aula='C' WHERE id_alumno=4;
UPDATE Alumnos SET Aula='C' WHERE id_alumno=5;
UPDATE Alumnos SET Aula='B' WHERE id_alumno=6;
-- AHORA MODIFICO LAS AULAS QUE COMPARTEN LOS ALUMNOS, UTILIZANDO LA LLAVE FORANEA
UPDATE Alumnos SET id_aula=1 WHERE id_alumno=1;
UPDATE Alumnos SET id_aula=2 WHERE id_alumno=2;
UPDATE Alumnos SET id_aula=3 WHERE id_alumno=3;
UPDATE Alumnos SET id_aula=3 WHERE id_alumno=4;
UPDATE Alumnos SET id_aula=3 WHERE id_alumno=5;
UPDATE Alumnos SET id_aula=2 WHERE id_alumno=6;
SELECT*FROM Alumnos;