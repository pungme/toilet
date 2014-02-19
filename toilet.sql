-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 19, 2014 at 02:53 PM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
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

DROP TABLE IF EXISTS `walltext`;
CREATE TABLE IF NOT EXISTS `walltext` (
  `text` text NOT NULL,
  `fonttype` text CHARACTER SET latin1 NOT NULL,
  `color` text CHARACTER SET latin1 NOT NULL,
  `size` int(11) NOT NULL,
  `posx` int(11) NOT NULL,
  `posy` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `walltext`
--

INSERT INTO `walltext` (`text`, `fonttype`, `color`, `size`, `posx`, `posy`) VALUES
('Today is my birthday ', 'Helvetica', '#000000', 16, 50, 50),
('This toilet is worth reading than Twilight', 'Helvetica', '#000000', 18, 100, 100),
('Who cares ?', 'Helvetica', '#000000', 16, 0, 0),
('We are not special ', 'Helvetica', '#000000', 19, 0, 0),
('ทดสอบ', 'Helvetica', '#000000', 16, 0, 0),
('test', 'Helvetica', '#000000', 16, 0, 0),
('เหี้ย', 'Helvetica', '#000000', 16, 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
