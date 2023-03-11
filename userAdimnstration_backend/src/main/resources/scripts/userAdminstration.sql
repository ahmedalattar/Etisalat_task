
drop database if exists user_adminstration;
create database user_adminstration;
use user_adminstration;

CREATE TABLE `privileges` (
  `id` int NOT NULL AUTO_INCREMENT,
  `privilege` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ;

INSERT INTO `privileges` VALUES (1,'READ-ONLY'),(2,'READ-AND-WRITE');

CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `full_name` varchar(40) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
);

INSERT INTO `users` VALUES (1,'Elattar@gmail.com','Elattar','12345'),(2,'mohamed@gmail.com','mohamed','12345'),(3,'ahmed@gmail.com','ahmed','12345');

CREATE TABLE `user_privileges` (
  `email` bigint NOT NULL,
  `privilege_id` int NOT NULL,
  PRIMARY KEY (`email`,`privilege_id`),
  KEY `K_privilege_id` (`privilege_id`),
  CONSTRAINT `FK_privilege_id` FOREIGN KEY (`privilege_id`) REFERENCES `privileges` (`id`),
  CONSTRAINT `FK_email` FOREIGN KEY (`email`) REFERENCES `users` (`id`)
);

INSERT INTO `user_privileges` VALUES (1,1),(1,2),(2,1),(3,2);


