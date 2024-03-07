CREATE DATABASE tienda;
USE tienda;
CREATE TABLE productos(
id_producto INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombre_producto VARCHAR(45),
precio_producto DOUBLE,
existencia_producto INT,
categoria_producto VARCHAR(40)
);
INSERT INTO productos(nombre_producto,precio_producto,existencia_producto,categoria_producto)
VALUES ('Fantastic Uva',12.5,12,'Refrescos'),
('Fantastic Fresa',12.5,14,'Refrescos'),
('Fantastic Naranja',12.5,22,'Refrescos'),
('Fantastic Cola',12.5,52,'Refrescos'),
('Harina Oro',14.5,12,'Abarrotes'),
('Avena La Campana',17.5,12,'Abarrotes'),
('Cartera de huevos 30 piezas',52,20,'Canasta básica'),
('Puré La Montaña',4.5,14,'Abarrotes'),
('Aceite La Montaña',24.5,22,'Abarrotes'),
('Champiñones La Montaña',16.5,4,'Abarrotes'),
('Arroz Oro',14.5,8,'Abarrotes'),
('Sopa Oro',6.5,12,'Abarrotes'),
('Sal La Marina',4.5,15,'Abarrotes'),
('Leche La Villa',20.5,20,'Cácteos'),
('Jugo de naranja El Sol',14.5,9,'Refrescos');

SELECT*FROM productos;
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
/*CAMBIÉ EL NOMBRE DEL PRODUCTO CON ID 15*/
UPDATE productos SET nombre_producto='Jugo de naranja El Sol' WHERE id_producto=15;
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
/*VEO LOS NOMBRES DE LA TABLA PRODUCTO CON EXCEPCIONES*/
SELECT nombre_producto FROM productos WHERE precio_producto>=20 and existencia_producto>10;
SELECT nombre_producto FROM productos WHERE precio_producto>=15 and categoria_producto='Refrescos';
SELECT nombre_producto FROM productos WHERE precio_producto>=5 and existencia_producto>50;
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
/*USAMOS LIMIT, LIKE Y NOT LIKE*/
SELECT * FROM productos WHERE nombre_producto LIKE '%Fantastic%' LIMIT 1,2;
/*LIMIT 1,2: significa que me mostrará 2 de los productos después del 1 producto*/
SELECT * FROM productos WHERE nombre_producto NOT LIKE '%Fantastic%';
/*PRODUCTOS QUE CONTENGAN LA LETRA "e"*/
SELECT * FROM productos WHERE nombre_producto LIKE '%E%';
/*PRODUCTOS CON 8 CARACTERES*/
SELECT * FROM productos WHERE nombre_producto LIKE '________';
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
/*IN, BETWEEN Y NOT BETWEEN*/
SELECT nombre_producto FROM productos WHERE precio_producto BETWEEN 5 AND 10;
SELECT nombre_producto FROM productos WHERE precio_producto NOT BETWEEN 5 AND 10;
/*IN TAMBIÉN SIRVE PARA FECHAS*/
SELECT * FROM productos WHERE id_producto IN (1,3,6);
/*---------------------------------------------------------*/
/*---------------------------------------------------------*/
/*GROUP BY*/
SELECT categoria_producto, COUNT(*) FROM productos GROUP BY categoria_producto;
SELECT categoria_producto, MAX(precio_producto),MIN(precio_producto) FROM productos GROUP BY categoria_producto;
/*ELIMINÉ LA TABLA*/
DROP TABLE productos;