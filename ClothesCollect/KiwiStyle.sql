-- MySQL dump 10.13  Distrib 5.1.63, for apple-darwin10.3.0 (i386)
--
-- Host: localhost    Database: KiwiStyle
-- ------------------------------------------------------
-- Server version	5.1.63

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `info`
--

DROP TABLE IF EXISTS `info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `info` (
  `ID` varchar(40) DEFAULT NULL,
  `COLLECTION` varchar(20) DEFAULT NULL,
  `SCORE` int(11) DEFAULT NULL,
  `BRAND` varchar(40) DEFAULT NULL,
  `SEASON` varchar(32) DEFAULT NULL,
  `PRICE` int(11) DEFAULT NULL,
  `WEBSITE` varchar(100) DEFAULT NULL,
  `SRC` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info`
--

LOCK TABLES `info` WRITE;
/*!40000 ALTER TABLE `info` DISABLE KEYS */;
INSERT INTO `info` VALUES ('h&m.REF.0266549001','accessory',75,'H&M','All',99,'http://www2.hm.com/zh_cn/productpage.0266549001.html','http://www.dctofs.com/pic/h&m.REF.0266549001.jpeg'),('pull&bear.REF.5472561','shirts',70,'PULL&BEAR','summer',279,'http://www.pullandbear.com/cn/en/man/shirts-c29069.html#/5599501/VERTICAL%20STRIPES%20SHIRT%20IN%20A','http://www.dctofs.com/pic/pull&bear.REF.5472561.jpg'),('h&m.REF.0257586005','jacket',70,'H&M','spring autumn',175,'http://www2.hm.com/zh_cn/productpage.0257586005.html','http://www.dctofs.com/pic/h&m.REF.0257586005.jpeg');
/*!40000 ALTER TABLE `info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-04-12  6:41:39
