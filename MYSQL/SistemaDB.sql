CREATE DATABASE Sistema;
Use Sistema;
CREATE TABLE `Personas` (
  `nCodigoPersona` int PRIMARY KEY,
  `cNombres` varchar(255),
  `cDNI` varchar(255),
  `dFechaNacimiento` datetime,
  `dFechaRegistro` datetime,
  `lEstado` bit
);

CREATE TABLE `Usuarios` (
  `nCodigoUsuario` int PRIMARY KEY,
  `cNombreUsuario` varchar(255),
  `cContrasena` varchar(255),
  `dFechaVencimiento` datetime,
  `lEstado` bit,
  `nCodigoPersona` int
);

CREATE TABLE `Menus` (
  `nCodigoMenu` int PRIMARY KEY,
  `cDescripcion` varchar(255),
  `lTransaccion` bit,
  `lEstado` bit
);

CREATE TABLE `Perfiles` (
  `nCodigoPerfil` int PRIMARY KEY,
  `cDescripcion` varchar(255),
  `lEstado` bit
);

CREATE TABLE `MenusPorPerfiles` (
  `Codigo` int PRIMARY KEY,
  `nCodigoMenu` int,
  `nCodigoPerfil` int,
  `lEstado` bit
);

CREATE TABLE `PerfilesPorUsuario` (
  `Codigo` int PRIMARY KEY,
  `nCodigoUsuario` int,
  `nCodigoPerfil` int,
  `lEstado` bit
);

ALTER TABLE `Usuarios` ADD FOREIGN KEY (`nCodigoPersona`) REFERENCES `Personas` (`nCodigoPersona`);
ALTER TABLE `PerfilesPorUsuario` ADD FOREIGN KEY (`nCodigoUsuario`) REFERENCES `Usuarios` (`nCodigoUsuario`);
ALTER TABLE `PerfilesPorUsuario` ADD FOREIGN KEY (`nCodigoPerfil`) REFERENCES `Perfiles` (`nCodigoPerfil`);
ALTER TABLE `MenusPorPerfiles` ADD FOREIGN KEY (`nCodigoMenu`) REFERENCES `Menus` (`nCodigoMenu`);
ALTER TABLE `MenusPorPerfiles` ADD FOREIGN KEY (`nCodigoPerfil`) REFERENCES `Perfiles` (`nCodigoPerfil`);