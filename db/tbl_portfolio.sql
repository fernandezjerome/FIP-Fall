-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 03, 2022 at 02:43 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_portfolio`
--

CREATE TABLE `tbl_portfolio` (
  `portfolio_id` smallint(5) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `id` varchar(50) NOT NULL,
  `thumb` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  `info` text NOT NULL,
  `date` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `client` varchar(50) NOT NULL,
  `class` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_portfolio`
--

INSERT INTO `tbl_portfolio` (`portfolio_id`, `name`, `id`, `thumb`, `image`, `info`, `date`, `category`, `client`, `class`) VALUES
(1, 'HouseCom', 'project_01', 'thumb_01.jpg', 'image_01.jpg', 'This is a project for Fanshawe College during Hackaton. Students are group into four and my task is to design the layout and make the Website working with JavaScrip.', '12.27.2019', 'Branding', 'Canon', 'lbcolour1'),
(2, 'Codi Agency', 'project_02', 'thumb_02.jpg', 'image_02.jpg', 'This is a project for Fanshawe College during Boot Camp. Students are group into four and my task is to design the layout and make the Website working with JavaScrip.', '12.27.2015', 'Web Design', 'Honda', 'lbcolour2'),
(3, 'Pet Plants', 'project_03', 'thumb_03.jpg', 'image_03.jpg', 'This is a project for Fanshawe College during Boot Camp. Students are group into four and my task is to design the layout and make the Website working with JavaScrip.', '12.27.2014', 'Print', 'Smart', 'lbcolour3'),
(4, 'Stamobile box', 'poject_04', 'thumb_04.jpg', 'image_04.jpg', 'This is a project for Fanshawe College during Boot Camp. Students are group into four and my task is to design the layout and make the Website working with JavaScrip.', '12.27.2011', '3D Design', 'Canon', 'lbcolour4'),
(5, 'Wedding 1934', 'project_05', 'thumb_05.jpg', 'image_05.jpg', 'This is a project for Fanshawe College during Boot Camp. Students are group into four and my task is to design the layout and make the Website working with JavaScrip.', '12.27.2020', 'UI/UX', 'Fanshawe', 'lbcolour5'),
(6, 'Random Photo', 'project_06', 'thumb_06.jpg', 'image_06.jpg', 'This is a project for Fanshawe College during Boot Camp. Students are group into four and my task is to design the layout and make the Website working with JavaScrip.', '12.27.2021', 'Print', 'Smart', 'lbcolour6'),
(7, 'Project Accord', 'project_07', 'thumb_07.jpg', 'image_07.jpg', 'This is a project for Fanshawe College during Boot Camp. Students are group into four and my task is to design the layout and make the Website working with JavaScrip.', '12.27.2021', 'Branding', 'Fanshawe', 'lbcolour1'),
(8, 'Canon Pixma', 'project_08', 'thumb_08.jpg', 'image_08.jpg', 'This is a project for Fanshawe College during Boot Camp. Students are group into four and my task is to design the layout and make the Website working with JavaScrip.', '12.27.2021', 'Print', 'Smart', 'lbcolour6'),
(9, 'Hands', 'project_09', 'thumb_09.jpg', 'image_09.jpg', 'This is a project for Fanshawe College during Boot Camp. Students are group into four and my task is to design the layout and make the Website working with JavaScrip.', '12.27.2021', 'Digital Imaging', 'Wallmart', 'lbcolour4'),
(10, 'Elin', 'project_10', 'thumb_10.jpg', 'image_10.jpg', 'This is a project for Fanshawe College during Boot Camp. Students are group into four and my task is to design the layout and make the Website working with JavaScrip.', '12.27.2021', 'Digital Imaging', 'Tesla', 'lbcolour4'),
(11, 'Obitz Rebrand', 'project_11', 'thumb_11.jpg', 'image_11.jpg', 'This is a project for Fanshawe College during Boot Camp. Students are group into four and my task is to design the layout and make the Website working with JavaScrip.', '12.27.2021', 'Print', 'Mac', 'lbcolour6'),
(12, 'Jumpo Products', 'project_12', 'thumb_12.jpg', 'image_12.jpg', 'This is a project for Fanshawe College during Boot Camp. Students are group into four and my task is to design the layout and make the Website working with JavaScrip.', '12.27.2021', 'Print', 'Microsoft', 'lbcolour6');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_portfolio`
--
ALTER TABLE `tbl_portfolio`
  ADD PRIMARY KEY (`portfolio_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_portfolio`
--
ALTER TABLE `tbl_portfolio`
  MODIFY `portfolio_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
