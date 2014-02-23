-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 22, 2014 at 10:26 PM
-- Server version: 5.6.16
-- PHP Version: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `toilet`
--

-- --------------------------------------------------------

--
-- Table structure for table `walltext`
--

CREATE TABLE IF NOT EXISTS `walltext` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` longtext NOT NULL,
  `font` text NOT NULL,
  `color` text NOT NULL,
  `size` int(11) NOT NULL,
  `posx` int(11) NOT NULL,
  `posy` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=56 ;

--
-- Dumping data for table `walltext`
--

INSERT INTO `walltext` (`id`, `text`, `font`, `color`, `size`, `posx`, `posy`) VALUES
(52, 'test', 'Helvetica', '#000000', 16, 136, 92),
(53, 'test 2', 'Helvetica', '#000000', 16, 613, 113),
(54, 'ทดสอบว่ะ', 'Helvetica', '#000000', 16, 265, 283),
(55, 'เสร็จแล้วว้อยย ยยยย', 'Helvetica', '#000000', 16, 843, 49);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
