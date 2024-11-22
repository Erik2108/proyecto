-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: personalchef
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `id_producto` int unsigned NOT NULL,
  `nombre` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `descripcion` varchar(300) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `precio` int DEFAULT NULL,
  `categoria` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `imagen_url` mediumtext COLLATE utf8mb4_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'Pizza Margarita','Pizza clásica con tomate, mozzarella y albahaca',25000,'Comida Chatarra','https://images-ext-1.discordapp.net/external/wYAyf9GVtjvUp4LpPRbQ-Vya9jfqunTPvGl00kYG_bk/https/www.paulinacocina.net/wp-content/uploads/2023/09/pizza-margherita-paulina-cocina-recetas.jpg?format=webp&width=831&height=468'),(2,'Hamburguesa BBQ','Hamburguesa con salsa BBQ, queso cheddar y tocino',18000,'Comida Chatarra','https://images-ext-1.discordapp.net/external/mYAV7gA96BcwSM2JHKCcstA7aKdeTpJx6SZR1EZ-iXo/https/images.mrcook.app/recipe-image/018ffddd-34d2-72d4-b501-5f90a470883d?format=webp&width=468&height=468'),(3,'Pizza pepperoni','Deliciosa pizza de pepperoni con masa fina y crujiente.',35000,'Comida Chatarra','https://images-ext-1.discordapp.net/external/q_6nPNOVLlEPBrQ-dx2r9Zup44AMUnIdz3eHMxCsD2E/%3Fq%3Dtbn%3AANd9GcRnAkLHQ-jhdLbp58DPgoFvkyJQN85mhOetHg%26s/https/encrypted-tbn0.gstatic.com/images?format=webp'),(4,'Jugo de mora','Delicios jugo de mora.',3500,'Bebidas','https://comidaecuatoriana.online/wp-content/uploads/2022/07/receta-de-jugo-de-moras.jpg'),(5,'Jugo de maracuya','Delicios jugo de maracuya.',3500,'Bebidas','https://3.bp.blogspot.com/-GoaytLXmvMA/Vl0PqYmrfcI/AAAAAAAAIpw/STGQt50CAF8/s1600/PB290629.JPG'),(6,'Jugo de guanabana','Delicios jugo de guanabana.',3500,'Bebidas','https://mui.kitchen/__export/1606078264693/sites/muikitchen/img/2020/11/22/jugo_guanabana_1.jpg_1984807268.jpg'),(7,'Jugo de guayaba','Delicios jugo de guyaba.',3500,'Bebidas','https://th.bing.com/th/id/R.545cf5bb34128e6c037d39bd2d62572c?rik=RmKUPrxiTDq4hA&pid=ImgRaw&r=0'),(9,'Ensalada Verde','Fresca ensalada de lechuga, espinaca, pepino y aguacate.',12000,'Vegetariana','https://images-ext-1.discordapp.net/external/f-_F4WurwMBXPuKhRHbECR48HrI7zR61DMrzII7P80M/https/www.okrecetas.com/recetas-de-ensaladas/img600/ensalada-verde.jpg?format=webp'),(10,'Tacos Vegetarianos','Tacos rellenos de frijoles negros, aguacate, lechuga y salsa de tomate.',15000,'Vegetariana','https://images-ext-1.discordapp.net/external/rxFyNU3-wOPTbNfW4HncOuJD_5v4Frtrfm5kmqZHW8U/https/recetasveganas.net/wp-content/uploads/2020/07/recetas-tacos-sin-carne-vegetariano-alubias-aguacate-tomate-olivas2.jpg?format=webp&width=706&height=468'),(11,'Hamburguesa de Quino','Hamburguesa hecha con quinoa, zanahorias y espinaca, acompañada de papas horneadas.',18000,'Vegetariana','https://images-ext-1.discordapp.net/external/PCb_SZYpYdu-jIh-rRdRdi_mjMndwSjObuYDsgDDGKs/%3Fq%3Dtbn%3AANd9GcTBf7vVEd50qfr27XUOD_2NYofv1Y-9lMPTaQ%26s/https/encrypted-tbn0.gstatic.com/images?format=webp');
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-14 21:07:39
