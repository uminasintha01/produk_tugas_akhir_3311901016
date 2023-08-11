-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2022 at 05:24 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zfix_trade_in`
--

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

CREATE TABLE `device` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `brand` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ram` int(20) DEFAULT NULL,
  `storages` int(20) DEFAULT NULL,
  `priceGradeA` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `priceGradeB` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `priceGradeC` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `device`
--

INSERT INTO `device` (`id`, `brand`, `ram`, `storages`, `priceGradeA`, `priceGradeB`, `priceGradeC`, `created_at`, `updated_at`) VALUES
(1, 'xiomi', 4, 128, '10000000', '2000000', '300000', '2021-10-28 06:50:29', '2021-10-28 06:50:30'),
(2, 'asus', 4, 128, '10000000', '2000000', '300000', '2021-10-29 04:11:50', '2021-10-29 04:11:51'),
(3, 'xiomi', 4, 64, '10000000', '2000000', '300000', '2021-10-29 19:50:41', '2021-10-29 19:50:42'),
(4, 'asus', 4, 64, '10000000', '2000000', '300000', '2021-11-01 05:55:14', '2021-11-01 05:55:15'),
(5, 'tes', 2, 32, '1', '2', '3', '2021-11-18 04:14:50', '2021-11-18 04:14:52');

-- --------------------------------------------------------

--
-- Table structure for table `device_detail_check`
--

CREATE TABLE `device_detail_check` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `screen_has_problem` tinyint(4) DEFAULT NULL,
  `wifi_has_problem` tinyint(4) DEFAULT NULL,
  `camera_has_problem` tinyint(4) DEFAULT NULL,
  `button_has_problem` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `device_detail_check`
--

INSERT INTO `device_detail_check` (`id`, `screen_has_problem`, `wifi_has_problem`, `camera_has_problem`, `button_has_problem`) VALUES
(1, 0, 0, 0, 0),
(2, 1, 0, 0, 0),
(3, 0, 1, 0, 0),
(4, 0, 0, 1, 0),
(5, 0, 0, 0, 1),
(6, 1, 1, 1, 1),
(7, 1, 1, 0, 0),
(8, 1, 0, 1, 0),
(9, 1, 0, 0, 1),
(10, 0, 1, 1, 0),
(11, 0, 1, 0, 1),
(12, 0, 0, 1, 1),
(13, 1, 1, 1, 0),
(14, 0, 1, 1, 1),
(15, 1, 0, 1, 1),
(16, 1, 1, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `handphone_price`
--

CREATE TABLE `handphone_price` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `storage` varchar(50) DEFAULT NULL,
  `ram` varchar(50) DEFAULT NULL,
  `priceGradeA` int(11) DEFAULT NULL,
  `priceGradeB` int(11) DEFAULT NULL,
  `priceGradeC` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `partner_id` int(11) DEFAULT NULL,
  `nomor_invoice` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id`, `partner_id`, `nomor_invoice`, `created_at`, `updated_at`) VALUES
(8, 12, 1, '2022-06-23 20:27:13', '2022-06-23 20:29:28');

-- --------------------------------------------------------

--
-- Table structure for table `kulkas_price`
--

CREATE TABLE `kulkas_price` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `priceGradeA` int(11) DEFAULT NULL,
  `priceGradeB` int(11) DEFAULT NULL,
  `priceGradeC` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kulkas_price`
--

INSERT INTO `kulkas_price` (`id`, `brand`, `model`, `type`, `priceGradeA`, `priceGradeB`, `priceGradeC`, `created_at`, `updated_at`) VALUES
(205, 'AQUA', 'Non- Inverter', '1 Pintu', 400000, 300000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(206, 'AQUA', 'Non- Inverter', '2 Pintu', 600000, 400000, 300000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(207, 'AQUA', 'Inverter', '1 Pintu', 250000, 200000, 150000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(208, 'AQUA', 'Inverter', '2 Pintu', 300000, 250000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(209, 'ELECTROLUX', 'Non- Inverter', '1 Pintu', 400000, 300000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(210, 'ELECTROLUX', 'Non- Inverter', '2 Pintu', 600000, 400000, 300000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(211, 'ELECTROLUX', 'Inverter', '1 Pintu', 250000, 200000, 150000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(212, 'ELECTROLUX', 'Inverter', '2 Pintu', 300000, 250000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(213, 'SHARP', 'Non- Inverter', '1 Pintu', 400000, 300000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(214, 'SHARP', 'Non- Inverter', '2 Pintu', 600000, 400000, 300000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(215, 'SHARP', 'Inverter', '1 Pintu', 250000, 200000, 150000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(216, 'SHARP', 'Inverter', '2 Pintu', 300000, 250000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(217, 'SAMSUNG', 'Non- Inverter', '1 Pintu', 400000, 300000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(218, 'SAMSUNG', 'Non- Inverter', '2 Pintu', 600000, 400000, 300000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(219, 'SAMSUNG', 'Inverter', '1 Pintu', 250000, 200000, 150000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(220, 'SAMSUNG', 'Inverter', '2 Pintu', 300000, 250000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(221, 'LG', 'Non- Inverter', '1 Pintu', 400000, 300000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(222, 'LG', 'Non- Inverter', '2 Pintu', 600000, 400000, 300000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(223, 'LG', 'Inverter', '1 Pintu', 250000, 200000, 150000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(224, 'LG', 'Inverter', '2 Pintu', 300000, 250000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(225, 'TOSHIBA', 'Non- Inverter', '1 Pintu', 400000, 300000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(226, 'TOSHIBA', 'Non- Inverter', '2 Pintu', 600000, 400000, 300000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(227, 'TOSHIBA', 'Inverter', '1 Pintu', 250000, 200000, 150000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(228, 'TOSHIBA', 'Inverter', '2 Pintu', 300000, 250000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(229, 'PANASONIC', 'Non- Inverter', '1 Pintu', 400000, 300000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(230, 'PANASONIC', 'Non- Inverter', '2 Pintu', 600000, 400000, 300000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(231, 'PANASONIC', 'Inverter', '1 Pintu', 250000, 200000, 150000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(232, 'PANASONIC', 'Inverter', '2 Pintu', 300000, 250000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(233, 'MODENA', 'Non- Inverter', '1 Pintu', 400000, 300000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(234, 'MODENA', 'Non- Inverter', '2 Pintu', 600000, 400000, 300000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(235, 'MODENA', 'Inverter', '1 Pintu', 250000, 200000, 150000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(236, 'MODENA', 'Inverter', '2 Pintu', 300000, 250000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(237, 'SANKEN', 'Non- Inverter', '1 Pintu', 400000, 300000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(238, 'SANKEN', 'Non- Inverter', '2 Pintu', 600000, 400000, 300000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(239, 'SANKEN', 'Inverter', '1 Pintu', 250000, 200000, 150000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(240, 'SANKEN', 'Inverter', '2 Pintu', 300000, 250000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(241, 'POLYTRON', 'Non- Inverter', '1 Pintu', 400000, 300000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(242, 'POLYTRON', 'Non- Inverter', '2 Pintu', 600000, 400000, 300000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(243, 'POLYTRON', 'Inverter', '1 Pintu', 250000, 200000, 150000, '2022-06-08 19:29:02', '2022-06-08 19:29:02'),
(244, 'POLYTRON', 'Inverter', '2 Pintu', 300000, 250000, 200000, '2022-06-08 19:29:02', '2022-06-08 19:29:02');

-- --------------------------------------------------------

--
-- Table structure for table `laptop_detail_check`
--

CREATE TABLE `laptop_detail_check` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `inner_screen` int(11) DEFAULT NULL,
  `outer_screen` int(11) DEFAULT NULL,
  `addition` int(11) DEFAULT NULL,
  `condition` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `laptop_price`
--

CREATE TABLE `laptop_price` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `memory` varchar(50) DEFAULT NULL,
  `jenis_storage` varchar(50) DEFAULT NULL,
  `storages` varchar(50) DEFAULT NULL,
  `processor` varchar(50) DEFAULT NULL,
  `os` varchar(50) DEFAULT NULL,
  `ukuran_laptop` varchar(50) DEFAULT NULL,
  `priceGradeA` int(11) DEFAULT NULL,
  `priceGradeB` int(11) DEFAULT NULL,
  `priceGradeC` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `laptop_price`
--

INSERT INTO `laptop_price` (`id`, `brand`, `memory`, `jenis_storage`, `storages`, `processor`, `os`, `ukuran_laptop`, `priceGradeA`, `priceGradeB`, `priceGradeC`, `created_at`, `updated_at`) VALUES
(347, 'ASUS', '4GB', 'SATA', '750GB', 'Intel Core i3', 'Windows 7', '13\" - 14\'\'', 900000, 750000, 550000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(348, 'ASUS', '4GB', 'SATA', '500GB', 'Intel Core i3', 'Windows 10', '13\" - 14\'\'', 1800000, 1600000, 1250000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(349, 'ASUS', '4GB', 'SATA', '500GB', 'Intel Celeron N3060', 'Windows', '13\" - 14\'\'', 900000, 700000, 500000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(350, 'ASUS', '4GB', 'SATA', '500GB', 'Intel Core i3', 'Windows', '13\" - 14\'\'', 700000, 500000, 350000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(351, 'ASUS', '4GB', 'SATA', '1TB', 'Intel Core i7', 'Windows', '13\" - 14\'\'', 900000, 700000, 500000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(352, 'ASUS', '4GB', 'HDD', '1TB', 'Intel Core i5', 'Windows 10', '13\" - 14\'\'', 2300000, 2000000, 1800000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(353, 'ASUS', '8GB', 'HDD', '1TB', 'Intel Core i7', 'Windows 10', '13\" - 14\'\'', 3000000, 2700000, 2250000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(354, 'ASUS', '8GB', 'HDD', '1TB', 'Intel Core i7', 'Windows 10', '15\"', 5000000, 4100000, 3300000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(355, 'ASUS', '4GB', '-', '1TB', 'Intel celeron N4000', 'Windows 10', '13\" - 14\'\'', 1800000, 1650000, 1450000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(356, 'ASUS', '8GB', 'SSD', '512GB', 'Intel Core i5', 'Windows 10', '13\" - 14\'\'', 4500000, 3600000, 3000000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(357, 'ASUS', '2GB', 'HDD', '320GB', 'Intel Core i5', 'windows 7', '13\" - 14\'\'', 900000, 700000, 500000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(358, 'ASUS', '4GB', 'HDD', '500GB', 'Intel Core i5', 'Windows 10', '13\" - 14\'\'', 1100000, 900000, 700000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(359, 'ASUS', '8GB', 'SSD', '512GB', 'Intel Core i7', 'windows 10', '13\" - 14\'\'', 5000000, 4400000, 3500000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(360, 'ASUS', '4GB', 'HDD', '1TB', 'Intel Core i5/i7', 'windows 10', '13\" - 14\'\'', 4000000, 3500000, 3000000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(361, 'asus', '4', 'ssd', '512GB', 'Intel Core i5', 'Windows', '1315', 4000000, 3450000, 2750000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(362, 'ASUS', '8GB', 'HDD', '1TB', 'Intel Core i7', 'Windows 10', '13\" - 14\'\'', 1800000, 1600000, 1250000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(363, 'ASUS', '2GB', 'HDD', '500GB', 'Intel Core i5', 'Windows 10', '13\" - 14\'\'', 1400000, 1100000, 900000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(364, 'Lenovo', '4GB', 'HDD', '500GB', 'Intel Core i3', 'windows 10', '13\" - 14\'\'', 1800000, 1600000, 1450000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(365, 'Lenovo', '16GB', '-', '1TB', '-', 'Windows 10', '13\" - 14\'\'', 1300000, 1050000, 850000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(366, 'Lenovo', '4GB', 'HDD', '1TB', '-', 'Windows 10', '13\" - 14\'\'', 3500000, 2800000, 2550000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(367, 'Lenovo', '4GB', 'HDD', '320GB', 'Intel Core i5', 'Windows 7', '13\" - 14\'\'', 1500000, 1200000, 1000000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(368, 'Lenovo', '4GB', 'HDD', '320GB', 'Intel Core i5', 'Windows 10', '13\" - 14\'\'', 1650000, 1450000, 1200000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(369, 'Lenovo', '2GB', 'HDD', '500GB', 'Intel Core i3', 'windows 10', '13\" - 14\'\'', 1200000, 950000, 800000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(370, 'Lenovo', '2GB', 'HDD', '500GB', '-', 'Windows 10', '13\" - 14\'\'', 1600000, 1300000, 1000000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(371, 'Lenovo', '2GB', 'SATA', '500GB', 'Intel Core i3', 'Windows 10', '13\" - 14\'\'', 1000000, 800000, 600000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(372, 'Lenovo', '4GB', 'HDD', '320GB', 'Intel Core i5', 'Windows 10', '13\" - 14\'\'', 1550000, 1250000, 950000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(373, 'Lenovo', '8GB', 'SSD', '256GB', 'Intel Core i3', 'Windows 10', '13\" - 14\'\'', 2500000, 2200000, 2000000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(374, 'Lenovo', '2GB', 'SATA', '500GB', 'Intel HM70', 'Windows 10', '13\" - 14\'\'', 1150000, 900000, 700000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(375, 'Lenovo', '4GB', 'HDD', '320GB', 'Intel Core i7', 'Windows 10', '13\" - 14\'\'', 1500000, 1200000, 1000000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(376, 'Lenovo', '4GB', 'SATA', '320GB', 'Intel Core i3', 'Windows 7', '13\" - 14\'\'', 1350000, 1050000, 850000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(377, 'Lenovo', '4GB', 'HDD', '500GB', '-', 'Windows 10', '13\" - 14\'\'', 2600000, 2100000, 1650000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(378, 'Lenovo', '4GB', '-', '250GB', 'Intel Core i5', 'Windows 10', '10\" - 12\"', 1400000, 1200000, 1000000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(379, 'Acer', '4GB', 'HDD', '256GB', '-', 'Windows 10', '13\" - 14\'\'', 2500000, 2000000, 1600000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(380, 'Acer', '4GB', '-', '1TB', 'Intel Core i3', 'Windows 10', '13\" - 14\'\'', 2800000, 2250000, 1800000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(381, 'Acer', '2GB', 'HDD', '320GB', '-', 'Windows 7', '10\" - 12\"', 800000, 700000, 550000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(382, 'Acer', '4GB', 'HDD', '500GB', '-', 'Windows 10', '13\" - 14\'\'', 1000000, 800000, 600000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(383, 'Acer', '4GB', 'HDD', '500GB', '-', 'Windows 10', '13\" - 14\'\'', 2000000, 1700000, 1500000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(384, 'Acer', '4GB', 'HDD', '500GB', '-', 'Windows 7', '13\" - 14\'\'', 1950000, 1600000, 1350000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(385, 'Acer', '2GB', '-', '500GB', '-', 'Windows 7', '13\" - 14\'\'', 1600000, 1300000, 1000000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(386, 'Acer', '4GB', '-', '500GB', '-', 'Windows 10', '13\" - 14\'\'', 1500000, 1200000, 1000000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(387, 'Acer', '4GB', 'HDD', '500GB', 'Intel Core i3', 'Windows 10', '13\" - 14\'\'', 800000, 600000, 500000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(388, 'Acer', '4GB', 'HDD', '500GB', '-', 'Windows 10', '13\" - 14\'\'', 1400000, 1150000, 1000000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(389, 'Acer', '4GB', '-', '500GB', '-', 'Windows 8', '13\" - 14\'\'', 800000, 600000, 400000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(390, 'Acer', '4GB', 'HDD', '500GB', '-', 'Windows 8', '13\" - 14\'\'', 1200000, 1000000, 700000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(391, 'Acer', '4GB', '-', '1TB', 'Intel Core i3', 'Windows 10', '13\" - 14\'\'', 2650000, 2150000, 1700000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(392, 'Dell', '4GB', '-', '500GB', '-', 'Windows 10', '13\" - 14\'\'', 1250000, 1100000, 900000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(393, 'Dell', '4GB', '-', '500GB', '-', 'Windows 10', '13\" - 14\'\'', 1200000, 1050000, 900000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(394, 'Dell', '8GB', '-', '240GB', 'Intel Core i5', 'Windows 10', '13\" - 14\'\'', 2000000, 1800000, 1600000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(395, 'Dell', '4GB', '-', '1TB', 'Intel Core i3', 'Windows 10', '13\" - 14\'\'', 4800000, 4650000, 4500000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(396, 'Dell', '8GB', '-', '500GB', 'Intel Core i5', 'Windows', '13\" - 14\'\'', 1800000, 1600000, 1400000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(397, 'Dell', '2GB', 'HDD', '120GB', 'Intel Core i7', 'Windows', '13\" - 14\'\'', 3000000, 2700000, 2500000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(398, 'Dell', '8GB', '-', '256GB', '-', 'Windows 10', '13\" - 14\'\'', 4900000, 4750000, 4600000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(399, 'Dell', '4GB', '-', '500GB', 'Intel Celeron 2957', 'Windows', '13\" - 14\'\'', 1450000, 1300000, 1150000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(400, 'Dell', '4GB', '-', '500GB', 'Intel Core i7', 'Windows', '13\" - 14\'\'', 1300000, 1150000, 10000000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(401, 'Dell', '4GB', '-', '500GB', 'Intel Core i5', 'Windows 10', '13\" - 14\'\'', 2850000, 2600000, 2400000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(402, 'HP', '4GB', '-', '1TB', '-', 'Windows 10', '13\" - 14\'\'', 3500000, 2800000, 2250000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(403, 'HP', '4GB', 'HDD', '320GB', '-', 'Windows 10', '13\" - 14\'\'', 1000000, 800000, 600000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(404, 'HP', '4GB', 'HDD', '320GB', '-', 'Windows 10', '13\" - 14\'\'', 1000000, 800000, 600000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(405, 'HP', '4GB', 'HDD', '320GB', '-', 'Windows 10', '13\" - 14\'\'', 1150000, 1000000, 800000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(406, 'HP', '8GB', 'HDD', '320GB', '-', 'Windows 10', '13\" - 14\'\'', 1800000, 1600000, 1450000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(407, 'HP', '8GB', '-', '1TB', 'Intel Core i7', 'Windows 10', '13\" - 14\'\'', 2000000, 1800000, 1600000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(408, 'HP', '4GB', 'HDD', '320GB', 'Intel Core i5', 'Windows 7', '13\" - 14\'\'', 1000000, 800000, 600000, '2022-06-08 19:28:37', '2022-06-08 19:28:37'),
(409, 'HP', '8GB', 'HDD', '500GB', '-', 'Windows 10', '10\" - 12\"', 2300000, 2100000, 1900000, '2022-06-08 19:28:37', '2022-06-08 19:28:37');

-- --------------------------------------------------------

--
-- Table structure for table `mesin_cuci_price`
--

CREATE TABLE `mesin_cuci_price` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `priceGradeA` int(11) DEFAULT NULL,
  `priceGradeB` int(11) DEFAULT NULL,
  `priceGradeC` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mesin_cuci_price`
--

INSERT INTO `mesin_cuci_price` (`id`, `brand`, `type`, `priceGradeA`, `priceGradeB`, `priceGradeC`, `created_at`, `updated_at`) VALUES
(162, 'AQUA', 'Front Loading', 1100000, 900000, 700000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(163, 'AQUA', 'Upper Loading', 350000, 250000, 150000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(164, 'ELECTROLUX', 'Front Loading', 1100000, 900000, 700000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(165, 'ELECTROLUX', 'Upper Loading', 350000, 250000, 150000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(166, 'SHARP', 'Front Loading', 1100000, 900000, 700000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(167, 'SHARP', 'Upper Loading', 350000, 250000, 150000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(168, 'SAMSUNG', 'Front Loading', 1100000, 900000, 700000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(169, 'SAMSUNG', 'Upper Loading', 350000, 250000, 150000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(170, 'LG', 'Front Loading', 1100000, 900000, 700000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(171, 'LG', 'Upper Loading', 350000, 250000, 150000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(172, 'TOSHIBA', 'Front Loading', 1100000, 900000, 700000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(173, 'TOSHIBA', 'Upper Loading', 350000, 250000, 150000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(174, 'PANASONIC', 'Front Loading', 1100000, 900000, 700000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(175, 'PANASONIC', 'Upper Loading', 350000, 250000, 150000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(176, 'MODENA', 'Front Loading', 1100000, 900000, 700000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(177, 'MODENA', 'Upper Loading', 350000, 250000, 150000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(178, 'SANKEN', 'Front Loading', 1100000, 900000, 700000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(179, 'SANKEN', 'Upper Loading', 350000, 250000, 150000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(180, 'POLYTRON', 'Front Loading', 1100000, 900000, 700000, '2022-06-08 19:29:18', '2022-06-08 19:29:18'),
(181, 'POLYTRON', 'Upper Loading', 350000, 250000, 150000, '2022-06-08 19:29:18', '2022-06-08 19:29:18');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2020_10_12_070717_create_roles_table', 1),
(9, '2021_10_28_064748_create_device_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customers_id` bigint(20) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `read` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `customers_id`, `title`, `type`, `description`, `read`, `created_at`, `updated_at`) VALUES
(72, 54, 'inspeksi', 'Kulkas Trade In', 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih', '0', '2022-06-10 02:07:50', '2022-06-10 02:07:50'),
(75, 54, 'inspeksi', 'Kulkas Trade in', 'Halo yuli, Team inspeksi kami akan segera datang untuk mengecek unit kamu, jadi mohon bersiap-siap ya', '0', '2022-06-20 01:13:47', '2022-06-20 01:13:47'),
(76, 54, 'inspeksi', 'Kulkas Trade in', 'Halo yuli, Team inspeksi kami akan segera datang untuk mengecek unit kamu, jadi mohon bersiap-siap ya', '0', '2022-06-20 01:17:22', '2022-06-20 01:17:22'),
(79, 58, 'inspeksi', 'Televisi Trade in', 'Halo Arik Sugiarto, Team inspeksi kami akan segera datang untuk mengecek unit kamu, jadi mohon bersiap-siap ya', '0', '2022-06-21 00:51:03', '2022-06-21 00:51:03'),
(80, 58, 'inspeksi', 'Televisi Trade in', 'Halo Arik Sugiarto, Team inspeksi kami akan segera datang untuk mengecek unit kamu, jadi mohon bersiap-siap ya', '0', '2022-06-21 00:55:32', '2022-06-21 00:55:32'),
(81, 58, 'inspeksi', 'Televisi Trade in', 'Halo Arik Sugiarto, transaksi Trade in kamu sudah selesai dan voucher telah kami kirimkan ke menu QRCode pada aplikasi kamu. Silahkan kunjungi toko yang tertera pada QR Code untuk mendapatkan potongan harga pembelian kamu', '0', '2022-06-21 00:56:08', '2022-06-21 00:56:08'),
(82, 58, 'inspeksi', 'Televisi Trade in', 'Halo Arik Sugiarto, Team inspeksi kami akan segera datang untuk mengecek unit kamu, jadi mohon bersiap-siap ya', '0', '2022-06-21 00:56:57', '2022-06-21 00:56:57'),
(87, 68, 'inspeksi', 'Kulkas Trade In', 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih', '1', '2022-06-23 18:28:08', '2022-06-23 18:28:08'),
(88, 68, 'inspeksi', 'Mesin Cuci Trade in', 'Halo pendi, Team inspeksi kami akan segera datang untuk mengecek unit kamu, jadi mohon bersiap-siap ya', '1', '2022-06-27 19:07:34', '2022-06-27 19:07:34'),
(89, 68, 'inspeksi', 'Mesin Cuci Trade in', 'Halo pendi, transaksi Trade in kamu sudah selesai dan voucher telah kami kirimkan ke menu QRCode pada aplikasi kamu. Silahkan kunjungi toko yang tertera pada QR Code untuk mendapatkan potongan harga pembelian kamu', '0', '2022-06-27 22:39:03', '2022-06-27 22:39:03'),
(90, 68, 'inspeksi', 'Mesin Cuci Trade in', 'Halo pendi, transaksi Trade in kamu sudah selesai dan voucher telah kami kirimkan ke menu QRCode pada aplikasi kamu. Silahkan kunjungi toko yang tertera pada QR Code untuk mendapatkan potongan harga pembelian kamu', '0', '2022-06-27 22:39:16', '2022-06-27 22:39:16'),
(91, 68, 'Claim', 'Mesin Cuci Trade in', 'Halo pendi, selamat voucher kamu telah berhasil di gunakan di LG Popo Elektronik (PRJ Kulkas, Mesin Cuci)', '0', '2022-06-27 22:40:38', '2022-06-27 22:40:38'),
(92, 66, 'inspeksi', 'Kulkas Trade In', 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih', '1', '2022-06-29 23:25:08', '2022-06-29 23:25:08'),
(93, 2, 'inspeksi', 'Televisi Trade In', 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih', '1', '2022-07-04 21:40:08', '2022-07-04 21:40:08'),
(94, 2, 'inspeksi', 'Televisi Trade in', 'Halo customer, transaksi Trade in kamu sudah selesai dan voucher telah kami kirimkan ke menu QRCode pada aplikasi kamu. Silahkan kunjungi toko yang tertera pada QR Code untuk mendapatkan potongan harga pembelian kamu', '1', '2022-07-04 21:40:40', '2022-07-04 21:40:40'),
(95, 48, 'inspeksi', 'Kulkas Trade In', 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih', '1', '2022-07-04 23:27:22', '2022-07-04 23:27:22'),
(96, 48, 'inspeksi', 'Laptop Trade in', 'Halo Ardy Gustiawan, Team inspeksi kami akan segera datang untuk mengecek unit kamu, jadi mohon bersiap-siap ya', '1', '2022-07-04 23:28:58', '2022-07-04 23:28:58'),
(97, 48, 'inspeksi', 'Laptop Trade in', 'Halo Ardy Gustiawan, transaksi Trade in kamu sudah selesai dan voucher telah kami kirimkan ke menu QRCode pada aplikasi kamu. Silahkan kunjungi toko yang tertera pada QR Code untuk mendapatkan potongan harga pembelian kamu', '1', '2022-07-04 23:30:43', '2022-07-04 23:30:43'),
(98, 48, 'inspeksi', 'Laptop Trade in', 'Halo Ardy Gustiawan, transaksi Trade in kamu sudah selesai dan voucher telah kami kirimkan ke menu QRCode pada aplikasi kamu. Silahkan kunjungi toko yang tertera pada QR Code untuk mendapatkan potongan harga pembelian kamu', '1', '2022-07-04 23:31:01', '2022-07-04 23:31:01'),
(99, 48, 'inspeksi', 'Laptop Trade in', 'Halo Ardy Gustiawan, transaksi Trade in kamu sudah selesai dan voucher telah kami kirimkan ke menu QRCode pada aplikasi kamu. Silahkan kunjungi toko yang tertera pada QR Code untuk mendapatkan potongan harga pembelian kamu', '1', '2022-07-04 23:31:26', '2022-07-04 23:31:26'),
(100, 48, 'inspeksi', 'Laptop Trade in', 'Halo Ardy Gustiawan, transaksi Trade in kamu sudah selesai dan voucher telah kami kirimkan ke menu QRCode pada aplikasi kamu. Silahkan kunjungi toko yang tertera pada QR Code untuk mendapatkan potongan harga pembelian kamu', '1', '2022-07-04 23:31:50', '2022-07-04 23:31:50'),
(101, 2, 'inspeksi', 'Televisi Trade in', 'Halo customer, Team inspeksi kami akan segera datang untuk mengecek unit kamu, jadi mohon bersiap-siap ya', '1', '2022-07-05 00:45:47', '2022-07-05 00:45:47'),
(102, 2, 'inspeksi', 'Kulkas Trade In', 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih', '1', '2022-07-07 23:49:49', '2022-07-07 23:49:49'),
(103, 2, 'inspeksi', 'Kulkas Trade In', 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih', '1', '2022-07-07 23:53:48', '2022-07-07 23:53:48'),
(104, 2, 'inspeksi', 'Kulkas Trade In', 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih', '1', '2022-07-08 00:13:06', '2022-07-08 00:13:06'),
(105, 2, 'inspeksi', 'Kulkas Trade In', 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih', '1', '2022-07-08 00:46:47', '2022-07-08 00:46:47'),
(106, 2, 'inspeksi', 'Kulkas Trade In', 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih', '1', '2022-07-08 00:49:17', '2022-07-08 00:49:17'),
(107, 2, 'inspeksi', 'Kulkas Trade In', 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih', '1', '2022-07-08 00:54:23', '2022-07-08 00:54:23'),
(108, 2, 'inspeksi', 'Kulkas Trade In', 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih', '1', '2022-07-08 00:55:42', '2022-07-08 00:55:42'),
(109, 74, 'inspeksi', 'Televisi Trade In', 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih', '1', '2022-07-08 05:13:18', '2022-07-08 05:13:18'),
(110, 74, 'inspeksi', 'Televisi Trade In', 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih', '1', '2022-07-08 05:45:44', '2022-07-08 05:45:44'),
(111, 74, 'inspeksi', 'Televisi Trade in', 'Halo Hendra Permana, transaksi Trade in kamu sudah selesai dan voucher telah kami kirimkan ke menu QRCode pada aplikasi kamu. Silahkan kunjungi toko yang tertera pada QR Code untuk mendapatkan potongan harga pembelian kamu', '1', '2022-07-09 18:28:39', '2022-07-09 18:28:39'),
(112, 58, 'inspeksi', 'Televisi Trade in', 'Halo Arik Sugiarto, transaksi Trade in kamu sudah selesai dan voucher telah kami kirimkan ke menu QRCode pada aplikasi kamu. Silahkan kunjungi toko yang tertera pada QR Code untuk mendapatkan potongan harga pembelian kamu', '0', '2022-07-09 18:56:43', '2022-07-09 18:56:43'),
(113, 74, 'inspeksi', 'Televisi Trade in', 'Halo Hendra Permana, transaksi Trade in kamu sudah selesai dan voucher telah kami kirimkan ke menu QRCode pada aplikasi kamu. Silahkan kunjungi toko yang tertera pada QR Code untuk mendapatkan potongan harga pembelian kamu', '1', '2022-07-09 19:11:52', '2022-07-09 19:11:52'),
(114, 74, 'inspeksi', 'Televisi Trade in', 'Halo Hendra Permana, Team inspeksi kami akan segera datang untuk mengecek unit kamu, jadi mohon bersiap-siap ya', '1', '2022-07-09 19:12:31', '2022-07-09 19:12:31'),
(115, 66, 'inspeksi', 'Mesin Cuci Trade in', 'Halo stenly stefano, Team inspeksi kami akan segera datang untuk mengecek unit kamu, jadi mohon bersiap-siap ya', '0', '2022-07-09 19:13:53', '2022-07-09 19:13:53'),
(116, 2, 'inspeksi', 'Playstation Trade in', 'Halo umi nasintha, transaksi Trade in kamu sudah selesai dan voucher telah kami kirimkan ke menu QRCode pada aplikasi kamu. Silahkan kunjungi toko yang tertera pada QR Code untuk mendapatkan potongan harga pembelian kamu', '1', '2022-07-10 15:35:18', '2022-07-10 15:35:18'),
(117, 2, 'inspeksi', 'Playstation Trade in', 'Halo umi nasintha, transaksi Trade in kamu sudah selesai dan voucher telah kami kirimkan ke menu QRCode pada aplikasi kamu. Silahkan kunjungi toko yang tertera pada QR Code untuk mendapatkan potongan harga pembelian kamu', '1', '2022-07-10 15:35:20', '2022-07-10 15:35:20'),
(118, 2, 'inspeksi', 'Playstation Trade in', 'Halo umi nasintha, Team inspeksi kami akan segera datang untuk mengecek unit kamu, jadi mohon bersiap-siap ya', '1', '2022-07-10 15:36:52', '2022-07-10 15:36:52'),
(119, 2, 'inspeksi', 'Kulkas Trade in', 'Halo umi nasintha, Team inspeksi kami akan segera datang untuk mengecek unit kamu, jadi mohon bersiap-siap ya', '1', '2022-07-10 15:38:03', '2022-07-10 15:38:03'),
(120, 2, 'inspeksi', 'Kulkas Trade In', 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih', '1', '2022-07-10 18:50:58', '2022-07-10 18:50:58'),
(121, 2, 'inspeksi', 'Kulkas Trade In', 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih', '1', '2022-07-10 18:51:37', '2022-07-10 18:51:37'),
(122, 2, 'inspeksi', 'Kulkas Trade In', 'Selamat, data yang anda submit telah diterima oleh CS kami, CS akan segera menghubungi kamu untuk konfirmasi data, Terima Kasih', '1', '2022-07-10 18:52:15', '2022-07-10 18:52:15'),
(123, 74, 'inspeksi', 'Televisi Trade in', 'Halo Hendra Permana, Team inspeksi kami akan segera datang untuk mengecek unit kamu, jadi mohon bersiap-siap ya', '0', '2022-07-10 19:30:25', '2022-07-10 19:30:25');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('008d52a868dbf11c8fd4626c4d96c74100a775bcbdbe31c237681f12e1d7b8449e0124ead9f9c118', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-01 02:07:34', '2021-11-01 02:07:34', '2022-11-01 09:07:34'),
('00e16546f7d2110a86d30da16f7d22d965a46c44d538e17951f89c2191a77fc70ac429de00323780', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-03 20:28:29', '2021-11-03 20:28:29', '2022-11-04 03:28:29'),
('013b8c391ed69341c0ee34f10283a0d1103a05ac7b0400075cca751e22e8f95ef639c732a0934d14', 2, 1, 'zfix-auth-token', '[]', 0, '2022-05-13 10:21:51', '2022-05-13 10:21:51', '2023-05-13 17:21:51'),
('0146d0c22d4e4bca9ab6058795216897687209e6929cd4ec40daf3443e04a2b161441c0e45027ad3', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-01 07:41:35', '2021-11-01 07:41:35', '2022-11-01 14:41:35'),
('0291f396d9a9c64fd6d23f6d82973f7d769a2e206899d4bb7e5eaaf4c35bd3a334dfdac7554a3514', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-09 03:41:08', '2022-06-09 03:41:08', '2023-06-09 10:41:08'),
('036b975ef9a1cfe42c07bdbb4c8e861126b46b8146be74c4981ba9514cac66b4e54f1c8533883634', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-28 22:02:59', '2021-09-28 22:02:59', '2022-09-29 05:02:59'),
('041a921698265e0ca263f266af8f171cc5485a0e315619bcf8103a4290c526c8d955cd29263ae75b', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:35', '2021-11-11 19:36:35', '2022-11-12 02:36:35'),
('046bf51afc67f95f81bfc87415496414c375fe0bf135fc2caaccf9d18de92f486fe1f908cb377f7b', 15, 1, 'zfix-auth-token', '[]', 0, '2022-04-18 03:21:23', '2022-04-18 03:21:23', '2023-04-18 10:21:23'),
('04a8ca1b1ff41e710c222f05965dc71a50a1e8dfbfdffcba27f2702fcd679837021531621b3a1a42', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 20:57:48', '2021-09-20 20:57:48', '2022-09-21 03:57:48'),
('051b91bfc28016296579550f785a0f7d848a47f3aaafdfb50f478b8bb9a8d29d2f176aba6e192c60', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-17 19:55:21', '2022-04-17 19:55:21', '2023-04-18 02:55:21'),
('067422ecae116c3b1e66c4cdf285cb8aea4713a340b514b9e6aca317545d6612ffcdad42a7f820eb', 2, 1, 'zfix-auth-token', '[]', 0, '2022-03-20 20:36:16', '2022-03-20 20:36:16', '2023-03-21 03:36:16'),
('06ef3d3acbb25af14107cf598a968f908091889cb80445089acffa208a84e26ebcbbbba016d7bc93', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-12 00:48:41', '2022-04-12 00:48:41', '2023-04-12 07:48:41'),
('0777eecd695b0252f9d03618bfba4687bb0f8a16919d8d952ad71812fefb4adf6eb5bc546d0b29a8', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:44:40', '2022-01-10 00:44:40', '2023-01-10 07:44:40'),
('07869b1dafae0cb81041d03c784103565c4c981255c565fa7bb432a882077939867aee9168c0fa27', 36, 1, 'zfix-auth-token', '[]', 0, '2022-04-07 05:31:04', '2022-04-07 05:31:04', '2023-04-07 12:31:04'),
('07a949d48a8465cf5d9d9e6fb4468b3d1ee2b9869dc196d912607109226f1a311495bd113d89cc84', 15, 1, 'zfix-auth-token', '[]', 0, '2022-02-17 21:06:06', '2022-02-17 21:06:06', '2023-02-18 04:06:06'),
('07b7a080cae5fb0712028c76dacb859dd7c6175c07530c9c75d343c2722092624f54e9dd8c197222', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:31:22', '2022-01-09 21:31:22', '2023-01-10 04:31:22'),
('07f4165cefdb76b1c676525d544d0cee3729768f977bd3288b3da8578dd894f38a6c158e8474581b', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-10 23:20:59', '2021-11-10 23:20:59', '2022-11-11 06:20:59'),
('08224a4dfcd1e3d29f24e7cf5633f55b297da2b736c19c793474a569e504fdeefbfe8331842c8fb9', 2, 1, 'zfix-auth-token', '[]', 0, '2022-07-08 00:43:41', '2022-07-08 00:43:41', '2023-07-08 07:43:41'),
('086a81eca4b628eea0eca72628da0a7f271c3f57cfab555cac37aea1a5a7d6e86ea0fc86dfc5e34a', 23, 1, 'zfix-auth-token', '[]', 0, '2022-02-17 21:19:05', '2022-02-17 21:19:05', '2023-02-18 04:19:05'),
('087f88e930d3b159feb5461b438d5530730c447d69d4e9b6f335e7c951771346b1a9f3a6f6e59682', 48, 1, 'zfix-auth-token', '[]', 0, '2022-07-04 23:16:08', '2022-07-04 23:16:08', '2023-07-05 06:16:08'),
('08efa6319b8c86725564185b2f33e1497383f06287edd7909fd3a6724f326a31a541e90cba52fb2f', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-09 09:10:43', '2022-06-09 09:10:43', '2023-06-09 16:10:43'),
('0a2ef2ce1a8c8d94f259667ce6fce701ce9b0f74a4162c0158e32f71387c0a3309ad34e92414050b', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-18 02:57:24', '2022-04-18 02:57:24', '2023-04-18 09:57:24'),
('0a3e6b72f866099e98ce85887449b1f7e3f31f0be94c781364ce1120cecb3d641da95b1bfe8068e3', 33, 1, 'zfix-auth-token', '[]', 0, '2022-05-12 19:52:22', '2022-05-12 19:52:22', '2023-05-13 02:52:22'),
('0a929478c5a07de981a68d2e49bc3523883a42da9cf13df64113f30c038f7159d83c1d982ab80f0f', 8, 1, 'zfix-auth-token', '[]', 0, '2021-11-30 21:22:12', '2021-11-30 21:22:12', '2022-12-01 04:22:12'),
('0b014667ef36f5001796f4254b1075004e73a5609d800514b9b371e83146a05ed4b1f9902547ee9d', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-15 20:06:32', '2021-11-15 20:06:32', '2022-11-16 03:06:32'),
('0b821f717c061bb4c58fe26391f57815b6ef66bb985df3ea579cb5ebad7285ad080d15d3d6eecddf', 2, 1, 'zfix-auth-token', '[]', 0, '2022-05-19 06:08:03', '2022-05-19 06:08:03', '2023-05-19 13:08:03'),
('0c5c4ca685eabb99670d63da88d08d8432f0a887291da868dc3498b2d2686b7f639278cc8e980983', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-01 21:57:46', '2021-11-01 21:57:46', '2022-11-02 04:57:46'),
('0cf0cc21d6317d1b692109e5b112273c04dcbdddcf945f5d29bf7b7ca0d3b4da4f6102e1de03a7e6', 2, 1, 'zfix-auth-token', '[]', 0, '2022-03-31 03:24:58', '2022-03-31 03:24:58', '2023-03-31 10:24:58'),
('0cfa055de32f0a7be240c6b096bdb35de74eef265dbd25ab121eda5b669b373bfc74860233e0610c', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:30:02', '2022-01-09 21:30:02', '2023-01-10 04:30:02'),
('0d882ea500f4d28325a6d6ddc744d62013fd2fa6b634df3392ab1ac593031f482e7d80909c970552', 21, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:19:05', '2022-01-09 21:19:05', '2023-01-10 04:19:05'),
('0df0fd428128d6b4980b8d0ac8f094549e4109c89b01d7a4cdb2434e938be5d9feb16caad0aed116', 2, 1, 'zfix-auth-token', '[]', 0, '2021-10-29 05:03:42', '2021-10-29 05:03:42', '2022-10-29 12:03:42'),
('0e5ecbb3341bff7bbd5690d5baffdbe6ab8688a03d9fa48c44eacf31a36c359ca4835ce2d63cd962', 22, 1, 'zfix-auth-token', '[]', 0, '2022-01-12 05:37:49', '2022-01-12 05:37:49', '2023-01-12 12:37:49'),
('0e65654345b6e4442415cd7b942774ea55b82098f69d9fd25229444b0e8b90bef8099d4ec53060f0', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:39', '2021-11-11 19:36:39', '2022-11-12 02:36:39'),
('0e8e4df00ba22dee27a4637a0c6a2085ccdd471c9cb0b0ccaf842ba8cb8ab948cda329ceb01fbf4a', 23, 1, 'zfix-auth-token', '[]', 0, '2022-03-22 19:55:31', '2022-03-22 19:55:31', '2023-03-23 02:55:31'),
('0ed2dd76828205d9e906a684a61fce001e7361f924bc8bc505da4f6d0f38ae83c5c333878077810a', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-19 00:12:42', '2021-11-19 00:12:42', '2022-11-19 07:12:42'),
('0f837daa9496bae7f4286d66c20030bb660d39e95d638e1e61ae01125825575b0d87ad4bcb14cf76', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:36', '2021-11-11 19:36:36', '2022-11-12 02:36:36'),
('0fae2c763c32e322595486d1585c8dfdbf2c594eb53e5c90ddfa6a8c0f9f0bde7ffe746cc0d42b03', 2, 1, 'zfix-auth-token', '[]', 0, '2021-10-27 21:58:09', '2021-10-27 21:58:09', '2022-10-28 04:58:09'),
('0fe5de52dd5e98636add8d3500d145b0010db0045ecc1a634951ebfeb030dbdbe610535e1c8f40cd', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:33', '2021-11-11 19:36:33', '2022-11-12 02:36:33'),
('1045fea3ca54df590fceeba2d95d18c8f4c99c2b77895bc18942f29eb3e175ffdbefa91b90eae666', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-14 01:13:44', '2022-01-14 01:13:44', '2023-01-14 08:13:44'),
('10f14682fa8632d96b35202965e6e1a942f682d101da0111f3f67cde722ac8c2895ea857e4a9a99e', 16, 1, 'zfix-auth-token', '[]', 0, '2022-02-09 20:25:03', '2022-02-09 20:25:03', '2023-02-10 03:25:03'),
('11075d547bec34568ab999ce7a2ab087fa37a2ca57ecf098c65d6dab7c673b1b2b0dbd4d4bc4fe81', 15, 1, 'zfix-auth-token', '[]', 0, '2022-03-25 10:58:33', '2022-03-25 10:58:33', '2023-03-25 17:58:33'),
('111a7b66fc40c55c841be7b30e0d799b9f4420bd8c860ff85677257c2cafa1c355d2c41cc838f37f', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 23:17:43', '2021-09-20 23:17:43', '2022-09-21 06:17:43'),
('122f7da116cb94dd476f34792f4f0932f91bd0f7904d5505e753535b1e3e11ffc5cf6b4c5b406fd2', 2, 1, 'zfix-auth-token', '[]', 0, '2022-07-08 00:51:32', '2022-07-08 00:51:32', '2023-07-08 07:51:32'),
('12d4a330142267c2ade410a5454cc79745a590af42b2d0a7fccf8eaf192c4433de99d1d988c63bf2', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-11 22:16:40', '2022-01-11 22:16:40', '2023-01-12 05:16:40'),
('12d72255baa31d97b3c4fa44e062ae9c50c9fa4db8c7de07355c3a4b2208166baccfef61c74b4093', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:39:31', '2021-11-11 19:39:31', '2022-11-12 02:39:31'),
('12e65449656b6ae02887bbdd922eaeee582780bcaf3b4443baa1bd4a6d404bc76e08569add8d4d8e', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 01:27:00', '2022-01-10 01:27:00', '2023-01-10 08:27:00'),
('1327573861c7d9726d18d50eac63b875fbbb1a3ce66f764a0cbef32fdc86389ba284017213ea2c73', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-12 00:08:29', '2021-11-12 00:08:29', '2022-11-12 07:08:29'),
('136b6abf0236d362df929dddbb098e2163909c78e8f32c5ec04d15e5488446c2691100f82a482053', 57, 1, 'zfix-auth-token', '[]', 0, '2022-06-13 19:38:22', '2022-06-13 19:38:22', '2023-06-14 02:38:22'),
('13bf1d3cb9478bcd6f64545b3cea22001734a187ae802311d34a1223c42faf0fac52867b2074c77b', 2, 1, 'zfix-auth-token', '[]', 0, '2022-07-07 23:27:50', '2022-07-07 23:27:50', '2023-07-08 06:27:50'),
('142e73de73b7193b847f1e35e0e8ffd9bd8e7155a83387e8521e6e9632d8b9bdda936cf03dc29e8c', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-21 21:50:16', '2021-09-21 21:50:16', '2022-09-22 04:50:16'),
('144acb9da84ce568092505ba5e4d2cc68ad7f45abb330a166973ebffe1c03abfb9fb91e09f1d9600', 2, 1, 'zfix-auth-token', '[]', 0, '2022-07-07 23:47:03', '2022-07-07 23:47:03', '2023-07-08 06:47:03'),
('144cfb7663a5fc384b2e216e21023673954b3b565468b1cb9d1d3e6da83a0a09a225a1ff5a4ad606', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-12 04:57:27', '2022-04-12 04:57:27', '2023-04-12 11:57:27'),
('146889db402710b1fbb03ea51c38248c6169d8b5c4fb9db5519673819be85a6495e3e846c0b33f47', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:33', '2021-11-11 19:36:33', '2022-11-12 02:36:33'),
('146fbd5796c6d8b832ebdbd208e67ce4299bef5ec7ce8007363125ffaefed727d2509cdb5bc4ef7f', 15, 1, 'zfix-auth-token', '[]', 0, '2022-05-18 13:41:00', '2022-05-18 13:41:00', '2023-05-18 20:41:00'),
('148789ea5c607aee8b0350fb257015584494009f22dc804dc88136b382b5350360c0216c8338c7ee', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 23:17:20', '2021-09-20 23:17:20', '2022-09-21 06:17:20'),
('14c83f12eb770d2f0aaf856af541b2ac66698b1fa5438915645dae415786ece75e428bcaf4af1dc3', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:42:57', '2022-01-10 00:42:57', '2023-01-10 07:42:57'),
('1509c18d80176950aa3f9ae9fb996be0301a6848a42d175ce8289946f3da3d13ca6330aa853dd1a4', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-17 14:19:23', '2022-04-17 14:19:23', '2023-04-17 21:19:23'),
('15fc5f2ad57e5ce90f979c0c922ab5fbc2bfca34354fc9a89d00ef1fd62d55057238a1ad8e67048f', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-01 23:32:00', '2021-11-01 23:32:00', '2022-11-02 06:32:00'),
('160c79d788bb5ffc2905725268e8e3c2cbf4768e09d8e266266b427a578eda5c05d133d017d9b4c5', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-23 00:15:43', '2022-06-23 00:15:43', '2023-06-23 07:15:43'),
('169ac803bdf3e600f32c2d017a9f5f20acfa07c5e92fbb0800efd396f929e161422b260ca35accf8', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-21 00:38:56', '2021-09-21 00:38:56', '2022-09-21 07:38:56'),
('16a63877e1fcbe32b0a119a33eb7cb97924159f0b753abf91804aa39a7f3bd2c65e1996afe051822', 55, 1, 'zfix-auth-token', '[]', 0, '2022-06-11 02:39:03', '2022-06-11 02:39:03', '2023-06-11 09:39:03'),
('1717d30ee5d8c7ef9afd1f434164c34b8ff1418ce4f395e39a7a8d5d34d109c52bbd55041bb1cc99', 2, 1, 'zfix-auth-token', '[]', 0, '2022-07-04 22:38:12', '2022-07-04 22:38:12', '2023-07-05 05:38:12'),
('171efe0f07b9f4ca5f857088dbea5da4771eba61d33b399fbb7a5b26f3a04963001d0e0d74685a69', 60, 1, 'zfix-auth-token', '[]', 0, '2022-06-19 18:46:35', '2022-06-19 18:46:35', '2023-06-20 01:46:35'),
('1734cf8c54a4b97008a95733de7d6e98118530e4faadffcff7861cc39cf08834b48948d405e58989', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-19 20:57:07', '2021-09-19 20:57:07', '2022-09-20 03:57:07'),
('17c7016219b8e6e95db2470847753a77df566592681330db6cd687e7f3d31c45cd1b5c2e993f6903', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-08 21:23:15', '2022-06-08 21:23:15', '2023-06-09 04:23:15'),
('187612b957e0c4c4c8218e73ff30c5b520030652c5fd470ed2c42f6d8decd450e10e9b349fd7f5f8', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-16 23:53:38', '2021-11-16 23:53:38', '2022-11-17 06:53:38'),
('18808f5c0908351c82ca9d20a418db17dd784e01c56944c052b11dad4eb8e15ea0693aaad653f8ad', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-10 00:21:45', '2021-11-10 00:21:45', '2022-11-10 07:21:45'),
('193a07d4ae166b257d759a58156d96be58ac17f53f187e4656d9d880eb5379186bea27aca69f5a8b', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-21 22:40:45', '2021-09-21 22:40:45', '2022-09-22 05:40:45'),
('19ad77da172e0b8db89dd2dc1e3e2089b69bc70c4144f24ec3aaba0b6c9d6cd8285057319e5d72a1', 16, 1, 'zfix-auth-token', '[]', 0, '2021-12-21 23:37:35', '2021-12-21 23:37:35', '2022-12-22 06:37:35'),
('19ee8b0dee4a731f95a637991984ab3e160d00c38f758dbf5deb17158f9cdae998ba5067dffe8b6b', 15, 1, 'zfix-auth-token', '[]', 0, '2022-04-01 20:13:43', '2022-04-01 20:13:43', '2023-04-02 03:13:43'),
('1a9174a8df3521ff1ae1737cda960dffd02af6b77bef47566e84dbb513eedf0d79d2fdb0bd606d50', 2, 1, 'zfix-auth-token', '[]', 0, '2022-05-10 21:31:40', '2022-05-10 21:31:40', '2023-05-11 04:31:40'),
('1ba531d3c638ce193968176d54407cd140876d6538dbba021b838fbd60b44301d77ae776e5626f8c', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:44:40', '2022-01-10 00:44:40', '2023-01-10 07:44:40'),
('1ca25bff168aea7546b4af5e6dae36c5b91d529d8f3e3914602724a2f25c56caecb5135a17b05826', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-18 20:21:58', '2022-01-18 20:21:58', '2023-01-19 03:21:58'),
('1f16261eef83fbc5999aa49fcb9a442982125fdd3caa33be74a1c24b743b21eb0c59d117fdd7c051', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-29 02:05:09', '2021-12-29 02:05:09', '2022-12-29 09:05:09'),
('1f65755c83a00d8ea22b4399aa5787e4b6b339c0909b15bc0d15686d523b4991c3bcf3d9e64f1218', 2, 1, 'zfix-auth-token', '[]', 0, '2022-03-25 12:29:01', '2022-03-25 12:29:01', '2023-03-25 19:29:01'),
('1fa14168bee92c5afacb51dbad7cbc25f80873b16291e9631aa2cd3ff904ed04de5edc451a989422', 21, 1, 'zfix-auth-token', '[]', 0, '2022-02-24 00:19:13', '2022-02-24 00:19:13', '2023-02-24 07:19:13'),
('1fefb7e84b925977f79c15f2d4dd57d31b2d298b8d4655958d29ce97652559c326a844cb6c0f3746', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-17 19:40:47', '2022-04-17 19:40:47', '2023-04-18 02:40:47'),
('2062547e345bb584185068124c3e643d51717ff361d094b95dc1d2615641a6a840543c3c7751c3fe', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-11 06:14:25', '2022-04-11 06:14:25', '2023-04-11 13:14:25'),
('2070a880295a6721602231aa338383b0b7ee085a0ac1065f06e45014ebf2fd2423f4f27634007609', 37, 1, 'zfix-auth-token', '[]', 0, '2022-04-10 00:46:20', '2022-04-10 00:46:20', '2023-04-10 07:46:20'),
('216bd48a0330258369e1b2239d9456f548e96c57ed3b8efaa52318bb4d932eb93c7f971ebcd50a1c', 15, 1, 'zfix-auth-token', '[]', 0, '2022-05-17 22:18:18', '2022-05-17 22:18:18', '2023-05-18 05:18:18'),
('21a302626c70f77a32f7886cc983a2adab9636b6a5182c9e8ca176060a18d9ea804c27989efd0251', 2, 1, 'zfix-auth-token', '[]', 0, '2022-07-07 22:53:50', '2022-07-07 22:53:50', '2023-07-08 05:53:50'),
('21a34ddb6c5e17e5ce27ee8f4358950273be603acea58199a081f91ba990e5a828a9aa06f047f033', 16, 1, 'zfix-auth-token', '[]', 0, '2022-02-10 01:28:50', '2022-02-10 01:28:50', '2023-02-10 08:28:50'),
('230992954f4fe70bc72f763062ea87dc5ee6ec39adee6e4448e0bda9d148d0da062eb6914dc53fde', 15, 1, 'zfix-auth-token', '[]', 0, '2022-03-11 12:58:43', '2022-03-11 12:58:43', '2023-03-11 19:58:43'),
('2326a0f5efe880041f6d70eed39f09d96141f8687684976fc5645966da1ca9e68d03db81b51d67ad', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-19 03:46:56', '2022-06-19 03:46:56', '2023-06-19 10:46:56'),
('23390a9bd29ed62f2d60497010ad11e0ba090caa37d9a16514155bfb88aea1dea1aba4b392229c8b', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-21 20:04:08', '2021-09-21 20:04:08', '2022-09-22 03:04:08'),
('234e945893aa8c101d158046a445c35e7684af44b05c876f9c9a86d64ac1c5a4e76202e33920cbeb', 2, 1, 'zfix-auth-token', '[]', 0, '2022-07-07 22:58:42', '2022-07-07 22:58:42', '2023-07-08 05:58:42'),
('23b4b8381e7c5f47a9662b86206d539040e46ffcf02eff4a878961f7796abd05eeadcebb187916ce', 65, 1, 'zfix-auth-token', '[]', 0, '2022-06-22 05:52:56', '2022-06-22 05:52:56', '2023-06-22 12:52:56'),
('23b82cd0ed59e017f8f8bccb488615d23ed89ebb1f43c891fa1fbdb868b1bb6010a802ff96c09d5a', 2, 1, 'zfix-auth-token', '[]', 0, '2022-02-09 00:59:04', '2022-02-09 00:59:04', '2023-02-09 07:59:04'),
('23eb02596c2ab958b7559d8fe4bb1e91632f742352a6adb55d49b3e15c6ff0eea5f260f58a77d0b6', 2, 1, 'zfix-auth-token', '[]', 0, '2021-10-27 21:59:14', '2021-10-27 21:59:14', '2022-10-28 04:59:14'),
('2458988e75c66154fe35872e357a231b49639469eb24c998ccd6784e564fdad3bc4b1d42da8e63a3', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:44:39', '2022-01-10 00:44:39', '2023-01-10 07:44:39'),
('2467bdae5893e4cbcb7f156a6e748f9552783b83a5e2fb9b535217bce73ad9d428cb76e700a56d0a', 15, 1, 'zfix-auth-token', '[]', 0, '2022-04-18 03:19:38', '2022-04-18 03:19:38', '2023-04-18 10:19:38'),
('246e2b03b8a7abb27b7c354a2251753d745d95d99aaefb73b1db50018dc13e234168e0cd0ff59488', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 21:41:14', '2021-09-20 21:41:14', '2022-09-21 04:41:14'),
('24a037bf53dcae60a04154e8c23004c2083c65214d12b409925e81846ec1e81263b82abf2a5d9a7a', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 23:23:31', '2021-09-20 23:23:31', '2022-09-21 06:23:31'),
('24c7c4f5eb38206fb07819cd6ca365442822d8dd036206dc69f30e6c9d00c51225f514ab2eb5362c', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-08 05:00:58', '2022-06-08 05:00:58', '2023-06-08 12:00:58'),
('25393f939ac9f508bf3c5fbd4e7a30fd4b7040ae36cf1e01969fbfa9c4f7487ee2f94357e6170998', 2, 1, 'zfix-auth-token', '[]', 0, '2021-10-25 05:28:37', '2021-10-25 05:28:37', '2022-10-25 12:28:37'),
('25b34c1c8a9ed3e8d1bacf782f058225e499a3013ee6699fd3e0713c4a809d4c2e315f67497ca7ae', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-06 00:08:56', '2021-12-06 00:08:56', '2022-12-06 07:08:56'),
('25eee2f2ec579824da78489723a7bae1f57366ab8bfa4c7f1f6beb696a18710490c734a497f49734', 48, 1, 'zfix-auth-token', '[]', 0, '2022-06-29 18:00:52', '2022-06-29 18:00:52', '2023-06-30 01:00:52'),
('276a5d579edc2a49c3caaa32d94ed6aa816791e8c72af3c5a533ae6538e5359c11994439853e8fe0', 21, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:51:45', '2022-01-10 00:51:45', '2023-01-10 07:51:45'),
('28ff75e25599eb248d2d0502fe7477e40b99a7b55508a8052966fd4bc36c461bf0d78dd3b5ed8b75', 18, 1, 'zfix-auth-token', '[]', 0, '2021-12-27 00:37:01', '2021-12-27 00:37:01', '2022-12-27 07:37:01'),
('291833cda7261f94f5fcc95ebbdf7696d399e6642e135f0ba55a0008e6ef7006fd9c615e9b23608a', 6, 1, 'zfix-auth-token', '[]', 0, '2021-11-25 00:40:17', '2021-11-25 00:40:17', '2022-11-25 07:40:17'),
('2965c403f74224fd881761ea865e15f1c65b863c0fc66e2e7e623c330ed757107b33229916483069', 53, 1, 'zfix-auth-token', '[]', 0, '2022-06-08 20:20:14', '2022-06-08 20:20:14', '2023-06-09 03:20:14'),
('297db1c32792ae49799bf1f4c1a62b256a0eb515abc5b675ad11aabaf162eb4866af27ff489e951d', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 01:33:16', '2022-01-10 01:33:16', '2023-01-10 08:33:16'),
('29c9d767bba9f07f08b468bdcdff290af4e1d5875075075a92b02aa8f34359408b5d722762850c18', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 23:17:13', '2021-09-20 23:17:13', '2022-09-21 06:17:13'),
('2a025119fb20880c69a96a86e9a851704e83d1df70169c46db418cea8ba22dd89b95eccb9d3d595d', 15, 1, 'zfix-auth-token', '[]', 0, '2022-05-18 06:43:03', '2022-05-18 06:43:03', '2023-05-18 13:43:03'),
('2a302f45fd99c04deaa570ab39a053fc9ea6c73380ca695b352f87726e3cac57ab8b4c206500d686', 62, 1, 'zfix-auth-token', '[]', 0, '2022-06-23 19:28:11', '2022-06-23 19:28:11', '2023-06-24 02:28:11'),
('2b1ee87c412888d0844673b63f37b89d66bb42c152acc585908e3c8e6e3c261153c24ae02275feba', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-19 23:04:56', '2022-01-19 23:04:56', '2023-01-20 06:04:56'),
('2b40aa6be9a2c1723c3cfc65b686c02606e01cc17877da4ea13aa8a075ae92f424dad6a367951555', 15, 1, 'zfix-auth-token', '[]', 0, '2022-04-07 06:18:44', '2022-04-07 06:18:44', '2023-04-07 13:18:44'),
('2bd69e1ed57df8b72f7a19dd30a1df3cc2f7bc442c3e225761e7a1e2b5ac0769bd56e3e21a20f611', 17, 1, 'zfix-auth-token', '[]', 0, '2022-02-24 07:19:39', '2022-02-24 07:19:39', '2023-02-24 14:19:39'),
('2c20662349f47598fee1dce8c5611ea34b34852ac0d5c2234ec6a393c9fd0b4b1b8c2dbd74d56d70', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-19 22:52:27', '2022-06-19 22:52:27', '2023-06-20 05:52:27'),
('2c44f087ef4cb6f122240a657c519c6d79147fe650553788df5da4d46614c7aea48d3f6a0897fcf8', 67, 1, 'zfix-auth-token', '[]', 0, '2022-06-22 20:22:44', '2022-06-22 20:22:44', '2023-06-23 03:22:44'),
('2c793cd4394d9dd33340a193f56322e7dcb88be70f8663c53495cc81d12f756d6b55f866043cc9ba', 2, 1, 'zfix-auth-token', '[]', 0, '2022-07-07 23:39:07', '2022-07-07 23:39:07', '2023-07-08 06:39:07'),
('2d05ae4629124c1662ac0ee63c0d1aa2b95570522a87640e2b27b66105fbe9d6dbe5a5de82b59920', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-09 00:19:22', '2022-06-09 00:19:22', '2023-06-09 07:19:22'),
('2f330a5560f6faa2fd6b4411bc20f94b30a7d7f81a073effbff061849bdc1174725df73a6a768620', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-19 23:52:30', '2021-12-19 23:52:30', '2022-12-20 06:52:30'),
('2f9904b9ce5dde1d6474f6d94662414d78396f33de8a25d3d6d485f4474d1f810d9220b6210217b8', 38, 1, 'zfix-auth-token', '[]', 0, '2022-04-10 22:18:36', '2022-04-10 22:18:36', '2023-04-11 05:18:36'),
('2fafed400f41f16a454cbf12966255f1b7188162f7555cc9a8ea991040146023ab286a2de37b91a9', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:18:07', '2022-01-09 21:18:07', '2023-01-10 04:18:07'),
('303d83dc6d285ded2280e5439c1944bbda79b3a4178beb800653759ba2650681e7202525a0ae6717', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-19 20:02:13', '2022-01-19 20:02:13', '2023-01-20 03:02:13'),
('309cda05fb13b7ae6d9fe378edfbb490578a8862e0a3b6f730c625e1ea9c6b682571731cdc426d38', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-01 21:27:46', '2021-11-01 21:27:46', '2022-11-02 04:27:46'),
('30a7336ebf665438c710f1e3ba1fab73ee13318092876ce55de31bbf7de976a94c90be326cce1be1', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 19:59:14', '2021-09-20 19:59:14', '2022-09-21 02:59:14'),
('30fcf22db1ebef949cf6c1e7676fd8e35ac982f59358aca95ddf92f3a5b782da5d281aa5a9b4b90e', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:31:19', '2022-01-09 21:31:19', '2023-01-10 04:31:19'),
('317f15c3c48b255edf070328887caea6cfef60346741077eada4dbba5ab1281d76ff9180af206e54', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-15 09:18:42', '2021-11-15 09:18:42', '2022-11-15 16:18:42'),
('31cd964801e10e06f35727e82630db9231812ae94fc8223ad52cdf726b475304dd8b646e1a4128ce', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-01 00:42:58', '2021-12-01 00:42:58', '2022-12-01 07:42:58'),
('323250a3957c4e6f78bb7495e0097b5dd86e73d1472fef647f98a1db31ace83d5eb78d75c8e94fb4', 23, 1, 'zfix-auth-token', '[]', 0, '2022-03-08 21:27:02', '2022-03-08 21:27:02', '2023-03-09 04:27:02'),
('32f4b484ec3aa46a4e9005ab96d474efc17d5bf7fb1634b3b38ec7c9b5f2f233f838b263d869ed15', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-12 04:57:27', '2022-04-12 04:57:27', '2023-04-12 11:57:27'),
('32f5b8fb61ba42b552237c2bba948da1eaaac41e66e0a9d646f3f7fc3df55f5384904615d5539799', 21, 1, 'zfix-auth-token', '[]', 0, '2022-02-24 01:05:43', '2022-02-24 01:05:43', '2023-02-24 08:05:43'),
('34275bc6c0dcc898fd523a2c5709c38239bf44741797e87062aa14c372d729e243a9b684724cb4c0', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:39', '2021-11-11 19:36:39', '2022-11-12 02:36:39'),
('344fc9fbcd4c86fd7e150555e01effaf305fbac91963d26123ca50fc477251dfe8a2635417bd3976', 33, 1, 'zfix-auth-token', '[]', 0, '2022-03-22 08:21:50', '2022-03-22 08:21:50', '2023-03-22 15:21:50'),
('34d865f0774c0e4ac1e497ad2de23695bbd4c1a8ba5d2dbfdb6f4a323db81aad5798deccb13e5163', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-15 20:09:29', '2021-11-15 20:09:29', '2022-11-16 03:09:29'),
('34eecbe200b39cf99b75d734927a45b2e569c524468656c496663602e11644fdda6fb4536f91984f', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-17 21:12:34', '2021-11-17 21:12:34', '2022-11-18 04:12:34'),
('35b10f99e62b1984140ecde93edfb4e32959a6b134b98295dc87cd656b33f417bbcb546feb04c532', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-16 20:44:42', '2022-01-16 20:44:42', '2023-01-17 03:44:42'),
('363d42ed2baa9a74659f197e0d3accb705c65d7873de701ef2c1c085af634cd4240369cfb8670ecb', 15, 1, 'zfix-auth-token', '[]', 0, '2022-03-11 11:24:29', '2022-03-11 11:24:29', '2023-03-11 18:24:29'),
('36bb3155c1da7c841ee1582ed45beaab4a345c63f68e440455a59cdaf921f7dcb4a04542324815be', 2, 1, 'zfix-auth-token', '[]', 0, '2022-07-07 23:32:56', '2022-07-07 23:32:56', '2023-07-08 06:32:56'),
('381254b41b38c91ef590f935b8fd612089106a3a0b803533f2478045566950ca6f4f1a5ae1774d58', 23, 1, 'zfix-auth-token', '[]', 0, '2022-01-17 01:12:29', '2022-01-17 01:12:29', '2023-01-17 08:12:29'),
('3817d924886bf32d296fc0783cb5e954540d8216acbd0d0c2d2b27c4a44dd6b4cc421db4c02c5ddf', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-27 19:58:41', '2022-06-27 19:58:41', '2023-06-28 02:58:41'),
('38600e795c1fe5f12e437efe0216e1226e4f54415cc41ed467d1fbd8c623679b43339904be0a1430', 33, 1, 'zfix-auth-token', '[]', 0, '2022-04-01 01:05:51', '2022-04-01 01:05:51', '2023-04-01 08:05:51'),
('387b8c0186ac62255cd8bd3e0770af9a0f8b436608dbf8dc1f202680250d0c39b26c18f418029ee0', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:31:17', '2022-01-09 21:31:17', '2023-01-10 04:31:17'),
('38a6574a656da437f68ef96522d4f46292a768e6ef30e644b8c61fafc4ee2f3c8f78799d60ab2e0e', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-25 00:34:02', '2021-11-25 00:34:02', '2022-11-25 07:34:02'),
('39475b9a103b6f29ef367ac8143eddfbf11ea42ca670694147f6d4ca8e9837e25fddcc5c2f3c0da7', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-19 19:33:52', '2021-09-19 19:33:52', '2022-09-20 02:33:52'),
('39f7a93d8411db77682bd409fcd64a6005e6fa71321890b781f893479bc712f16b5df85c43c72b37', 2, 1, 'zfix-auth-token', '[]', 0, '2022-05-27 18:49:08', '2022-05-27 18:49:08', '2023-05-28 01:49:08'),
('3a4ccc12aa55dbf62c36ed9ac2b3c85c638d6ade42a03c650a70326f644175a5f959af238a462140', 2, 1, 'zfix-auth-token', '[]', 0, '2022-02-09 00:58:03', '2022-02-09 00:58:03', '2023-02-09 07:58:03'),
('3a84b6563d231ddb471eb6198dc27b0a3c780e3aa1abb3cbec3a4bdaaeaac1444c7e00a2b03f21a2', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-15 09:18:42', '2021-11-15 09:18:42', '2022-11-15 16:18:42'),
('3a85386dfd60430ce1f0b84e7cc20155aa970d37109d58ba16b9dfd4b108b9a58af4b15f24d7248d', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:48:27', '2022-01-10 00:48:27', '2023-01-10 07:48:27'),
('3ab20ae6a0868602c8308539b4a73fa1dc5ba980df23a2733787ff1538a5f8ff3254ef470749be7b', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:35', '2021-11-11 19:36:35', '2022-11-12 02:36:35'),
('3b364e6d6685892b0245140b9b08f74910b48458e7ab454508807893830218acf3a90612e99c57dc', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-14 00:50:34', '2022-01-14 00:50:34', '2023-01-14 07:50:34'),
('3c2d6990c32e86e2a85df354c9174da389998edbba2a6a685b4e1311927df4f0831f965f03753559', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-15 09:18:42', '2021-11-15 09:18:42', '2022-11-15 16:18:42'),
('3cb012abe7d4080b25a9615a577c0a850336381d180185ff4402f548ef2f888403aeea04049fddb3', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 20:19:41', '2022-01-10 20:19:41', '2023-01-11 03:19:41'),
('3cb413c2a5aedbc87b86ec0ecf0791fbc8d5c11704b6341e349fb31c67d94df1787aaf59b4eb9e50', 7, 1, 'zfix-auth-token', '[]', 0, '2021-11-25 01:22:01', '2021-11-25 01:22:01', '2022-11-25 08:22:01'),
('3d09f5d92e4f6482e0408abde4cf78e6fa9d26384dcf393bf3dabace5cc1de4f8cffeb1e70b9a79f', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-21 00:38:38', '2021-09-21 00:38:38', '2022-09-21 07:38:38'),
('3d14c434e1efc1822a045c23f7a47b3c9fb4d2d8b2439a31919c5f6673526f91a14328cf7ad7303b', 2, 1, 'zfix-auth-token', '[]', 0, '2021-10-23 11:31:40', '2021-10-23 11:31:40', '2022-10-23 18:31:40'),
('3d9f259fb8c51005cb00d0fd662ace12a3881bd6e3160c37c541d1d5d111eecb764cdb9344b4ddbd', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 00:54:09', '2021-09-20 00:54:09', '2022-09-20 07:54:09'),
('3dda8f12fdf9e1e02c28eee039790f1403ddd40240af4e0f3469a7d1f280cae59c9be04d86095f99', 2, 1, 'zfix-auth-token', '[]', 0, '2021-10-27 22:03:01', '2021-10-27 22:03:01', '2022-10-28 05:03:01'),
('3df35f3bb333187b845ac1fcf0248284b325712711ce16280994d0b8b689db884c8f3e4e1a8b9db4', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 19:45:29', '2021-09-20 19:45:29', '2022-09-21 02:45:29'),
('3e26ab29786e691b56d9215ed30f3128ad5762fe3f856a6a223d0390639899b3ff807dd88e6af6f7', 54, 1, 'zfix-auth-token', '[]', 0, '2022-06-10 02:05:56', '2022-06-10 02:05:56', '2023-06-10 09:05:56'),
('3ec5e7bf46a8a3a14bbd93f2d4938416e043de049c0e7c9225f6fed0585a46e5db9903f3acdba780', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-07 00:07:07', '2022-01-07 00:07:07', '2023-01-07 07:07:07'),
('3eece13c226690233c0bc12fdfcead2ef7433929f62d6d7244100033fe86a548cac77fa0f12ca552', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-01 02:45:13', '2021-11-01 02:45:13', '2022-11-01 09:45:13'),
('3ef7a0315463973d83499d78559938c8a3b65f55c10173a259f9af6d6a90c27c9049ab78c7a431d1', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-06 00:21:41', '2021-12-06 00:21:41', '2022-12-06 07:21:41'),
('400c142509a378255f743975287ecaba028d50979157efe07921d02847db21ab026e17f77c10e555', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-12 05:01:57', '2022-04-12 05:01:57', '2023-04-12 12:01:57'),
('409b3902145f82115bda4fb342b52233ab2be7327c83ab5f1aff9a94316b09b0bd1b2901e3535b68', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-08 03:54:32', '2022-06-08 03:54:32', '2023-06-08 10:54:32'),
('40c70e1f8a5c569249f30742763e38412e47928a9fd3b16e17c23176ff2527322fa0593338bffdee', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:38', '2021-11-11 19:36:38', '2022-11-12 02:36:38'),
('40e69e1506bbeed452aa540c13c128a2e83bfa430ee97b10b7a8a0febd66839a587269a905491e76', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:30:00', '2022-01-09 21:30:00', '2023-01-10 04:30:00'),
('4158ab9032364511fd6bed900940e5fec7f932023879e37c8380ef6a00db2c1b4eaadd198135906a', 2, 1, 'zfix-auth-token', '[]', 0, '2022-02-09 00:57:02', '2022-02-09 00:57:02', '2023-02-09 07:57:02'),
('41b087857c589a09ced0f47646c4df56e6c3b2c5941f217af00924629d03876d57365f067f6b23f6', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-26 19:53:24', '2022-01-26 19:53:24', '2023-01-27 02:53:24'),
('426b58e07302c44f84c680f8ca8028f278c1325a51fe159e4be8b28db4f3db1c116621da6e339efe', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:28:41', '2022-01-09 21:28:41', '2023-01-10 04:28:41'),
('4287cc6c6714eb6817da90527154c9bc2fa4084c51926cffde894b47702109bb6b6f2bb5b263465f', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-21 20:25:30', '2021-09-21 20:25:30', '2022-09-22 03:25:30'),
('42d6270cb59530371265fb42534268390e16df1f8327dc75f72b2e0470dc71cff0f4c3b5f02ea1a6', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:31:18', '2022-01-09 21:31:18', '2023-01-10 04:31:18'),
('435f3871f05d917ebdaf07922c26b65e0a1e6b8a0a2163217accd6c1c2dd7676cded19dba5fadd81', 15, 1, 'zfix-auth-token', '[]', 0, '2022-04-19 03:15:15', '2022-04-19 03:15:15', '2023-04-19 10:15:15'),
('439b314d4ceee5c2d8d2993e374dadb328934008f3ea0153952b23aa716a034497a202be22c22c76', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:26:17', '2022-01-09 21:26:17', '2023-01-10 04:26:17'),
('43c79bfbc46849cddf728d0fdd7e7e10dd8949e816c9c32e4aae82a5853be07af7b71d078e749a14', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-15 20:07:40', '2021-11-15 20:07:40', '2022-11-16 03:07:40'),
('4476aeab9b575e4b4e05b391cea49a1acbc7738ef7560dc2cae563aa898998b20466a2a24fc66fab', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-08 23:17:48', '2022-06-08 23:17:48', '2023-06-09 06:17:48'),
('44d7a8858cde98a7e3f225fc51c86b24f12f435f3ab08ea947234149bfd70a4e979fc06a1dd99b3c', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 21:26:16', '2021-09-20 21:26:16', '2022-09-21 04:26:16'),
('4540a5594df54ccc6570742276de5029cb084b09a78981a6a85756001c8e7b3850b5673ccb53ee2c', 23, 1, 'zfix-auth-token', '[]', 0, '2022-04-04 20:51:54', '2022-04-04 20:51:54', '2023-04-05 03:51:54'),
('462551a581351adc26db30ebc2cd264ec6db7a665d8f4ddb667027320ce0e4a1f6a3fb5bbaed4b1c', 69, 1, 'zfix-auth-token', '[]', 0, '2022-06-26 05:13:42', '2022-06-26 05:13:42', '2023-06-26 12:13:42'),
('464c1977ec4bcb966f805b0d4507672e66f0f5a27eafe1bd2ae03d4fa4242356c11938b056232ae2', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:30:02', '2022-01-09 21:30:02', '2023-01-10 04:30:02'),
('469871ea948bce6312a3e9dce8de1894ecb6ee58ee2ccac2cb5114ba647dd12cefebb461d31b0781', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:35', '2021-11-11 19:36:35', '2022-11-12 02:36:35'),
('46a165136a2d83f96177009eba06b857b943a6329b92dd361fae0179715ad171fe16714b7d1037fc', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-29 19:46:07', '2021-09-29 19:46:07', '2022-09-30 02:46:07'),
('46f3c5ca8805080c18f15e2fc77126e8ad4c8d6db682e826681e0082ffd55ade75a3ff3f78d91428', 62, 1, 'zfix-auth-token', '[]', 0, '2022-06-23 19:28:33', '2022-06-23 19:28:33', '2023-06-24 02:28:33'),
('4718106a95f644520ac7d85f580b4f41eb68b28054b1dfdc0e9780608454a2ed7b908a2a4507287a', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-18 02:56:12', '2022-04-18 02:56:12', '2023-04-18 09:56:12'),
('47e56a69d66958692fe987bac27da607bc103b57e8eedff29b5963d987522b92b3dc14a2bef6f2d7', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 20:46:28', '2021-09-20 20:46:28', '2022-09-21 03:46:28'),
('482f5be929dad88f94e8826c4a8617c97f7b217a72230098e66ece6f8c7576b7a8d1d2da13b9de55', 15, 1, 'zfix-auth-token', '[]', 0, '2022-04-01 20:17:41', '2022-04-01 20:17:41', '2023-04-02 03:17:41'),
('48a2b7061788d1dc01513dd2e2d6b4eafd17212369af28da469f73e733355f54c5461bcfe35a1465', 21, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:13:59', '2022-01-09 21:13:59', '2023-01-10 04:13:59'),
('48c8b406aac936e4e5f6fcb09230e7fc952d54b79d9a69e3a7cd64d83b81012201fb96cd10cde9c1', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-14 01:45:24', '2022-01-14 01:45:24', '2023-01-14 08:45:24'),
('48e975e8e22b6bb51a838bc4c4382ddf129ba7db0bdf06df34aadc69cab120163c24238e833bb63e', 2, 1, 'zfix-auth-token', '[]', 0, '2021-10-25 05:28:37', '2021-10-25 05:28:37', '2022-10-25 12:28:37'),
('491ba7d5b4e1779093624fe3c16111b7c6d68328fc726f22ddad509e3d5c8017d1209065379cec10', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-16 21:00:59', '2022-06-16 21:00:59', '2023-06-17 04:00:59'),
('4aafc5cdbfe0d8771666870d0bc88ed212285990580b2a6f16cfafa5c987e614d541f6c6d6b563c5', 19, 1, 'zfix-auth-token', '[]', 0, '2022-01-17 02:49:20', '2022-01-17 02:49:20', '2023-01-17 09:49:20'),
('4ac452e07a80d15af617ea6c2cbe31e0e5826712f6a9bc17763aee89d30c14cfb81ad345ab0f7212', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-15 09:18:38', '2021-11-15 09:18:38', '2022-11-15 16:18:38'),
('4b657cce17d308cb62add9f910c1f3c9bff54093b78880c1f3626f3a50c677021620214fb8414ce9', 64, 1, 'zfix-auth-token', '[]', 0, '2022-06-22 03:24:01', '2022-06-22 03:24:01', '2023-06-22 10:24:01'),
('4b8e0131eac50c70ff7a4f9bdd6263e7b7a973e141dad311513b71d34114e26ca3f92d7845297d8d', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:22:12', '2022-01-09 21:22:12', '2023-01-10 04:22:12'),
('4cf84af3690e4c7693b2238103c62c59b30142076b27ae865bef55a782af25bd84592fc573c61c0c', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-08 01:31:00', '2022-06-08 01:31:00', '2023-06-08 08:31:00'),
('4d4e23c0d1ab25a522a95a89b3be41aecb31aa8ee00db4891b6f5c7a92b9f8844413ca430356994b', 2, 1, 'zfix-auth-token', '[]', 0, '2022-05-13 10:30:14', '2022-05-13 10:30:14', '2023-05-13 17:30:14'),
('4d58ebe54e85e2e897f3c1132085245c1d5a0b8041c67612de5c2e83e5aa969cba16fa926320d7f3', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-18 02:29:55', '2022-01-18 02:29:55', '2023-01-18 09:29:55'),
('4d60e2bee8d2737e94431e8a701f6bc37cd652fc89195c6e9f3d9ed1ca49827fd2933fd1eadd2a51', 3, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 01:19:55', '2021-09-20 01:19:55', '2022-09-20 08:19:55'),
('4da79e8bc503389a06abab6b04a2917453efb2576910bac4bda9b5b87a3c277b0f0e42d242f31a3e', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-05 20:21:21', '2022-01-05 20:21:21', '2023-01-06 03:21:21'),
('4e2b21d8218a9380a998eb1dae22647b0bbec6095ef71349af4c20fc057d5a0d38008a48369086a4', 2, 1, 'zfix-auth-token', '[]', 0, '2022-07-07 08:15:18', '2022-07-07 08:15:18', '2023-07-07 15:15:18'),
('4ed68b42c61ea76f30c5ad220db380c3c8b7ff9f831b64522472063d5a8438820507a6c5d36c017c', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 23:26:55', '2021-09-20 23:26:55', '2022-09-21 06:26:55'),
('4ef72fa45d501b1b9e7913d052e60f442c5e36aba65509298950c569393bdb485a9ed516da726f14', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 23:50:57', '2021-09-20 23:50:57', '2022-09-21 06:50:57'),
('4f2f6a5f82d0a7e429543ca74cb887d5f3ddd992b05f867f3c222cfd94dbe80e41ac64b756fb05e9', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-11 05:16:09', '2022-04-11 05:16:09', '2023-04-11 12:16:09'),
('4f88e4f3c4e39477b34b0caa1c9d7ce5979cf2f57de96354fbf2c6f54a4dcee1f1936425a6fceb7a', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-19 20:56:56', '2021-09-19 20:56:56', '2022-09-20 03:56:56'),
('5018fce02c31fec6abf7e4b4802111f2fc6df3adf8444cfcbaa47a5202544ec2fec1fa39e06e6c8a', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:43:14', '2022-01-10 00:43:14', '2023-01-10 07:43:14'),
('502eb2d567f0cf2082ad8d833221f7fd0e806b6326ba0efa520886d4e5032b386962e5643480c3f6', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-11 21:29:41', '2022-04-11 21:29:41', '2023-04-12 04:29:41'),
('50f1d4855b5a3c48b98faa802c2e31e00f8b0459e3545af44c00ecb8dfed869b5d87df823ef0f467', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-14 01:56:29', '2022-01-14 01:56:29', '2023-01-14 08:56:29'),
('50f5247492795a8000fde32343acf0e38e042aaa53c5d60552a328e390b89dccb53edb44cc65b542', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-03 19:30:38', '2021-11-03 19:30:38', '2022-11-04 02:30:38'),
('512326bfbf3da608fd138661fbe5257057093362df03a293ba9aea266dde0fc5cb8a361402da7c00', 39, 1, 'zfix-auth-token', '[]', 0, '2022-04-10 22:10:23', '2022-04-10 22:10:23', '2023-04-11 05:10:23'),
('51d4dd81376a199206a69124ec2896c525d53cba17e3c7f8bdc9b89c73555b9020462587a2f7bd73', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-30 21:05:00', '2022-01-30 21:05:00', '2023-01-31 04:05:00'),
('52734192de783558f641c8185be8e79146c1d5b91052a5d6150ae305a47cea7ac56376f129fc8a6c', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-16 23:55:25', '2021-12-16 23:55:25', '2022-12-17 06:55:25'),
('52a874422cd45fda66875b7857134b07b300fd6b8de6ff716e71fa83c539d04bcb42109cc4f6853c', 15, 1, 'zfix-auth-token', '[]', 0, '2022-03-06 19:27:44', '2022-03-06 19:27:44', '2023-03-07 02:27:44'),
('52dc9f42e81db4724eaab903bf95c68b86213df0d7d2078da42cac24e457385bb7223ed5b3117f22', 20, 1, 'zfix-auth-token', '[]', 0, '2022-01-07 00:26:02', '2022-01-07 00:26:02', '2023-01-07 07:26:02'),
('53f7bb34f5c71eb91b04c5e5c8f04a3cc740ea4284acc09668726ba08e504360e08aa0c759ca4dd3', 44, 1, 'zfix-auth-token', '[]', 0, '2022-05-18 01:12:56', '2022-05-18 01:12:56', '2023-05-18 08:12:56'),
('545155ced43a4661156d9371fd2f6bbc08d13ad349485acfd81a99ba888321b113967bafca70709f', 35, 1, 'zfix-auth-token', '[]', 0, '2022-04-09 00:14:18', '2022-04-09 00:14:18', '2023-04-09 07:14:18'),
('5463b6d709e817eddf0b88652457b26051dc930d0dd914f3a5880d196cd1b004b8a0a14a6526a865', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-17 19:45:00', '2022-01-17 19:45:00', '2023-01-18 02:45:00'),
('549f5d9dfdad05f6f80d30389c85bfe3ac3b64125ef0e1ac1dff29ce7861a07f57778adaf3f0e4d0', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:33', '2021-11-11 19:36:33', '2022-11-12 02:36:33'),
('54cd4cf479ee45e64953d64d3c80be4b55b1496c0aba110afe9b3d76b1455f0172b55beff1a337b1', 23, 1, 'zfix-auth-token', '[]', 0, '2022-02-25 00:11:04', '2022-02-25 00:11:04', '2023-02-25 07:11:04'),
('554b3d5f0e6df2f13e722774b54599a6d4d2854c9d0a4a06743c6f64ff32a20f715230b2ddb5df59', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-12 22:10:22', '2021-12-12 22:10:22', '2022-12-13 05:10:22'),
('554bafe86be5f2424008e46035edfd7ceb82519b1ab2055411f24c24ee9b41a694c6312c72865376', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:48:30', '2022-01-10 00:48:30', '2023-01-10 07:48:30'),
('55876d3a1aa81ff0e8f49f0ec86ffe210038f36ac1ffbb65e7221a161e149cb3a7fad9da5e0ee3c8', 2, 1, 'zfix-auth-token', '[]', 0, '2022-08-24 02:15:36', '2022-08-24 02:15:36', '2023-08-24 09:15:36'),
('563ced11e82b17476daecf54fabbbf739318e70d7736a63f26c8bbfd9570e39c1d1617268889d843', 58, 1, 'zfix-auth-token', '[]', 0, '2022-06-17 22:49:24', '2022-06-17 22:49:24', '2023-06-18 05:49:24'),
('56577d7990cf74b48fd9d39a6ece9dc6098254fe2b04fdf96aa190dc7421f07933e5e8d758ac964a', 15, 1, 'zfix-auth-token', '[]', 0, '2022-05-18 06:49:24', '2022-05-18 06:49:24', '2023-05-18 13:49:24'),
('56d573403857777401f294a011d28eded59c3ea7eb29eb8aa4b416d73aa5273ebcd3c16a32631fa9', 40, 1, 'zfix-auth-token', '[]', 0, '2022-04-20 20:19:12', '2022-04-20 20:19:12', '2023-04-21 03:19:12'),
('570a4102a595ab7af7185b772bdd2a64a66776930ae344e8204c6e4a710c172da3116938be89d20e', 17, 1, 'zfix-auth-token', '[]', 0, '2021-12-13 19:32:46', '2021-12-13 19:32:46', '2022-12-14 02:32:46'),
('586b20178e739701e7789e8cfed90c07b8d092e89a06a67c84d1d96f212d049589cd379f609068a5', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:35', '2021-11-11 19:36:35', '2022-11-12 02:36:35'),
('58a7a02b74a63ccbe0f59754aae600dd36689ae21dc8f8917e5f229c7ab575d8c8c0d64404569657', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-10 20:54:43', '2021-11-10 20:54:43', '2022-11-11 03:54:43'),
('58ce2530258d319e083d8ddc208e9afc7f599ad65854e0e0ecfdb0c1905daaf2a3e24b594d1608b8', 28, 1, 'zfix-auth-token', '[]', 0, '2022-02-24 07:04:40', '2022-02-24 07:04:40', '2023-02-24 14:04:40'),
('591d6a6dfba621fb9f9152801737336a5e3d630be9b36b0144f410686f7e73a95b001c7e822e970c', 2, 1, 'zfix-auth-token', '[]', 0, '2022-05-19 06:08:18', '2022-05-19 06:08:18', '2023-05-19 13:08:18'),
('5951783162b1dc333859a1ba52c310d34d77dbf1bfb54cd86a127a8e3ffdd9ab026029aeb117878f', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:44:40', '2022-01-10 00:44:40', '2023-01-10 07:44:40'),
('5b44968c48cd9bb9affcfa8c79ff84b36bc3980e73c7023f31f018e5aa7f196efe69e6bf684b033f', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:48:29', '2022-01-10 00:48:29', '2023-01-10 07:48:29'),
('5c000f27478cc43db13a89b2f1472d04f86e1d35715de94e31ffb5769eed2baf2e8782aa7a318df6', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-03 02:27:50', '2021-12-03 02:27:50', '2022-12-03 09:27:50'),
('5ce5e0d975d0a5dab2d919637631c7e98819fa34bce69adc15153ebf908eb6eded3475c2a852322b', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-29 22:51:12', '2022-06-29 22:51:12', '2023-06-30 05:51:12'),
('5ce70edf822abb415174bd66bea7ec6e60a0d5587e7afec49d453c05bf66535e537808ff5061c9e4', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-24 23:30:00', '2021-12-24 23:30:00', '2022-12-25 06:30:00'),
('5ddf469d84c4a9f19193c764645201764bb7cf257e873a3832c2c9294f314a6928655cf4b99e1975', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-14 21:00:28', '2021-12-14 21:00:28', '2022-12-15 04:00:28'),
('5e7b28d1e7dc2e4ca0ca5b0ddc648c24a55012a46d435aca6298bda821f03706c55b9ab98fc1a171', 17, 1, 'zfix-auth-token', '[]', 0, '2022-02-17 23:19:20', '2022-02-17 23:19:20', '2023-02-18 06:19:20'),
('5efc26d471f0082710f8efc3b730b5dca083a943361254fc5340dfbc907bb678cb2ddbb283886c94', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-26 19:24:33', '2021-09-26 19:24:33', '2022-09-27 02:24:33'),
('5f21720069ecddfcd33c917d5f624b04f86b8bebae8d444db6f70b3127678df7329d1cb0195a49a9', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-09 20:40:41', '2022-06-09 20:40:41', '2023-06-10 03:40:41'),
('60778e1985fd963ca758d4321da5942c21a9b248f595d943fb528ed1d2abd25a1345d58a53441e66', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-28 19:30:40', '2021-11-28 19:30:40', '2022-11-29 02:30:40'),
('60c6f3c5765701fe931c193a7ad9b39f3469838ba312b2ab95eab4fb538cc76d499e25043446380e', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-29 02:07:59', '2021-12-29 02:07:59', '2022-12-29 09:07:59'),
('6178f477bb06be0f87cfd0021e5f22d7ce1e0896c87dc848af560d6b5c297e8e7db687144d31b7a2', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-11 19:04:57', '2022-01-11 19:04:57', '2023-01-12 02:04:57'),
('61bd155eebcee28ab11d4651e55266c7738dde48bf8e4bbe7a74111cdf439851fed2236a4c84e428', 17, 1, 'zfix-auth-token', '[]', 0, '2022-02-24 07:24:28', '2022-02-24 07:24:28', '2023-02-24 14:24:28'),
('61d181529178ca9953baf0acfc9f0d89bcf7f33144e50e4aae90d01f25e9cf2e010d85a16aeb47f5', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-19 21:30:01', '2022-06-19 21:30:01', '2023-06-20 04:30:01'),
('621df046bc0835498e178f4f3e91870ba804d0387148f9df9b033640b3b17ac0931208b34550b959', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-09 20:34:19', '2022-06-09 20:34:19', '2023-06-10 03:34:19'),
('6223cfd58d492b814d94d4e3af8576510278ad4092a02e062bcbb406b33068493a4c5658ecae3acc', 2, 1, 'zfix-auth-token', '[]', 0, '2022-05-13 15:36:48', '2022-05-13 15:36:48', '2023-05-13 22:36:48'),
('62548671bb94b5a378cddf1cfaf1fd1226ddf0c53adef5b84edbc5d6407d4ea646d7f7a181ef718e', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-13 20:38:34', '2022-01-13 20:38:34', '2023-01-14 03:38:34'),
('630e7c4f296f66e74a4913d0ffb4210e1c1e0b54527dd34c827796d39442d1a75388d836dd70ed20', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-26 00:03:38', '2021-11-26 00:03:38', '2022-11-26 07:03:38'),
('630e7cc855a1ee1b027baf5548824329a1af652d66ee0f3dee9068759e59e6f39047d166dc42133d', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-22 20:15:50', '2021-09-22 20:15:50', '2022-09-23 03:15:50'),
('63aba9ab971aa999be385adc44d8ab804484ef206c1598ef65812819c8fe2997659fce983cf42ad1', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:00:19', '2022-01-10 00:00:19', '2023-01-10 07:00:19'),
('646251c6afde9a161f68617778d4983421000b2fa9e6fb758c927d83810db9bed787f5a8c7a1b7cb', 62, 1, 'zfix-auth-token', '[]', 0, '2022-06-23 19:36:23', '2022-06-23 19:36:23', '2023-06-24 02:36:23'),
('64b6f2cea433ce191288804dc42d98699ad38c863c1056043d919c1266dd1ad6d783987b2fada31f', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-09 19:36:20', '2022-06-09 19:36:20', '2023-06-10 02:36:20'),
('650d22dc2fd02768641c6ffd2a1ea45ea95698d9b680662cd3e9f94f5575216ee87a87f07c69fa82', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-12 00:59:06', '2022-04-12 00:59:06', '2023-04-12 07:59:06'),
('6567dabb9b6028b0c045f54eb26c921963d1bbac60a5eec8416bb5ff7b9b5ed304c7cab88042d4d7', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-12 05:31:07', '2022-04-12 05:31:07', '2023-04-12 12:31:07'),
('671249b88a55c1a5328ded57257335bd33e97a30209cdb383508c02ee6da7996fcc49dbf5b23ebd7', 2, 1, 'zfix-auth-token', '[]', 0, '2022-02-09 00:58:34', '2022-02-09 00:58:34', '2023-02-09 07:58:34'),
('672e0843ca6c9c46fabb1f1890c701ef73c8f314f1677ddfef54512eff56f48f531a7ece48dc251e', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-02 22:54:06', '2021-12-02 22:54:06', '2022-12-03 05:54:06'),
('67a09f957caa371a3b64f40750abec36e89eb4aa3d168e04678e674d8493b8b17738321e20d222b9', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:28:00', '2021-11-11 19:28:00', '2022-11-12 02:28:00'),
('682cd37bae7feaf141617ac62ca9c357f889820f763c949f9fad7afde357c9bb25547e4d3568dfe1', 68, 1, 'zfix-auth-token', '[]', 0, '2022-06-23 18:25:39', '2022-06-23 18:25:39', '2023-06-24 01:25:39'),
('684d2e45a27a4eb18638da309cd3356b48345f7cc14c37ad823c1db2fc999901d6c1bae4259c905a', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 00:43:23', '2021-09-20 00:43:23', '2022-09-20 07:43:23'),
('698e6cda4830c3a29dde80f5e4c726a85c9a10d18195a5ddc3f392579e3210817e371452a59b8732', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:26:27', '2022-01-09 21:26:27', '2023-01-10 04:26:27'),
('69e40a998a1ca06197c53f53418be1df3cba48092a721fb10d55c107c17671b699afc378c3d6b6f1', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-13 20:45:51', '2022-01-13 20:45:51', '2023-01-14 03:45:51'),
('6a863bd87db4ccdc2bf85a2df5a9e3f16da7542a698a389117232c1586339b519e7ef06356a01802', 2, 1, 'zfix-auth-token', '[]', 0, '2022-08-23 12:28:24', '2022-08-23 12:28:24', '2023-08-23 19:28:24'),
('6b3716f2dac49af161df693f3ae2e35336e9ffe9a477c37302e86788a5bd3bde4c85b357ef669c00', 2, 1, 'zfix-auth-token', '[]', 0, '2022-05-12 09:46:42', '2022-05-12 09:46:42', '2023-05-12 16:46:42'),
('6b505745871879f6958e91b3213a7a3ec2829da54c96d96fa78c65d7fb2cce95e05952db56ed7424', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:48:30', '2022-01-10 00:48:30', '2023-01-10 07:48:30'),
('6b86f7dd929c68ea45288d13f8edd25558188f0c22adce9fcc90e24f250e52e27306922354e6b202', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-13 01:02:43', '2022-01-13 01:02:43', '2023-01-13 08:02:43'),
('6bcb09b92b14a2e8673dfc6b12db1e692bb13406dc268a9d9a69c2c5f12d1823ef9cc9cbe70bb3c4', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:48:30', '2022-01-10 00:48:30', '2023-01-10 07:48:30'),
('6c1d7bb00f83b49282e0c4bb44c284e8918e257e83fecd926f16d55c3c6dbd895e23cd8bfcae9e05', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:34', '2021-11-11 19:36:34', '2022-11-12 02:36:34'),
('6c8b1bb0c2563ad5c043721c8a8bac97ef92972c63b1d5987094f4c835fb278750c50243fc861590', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-04 02:10:56', '2022-06-04 02:10:56', '2023-06-04 09:10:56'),
('6dfbabd827c409e937a1737ef1e6886ea5676d436d47fb1a73b39faf0de26b4cc5385a6ae5f04cd6', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:34', '2021-11-11 19:36:34', '2022-11-12 02:36:34'),
('6e1d889b1300de03710e1eaffcf8e372ec5865cddcf75644b2a457a29080e925390161ff04d6bbdd', 17, 1, 'zfix-auth-token', '[]', 0, '2022-02-09 00:04:15', '2022-02-09 00:04:15', '2023-02-09 07:04:15'),
('6ec61bd1a803d771dc5a361dc587dfe51b7b2427c378d0c52450ef44813a78aaa90abaa63175bf9e', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-15 20:22:48', '2021-11-15 20:22:48', '2022-11-16 03:22:48'),
('6ecb1d321264d14183f5d1b3841521950d9a0374e964fbdd20504130266f1b03200e9d560801f926', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:46:28', '2022-01-10 00:46:28', '2023-01-10 07:46:28'),
('6ecc0f6854f289470a8f05f32bee1e1c24743b5f12f0b8f593be874a39749f3c479e621b63e6fa4e', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-14 01:45:24', '2022-01-14 01:45:24', '2023-01-14 08:45:24'),
('6ed4a7f4ef71f5dbcdb72a6240db3cdd8123ac46615e816b17657fd4328164c3b43beb3a310967cb', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-20 23:43:41', '2022-01-20 23:43:41', '2023-01-21 06:43:41'),
('7043d05ef33e03c8c78a56c0bf909aacf3bb706171afc52adc996a014994e2b8e82318ddb87eca3c', 21, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:36:26', '2022-01-09 21:36:26', '2023-01-10 04:36:26');
INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('70660c533afca8602602dde27de16f0716de6d2566390560cdfad53f05b46a6d72a303b33a3f241d', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-29 23:30:28', '2022-06-29 23:30:28', '2023-06-30 06:30:28'),
('716b4dc578ee5d8a3c0e12c6fb4d613fb9e964fd0a101406473023df1da904d4085f63be3ced5d7b', 23, 1, 'zfix-auth-token', '[]', 0, '2022-02-17 23:27:35', '2022-02-17 23:27:35', '2023-02-18 06:27:35'),
('7192dbcebd9b1bd383293af401da582b03cfa141349037c1397e034b68b55c2961e421324a1c138d', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-21 22:26:47', '2021-09-21 22:26:47', '2022-09-22 05:26:47'),
('71a6b2ccf39179a69a6009bd52549a0244c698a4ceec4c191ee1b41755c41b28291bf639035a7942', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-23 00:21:05', '2021-09-23 00:21:05', '2022-09-23 07:21:05'),
('71b032c818c1d2a320de01b0bae8d23bc0a883c969e5377f8f3f1e8b8bfeb366ef2d12522685453c', 2, 1, 'zfix-auth-token', '[]', 0, '2021-10-04 20:45:23', '2021-10-04 20:45:23', '2022-10-05 03:45:23'),
('7258ca9ef935baf4efbf54fb0f4124020ebe32563d5c21384994f0a6a6dbfa45b7fdd34962081ddc', 62, 1, 'zfix-auth-token', '[]', 0, '2022-06-23 19:27:19', '2022-06-23 19:27:19', '2023-06-24 02:27:19'),
('7274c51da88ad8517dc93c439b99ecf4839bff5136fe5aa0f58ec1ef91198924e460b73d3009edb0', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-19 19:52:12', '2022-01-19 19:52:12', '2023-01-20 02:52:12'),
('72c98bc97974ce4cd2c9cde92c6b7179f354aa0f0fd87f6895de0ebbbb72c420dd61a1b3d9022eed', 25, 1, 'zfix-auth-token', '[]', 0, '2022-01-17 01:18:05', '2022-01-17 01:18:05', '2023-01-17 08:18:05'),
('737d5c460f79d9e14b59919894905fa9c66643af81bacc1da7926c908143b325c9586e53288b13ee', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-03 20:00:02', '2021-11-03 20:00:02', '2022-11-04 03:00:02'),
('74a60833a885cb777b19592c6b46376bc18ac88811b658ead31fa7486bbbd0bd7c0f5dfd6761e619', 24, 1, 'zfix-auth-token', '[]', 0, '2022-01-12 06:15:50', '2022-01-12 06:15:50', '2023-01-12 13:15:50'),
('75200fbc759fbaab3f17f34e13f622c2bedb0e924274685e80f6c723dd9ebac58b537321aa78b679', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:30:01', '2022-01-09 21:30:01', '2023-01-10 04:30:01'),
('7608a3a6ef86573ef63df44547ca0c24d1616fe943389b300140ab558efbcff6d4c597c10e87a5e3', 30, 1, 'zfix-auth-token', '[]', 0, '2022-03-16 03:00:23', '2022-03-16 03:00:23', '2023-03-16 10:00:23'),
('77c5de5adff88db934e96ce500512a2d6c8793239773a5a0e8f0083bab32d52f44677552aaacaa9a', 2, 1, 'zfix-auth-token', '[]', 0, '2022-05-10 21:29:58', '2022-05-10 21:29:58', '2023-05-11 04:29:58'),
('78870281efb37eee8097181d2e566cd73e3edf098e87fdf5ec1dac4cf774500026c019e3aee2d448', 2, 1, 'zfix-auth-token', '[]', 0, '2022-02-03 01:39:02', '2022-02-03 01:39:02', '2023-02-03 08:39:02'),
('789bf699bfcf54229d5a0bad1ad6b363fd8a4dea983524d0933156c5e329f162ce7ca150816ca88b', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-24 18:47:19', '2022-04-24 18:47:19', '2023-04-25 01:47:19'),
('78a5c47e424a2bbfe1c89d084c9ee1dfe2c3544496f88bf80991f92dd4a542160e831ee10dd9a96b', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-27 00:34:10', '2021-09-27 00:34:10', '2022-09-27 07:34:10'),
('78e0f5d200388394ba87bf447ad884f2eb897e0f45da22031104a1ac1bcad927754a3e35a658e3a0', 15, 1, 'zfix-auth-token', '[]', 0, '2022-04-03 22:56:51', '2022-04-03 22:56:51', '2023-04-04 05:56:51'),
('795d69f01fae9a73236f6abfbb092035fde9ab7d1a3be80560193ce03930424550ea050facaa249f', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-13 01:33:48', '2021-12-13 01:33:48', '2022-12-13 08:33:48'),
('796d8b9d971ae30f7f8742a4cd88295f2835aa7c060ed15b55196a5e0298c71654c2368ee63013c7', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:33', '2021-11-11 19:36:33', '2022-11-12 02:36:33'),
('79cefa03057908101825a8f745ba7e74cde54fa8d0279bfc65e61437a8f767bf0f623e1d91dec492', 31, 1, 'zfix-auth-token', '[]', 0, '2022-03-16 03:02:34', '2022-03-16 03:02:34', '2023-03-16 10:02:34'),
('79fc4495466d1701b03defe8c2e3cb2b909980aae9c17f92ceedca276929fdc4e8a5e3b20acdcbac', 2, 1, 'zfix-auth-token', '[]', 0, '2022-07-08 00:42:03', '2022-07-08 00:42:03', '2023-07-08 07:42:03'),
('7a54401727a0ce3e12138655bd37f4c2d3c5705530033916cf5ec0f71431035d51cbeb58ef75cbd0', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-14 19:49:44', '2022-06-14 19:49:44', '2023-06-15 02:49:44'),
('7abbfce8c245455b9c650313333ee00a1fb08f2c81c123d34659e9f753ddfa307bc38c4ca6bed182', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-21 20:25:50', '2021-09-21 20:25:50', '2022-09-22 03:25:50'),
('7b00977ed22975d22b6b1075d6837baec98327dd4261492796d2cd7b135e2eac0ed513999d8c2d91', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:37:33', '2021-11-11 19:37:33', '2022-11-12 02:37:33'),
('7b73b1ffe2b75820dd2e765c6a192b8e8845c28fe87bd240bac1ca1137566046ae9197a3e4ca96c5', 15, 1, 'zfix-auth-token', '[]', 0, '2022-04-14 22:37:55', '2022-04-14 22:37:55', '2023-04-15 05:37:55'),
('7c24ed46dfcc148984e7bf8d9c7f4bc8cb71d32ea617dbbf6acb70de6f87764af6931c2e5fa8073d', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-03 19:20:38', '2021-11-03 19:20:38', '2022-11-04 02:20:38'),
('7c39db1550b2185552faae4f7f8af23c7497131efa020e79a8479e235abe4bf4ee7daef05e543010', 38, 1, 'zfix-auth-token', '[]', 0, '2022-04-10 22:08:20', '2022-04-10 22:08:20', '2023-04-11 05:08:20'),
('7c6a1704ac922acd0d91720855517fb577ac556891f957953ad36fbca8bf8db7dd15ccfcfbdb37f3', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-22 00:36:16', '2022-06-22 00:36:16', '2023-06-22 07:36:16'),
('7cf4efeff3f959fa4a06469f13857be990bdda675a05d5960225e3e79865ce6490d72587e2334a0e', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-08 04:49:29', '2022-06-08 04:49:29', '2023-06-08 11:49:29'),
('7d9eb48c1a0fdd9470f1a6d31e54a294a6167ccd82df2580ade8139fd8752a80534d3a34ba2a13e1', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-21 00:38:41', '2021-09-21 00:38:41', '2022-09-21 07:38:41'),
('7e16fe3526730b8766b5c122283180dc70abbd448e11719690b002220b0867aaa447a944aa4426f9', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-12 00:31:26', '2022-04-12 00:31:26', '2023-04-12 07:31:26'),
('7e484bbac5947e15c2e0690c67cc8ac2f1d2991e728325a077bbd897bb1944999d177a2bcc1be4d4', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-02 20:35:31', '2021-11-02 20:35:31', '2022-11-03 03:35:31'),
('7f0902b5a3d693bccf4ad7e622d071feb7a64c7a0a4ed3238019cf8a3386a29080c6a54ba098cf96', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-26 08:08:56', '2021-11-26 08:08:56', '2022-11-26 15:08:56'),
('7f62c37d3abbea6609496bcec7b3e631f7f1af0895005a1d25772f292e0eebbc7806f21550e1508f', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-21 18:44:18', '2022-04-21 18:44:18', '2023-04-22 01:44:18'),
('7f877e4ab8d22ea74670b352b3f79e00e8532c6de8a5567350719bb839d13300c665ca13da909c73', 33, 1, 'zfix-auth-token', '[]', 0, '2022-05-11 00:30:06', '2022-05-11 00:30:06', '2023-05-11 07:30:06'),
('7fc9107c5657094f1354a38682109e71f3dfa6a4d609c18e4989cc791ad26c39365905a0bbb045f9', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-12 22:05:48', '2021-12-12 22:05:48', '2022-12-13 05:05:48'),
('7fcfa3c409ee5191444377db80c72f15af54f47fb36016e7b4e95ec4de5609dc72bcab47f22a44ad', 15, 1, 'zfix-auth-token', '[]', 0, '2022-05-18 06:42:59', '2022-05-18 06:42:59', '2023-05-18 13:42:59'),
('8091450463187fceb2969013807143a32460bb9ec760bb387d51d5bfe6873a31b129bdbdb216590f', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-04 23:29:05', '2022-01-04 23:29:05', '2023-01-05 06:29:05'),
('80b4a2e7799aff3c2ac215b2970f53d474183284ede80004bcf58b8b4fedec04013ecad5769730fe', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-06 19:22:55', '2022-06-06 19:22:55', '2023-06-07 02:22:55'),
('811489705cb0ad8eeb90f2de57e42ac1cafda22783579d0501e92e9ae26daab426808a94ba453482', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 23:30:47', '2021-09-20 23:30:47', '2022-09-21 06:30:47'),
('81ee1aaf86b918a0d842770bbb648b81442a6266b513f3abb06a8820c4100c897914348cfbcebf39', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-22 22:29:55', '2021-09-22 22:29:55', '2022-09-23 05:29:55'),
('8205a3fb645b184886a34574724cba3bbc31af17a6ab92555a0555132e410f8987a2eb11bb4cbda0', 2, 1, 'zfix-auth-token', '[]', 0, '2021-10-04 20:26:36', '2021-10-04 20:26:36', '2022-10-05 03:26:36'),
('829fed7f0dba008822af601e01bc407481d642cd73d3f0053096682ea596cd40a5638f6e58dc80e5', 74, 1, 'zfix-auth-token', '[]', 0, '2022-07-08 05:07:20', '2022-07-08 05:07:20', '2023-07-08 12:07:20'),
('84355ccdc4f618ab84bd050e19ef11390f70e35e9e6622d613ee5facf0c3df8ed70fc87748a47044', 17, 1, 'zfix-auth-token', '[]', 0, '2022-01-26 19:43:17', '2022-01-26 19:43:17', '2023-01-27 02:43:17'),
('8492b64b1282f4b71316bb3cc80e46a00a2fa9eb538b343356c74e846190c5700045865bb5ab08e9', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:34', '2021-11-11 19:36:34', '2022-11-12 02:36:34'),
('84fb70d71fbf65280df0134b0c0c0bd28c427735395c8543c7fce641a1bc9ac7b2359c457bd96cdf', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 23:27:00', '2021-09-20 23:27:00', '2022-09-21 06:27:00'),
('85109e5dbf1848f6cb81eb88d03320b4977b8e233b314256cacab0e67835b0dcc95e09da7cfa14cf', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-02 22:56:42', '2021-12-02 22:56:42', '2022-12-03 05:56:42'),
('85a3ee0a9b33530a3272571f6fb621728d755390f58a90e0624a48952eff85525404990fe2bcc06b', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-12 05:49:42', '2022-04-12 05:49:42', '2023-04-12 12:49:42'),
('85dff72ad68e86d4a5192774340db8e056887d94a1e2e0312204afb8052d3eda0aa85456031c62a5', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-19 00:26:28', '2022-01-19 00:26:28', '2023-01-19 07:26:28'),
('867ed19c790a7a584748b141d83622a98145ab17a911a10b016f3ea932b55ac70b4ae580650cebfe', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-15 20:09:56', '2021-11-15 20:09:56', '2022-11-16 03:09:56'),
('8891fa4b40ab513e7d49816e5ab03ebf10cdd73015ba6224c3c793dc15771d5313c0e5ac84ad8cf9', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 21:03:37', '2021-09-20 21:03:37', '2022-09-21 04:03:37'),
('8a44feb3a6770c4db495875652f9dcf8fbaef9acbc3644dbc0ffbad40b50a6aae3d40453154cd181', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:30:01', '2022-01-09 21:30:01', '2023-01-10 04:30:01'),
('8a876ad17036a12c9790ce85b1f73c8034398496d662e562139827a7c88c51b57a33068275941c87', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-30 23:59:26', '2021-11-30 23:59:26', '2022-12-01 06:59:26'),
('8c297bdb9471f2adf4bc8fed0e11795d233a1e01840331060ed4947a8e2cea9d1b9ca69f6e3718bf', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-21 23:04:34', '2021-09-21 23:04:34', '2022-09-22 06:04:34'),
('8c76eb2c898eb6fa6103ee7208984da4b9ebcd4266635441459c78ae5ded976f2595e2c51cec981b', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-14 01:52:01', '2022-01-14 01:52:01', '2023-01-14 08:52:01'),
('8d284a0a2335fbeb277b5430b7f51648003b1e4906c80b79f2d167864f8adfa1a44281be93d4d80e', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-29 11:17:47', '2022-06-29 11:17:47', '2023-06-29 18:17:47'),
('8d79c6f733780aae12f751a3b48bc6ebbc2ce620239238345101f03513101358125a18a30a00e276', 71, 1, 'zfix-auth-token', '[]', 0, '2022-06-30 04:27:48', '2022-06-30 04:27:48', '2023-06-30 11:27:48'),
('8e1c5b2ce888b24995089d1cc7c80436ac9c66e58b03e4a5b6eb2b2152cf5852640f8d22341a0eea', 2, 1, 'zfix-auth-token', '[]', 0, '2022-02-04 00:04:16', '2022-02-04 00:04:16', '2023-02-04 07:04:16'),
('8ed376da3822876fb4479563f019a6b4055a1952c556df78df9225d7a211d2b6c38fc07598c24aa9', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:31:17', '2022-01-09 21:31:17', '2023-01-10 04:31:17'),
('8fd6cb64878cf7571cdb38f4a8f3eedd33342c8be2528f072c68dab25e83d244603e7c1dded57c61', 2, 1, 'zfix-auth-token', '[]', 0, '2021-10-29 12:48:17', '2021-10-29 12:48:17', '2022-10-29 19:48:17'),
('90bcee306929f980d8fff52ec38b54e7a7cd1117470f437444f3c4c90022182443ceec746eb2711b', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:34', '2021-11-11 19:36:34', '2022-11-12 02:36:34'),
('90d58e23f4a8f3e072164883675b04ffd94a81e052357987e90bf36040d80d9c60b7260ba001cc78', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-10 23:32:11', '2021-11-10 23:32:11', '2022-11-11 06:32:11'),
('913d166fe6645d483306635dccc8fe2f611f31d583f9343c30d249b76fdd73ccd164e5737de419f8', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:41:36', '2022-01-09 21:41:36', '2023-01-10 04:41:36'),
('9166b36a78a7fdc65faaca70ad91f473ed7748d4f2d5a40ca96354979650727b82fa4c74c280ff69', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-21 00:22:52', '2021-09-21 00:22:52', '2022-09-21 07:22:52'),
('9192d6137b5391a6cf774c87fdb6a4c30c1b580d561456d872acde75a2209993f6bb0bf4d5f90dc0', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:31:18', '2022-01-09 21:31:18', '2023-01-10 04:31:18'),
('919a90a44c90c801a30f47604ca93db3e2164de271d86c40f1655c1d0f4d6896274700e55e46556e', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:34', '2021-11-11 19:36:34', '2022-11-12 02:36:34'),
('9204762ba00b00e38b8c1d6bbb7afca067277fe928bb07a0a3ed5ba084944dfc06f92cc70d2072c1', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-09 23:26:35', '2021-11-09 23:26:35', '2022-11-10 06:26:35'),
('924ff5a5493aa0184ffd1de0079e55255a7cf4b6f98c612a74d6e4747a39858ff4231453e253bda8', 73, 1, 'zfix-auth-token', '[]', 0, '2022-07-08 01:10:32', '2022-07-08 01:10:32', '2023-07-08 08:10:32'),
('9263adf5b07309c7d640d248ae1b19e2908e5e839640c89d0abfa0d4e0f4e38afb0f224f2dfe2830', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-08 04:12:07', '2022-06-08 04:12:07', '2023-06-08 11:12:07'),
('92e8577862f9b87c3a08620c35978306e439a667908ee0231866758770fab2372915c6a439a913bc', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 02:46:43', '2021-09-20 02:46:43', '2022-09-20 09:46:43'),
('93f6c8de78d882bdf95e4daf98b07b606ff9431a35bd990856a96c460bfee67b6368281f31e66ff4', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-03 19:34:41', '2021-11-03 19:34:41', '2022-11-04 02:34:41'),
('947e3b29b2ce1da3dd74998c1f8a2f78bb13edae19a6150c75f3db58deff8fae500f54d924978eb4', 2, 1, 'zfix-auth-token', '[]', 0, '2021-10-24 23:58:51', '2021-10-24 23:58:51', '2022-10-25 06:58:51'),
('9697f51f3052941c8fc74b09cf54a49337802cea77554dd1ab605246fd22fb16d1aff10ca4dd7486', 19, 1, 'zfix-auth-token', '[]', 0, '2022-01-11 01:25:33', '2022-01-11 01:25:33', '2023-01-11 08:25:33'),
('96b8876238fe29c2f7db256527167ca46c405e4fa636401142fc74660552ffcbe2b9bbd70da07ba9', 23, 1, 'zfix-auth-token', '[]', 0, '2022-01-19 19:41:04', '2022-01-19 19:41:04', '2023-01-20 02:41:04'),
('981140f04d8d04d09d202d2127c1d3eab3ebfbc5c99a4705742f2ae64c536858e03c900ba288595f', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-01 11:51:48', '2022-06-01 11:51:48', '2023-06-01 18:51:48'),
('981f1e0330c2dad7b19ad973ae1b9194b04570cb6f0ae0f6d14cf055a38930f60c137ebb45f93d10', 19, 1, 'zfix-auth-token', '[]', 0, '2022-01-15 19:58:14', '2022-01-15 19:58:14', '2023-01-16 02:58:14'),
('9897f04c30625643599e50ce4fde35d885ba2b75436ba92adb175ab2f36dd95cdb6cf792e2ea407c', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:44:43', '2021-11-11 19:44:43', '2022-11-12 02:44:43'),
('99e4df22f9370981a005dc73b9b155f745f3f30bde9c5f2ddd7a7cd62718c864903bc7b47786fe57', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-11 22:19:48', '2022-01-11 22:19:48', '2023-01-12 05:19:48'),
('9a7c67180f9cdfe7270442e383acb09b9c59f7ce5bf5e06dc8fb4c1979c39135464f74b4e527171b', 9, 1, 'zfix-auth-token', '[]', 0, '2021-11-30 21:38:57', '2021-11-30 21:38:57', '2022-12-01 04:38:57'),
('9ab782c291919ff0db88f2fe16b39b60c82a6b47172642b3eb411cfdafa92dc0696c4c15dacb6454', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-10 20:02:50', '2022-04-10 20:02:50', '2023-04-11 03:02:50'),
('9add56beff3a8562c445e92f7ca135c030ab4b294e4f2af94df0111d6dbc2c2c1ade2fc71e894c3a', 15, 1, 'zfix-auth-token', '[]', 0, '2022-05-18 06:48:05', '2022-05-18 06:48:05', '2023-05-18 13:48:05'),
('9bfbcd5fe1524773e7ff0d2d16266a479ef318f39d9417fa41d1a5791d0709492f077e3ea2e80200', 2, 1, 'zfix-auth-token', '[]', 0, '2022-05-13 10:18:50', '2022-05-13 10:18:50', '2023-05-13 17:18:50'),
('9c1a7c30ce67cc3051ba7d00d41ee43d7e232105f3ecc755bbef3d8833de70bb6f75a4547f5ea706', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-22 20:06:04', '2021-11-22 20:06:04', '2022-11-23 03:06:04'),
('9c22de0af39e4fe18b057107ec90384838af4b0cf9c5b4b5288bc3a8ef35da80ede0da921d2822e7', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:30:02', '2022-01-09 21:30:02', '2023-01-10 04:30:02'),
('9c6712159ced17942a55e22899ca1265b4744b72288f74508d6ebb9211fcc5479f45283c6f9a489a', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-02 22:53:50', '2021-12-02 22:53:50', '2022-12-03 05:53:50'),
('9c934e4ce8c61b8984bf799e634e7dd0f2f5dccf6cfd4267fc582b2a6b9849e456bd47ab585e04a2', 4, 1, 'zfix-auth-token', '[]', 0, '2021-11-10 21:27:41', '2021-11-10 21:27:41', '2022-11-11 04:27:41'),
('9c9e35667ad365e8a5b23ebf617056d0387ffc6aa2487e248b50be125e98b454e7dd5f2376bbb2d5', 48, 1, 'zfix-auth-token', '[]', 0, '2022-06-29 17:59:37', '2022-06-29 17:59:37', '2023-06-30 00:59:37'),
('9cd71e445f1a91c5a501e63181e6113b366cad68173b424b4b7fb2056fc1319c88e7288199b96052', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-08 05:06:50', '2022-06-08 05:06:50', '2023-06-08 12:06:50'),
('9db399cf27b847ac7a42e68be91f05a9c6d09f3e52da37fc399ae418e746ccabeeb8eafbf9d29a60', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-10 21:38:13', '2021-11-10 21:38:13', '2022-11-11 04:38:13'),
('9e87f6f8889fa640149fe98183cb54a5e670449a64f13f665a0379c27cae0b71466ec0d2ebac5dea', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-12 22:58:30', '2022-01-12 22:58:30', '2023-01-13 05:58:30'),
('9eb77377d85640b7774694823ef5b7c24ff8a0808c3e4ca892dfa9e6b2422471fdf42b41d91eb887', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-12 04:58:00', '2022-04-12 04:58:00', '2023-04-12 11:58:00'),
('9f27c5f2f62de9874654293471942bdc416414a240712a32ee723c80d7636c1ad8952de595ccf0ad', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-16 20:16:05', '2022-01-16 20:16:05', '2023-01-17 03:16:05'),
('a02a2dc0514ec930de258bd3e3e3085282c12a332dbb57c59f90616efe10e000982b20dc445e8add', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-16 23:02:27', '2021-11-16 23:02:27', '2022-11-17 06:02:27'),
('a04b431ecd4f3f340e8ebbad2c818aa0921559dca03f1240115fff2192702a5a45a9c57406adad7f', 2, 1, 'zfix-auth-token', '[]', 0, '2022-02-09 00:57:54', '2022-02-09 00:57:54', '2023-02-09 07:57:54'),
('a0bd5267a72f483c4ba8933658a4bdd908872b60b00f23935df5a4d06db3b69d990a7ad60ddb51ca', 19, 1, 'zfix-auth-token', '[]', 0, '2022-01-11 20:37:43', '2022-01-11 20:37:43', '2023-01-12 03:37:43'),
('a1c3534c4526b52ebe58fe238e886c4c4dc90868735a28f21c31c4311f02350e4f2e9c1af90e0e69', 2, 1, 'zfix-auth-token', '[]', 0, '2022-05-29 05:56:05', '2022-05-29 05:56:05', '2023-05-29 12:56:05'),
('a22b126528ee745a1abba23ec2aee16ed85ff9cff26f3dce991f497066837faef5658baea9c16572', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-24 23:06:43', '2021-11-24 23:06:43', '2022-11-25 06:06:43'),
('a273b622ead2e7e7d4cea5415f3a0c6169a60d89588834b4d3889149ddac816718a382d3a128c9bd', 36, 1, 'zfix-auth-token', '[]', 0, '2022-04-07 05:29:25', '2022-04-07 05:29:25', '2023-04-07 12:29:25'),
('a2afa8de920378ba69638e99624428c83f78087884d094f0abc3efd6965d806be197c661deb6cad2', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-21 19:56:22', '2021-09-21 19:56:22', '2022-09-22 02:56:22'),
('a32521f6cc3fcf461617dba991f08e4ffd0b02ad630a5c6bcc86bedc64c0086332605998cc856d9e', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:33', '2021-11-11 19:36:33', '2022-11-12 02:36:33'),
('a32b430e3aee5312f29d2147694e1ea7d025d3abcca38a3c6f720fcaf62e127eb40477b492fc728b', 33, 1, 'zfix-auth-token', '[]', 0, '2022-04-01 01:02:13', '2022-04-01 01:02:13', '2023-04-01 08:02:13'),
('a47c57128789013e0324a0fd38b0fdff09633da44c212b3a5801e2bce991b62b8ee4a0cb45950261', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-06 00:20:01', '2021-12-06 00:20:01', '2022-12-06 07:20:01'),
('a482136e8a53239cac8bfc441ca5ddc985d6f66a1037891df4b3adab530b0839e67ec1f57a7b4b0e', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-24 23:03:11', '2021-11-24 23:03:11', '2022-11-25 06:03:11'),
('a53d03489f917b10500072e6627b35109871f88529d48c5f9e51da80a257978bb2d5aead1d12f890', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-15 02:10:02', '2021-11-15 02:10:02', '2022-11-15 09:10:02'),
('a55017198ed129a92e55bdd616640b8739d46e78d323ccef1611ad586f7b7f7b9dd34f95735271dd', 48, 1, 'zfix-auth-token', '[]', 0, '2022-06-08 05:35:08', '2022-06-08 05:35:08', '2023-06-08 12:35:08'),
('a55fcc6041d2a0f4edb435dbbfb4111d1e4960d24c5f5786087669bf4151429a8f36573b2a21cdf2', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-01 01:36:35', '2021-12-01 01:36:35', '2022-12-01 08:36:35'),
('a6191a7f335d31a4938be04ac61e83b448c880f6207f2be6df851114615f4b2746f04c91a1931349', 19, 1, 'zfix-auth-token', '[]', 0, '2022-01-16 20:48:49', '2022-01-16 20:48:49', '2023-01-17 03:48:49'),
('a773838e08d0f22b6c932698658aa9c41340384f801138ecc8234512623a5fbf3ec285fa7dc794d1', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-12 19:52:38', '2022-01-12 19:52:38', '2023-01-13 02:52:38'),
('a811c734f2a1f8b1f4d70e549ecf0a0eebb01f2035d7cdf18377b8907b1d9f2dd1f42a3c51fa4308', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 01:31:53', '2022-01-10 01:31:53', '2023-01-10 08:31:53'),
('a853d580b14321d4fef5a1e37882e34c09e4a1eca7ceeb073933c8834bfdc8727372eb961c66470b', 26, 1, 'zfix-auth-token', '[]', 0, '2022-01-17 03:43:45', '2022-01-17 03:43:45', '2023-01-17 10:43:45'),
('a8ba09c064f84e36d353576da978e923df6a73f2513e0dd94e41e644b5de47b31bbfab085f9ae059', 63, 1, 'zfix-auth-token', '[]', 0, '2022-06-20 22:49:29', '2022-06-20 22:49:29', '2023-06-21 05:49:29'),
('a8fac65adf03d0253e65fe0e2b91e8de88e0f0ad13ac4871484e2df5fd25f77cf56e333247fb051b', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-11 00:13:37', '2021-12-11 00:13:37', '2022-12-11 07:13:37'),
('a940ffaf7da0f5184e4228d2abe1b4c71649acd0b19e1806ffd60ea4a0d7f19a70a740cc5b6b00ba', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:38', '2021-11-11 19:36:38', '2022-11-12 02:36:38'),
('a977ca954ca47cba7e99a93f45c684d43238b801f95f90889ac6d45656b68fd8e2b47976bae15a68', 17, 1, 'zfix-auth-token', '[]', 0, '2022-02-09 00:04:06', '2022-02-09 00:04:06', '2023-02-09 07:04:06'),
('a9d2d0946c958782ee6da4d3740c92481ab4ad799b0e9ef875b40c1485213f8980998849abe601bf', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 23:59:01', '2021-09-20 23:59:01', '2022-09-21 06:59:01'),
('a9f8ddc161798732686cdc480847b341b6844bf27fdc7b2ca2c2128aae90e3ff3affbeaf3f400768', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-22 20:17:34', '2021-09-22 20:17:34', '2022-09-23 03:17:34'),
('ab105f068d563be29bcb5a1b0e028e33a7188814fac2ea0b1f76ce7e2eddcf446e634ad52f13e1bc', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:31:18', '2022-01-09 21:31:18', '2023-01-10 04:31:18'),
('ab11321407f33530c5de189c17454d36f03bab64a0cca2c8c3b35274ecf3dd57def6a97395225ff4', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 01:19:28', '2022-01-10 01:19:28', '2023-01-10 08:19:28'),
('ab833e8b2eb437ecb991bb990c8492c9077b1f87e58ce207f91650222df29f6baa6bf1ee9bd5f591', 16, 1, 'zfix-auth-token', '[]', 0, '2022-01-19 19:35:04', '2022-01-19 19:35:04', '2023-01-20 02:35:04'),
('ac11510d1b7de5ed53d833607cc97c6e43128ad255009ee4a5b5ced785b12e30eeabadcbd14781c3', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:44:40', '2022-01-10 00:44:40', '2023-01-10 07:44:40'),
('ac1f4b0902733a85e9bbc8a166e1a5d63140a93767a3af33d0b49e472cb831f68abd6d0501b26bb1', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-13 19:01:54', '2022-01-13 19:01:54', '2023-01-14 02:01:54'),
('ac47a36c63f233cad05882227d980f1ac179829b55a21e22151918f7b8d6291009c6038f96de6d6c', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-05 21:23:24', '2022-06-05 21:23:24', '2023-06-06 04:23:24'),
('aca102ab04041d914cbdf6b92fd7ef2518b6c3fdefc9ee2baca45e9b157e638c8fff3970dc046bbd', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-26 19:58:25', '2022-01-26 19:58:25', '2023-01-27 02:58:25'),
('ad4457f581a19cd9fa94a23bd036cb87d098be13f29fc33b42f90dc9d64a716be471911a0890263c', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-11 00:45:31', '2022-01-11 00:45:31', '2023-01-11 07:45:31'),
('ad912978310e25b5b1a09cf8c7821a4ab2ec5e4db265e94672d6ad66f8b14adde8a582bb1b14dba1', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 23:23:22', '2021-09-20 23:23:22', '2022-09-21 06:23:22'),
('ae304da088b0ded0eb8f532b64e7bba72d1abecfce5a5945b8812498f6c14e1781c6270a40c52fb5', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-06 19:59:08', '2022-01-06 19:59:08', '2023-01-07 02:59:08'),
('ae837a3cd70e8fa7b410552e7baf9e5752ef72e74f8a4e6578ea93df0fbb5338ea530f964596a73c', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-21 20:36:21', '2021-09-21 20:36:21', '2022-09-22 03:36:21'),
('af1f0e96402adf1408109b7b5433495af010f1380e0ef0cc08dfc0df142f981ec3b04f7db7457ec0', 2, 1, 'zfix-auth-token', '[]', 0, '2022-07-07 23:32:16', '2022-07-07 23:32:16', '2023-07-08 06:32:16'),
('af2cfb2f39079722fcfe514e15e5bd5f13ae21b379e138d3d2919cdf80891c212a4953be8cccd487', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-04 02:40:09', '2021-11-04 02:40:09', '2022-11-04 09:40:09'),
('af896f71a988224396aa5d8aa455916471cac691326398af8f8101a99f930c8bf978eae531d41a59', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-05 02:33:56', '2022-01-05 02:33:56', '2023-01-05 09:33:56'),
('afa5926bbed7fc567aa828bd7d286f0aba4a875c7623888b096e0436ee4e40f83712de3733790795', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-28 22:45:50', '2022-06-28 22:45:50', '2023-06-29 05:45:50'),
('afb3098a21d78ac6d019f19eaa452a25214c8b4af5b1c765bf3a8c67b5b0593796115196eca77559', 15, 1, 'zfix-auth-token', '[]', 0, '2022-04-18 03:21:02', '2022-04-18 03:21:02', '2023-04-18 10:21:02'),
('b0ace63061dcdc4224bfb979f0d05b59dfe682d7ab178576da24c9e23bf519986dadd6b50b7da137', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:35', '2021-11-11 19:36:35', '2022-11-12 02:36:35'),
('b1028a947b200458590ccc6e9cd7e28ce06ada6572409d42f8357631f4f289fba81212cf4aaf27dc', 41, 1, 'zfix-auth-token', '[]', 0, '2022-04-20 20:24:55', '2022-04-20 20:24:55', '2023-04-21 03:24:55'),
('b168a954db643dff897b1c70d0c70c0ba592c01dbdf5c11d32e2a17de62a45e92f8c6bb97f91a9c2', 2, 1, 'zfix-auth-token', '[]', 0, '2022-05-09 21:34:08', '2022-05-09 21:34:08', '2023-05-10 04:34:08'),
('b1cf4f044a411f5eb72ca415ef65fc5798e420638ffdd5c7140345ddf86ebbc49e5590071bad681a', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-16 19:40:19', '2021-12-16 19:40:19', '2022-12-17 02:40:19'),
('b24e487aa65029977680612025f6937ed5cd59cb0b673e52e0faef6edacea5df20f92a71a14dfab4', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-15 09:18:33', '2021-11-15 09:18:33', '2022-11-15 16:18:33'),
('b265e8e49acb9d02038be260c2d8f390bfafa5f8508ade9199c1fbbfabf510352b3bacfc116f374e', 22, 1, 'zfix-auth-token', '[]', 0, '2022-01-12 05:41:06', '2022-01-12 05:41:06', '2023-01-12 12:41:06'),
('b2f5f9a5ede587ad319f36709f646bfe7c0199f960bf2d9bb23691ca046023896722711699e37fcf', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:39', '2021-11-11 19:36:39', '2022-11-12 02:36:39'),
('b325e5af686601f354c33d407cd94e6fd35a56e6e66f17b1c05a7874d4541749c36daca715ac93a2', 70, 1, 'zfix-auth-token', '[]', 0, '2022-06-27 03:47:53', '2022-06-27 03:47:53', '2023-06-27 10:47:53'),
('b3347229f571872ed41a0d7c36b54db89bcf1c5ed1450feeb21b5468ec93278206cafcd02c781e19', 2, 1, 'zfix-auth-token', '[]', 0, '2021-10-27 00:42:35', '2021-10-27 00:42:35', '2022-10-27 07:42:35'),
('b36757f88f64c8cc944daae50809a1b0abee50ea6a769f8ed3cf61557f17971ac138e6247b053e13', 59, 1, 'zfix-auth-token', '[]', 0, '2022-06-19 02:05:43', '2022-06-19 02:05:43', '2023-06-19 09:05:43'),
('b36b37cb60174e4b8ff6c1b003b5d8544e2d055336272dab486614402ef5a55a2d0ea897194cb4fc', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:45:07', '2022-01-10 00:45:07', '2023-01-10 07:45:07'),
('b3b41b91d88e9b0f24dd95ddef1a5c838c51868fcd202a7f0294dceab8e397686436c08b19e6b0da', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-15 20:23:33', '2021-11-15 20:23:33', '2022-11-16 03:23:33'),
('b4dd7318de79d2942b46406a92113ef30b544dce6254ac7ffae647b05bbebce907a39b082082a5ae', 35, 1, 'zfix-auth-token', '[]', 0, '2022-04-04 21:11:27', '2022-04-04 21:11:27', '2023-04-05 04:11:27'),
('b4f898f7de86940193055c77b5c5fed7ec75a3199dc7735cd20e250af923487cd5b553db52def3c6', 15, 1, 'zfix-auth-token', '[]', 0, '2022-05-18 06:41:40', '2022-05-18 06:41:40', '2023-05-18 13:41:40'),
('b52232b7a57b0462d2e48776ee06fd99738ba95dd0ac7cc9eb7fffd3ac0ffcbdc44f1886b236e561', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-01 12:04:31', '2022-06-01 12:04:31', '2023-06-01 19:04:31'),
('b55d3aaea9c2d723ab3dced5148562a8d5c42b6a2428be1c91e9d155f86fda5e245e6944fe5a6779', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-09 01:30:23', '2021-12-09 01:30:23', '2022-12-09 08:30:23'),
('b585dd96b5d46641d1000d1755846cd1a62f5d73dbfcd051b3e605f3d83dc22ff4f06829ab6e1cae', 2, 1, 'zfix-auth-token', '[]', 0, '2021-10-22 03:06:33', '2021-10-22 03:06:33', '2022-10-22 10:06:33'),
('b6872364cf2db3fa2d3f56272107b17d6d3189b01087999c03039935e89d64189ee4efd2ab744bd3', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-15 00:58:49', '2021-11-15 00:58:49', '2022-11-15 07:58:49'),
('b69f2062c152b79426ab3c297e4e11c6a124743712a81fd43f2cadf1f0aaa5a60298023a61ba0dd4', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:44:36', '2022-01-10 00:44:36', '2023-01-10 07:44:36'),
('b7c4b03212fa1c22dd5ed7d840fee38879284369c31508c7704a8caf6f84a7989647304e20e00cff', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:35:35', '2021-11-11 19:35:35', '2022-11-12 02:35:35'),
('b85d1f7197587c57eb1d992a2f6b8d8c576889d62651ab3da3462d73f1b88beef454385999c31684', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:48:30', '2022-01-10 00:48:30', '2023-01-10 07:48:30'),
('b8bafe6f96684daee9dfd7f26957a34b3597cb9d3a37a3bdaa7ce132d31e26f512ef3b4483961645', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-08 01:39:26', '2022-06-08 01:39:26', '2023-06-08 08:39:26'),
('b8e6d1ad9ac961c04f2ceeeef99aeeae0265c5d60bcb1a2b3fe5e760f1dfad02a2da1bd197d555b6', 17, 1, 'zfix-auth-token', '[]', 0, '2022-01-12 06:15:09', '2022-01-12 06:15:09', '2023-01-12 13:15:09'),
('b9e9bd4dbb140044cf6eefc88c25b05996c86d6c62b69f0d7bdf3c75aa32afd16838cf3a69974e6b', 56, 1, 'zfix-auth-token', '[]', 0, '2022-06-11 18:51:39', '2022-06-11 18:51:39', '2023-06-12 01:51:39'),
('ba88b4673df0b1f51fc91511bec5da4799ada645c03e6a7d0dd735c553d710008d4340f6d0187da3', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:18:08', '2022-01-09 21:18:08', '2023-01-10 04:18:08'),
('bc0290944b27f1bed59a18ae8cc5aea1400e219533c2742525e0651c35533fc49d39e7ec0ea93cd1', 2, 1, 'zfix-auth-token', '[]', 0, '2021-10-04 20:42:01', '2021-10-04 20:42:01', '2022-10-05 03:42:01'),
('bc0edaf5835dc47a8c4447f527ee2ceb96fd431e66781a2ab5e0eca1bd61a225c33651da3e1084fd', 2, 1, 'zfix-auth-token', '[]', 0, '2022-07-07 21:13:18', '2022-07-07 21:13:18', '2023-07-08 04:13:18'),
('bd4db23c5084cfddf6c7c92b89cb60932e29b30b0dcdd84a745f0525d61f6e883b6298291fd9bd56', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:31:21', '2022-01-09 21:31:21', '2023-01-10 04:31:21'),
('bd6709d8a4178d99f74eeb2aca7c44dfa1e550d331144f954adb9d82dc1cfc8f1333b3fc2939298d', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:31:18', '2022-01-09 21:31:18', '2023-01-10 04:31:18'),
('bd9f20d2c25d5f75fddbda00c37648344d26e0ea66a978a7e03815b5eb5b23eff3ff9ab202d998b6', 19, 1, 'zfix-auth-token', '[]', 0, '2022-01-11 01:28:02', '2022-01-11 01:28:02', '2023-01-11 08:28:02'),
('be201c43467170cef68503f9aacdbd8c314215b8a17eb3a9bbe75da63a26102228341fc548d7076c', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:32', '2021-11-11 19:36:32', '2022-11-12 02:36:32'),
('be64dcf510f8af05ff1be578c11739e4d81f679e0d880c5a0dfb294fad43c32b29b49ea2e4b62cc3', 2, 1, 'zfix-auth-token', '[]', 0, '2022-02-09 00:57:05', '2022-02-09 00:57:05', '2023-02-09 07:57:05'),
('be94c1bf38f97407d0a51b95b326e97e4a7a894ad108b2b0b0862dc19e1fdf30f602d218541f3122', 2, 1, 'zfix-auth-token', '[]', 0, '2022-05-09 22:19:12', '2022-05-09 22:19:12', '2023-05-10 05:19:12'),
('bf3e50756af6902104ef48e0424899c64863dd671b39fbaaf62c4cfac2710cd276714761335b1862', 2, 1, 'zfix-auth-token', '[]', 0, '2021-10-27 20:44:46', '2021-10-27 20:44:46', '2022-10-28 03:44:46'),
('bf52b144310b4170eba26b3b13f23bb7a0b6961bf0b15a6af2c861dd008b689f46f4d20cce68e946', 2, 1, 'zfix-auth-token', '[]', 0, '2022-07-07 08:18:18', '2022-07-07 08:18:18', '2023-07-07 15:18:18'),
('bfa1e51ef5b99c96661e11ba927b45ee1121f675ccd5f424b8b149731eb62fca32f22dc4a94e15b6', 2, 1, 'zfix-auth-token', '[]', 0, '2022-02-03 04:14:26', '2022-02-03 04:14:26', '2023-02-03 11:14:26'),
('bfdedec02c0a60b3e17623e296b5ee2eec6fdf68fc81c9bd15069f12bc8bd357f08434bec23eb010', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-22 19:24:25', '2021-09-22 19:24:25', '2022-09-23 02:24:25'),
('bfe05b7ae1379915e932999b4ea454a2581e68ed4f9806746ee20a5407ebd8086147dc68a9b82709', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:35:42', '2021-11-11 19:35:42', '2022-11-12 02:35:42'),
('bffc5d21a4554cbae46f460b508d0df249eb0e1ee2f98c31793de22f250cb8fd52657ca4b965f45d', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-13 20:49:45', '2022-06-13 20:49:45', '2023-06-14 03:49:45'),
('c04016fdd989f35dc8b7614ea50f437089bbc3690215b3a066a0c438ae7c7f03ea26582b2bfdf342', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-27 00:05:08', '2021-12-27 00:05:08', '2022-12-27 07:05:08'),
('c0e0806894332b1f7e30ceb053eaa3e0ff808f701d3c872da1e6e73a1de230d0338f90c45fc72c18', 23, 1, 'zfix-auth-token', '[]', 0, '2022-01-17 01:11:36', '2022-01-17 01:11:36', '2023-01-17 08:11:36'),
('c0e8ae922a6585f7b550ffa9af82b6d7595e43a56ed362120df742bf4527f71a38c538e190b1faa6', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-26 08:08:56', '2021-11-26 08:08:56', '2022-11-26 15:08:56'),
('c0e8de0516808fcf9b7564efd2fe567bc8f52d2659e049a787a87feba21d5012344f57f64fda247a', 28, 1, 'zfix-auth-token', '[]', 0, '2022-02-24 06:59:38', '2022-02-24 06:59:38', '2023-02-24 13:59:38'),
('c11d97079b0ede15ae2530b1bf60eae2758042240d3067a200024ccfb8af991f88a14b756e0ad92b', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-15 05:15:19', '2021-11-15 05:15:19', '2022-11-15 12:15:19'),
('c236f1bbb51ccaab1610ad0e26d588125f9f218b941b73e7c6e18d73831bf91524ff2ab5f9ae87b1', 2, 1, 'zfix-auth-token', '[]', 0, '2022-08-23 12:41:06', '2022-08-23 12:41:06', '2023-08-23 19:41:06'),
('c252dcc1a57b2039f53246d57d2f231a09434d159ab63b22ef4dbd27f4f548d54ab3f29962768ee5', 23, 1, 'zfix-auth-token', '[]', 0, '2022-03-23 19:52:11', '2022-03-23 19:52:11', '2023-03-24 02:52:11'),
('c336ea5e6f946a2b481e1b3e100a49696700661d7ad4ece146c68e44b914d9e393a9e705092074dc', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:22:08', '2022-01-09 21:22:08', '2023-01-10 04:22:08'),
('c363093e7c77e5f59f1386073073360750bda89f9f162d15dab94484b988a88a2cf574abc9065bba', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:18:16', '2022-01-09 21:18:16', '2023-01-10 04:18:16'),
('c4166d6f5678274273385736612e862cdb3a0f1dc244a9112ffcdb1d720df4575c96f29b289b4a1a', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:30:01', '2022-01-09 21:30:01', '2023-01-10 04:30:01'),
('c41d36332e30c4b93acb6d395e6c90f5a2c810a057837de1ee3f2257a9ab7ad858c3d9653f2357ef', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:30:01', '2022-01-09 21:30:01', '2023-01-10 04:30:01'),
('c4a02a41c3bb32f5b278054820434c866634fdf086250d6899e61377b89dd38014ea08672d9bd2e7', 2, 1, 'zfix-auth-token', '[]', 0, '2022-02-09 01:08:21', '2022-02-09 01:08:21', '2023-02-09 08:08:21'),
('c6025f57575fadf1db7060a7d160be50f30c1a9f92fc2b2806d171e66a46452e439c524dd898aeaf', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-30 21:21:40', '2021-11-30 21:21:40', '2022-12-01 04:21:40'),
('c63962591e7a08ed1471180a6fbe330c3b47bc8ea73c29f20774ce27ef5a78caf0a634456a61b10b', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-28 19:07:04', '2022-06-28 19:07:04', '2023-06-29 02:07:04'),
('c6e29c3fd85fd701289f01d08cee27179860217a1c273714368455a6e65930d632d2c92955e10c40', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:42:52', '2022-01-10 00:42:52', '2023-01-10 07:42:52'),
('c7a6d680fbe685597033f2c7cf9f8a8034511957841b8c03b26e9fa4c24673663442da043fbf44d3', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-01 21:28:48', '2021-11-01 21:28:48', '2022-11-02 04:28:48'),
('c7ac64ca043f54131987e9c8073ffb9ec66f8a71dbfcc016d7a0c632ec3fba60f648488ff7be068d', 15, 1, 'zfix-auth-token', '[]', 0, '2022-04-01 20:16:21', '2022-04-01 20:16:21', '2023-04-02 03:16:21'),
('c8de47da6bffad378308ece5131f84a0b0b0aeb1bc9ba928294c521d5b7e11046c20be05e441dc6e', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 23:30:26', '2021-09-20 23:30:26', '2022-09-21 06:30:26'),
('c90639423583d9c838b0bed282929b2f2bc7bd080e9acb09e05ee02768692e361f84456c4b7d8fa2', 2, 1, 'zfix-auth-token', '[]', 0, '2022-02-09 00:58:20', '2022-02-09 00:58:20', '2023-02-09 07:58:20'),
('c98e1622ca66917e9e43a28fd0cfd211c4c9265f443d2ac920e454af6d01c94277590d5c764ae338', 32, 1, 'zfix-auth-token', '[]', 0, '2022-03-16 03:07:30', '2022-03-16 03:07:30', '2023-03-16 10:07:30'),
('c9cdb6e7f4e86b67b23b96ac2edf3a664b3cb615efe6d79a69517fdc112ffa18b152d71839d667c6', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-22 20:04:58', '2021-11-22 20:04:58', '2022-11-23 03:04:58'),
('c9fdd3ed94ea9a94e588fe4cf38888f14aa6820b060ac622e286dc01a94648a1a7e23bd00d4cfa31', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:32:44', '2021-11-11 19:32:44', '2022-11-12 02:32:44'),
('ca5eaacb0804bac89cd55d88002f5ee368f9cf782000b789d41faa0391c1db86d237c3b943ec9974', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 06:56:31', '2022-01-09 06:56:31', '2023-01-09 13:56:31'),
('cab4b59f74505b063ca6d496597678667e0c0abdb67f1b781e4d51045c02da41f180c337a8d35ea9', 2, 1, 'zfix-auth-token', '[]', 0, '2022-03-11 13:00:34', '2022-03-11 13:00:34', '2023-03-11 20:00:34'),
('cabf51769ee312baf2e975d9f3e7c697da7c568f4772ff93e6835015f8348402bea52bffe62b72e7', 66, 1, 'zfix-auth-token', '[]', 0, '2022-06-22 20:21:48', '2022-06-22 20:21:48', '2023-06-23 03:21:48'),
('cc389d61ee7b42a604a37a2e843396282122451e53e6a860573dde9b5d84c436dd72b5ab1436f77f', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-19 20:45:03', '2022-01-19 20:45:03', '2023-01-20 03:45:03'),
('cca73ee6a27720224fdb4808306806fc52ff8ff399ccd05c2dcf50979d87d71ba136405b446f9bfa', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-15 02:09:20', '2021-11-15 02:09:20', '2022-11-15 09:09:20'),
('ccb3a266da86c086a3009acf1d0d6ebcf0767c52d3c7ab25be7b5d9c269bdc8f73a1511ec5852e32', 50, 1, 'zfix-auth-token', '[]', 0, '2022-06-27 19:32:05', '2022-06-27 19:32:05', '2023-06-28 02:32:05'),
('ccd0c818c798b71c77247deaca83eb2922fbf638996672a3bc1d2ddc16dc68cba59b8912e084422f', 16, 1, 'zfix-auth-token', '[]', 0, '2021-12-13 19:16:28', '2021-12-13 19:16:28', '2022-12-14 02:16:28'),
('cd0aafc00521eb6fe125c6daf9e4eeb6f99f6f26199d3022246fb254bf830483c44985ed6db60a6c', 16, 1, 'zfix-auth-token', '[]', 0, '2022-01-25 01:06:21', '2022-01-25 01:06:21', '2023-01-25 08:06:21'),
('cdc8552afeff6903354b63e060dcf4aafc8b5d36afab64c064d6f7465163149e9ba694a293a54743', 21, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:19:04', '2022-01-09 21:19:04', '2023-01-10 04:19:04'),
('ce9d073b201fc3b9c3c9dca66d7146ff1b6f514fc1e0ba4fde89c2d29af93b6b9cc0d4e24487e36c', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-01 01:12:58', '2021-11-01 01:12:58', '2022-11-01 08:12:58'),
('cfb0596f24afc054581dcd67dd68b85c084a2f03a431d197d4c8a298f9e0e64b77e36378733d6d0a', 15, 1, 'zfix-auth-token', '[]', 0, '2022-04-01 20:17:37', '2022-04-01 20:17:37', '2023-04-02 03:17:37'),
('d032da051c01a8ef645a426b02c79f89535654a30073542bfa8bdaecf40a3155ce9c8e0ffb528e1b', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-07 00:18:15', '2022-01-07 00:18:15', '2023-01-07 07:18:15'),
('d039e31da33a1e98066af3d8704faf5b7952446475633ecab712e224b958a5fb982a51872772159e', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-02 00:32:46', '2021-11-02 00:32:46', '2022-11-02 07:32:46'),
('d04e6bb78637c9e503d9835abc4254be93e9bb7d60a30883b7da1a867ed3a6934fee4ac2eb10ea11', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:29:58', '2022-01-09 21:29:58', '2023-01-10 04:29:58'),
('d08af462344241329bf2d3a78bad455767395eff93e4c9f99148feab75a54d9ee713f78b6144eb80', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-25 01:15:33', '2022-01-25 01:15:33', '2023-01-25 08:15:33'),
('d0aa61c48743f34d6d0c1b6e7868084b01016bb786909493fa2cdfb4a399130bf79cf9c1c298c83c', 41, 1, 'zfix-auth-token', '[]', 0, '2022-04-20 20:26:55', '2022-04-20 20:26:55', '2023-04-21 03:26:55'),
('d0bac95399461c904ebc0144e7201268c4d14b124bd6039881785bb9513a65a2f8712e60bc75f96a', 23, 1, 'zfix-auth-token', '[]', 0, '2022-04-20 20:14:20', '2022-04-20 20:14:20', '2023-04-21 03:14:20'),
('d0c204197c58db02933dc6988fe8202f3ea524b8a1c4cbbe6c8472cb257798a09efb6037d7b75dd3', 15, 1, 'zfix-auth-token', '[]', 0, '2022-04-02 00:27:13', '2022-04-02 00:27:13', '2023-04-02 07:27:13'),
('d1746d2a71438b0cbf990fcb2a199909eef0014c37d2e88a974176100e68d5f8ebff9a1b9e91f3e9', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:35:44', '2021-11-11 19:35:44', '2022-11-12 02:35:44'),
('d1b7eeceee1d976aaef5aaaa31866201090097912df0675536a7d0dec19c11fec079cc503bafdcc2', 73, 1, 'zfix-auth-token', '[]', 0, '2022-07-08 01:08:45', '2022-07-08 01:08:45', '2023-07-08 08:08:45'),
('d219b320d93093dde2601124b6fdf46428773bf2097513bdfb95d38f9179705e47291a514af9ae33', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:44:40', '2022-01-10 00:44:40', '2023-01-10 07:44:40'),
('d22e50533f41e6a38dc42585571a293cf9c7e91cb3d0d9147ab890ad41adb14780d64624a9f0a41c', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 01:32:56', '2022-01-10 01:32:56', '2023-01-10 08:32:56'),
('d26aeda4d4ad046cb2a23417eea0962d5045644333b9cc52e84a83801b1625ac07fef914c30754b2', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-06 21:03:06', '2021-12-06 21:03:06', '2022-12-07 04:03:06'),
('d2ba32d8927437b663966769f7a2a00d64b8d41448e3adaecdc27250f33fd87569d49d05070ba224', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-15 09:18:42', '2021-11-15 09:18:42', '2022-11-15 16:18:42'),
('d320ef4a69e75d52979d986bd46eab619ea6fa5a8ade220ccaef79802c8c003e077d3eba8edf8651', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-28 21:42:36', '2022-06-28 21:42:36', '2023-06-29 04:42:36'),
('d3b2461e5776ede6ce87d79f69309736b6387b72f3adc1fbb52c7b5269c44352fa0cf62257d052c0', 21, 1, 'zfix-auth-token', '[]', 0, '2022-02-25 00:01:17', '2022-02-25 00:01:17', '2023-02-25 07:01:17'),
('d468cca89bea8991b05a2bd8eca52e2ace7cbf1de9180dd6d52b60dfd1cbad13bf0b204a3e3d976a', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-03 20:24:17', '2021-11-03 20:24:17', '2022-11-04 03:24:17'),
('d48a4421e1d17c44d39884f817b01df26d2fde68b264b81e5864463dd64eb9f8816ba3d367059de4', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-29 23:01:28', '2022-06-29 23:01:28', '2023-06-30 06:01:28'),
('d4ba34284fa45f6934645d81a99d06833fcf9a4c5017d05c23172bb669a1368000926f7cc7925eec', 15, 1, 'zfix-auth-token', '[]', 0, '2022-05-12 21:37:12', '2022-05-12 21:37:12', '2023-05-13 04:37:12'),
('d4d6253360401a439e5e8952dc6d7d628391057dee3f45114c8ba117194af879a3deea38fbba8268', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-11 23:00:59', '2022-04-11 23:00:59', '2023-04-12 06:00:59'),
('d4fc88c592b67f6c09b32007f1d5b805db2e19e66e31d978f9b18de7b70cf9b1e4dd62f378c2652f', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-17 02:57:18', '2022-01-17 02:57:18', '2023-01-17 09:57:18'),
('d564884491b02b6361b009a1545e4ba2987aa6b341f23bc57dd531a79cc4a9a60debf0cec63ebae5', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 00:06:43', '2021-11-11 00:06:43', '2022-11-11 07:06:43'),
('d57a71617c11ae538a078ebd7f6d4d8905e4cd6b66490ba9b8044ce52c8683db5892523528a79879', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-02 22:53:43', '2021-12-02 22:53:43', '2022-12-03 05:53:43'),
('d5ee5ef2e29f81af1fa32044a671c1e14fc0a7ce6c04e2105613edae68567d3047fbb2e766b7d65a', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 23:19:30', '2021-09-20 23:19:30', '2022-09-21 06:19:30'),
('d75d0d51cfea72766229e174bb8487b2c9a537436119f1f3875a1e0e4e19965c9c282ff3a6d88b02', 17, 1, 'zfix-auth-token', '[]', 0, '2022-02-09 00:04:03', '2022-02-09 00:04:03', '2023-02-09 07:04:03'),
('d80e086a1d9d543996520dd1e1fd55081490191e1ed8c64bd6207774f45ba87e99920f42a5fcd728', 2, 1, 'zfix-auth-token', '[]', 0, '2022-05-27 18:58:09', '2022-05-27 18:58:09', '2023-05-28 01:58:09'),
('d951ac80f501519dcecaf3ffea0a90e0f944e07db82fc8b7a95e0cdd7bc78091607f1f6848cec8dc', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:39', '2021-11-11 19:36:39', '2022-11-12 02:36:39'),
('d9583d5d1801714508cf240d6b5faca43c8207bbf1c86622413a5d34ede358291b1bbe41d2577423', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-18 19:35:22', '2022-01-18 19:35:22', '2023-01-19 02:35:22'),
('d9ff7d5f9794d87d7166aa82ecf3a7fc64c4c6cc5c44d6a911cd9bc4e119f0637d935cf1de39e87f', 2, 1, 'zfix-auth-token', '[]', 0, '2022-03-20 21:17:33', '2022-03-20 21:17:33', '2023-03-21 04:17:33'),
('da3d23e3ad72d43fe5ad7669505e182d77fc6e76fb401fec76b8758bf801a58ff0b23a4d040e7e9d', 2, 1, 'zfix-auth-token', '[]', 0, '2022-07-08 01:06:09', '2022-07-08 01:06:09', '2023-07-08 08:06:09'),
('da98806ee8f31f9dea65ca4b379113ba7ce7f77a0830229cd7d4b51a72212077598b64fc5c09529a', 5, 1, 'zfix-auth-token', '[]', 0, '2021-11-18 21:17:34', '2021-11-18 21:17:34', '2022-11-19 04:17:34'),
('daf43a6e6f9c919dfd8da5cc957ed2f23825be0694d9fcf6a4fab549fca8b27f6de65eaa3d9e0fc4', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:39:01', '2022-01-09 21:39:01', '2023-01-10 04:39:01'),
('db733b504a36510706ae87777da6444d590575fd28a05eba7fb8e5146f49826203ce53d4b1783fb5', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-15 00:58:49', '2021-11-15 00:58:49', '2022-11-15 07:58:49'),
('db7f57a987552b97bf79ee7ae245fe12d059155e3c8c97a92cd620e516315bb9a1334686dacdb63d', 2, 1, 'zfix-auth-token', '[]', 0, '2022-04-17 20:19:07', '2022-04-17 20:19:07', '2023-04-18 03:19:07'),
('dcdab6f6eb92952d9d03a7d435e7e3004a7d3a9762ef23ebeb571ec836069f698bfe8a66be979154', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:48:31', '2022-01-10 00:48:31', '2023-01-10 07:48:31'),
('dd06206b4529405fbf4d6abf28d9462d7c1abe1b841a5b7ea39311873e910303f8070bdd46b6c204', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:30:02', '2022-01-09 21:30:02', '2023-01-10 04:30:02'),
('dd6e0553a33de4e12414b66ba106f2731fc7ed8c358202226ab04c356db266170a179854193bdfae', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-14 01:45:24', '2022-01-14 01:45:24', '2023-01-14 08:45:24'),
('dd899d8c0ee79fb5a754301116c1ebb6f29bcb240a24e9d2758f459807a197d69dcc47f6889636f5', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-12 19:55:48', '2022-01-12 19:55:48', '2023-01-13 02:55:48'),
('dd996d84ca91215d36ba48506f4e5c49fc67b4a1d4054fffe84afbb2a867f92385f48cb60f8436ab', 2, 1, 'zfix-auth-token', '[]', 0, '2022-03-20 19:52:16', '2022-03-20 19:52:16', '2023-03-21 02:52:16'),
('ddffce6d4c1c1d7256dab0776ed93afcdf8ca3ad82246715381796ede41509ad71113879ead8df96', 23, 1, 'zfix-auth-token', '[]', 0, '2022-04-19 21:20:11', '2022-04-19 21:20:11', '2023-04-20 04:20:11'),
('de4f7034154151d1a870a844025d5fe2dcd038192eb70771fec46923e8ba0769dd76c450c46ff0f7', 15, 1, 'zfix-auth-token', '[]', 0, '2022-04-21 18:47:36', '2022-04-21 18:47:36', '2023-04-22 01:47:36'),
('dec73246ce9df2176639817b4253509bbe32ea36080d59c72d5d2c3049f02c3a11d8fcae598f48b3', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-11 01:27:01', '2022-01-11 01:27:01', '2023-01-11 08:27:01'),
('decf0e22dbfac56ca3375c14e2db6ef7ef2d6072e4b34b7278dfa9ee1999e925026ddadaca435fd5', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:36', '2021-11-11 19:36:36', '2022-11-12 02:36:36'),
('dede4b27aa4b55bd26516b2c293fa84a673dc234b4df887030ff173cbe9f09276ca9be3a52f79de3', 15, 1, 'zfix-auth-token', '[]', 0, '2022-04-17 13:56:26', '2022-04-17 13:56:26', '2023-04-17 20:56:26'),
('df3a5d3a5549c4ad175aa5ae0bd38ebad4cdb11801f28b290183e40a90e626a11f5b20ff5cbdc418', 15, 1, 'zfix-auth-token', '[]', 0, '2022-04-18 03:22:37', '2022-04-18 03:22:37', '2023-04-18 10:22:37'),
('df811abaa2bc13f2349814bf1c71f36a6f1b6665bb9485ca98fcf2342b826c4543958d30d9c51b90', 2, 1, 'zfix-auth-token', '[]', 0, '2022-03-31 23:46:32', '2022-03-31 23:46:32', '2023-04-01 06:46:32'),
('dfae9901b1e6e8a436bf05a3335f40ee809eb1f025b10415339b83f5d807be572cec034d5aeda8fb', 34, 1, 'zfix-auth-token', '[]', 0, '2022-04-03 22:05:31', '2022-04-03 22:05:31', '2023-04-04 05:05:31'),
('e082232f4eb3e40d65e7826ef0bb4a570a5ecc615908b3070e0348fbfe00ea18fb544c1b359bbbff', 42, 1, 'zfix-auth-token', '[]', 0, '2022-04-21 19:57:26', '2022-04-21 19:57:26', '2023-04-22 02:57:26'),
('e12457b0fa3c330db7102001c96f40d2b31d97d0c57cc8dfd160cb8fb690de0a7ebf3237d02891d6', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-05 19:40:02', '2021-12-05 19:40:02', '2022-12-06 02:40:02'),
('e145b229c00b5b1d1af436fe0ba41f5e9b0266a8548f0ef34bb90df8673578e3b79a645dc80a2bb7', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:31:19', '2022-01-09 21:31:19', '2023-01-10 04:31:19'),
('e14975b174bdf89a939ebc0e8d09b35be57a92719c59a48b09a87bbc076d0ec9d34e5f9484264171', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-19 19:09:10', '2021-09-19 19:09:10', '2022-09-20 02:09:10'),
('e215376a55f18df43ee578ddf6964c05e4f15211a046a781ae628a011ef38a52dce301612f264d99', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-19 21:29:30', '2022-06-19 21:29:30', '2023-06-20 04:29:30'),
('e256116b1ea56f0219fd87929ca287a2a0972c9acd8588062563b454446111b7fb9017eb9c7a7e0d', 2, 1, 'zfix-auth-token', '[]', 0, '2022-02-03 03:59:10', '2022-02-03 03:59:10', '2023-02-03 10:59:10'),
('e25adcadcbf12b8a99292b753ff44e0f488f0cb3ab940a79d08ab5922ad8883c22a6e7b3dd06dc2a', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:30:45', '2022-01-10 00:30:45', '2023-01-10 07:30:45'),
('e2cf9cc8920ce0517dd85e4307336471c66457948c4820a58c0a87c1d1c400cdc96544a769d7076e', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-17 19:47:33', '2022-01-17 19:47:33', '2023-01-18 02:47:33'),
('e392e900a81f52b659265c44ed8039f2bc24a4bb77b9a4dc4ffb430c57250b7b2049032634d54b96', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-16 20:28:20', '2021-11-16 20:28:20', '2022-11-17 03:28:20'),
('e3d5cb3908f9c52234999da1bc272ed0419298ec68fbc255b18c20f8d1eaa3c10860d6d1c8ba9c56', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-27 01:19:05', '2021-09-27 01:19:05', '2022-09-27 08:19:05'),
('e3de8b794f5c5b9a22a06762714b0303bc5458e870029dcfdb224b382472db4809be310590c815b4', 43, 1, 'zfix-auth-token', '[]', 0, '2022-05-11 22:01:44', '2022-05-11 22:01:44', '2023-05-12 05:01:44'),
('e4297f6bbe7adec43c951fcd7139fb32801ff81c514f060a4be0a943658b4cd1c77a70534b9dd178', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-08 02:54:20', '2022-06-08 02:54:20', '2023-06-08 09:54:20'),
('e44ee9eb9ddf7fe949409100ba38423241c699f746c56c9f3df5625d2015163995a7e79b6d5af1a2', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-26 19:32:31', '2021-09-26 19:32:31', '2022-09-27 02:32:31'),
('e4548e96a8fed00b82d94e7c5884f87fb92d23b9fdebd74bc1bd4daf834957e5eb60a0e6cedd3468', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-09 02:26:26', '2021-12-09 02:26:26', '2022-12-09 09:26:26'),
('e4564daeb8f687c61246f9243c3e626ac1782fabbbd05963e6c3e142c21555060e42fb9671869847', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:48:28', '2022-01-10 00:48:28', '2023-01-10 07:48:28'),
('e53e182dde009b5fe09b475773745bdd284ecfa28da4a830ece7ead15f1ae13f21ea37df8dcdce04', 2, 1, 'zfix-auth-token', '[]', 0, '2022-07-07 22:14:05', '2022-07-07 22:14:05', '2023-07-08 05:14:05');
INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('e558ee04ced454dd26ff0434c8d5ba6eb34f28d8b9e675a21dd51905ec665e69dbd43ae62e8f4784', 2, 1, 'zfix-auth-token', '[]', 0, '2022-02-06 21:17:41', '2022-02-06 21:17:41', '2023-02-07 04:17:41'),
('e5597ebcc0a249c78b726cbb85cc7881dedc4e87f2bb1da578cd9833f6534c91c0f2d051b9093168', 63, 1, 'zfix-auth-token', '[]', 0, '2022-06-20 22:46:03', '2022-06-20 22:46:03', '2023-06-21 05:46:03'),
('e658231fbfd9bb8d1687f805e7fec1a265d720b6275ade3570a61037dd1dd9865b3c4dd6a773d411', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-14 00:55:32', '2022-01-14 00:55:32', '2023-01-14 07:55:32'),
('e6728685288a0750210ecbcb97f252effc271aa611d62688186d7c44606beb54da1b072d5562d3cc', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:39', '2021-11-11 19:36:39', '2022-11-12 02:36:39'),
('e6c5174d71238720d5c5c4efd75d5c4a0e43c97a497d8d71291ae975ed592709d9a2270ffc024828', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:46:31', '2022-01-10 00:46:31', '2023-01-10 07:46:31'),
('e71d75e5cf3a6f6e7982e67ca33897c74a650d5f27e90c730b5c6c396d1bee3a905280328e278746', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:38', '2021-11-11 19:36:38', '2022-11-12 02:36:38'),
('e72962a2e31f6e41cd2b1e55fe5f4bd7ba99cac1cef760691eef16f99ec4515ba3866b21d207c70e', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 20:09:27', '2022-01-09 20:09:27', '2023-01-10 03:09:27'),
('e7711e31498acace7ba47fd199cdd7dc7ea383697b48a17bd3f7fd419297860e4378fd5a0bff6754', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-05 20:18:16', '2021-12-05 20:18:16', '2022-12-06 03:18:16'),
('e7c070bc30496c2ac5c1256d53caf9fd293e8cab7231e8eb580d2e4e0696294d974f605cbd6b62d3', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-19 19:25:53', '2021-09-19 19:25:53', '2022-09-20 02:25:53'),
('e886a8582a56de201ff3e4ed82caa9c3eaada7c39f9799dcc02d6361601ad97d3c9d747e094f2eac', 2, 1, 'zfix-auth-token', '[]', 0, '2022-02-09 00:57:18', '2022-02-09 00:57:18', '2023-02-09 07:57:18'),
('e8cb501f9f5bd962e9beb0f4e40f651e9bae5bb17310bd00b59ad9b3a8a8507191745f07fc020df0', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-17 00:36:24', '2021-11-17 00:36:24', '2022-11-17 07:36:24'),
('e8d89b0e3525844a5499c50ede1df45d716269f66be6927511183f7d143630ecda17879651b6a214', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:32', '2021-11-11 19:36:32', '2022-11-12 02:36:32'),
('e8ee0cc0db0358f999d739f12e312841634cee2c54fa67040d0db18da71355a8387e610d3da30dc8', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:48:29', '2022-01-10 00:48:29', '2023-01-10 07:48:29'),
('e90ff323c78a2d58815aede3e497fc326a11a0bdb3872197d4cf3033ac6e8abf9f13add56182316b', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 01:25:56', '2022-01-10 01:25:56', '2023-01-10 08:25:56'),
('e93b0ec282e9d28044b0d272ae9eec52ab5ff87fd9601cf0459fe6fac788cba1eb3b05cbb29c4cf0', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:36:36', '2021-11-11 19:36:36', '2022-11-12 02:36:36'),
('e9aed4cde2a2ef0c777cc4ced2a5f01f02ac02a493a4a4c32085e24bfab94e3f0e1de9667b3b881d', 16, 1, 'zfix-auth-token', '[]', 0, '2022-02-08 19:44:47', '2022-02-08 19:44:47', '2023-02-09 02:44:47'),
('ea4b997b8e33f9a0e60c4e10b9842fda1cd11c071b16f224c4933c84092187d03048345e2e58842c', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:35:13', '2022-01-09 21:35:13', '2023-01-10 04:35:13'),
('ebaca167314da66e633a482ef996867776124f5b46624e325997deb1864e3663de7cf283bb1efc07', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-21 00:39:28', '2021-09-21 00:39:28', '2022-09-21 07:39:28'),
('ec027c40cb187fb166be03edbc88ddc8240ba1cf8f35dab9b25a29732be11e83667890a9a17d2e9a', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-11 20:36:33', '2022-01-11 20:36:33', '2023-01-12 03:36:33'),
('ec09b93c42fbeea13a28fa31201a8f45878c77293f2c72f45e6263090c0fa216843954cd52088179', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-30 21:46:14', '2021-11-30 21:46:14', '2022-12-01 04:46:14'),
('ec54529df379c94004982f2e590413d384e3bbb45f29c805fcffd47d6172342492f4fa2d773d5e1a', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-06 06:26:39', '2021-12-06 06:26:39', '2022-12-06 13:26:39'),
('ecf1c6fd5e37c73f49a0a484186f07b1c31c62cba2c96eb47a573950a7e056d7eaf4c0f41e86bb7b', 19, 1, 'zfix-auth-token', '[]', 0, '2022-01-11 19:04:33', '2022-01-11 19:04:33', '2023-01-12 02:04:33'),
('eeac88e2bc88277790b22c0324c6247521163ee80a564fa4a77be45ea27b4b78193e718e53898bbe', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-19 21:00:32', '2021-09-19 21:00:32', '2022-09-20 04:00:32'),
('eeb17bae7786dca436041d35b829059fc80d3c39d533f235365d514996f65f2bafcac6a70cdda280', 29, 1, 'zfix-auth-token', '[]', 0, '2022-02-25 00:08:46', '2022-02-25 00:08:46', '2023-02-25 07:08:46'),
('eef843263f3b545a0a4d46a160caefe9ebb803ca4f4672fa56e0b65dc72ab2b9c920a5b11606ece3', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-20 23:58:51', '2021-09-20 23:58:51', '2022-09-21 06:58:51'),
('f01b6d8ec027a35f1ca5063db6df8836393dfe751003ce87fcc2c0bd27f3166db1ea2295314bc07c', 15, 1, 'zfix-auth-token', '[]', 0, '2022-04-02 00:27:13', '2022-04-02 00:27:13', '2023-04-02 07:27:13'),
('f094f8a3dd1c217d2c1960a4a4d44819c4bc5036462050e8cb66bda19be0c81e2fc037482ec248db', 17, 1, 'zfix-auth-token', '[]', 0, '2021-12-27 00:47:40', '2021-12-27 00:47:40', '2022-12-27 07:47:40'),
('f26f3459275a72fafddfa59fbdd1b7a54684804246cbc8c007826be2c1910834caed7e2b4101112d', 2, 1, 'zfix-auth-token', '[]', 0, '2022-05-12 08:57:30', '2022-05-12 08:57:30', '2023-05-12 15:57:30'),
('f270a872edf65ffcbd8767665eaeeb955f961ccd843c4ed43477bbefa2d79542b10c7c9541496abd', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-11 19:35:53', '2021-11-11 19:35:53', '2022-11-12 02:35:53'),
('f286eea356c73594a7ce4ccec736a3abd80a366bf6a269c63e3f5520ce98a1165f11e6c91d3aff20', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-26 08:08:56', '2021-11-26 08:08:56', '2022-11-26 15:08:56'),
('f299f2ce56e67282a473483989ce658c0c45962b1cb1f4db1483c3cae626369c6aafa4d05d41c979', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:30:01', '2022-01-09 21:30:01', '2023-01-10 04:30:01'),
('f2a4e3e064a5aef917468f93835410fdf213b55c73a9fb8c4bbf33143b5ab11a1dee2b5d1d4f277f', 2, 1, 'zfix-auth-token', '[]', 0, '2022-05-13 10:11:47', '2022-05-13 10:11:47', '2023-05-13 17:11:47'),
('f2a7daa05515d3fcf18d2a7773f5338b5fbb7e3c658677983934081b33d8657bbe651068f0a4026e', 2, 1, 'zfix-auth-token', '[]', 0, '2022-05-12 08:52:59', '2022-05-12 08:52:59', '2023-05-12 15:52:59'),
('f4344e6c628479c314b759e017e3556dae64f15760bea945cd9083e0dd16710c9d250fe6e316a166', 48, 1, 'zfix-auth-token', '[]', 0, '2022-07-10 19:29:16', '2022-07-10 19:29:16', '2023-07-11 02:29:16'),
('f44d7eebda4e96d0e6b790c86941481d0868bcbd2bf7454700cda5abe5d44b00bbb3b3973665086e', 2, 1, 'zfix-auth-token', '[]', 0, '2022-07-04 22:43:55', '2022-07-04 22:43:55', '2023-07-05 05:43:55'),
('f4f29e5b43dfdce9e9050746f10e20cec44146e9d7e98c93ea2f7f759944c5d7be7835536afe9cee', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-17 03:02:14', '2022-06-17 03:02:14', '2023-06-17 10:02:14'),
('f5063d9aa0c9f57af87ab9d8cfdc738b70dc2c07319c2fdc4d5c046f420700163733014f9056eea9', 2, 1, 'zfix-auth-token', '[]', 0, '2021-11-24 23:10:54', '2021-11-24 23:10:54', '2022-11-25 06:10:54'),
('f5ab4a5ed630009259bed4120b1815b9b4344152a087970a2165546a748b63c53cbf89c0e55f4779', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:35:57', '2022-01-09 21:35:57', '2023-01-10 04:35:57'),
('f5f91afa55878e8e1b09a6c03efb5b3cf6f6d9147b8e08d0372f2edb20c29e407f4c314d865058b8', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-15 19:26:55', '2022-01-15 19:26:55', '2023-01-16 02:26:55'),
('f6dbe9f55e57546872aacb88ef1ec8f8e28d3d794518265bb77104e42432b5f24d073eee9bd96bbb', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-19 20:57:03', '2021-09-19 20:57:03', '2022-09-20 03:57:03'),
('f71cc16d3fd43a8964c9f9f60adbbe46316e0f8062453045dc7ac7ece7381b0e93997b7961bb6bf3', 48, 1, 'zfix-auth-token', '[]', 0, '2022-06-29 17:53:00', '2022-06-29 17:53:00', '2023-06-30 00:53:00'),
('f77c7102e0685668e440c74ce8ce8161966bac1b7d567e505aefb505164d7621536ec451f3d34168', 16, 1, 'zfix-auth-token', '[]', 0, '2021-12-27 00:33:57', '2021-12-27 00:33:57', '2022-12-27 07:33:57'),
('f8524de90f1eaa2fa9297a5cb2dec1f966fbebe5500be371136d122d21137f8dbcb5957a5fe8dd86', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-16 19:49:27', '2022-01-16 19:49:27', '2023-01-17 02:49:27'),
('f8aa760d169bb2814987648da45e4e90f100248df5c30803534f30d7a4504ebcae942f09883c6932', 63, 1, 'zfix-auth-token', '[]', 0, '2022-06-20 22:44:11', '2022-06-20 22:44:11', '2023-06-21 05:44:11'),
('f9840ee137d0ea40c41ecec098b905da98ef9a37ba9baa39ef7aa332d50b46e2e57ce3d9e254299f', 21, 1, 'zfix-auth-token', '[]', 0, '2022-02-24 00:22:57', '2022-02-24 00:22:57', '2023-02-24 07:22:57'),
('fb519b5896b5efb4e59510f2613f7ea6a148cef9d1e3a7c42c706bfbc4ed83c952a09d10d51cc774', 2, 1, 'zfix-auth-token', '[]', 0, '2021-09-19 21:09:30', '2021-09-19 21:09:30', '2022-09-20 04:09:30'),
('fbe9d6982b2a17c3046dc9e946c773835505d043c75ab29f8c0266763298b02e66c5141d9cfb33e2', 15, 1, 'zfix-auth-token', '[]', 0, '2022-01-09 21:30:02', '2022-01-09 21:30:02', '2023-01-10 04:30:02'),
('fcf24545da7bdf04909bfb143e666c9afffd946b75350d53f3b8401dffe5eefb5ae1475b4a8adabc', 2, 1, 'zfix-auth-token', '[]', 0, '2021-12-09 01:36:35', '2021-12-09 01:36:35', '2022-12-09 08:36:35'),
('fdfb72ad62c53f214e17658682d88f5b40fa6fd10fce8f77b4a42f6af8a3497e9d431c2d81916ad1', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-12 20:49:59', '2022-06-12 20:49:59', '2023-06-13 03:49:59'),
('fe264507f720aa7565cd300a0da562a15d18bdcfe6db3b8a2382c4e1a2c905d4c2a49b79f61c96e8', 23, 1, 'zfix-auth-token', '[]', 0, '2022-05-11 22:10:00', '2022-05-11 22:10:00', '2023-05-12 05:10:00'),
('fe40b95d8062611adb6fcc4967b94cb98d1f1e8c765c5aa38e3a5b7ec1a0c33d301498fc69e56842', 2, 1, 'zfix-auth-token', '[]', 0, '2022-06-08 04:42:02', '2022-06-08 04:42:02', '2023-06-08 11:42:02'),
('ff2478642fb27a22d5ae69899e45fdf85a74614409905a1bec80e1fdbdd83ca2353ac4523ad7bbe9', 2, 1, 'zfix-auth-token', '[]', 0, '2022-07-08 00:12:14', '2022-07-08 00:12:14', '2023-07-08 07:12:14'),
('ff3ec1483d4a742ea37273f70d28475770dae0acda5d29b7951b92c4dc24f5e4b68e2937810a77d0', 2, 1, 'zfix-auth-token', '[]', 0, '2022-01-10 00:48:30', '2022-01-10 00:48:30', '2023-01-10 07:48:30'),
('ffa17269e1ff484ff92475941ad57c341290c140f8dc73749e7425a23b28daafc6aa1da2b354cf9f', 72, 1, 'zfix-auth-token', '[]', 0, '2022-07-07 21:03:20', '2022-07-07 21:03:20', '2023-07-08 04:03:20');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Trade-In Personal Access Client', 'FMlsjRYrxzwBo8sAc7s99stodzMy0RY3zjfZuxVo', NULL, 'http://localhost', 1, 0, 0, '2021-09-19 19:08:28', '2021-09-19 19:08:28'),
(2, NULL, 'Trade-In Password Grant Client', '3rmlgdHNKaHcD9sVNnvP75rYNsiWFrjp6G3ZE7QO', 'users', 'http://localhost', 0, 1, 0, '2021-09-19 19:08:28', '2021-09-19 19:08:28');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(2, 1, '2021-09-19 19:08:28', '2021-09-19 19:08:28');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `pic` varchar(50) DEFAULT NULL,
  `contact` varchar(50) DEFAULT NULL,
  `partner_key` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `users_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('Admin@zfix.id', '$2y$10$jLpcF3cMw0xobuw849Bx8u3BBqmkJKBYVQyaNJm/PwieR8SbuTuxu', '2022-07-10 15:31:03'),
('admin@tes.tes', '$2y$10$k3DZ0xiSySWWPZH/CSdD1eYjx.jZW6yBdgBhUmgzCVXQaGA5QZU7a', '2022-07-10 15:33:00');

-- --------------------------------------------------------

--
-- Table structure for table `process_kulkas`
--

CREATE TABLE `process_kulkas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customers_id` bigint(20) UNSIGNED NOT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `condition` varchar(50) DEFAULT NULL,
  `kondisi_fisik` varchar(50) DEFAULT NULL,
  `rubber` varchar(50) DEFAULT NULL,
  `tutup_freezer` varchar(50) DEFAULT NULL,
  `tray` varchar(50) DEFAULT NULL,
  `ice_maker` varchar(50) DEFAULT NULL,
  `lokasi_trade` bigint(20) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `voucher_id` bigint(20) DEFAULT NULL,
  `jenis_layanan` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `note` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `process_laptop`
--

CREATE TABLE `process_laptop` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customers_id` bigint(20) UNSIGNED NOT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `memory` varchar(50) DEFAULT NULL,
  `storages` varchar(50) DEFAULT NULL,
  `jenis_storage` varchar(50) DEFAULT NULL,
  `lokasi_trade` bigint(20) UNSIGNED NOT NULL,
  `kondisi_laptop` varchar(50) DEFAULT NULL,
  `jenis_layar` varchar(50) DEFAULT NULL,
  `baterai` varchar(50) NOT NULL DEFAULT '',
  `kondisi_layar` varchar(50) DEFAULT NULL,
  `keyboard` varchar(50) DEFAULT NULL,
  `trackpad` varchar(50) DEFAULT NULL,
  `port` varchar(50) DEFAULT NULL,
  `wifi` varchar(50) NOT NULL DEFAULT '',
  `camera` varchar(50) NOT NULL DEFAULT '',
  `speaker` varchar(50) NOT NULL DEFAULT '',
  `processor` varchar(50) NOT NULL DEFAULT '',
  `ukuran_laptop` varchar(50) NOT NULL DEFAULT '',
  `os` varchar(50) NOT NULL DEFAULT '',
  `inner_screen` varchar(50) DEFAULT NULL,
  `outer_screen` varchar(50) DEFAULT NULL,
  `condition` varchar(50) DEFAULT NULL,
  `addition` varchar(50) DEFAULT NULL,
  `more_addition` varchar(50) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `jenis_layanan` int(11) DEFAULT NULL,
  `voucher_id` bigint(20) UNSIGNED DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `note` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `Column 32` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `process_mesin_cuci`
--

CREATE TABLE `process_mesin_cuci` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customers_id` bigint(20) UNSIGNED NOT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `condition` varchar(50) DEFAULT NULL,
  `kondisi_fisik` varchar(50) DEFAULT NULL,
  `rubber` varchar(50) DEFAULT NULL,
  `tutup` varchar(50) DEFAULT NULL,
  `tombol` varchar(50) DEFAULT NULL,
  `pembuangan` varchar(50) DEFAULT NULL,
  `pengering` varchar(50) DEFAULT NULL,
  `air_otomatis` varchar(50) DEFAULT NULL,
  `pemanas` varchar(50) DEFAULT NULL,
  `lokasi_trade` bigint(20) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `voucher_id` bigint(20) DEFAULT NULL,
  `jenis_layanan` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `note` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `process_phone`
--

CREATE TABLE `process_phone` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customers_id` bigint(20) UNSIGNED NOT NULL,
  `brand` varchar(50) NOT NULL,
  `ram` varchar(50) DEFAULT NULL,
  `storages` varchar(50) DEFAULT NULL,
  `screen_has_problem` tinyint(4) DEFAULT NULL,
  `camera_has_problem` tinyint(4) DEFAULT NULL,
  `wifi_has_problem` tinyint(4) DEFAULT NULL,
  `button_has_problem` tinyint(4) DEFAULT NULL,
  `vibration` tinyint(4) DEFAULT NULL,
  `finger` tinyint(4) DEFAULT NULL,
  `lokasi_trade` bigint(20) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `voucher_id` bigint(20) DEFAULT NULL,
  `jenis_layanan` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `note` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `process_ps`
--

CREATE TABLE `process_ps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customers_id` bigint(20) UNSIGNED NOT NULL,
  `jenis_ps` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `storages` varchar(50) DEFAULT NULL,
  `lokasi_trade` bigint(20) DEFAULT NULL,
  `addition` varchar(50) DEFAULT NULL,
  `condition` varchar(50) DEFAULT NULL,
  `kondisi_ps` varchar(50) DEFAULT NULL,
  `console` varchar(50) DEFAULT NULL,
  `port` varchar(50) DEFAULT NULL,
  `add_games` varchar(50) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `voucher_id` bigint(20) DEFAULT NULL,
  `jenis_layanan` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `note` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `process_tv`
--

CREATE TABLE `process_tv` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customers_id` bigint(20) UNSIGNED NOT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `jenis_tv` varchar(50) DEFAULT NULL,
  `inch` varchar(50) DEFAULT NULL,
  `lokasi_trade` bigint(20) DEFAULT NULL,
  `inner_screen` varchar(50) DEFAULT NULL,
  `outer_screen` varchar(50) DEFAULT NULL,
  `addition` varchar(50) DEFAULT NULL,
  `condition` varchar(50) DEFAULT NULL,
  `wifi` varchar(50) DEFAULT NULL,
  `suara` varchar(50) DEFAULT NULL,
  `port` varchar(50) DEFAULT NULL,
  `kondisi_tv` varchar(50) DEFAULT NULL,
  `kondisi_layar` varchar(50) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `voucher_id` bigint(20) DEFAULT NULL,
  `jenis_layanan` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `note` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ps_detail_check`
--

CREATE TABLE `ps_detail_check` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `condition` tinyint(4) DEFAULT NULL,
  `addition` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ps_price`
--

CREATE TABLE `ps_price` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `storages` varchar(50) DEFAULT NULL,
  `jenis_ps` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `priceGradeA` int(11) DEFAULT NULL,
  `priceGradeB` int(11) DEFAULT NULL,
  `priceGradeC` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ps_price`
--

INSERT INTO `ps_price` (`id`, `brand`, `storages`, `jenis_ps`, `type`, `priceGradeA`, `priceGradeB`, `priceGradeC`, `created_at`, `updated_at`) VALUES
(77, NULL, '120GB', 'Sony Playstation 3 slim', 'PS3 (Slim)', 550000, 450000, 350000, '2022-06-08 19:28:26', '2022-06-08 19:28:26'),
(78, NULL, '160GB', 'Sony Playstation 3 slim', 'PS3 (Slim)', 700000, 600000, 400000, '2022-06-08 19:28:26', '2022-06-08 19:28:26'),
(79, NULL, '250GB', 'Sony Playstation 3 slim', 'PS3 (Slim)', 800000, 600000, 500000, '2022-06-08 19:28:26', '2022-06-08 19:28:26'),
(80, NULL, '320GB', 'Sony Playstation 3 slim', 'PS3 (Slim)', 1000000, 800000, 600000, '2022-06-08 19:28:26', '2022-06-08 19:28:26'),
(81, NULL, '500GB', 'Sony Playstation 3 slim', 'PS3 (Slim)', 1100000, 900000, 700000, '2022-06-08 19:28:26', '2022-06-08 19:28:26'),
(82, NULL, '320GB', 'Sony Playstation 3 super slim', 'PS3 (Super Slim)', 1000000, 800000, 600000, '2022-06-08 19:28:26', '2022-06-08 19:28:26'),
(83, NULL, '500GB', 'Sony Playstation 4', 'PS4 (Fat)', 900000, 700000, 500000, '2022-06-08 19:28:26', '2022-06-08 19:28:26'),
(84, NULL, '1TB', 'Sony Playstation 4', 'PS4 (Fat)', 1100000, 1000000, 700000, '2022-06-08 19:28:26', '2022-06-08 19:28:26'),
(85, NULL, '500GB', 'Sony Playstation 4 slim', 'PS4 (Slim)', 1600000, 1400000, 1200000, '2022-06-08 19:28:26', '2022-06-08 19:28:26'),
(86, NULL, '1TB', 'Sony Playstation 4 slim', 'PS4 (Slim)', 2000000, 1800000, 1600000, '2022-06-08 19:28:26', '2022-06-08 19:28:26'),
(87, NULL, '1TB', 'PS5', 'Digital', 2200000, 2000000, 1800000, '2022-06-08 19:28:26', '2022-06-08 19:28:26');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`) VALUES
(1, 'Admin', '2020-08-04 21:28:35'),
(2, 'Staff', '2020-08-04 21:28:35'),
(3, 'Viewer', '2020-08-04 21:28:35'),
(4, 'Partner', '2020-08-04 21:28:35'),
(5, 'Customer', '2020-08-04 21:28:35');

-- --------------------------------------------------------

--
-- Table structure for table `tv_detail_check`
--

CREATE TABLE `tv_detail_check` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `inner_screen` int(11) DEFAULT NULL,
  `outer_screen` int(11) DEFAULT NULL,
  `condition` int(11) DEFAULT NULL,
  `addition` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tv_detail_check`
--

INSERT INTO `tv_detail_check` (`id`, `inner_screen`, `outer_screen`, `condition`, `addition`) VALUES
(1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tv_price`
--

CREATE TABLE `tv_price` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `jenis_tv` varchar(50) DEFAULT NULL,
  `inch` varchar(50) DEFAULT NULL,
  `priceGradeA` int(11) DEFAULT NULL,
  `priceGradeB` int(11) DEFAULT NULL,
  `priceGradeC` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tv_price`
--

INSERT INTO `tv_price` (`id`, `brand`, `jenis_tv`, `inch`, `priceGradeA`, `priceGradeB`, `priceGradeC`, `created_at`, `updated_at`) VALUES
(761, 'Samsung', 'LED', '32\" inch', 750000, 650000, 550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(762, 'Samsung', 'LED', '40\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(763, 'Samsung', 'LED', '42\" inch', 1350000, 1150000, 1000000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(764, 'Samsung', 'LED', '50\"inch', 1850000, 1550000, 1350000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(765, 'Samsung', 'LED', '55\" inch', 2150000, 1850000, 1550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(766, 'Samsung', 'Smart TV', '32\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(767, 'Samsung', 'Smart TV', '40\" inch', 1150000, 1050000, 900000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(768, 'Samsung', 'Smart TV', '42\" inch', 1550000, 1300000, 1100000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(769, 'Samsung', 'Smart TV', '50\"inch', 2000000, 1700000, 1400000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(770, 'Samsung', 'Smart TV', '55\" inch', 2350000, 2000000, 1700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(771, 'LG', 'LED', '32\" inch', 750000, 650000, 550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(772, 'LG', 'LED', '40\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(773, 'LG', 'LED', '42\" inch', 1350000, 1150000, 1000000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(774, 'LG', 'LED', '50\"inch', 1850000, 1550000, 1350000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(775, 'LG', 'LED', '55\" inch', 2150000, 1850000, 1550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(776, 'LG', 'Smart TV', '32\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(777, 'LG', 'Smart TV', '40\" inch', 1150000, 1050000, 900000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(778, 'LG', 'Smart TV', '42\" inch', 1550000, 1300000, 1100000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(779, 'LG', 'Smart TV', '50\"inch', 2000000, 1700000, 1400000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(780, 'LG', 'Smart TV', '55\" inch', 2350000, 2000000, 1700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(781, 'Sony', 'LED', '32\" inch', 750000, 650000, 550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(782, 'Sony', 'LED', '40\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(783, 'Sony', 'LED', '42\" inch', 1350000, 1150000, 1000000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(784, 'Sony', 'LED', '50\"inch', 1850000, 1550000, 1350000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(785, 'Sony', 'LED', '55\" inch', 2150000, 1850000, 1550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(786, 'Sony', 'Smart TV', '32\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(787, 'Sony', 'Smart TV', '40\" inch', 1150000, 1050000, 900000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(788, 'Sony', 'Smart TV', '42\" inch', 1550000, 1300000, 1100000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(789, 'Sony', 'Smart TV', '50\"inch', 2000000, 1700000, 1400000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(790, 'Sony', 'Smart TV', '55\" inch', 2350000, 2000000, 1700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(791, 'Panasonic', 'LED', '32\" inch', 750000, 650000, 550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(792, 'Panasonic', 'LED', '40\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(793, 'Panasonic', 'LED', '42\" inch', 1350000, 1150000, 1000000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(794, 'Panasonic', 'LED', '50\"inch', 1850000, 1550000, 1350000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(795, 'Panasonic', 'LED', '55\" inch', 2150000, 1850000, 1550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(796, 'Panasonic', 'Smart TV', '32\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(797, 'Panasonic', 'Smart TV', '40\" inch', 1150000, 1050000, 900000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(798, 'Panasonic', 'Smart TV', '42\" inch', 1550000, 1300000, 1100000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(799, 'Panasonic', 'Smart TV', '50\"inch', 2000000, 1700000, 1400000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(800, 'Panasonic', 'Smart TV', '55\" inch', 2350000, 2000000, 1700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(801, 'Sharp', 'LED', '32\" inch', 750000, 650000, 550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(802, 'Sharp', 'LED', '40\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(803, 'Sharp', 'LED', '42\" inch', 1350000, 1150000, 1000000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(804, 'Sharp', 'LED', '50\"inch', 1850000, 1550000, 1350000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(805, 'Sharp', 'LED', '55\" inch', 2150000, 1850000, 1550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(806, 'Sharp', 'Smart TV', '32\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(807, 'Sharp', 'Smart TV', '40\" inch', 1150000, 1050000, 900000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(808, 'Sharp', 'Smart TV', '42\" inch', 1550000, 1300000, 1100000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(809, 'Sharp', 'Smart TV', '50\"inch', 2000000, 1700000, 1400000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(810, 'Sharp', 'Smart TV', '55\" inch', 2350000, 2000000, 1700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(811, 'Toshiba', 'LED', '32\" inch', 750000, 650000, 550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(812, 'Toshiba', 'LED', '40\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(813, 'Toshiba', 'LED', '42\" inch', 1350000, 1150000, 1000000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(814, 'Toshiba', 'LED', '50\"inch', 1850000, 1550000, 1350000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(815, 'Toshiba', 'LED', '55\" inch', 2150000, 1850000, 1550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(816, 'Toshiba', 'Smart TV', '32\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(817, 'Toshiba', 'Smart TV', '40\" inch', 1150000, 1050000, 900000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(818, 'Toshiba', 'Smart TV', '42\" inch', 1550000, 1300000, 1100000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(819, 'Toshiba', 'Smart TV', '50\"inch', 2000000, 1700000, 1400000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(820, 'Toshiba', 'Smart TV', '55\" inch', 2350000, 2000000, 1700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(821, 'Philips', 'LED', '32\" inch', 750000, 650000, 550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(822, 'Philips', 'LED', '40\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(823, 'Philips', 'LED', '42\" inch', 1350000, 1150000, 1000000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(824, 'Philips', 'LED', '50\"inch', 1850000, 1550000, 1350000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(825, 'Philips', 'LED', '55\" inch', 2150000, 1850000, 1550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(826, 'Philips', 'Smart TV', '32\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(827, 'Philips', 'Smart TV', '40\" inch', 1150000, 1050000, 900000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(828, 'Philips', 'Smart TV', '42\" inch', 1550000, 1300000, 1100000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(829, 'Philips', 'Smart TV', '50\"inch', 2000000, 1700000, 1400000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(830, 'Philips', 'Smart TV', '55\" inch', 2350000, 2000000, 1700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(831, 'Polytron', 'LED', '32\" inch', 750000, 650000, 550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(832, 'Polytron', 'LED', '40\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(833, 'Polytron', 'LED', '42\" inch', 1350000, 1150000, 1000000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(834, 'Polytron', 'LED', '50\"inch', 1850000, 1550000, 1350000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(835, 'Polytron', 'LED', '55\" inch', 2150000, 1850000, 1550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(836, 'Polytron', 'Smart TV', '32\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(837, 'Polytron', 'Smart TV', '40\" inch', 1150000, 1050000, 900000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(838, 'Polytron', 'Smart TV', '42\" inch', 1550000, 1300000, 1100000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(839, 'Polytron', 'Smart TV', '50\"inch', 2000000, 1700000, 1400000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(840, 'Polytron', 'Smart TV', '55\" inch', 2350000, 2000000, 1700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(841, 'Xiaomi', 'LED', '32\" inch', 750000, 650000, 550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(842, 'Xiaomi', 'LED', '40\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(843, 'Xiaomi', 'LED', '42\" inch', 1350000, 1150000, 1000000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(844, 'Xiaomi', 'LED', '50\"inch', 1850000, 1550000, 1350000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(845, 'Xiaomi', 'LED', '55\" inch', 2150000, 1850000, 1550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(846, 'Xiaomi', 'Smart TV', '32\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(847, 'Xiaomi', 'Smart TV', '40\" inch', 1150000, 1050000, 900000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(848, 'Xiaomi', 'Smart TV', '42\" inch', 1550000, 1300000, 1100000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(849, 'Xiaomi', 'Smart TV', '50\"inch', 2000000, 1700000, 1400000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(850, 'Xiaomi', 'Smart TV', '55\" inch', 2350000, 2000000, 1700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(851, 'Changhong', 'LED', '32\" inch', 750000, 650000, 550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(852, 'Changhong', 'LED', '40\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(853, 'Changhong', 'LED', '42\" inch', 1350000, 1150000, 1000000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(854, 'Changhong', 'LED', '50\"inch', 1850000, 1550000, 1350000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(855, 'Changhong', 'LED', '55\" inch', 2150000, 1850000, 1550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(856, 'Changhong', 'Smart TV', '32\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(857, 'Changhong', 'Smart TV', '40\" inch', 1150000, 1050000, 900000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(858, 'Changhong', 'Smart TV', '42\" inch', 1550000, 1300000, 1100000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(859, 'Changhong', 'Smart TV', '50\"inch', 2000000, 1700000, 1400000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(860, 'Changhong', 'Smart TV', '55\" inch', 2350000, 2000000, 1700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(861, 'Coocaa', 'LED', '32\" inch', 750000, 650000, 550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(862, 'Coocaa', 'LED', '40\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(863, 'Coocaa', 'LED', '42\" inch', 1350000, 1150000, 1000000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(864, 'Coocaa', 'LED', '50\"inch', 1850000, 1550000, 1350000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(865, 'Coocaa', 'LED', '55\" inch', 2150000, 1850000, 1550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(866, 'Coocaa', 'Smart TV', '32\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(867, 'Coocaa', 'Smart TV', '40\" inch', 1150000, 1050000, 900000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(868, 'Coocaa', 'Smart TV', '42\" inch', 1550000, 1300000, 1100000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(869, 'Coocaa', 'Smart TV', '50\"inch', 2000000, 1700000, 1400000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(870, 'Coocaa', 'Smart TV', '55\" inch', 2350000, 2000000, 1700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(871, 'TCL', 'LED', '32\" inch', 750000, 650000, 550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(872, 'TCL', 'LED', '40\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(873, 'TCL', 'LED', '42\" inch', 1350000, 1150000, 1000000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(874, 'TCL', 'LED', '50\"inch', 1850000, 1550000, 1350000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(875, 'TCL', 'LED', '55\" inch', 2150000, 1850000, 1550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(876, 'TCL', 'Smart TV', '32\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(877, 'TCL', 'Smart TV', '40\" inch', 1150000, 1050000, 900000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(878, 'TCL', 'Smart TV', '42\" inch', 1550000, 1300000, 1100000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(879, 'TCL', 'Smart TV', '50\"inch', 2000000, 1700000, 1400000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(880, 'TCL', 'Smart TV', '55\" inch', 2350000, 2000000, 1700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(881, 'Akari', 'LED', '32\" inch', 750000, 650000, 550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(882, 'Akari', 'LED', '40\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(883, 'Akari', 'LED', '42\" inch', 1350000, 1150000, 1000000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(884, 'Akari', 'LED', '50\"inch', 1850000, 1550000, 1350000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(885, 'Akari', 'LED', '55\" inch', 2150000, 1850000, 1550000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(886, 'Akari', 'Smart TV', '32\" inch', 950000, 800000, 700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(887, 'Akari', 'Smart TV', '40\" inch', 1150000, 1050000, 900000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(888, 'Akari', 'Smart TV', '42\" inch', 1550000, 1300000, 1100000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(889, 'Akari', 'Smart TV', '50\"inch', 2000000, 1700000, 1400000, '2022-06-13 03:09:56', '2022-06-13 03:09:56'),
(890, 'Akari', 'Smart TV', '55\" inch', 2350000, 2000000, 1700000, '2022-06-13 03:09:56', '2022-06-13 03:09:56');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `contact` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `external_user_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `roles_id` bigint(20) UNSIGNED NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `contact`, `address`, `password`, `external_user_id`, `roles_id`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@tes.tes', NULL, NULL, NULL, '$2y$10$T558JgstSKgnyfZ.Ca760.TMiFJ240.Ra8uLHOw7NEAR2/zsDVE6S', NULL, 1, 'CAbjGmxG7ZdWAxuE5QaC3Ot2BpWm0PBXOIJ9jDulet6Hz7H5znKnhg2aCLTM', '2020-11-24 03:52:43', '2022-07-12 01:57:10');

-- --------------------------------------------------------

--
-- Table structure for table `vouchers`
--

CREATE TABLE `vouchers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `voucher_key` varchar(50) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `partners_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `device`
--
ALTER TABLE `device`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `device_detail_check`
--
ALTER TABLE `device_detail_check`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `handphone_price`
--
ALTER TABLE `handphone_price`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kulkas_price`
--
ALTER TABLE `kulkas_price`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laptop_detail_check`
--
ALTER TABLE `laptop_detail_check`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laptop_price`
--
ALTER TABLE `laptop_price`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mesin_cuci_price`
--
ALTER TABLE `mesin_cuci_price`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `partner_key` (`partner_key`),
  ADD KEY `FK_partners_users` (`users_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `process_kulkas`
--
ALTER TABLE `process_kulkas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customers_id` (`customers_id`);

--
-- Indexes for table `process_laptop`
--
ALTER TABLE `process_laptop`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_process_laptop_users` (`customers_id`);

--
-- Indexes for table `process_mesin_cuci`
--
ALTER TABLE `process_mesin_cuci`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customers_id` (`customers_id`);

--
-- Indexes for table `process_phone`
--
ALTER TABLE `process_phone`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customers_id` (`customers_id`);

--
-- Indexes for table `process_ps`
--
ALTER TABLE `process_ps`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_process_ps_users` (`customers_id`);

--
-- Indexes for table `process_tv`
--
ALTER TABLE `process_tv`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_process_tv_users` (`customers_id`);

--
-- Indexes for table `ps_detail_check`
--
ALTER TABLE `ps_detail_check`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ps_price`
--
ALTER TABLE `ps_price`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_unique` (`name`);

--
-- Indexes for table `tv_detail_check`
--
ALTER TABLE `tv_detail_check`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tv_price`
--
ALTER TABLE `tv_price`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `voucher_key` (`voucher_key`),
  ADD KEY `FK_vouchers_partners` (`partners_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `device`
--
ALTER TABLE `device`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `device_detail_check`
--
ALTER TABLE `device_detail_check`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `handphone_price`
--
ALTER TABLE `handphone_price`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `kulkas_price`
--
ALTER TABLE `kulkas_price`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=247;

--
-- AUTO_INCREMENT for table `laptop_detail_check`
--
ALTER TABLE `laptop_detail_check`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `laptop_price`
--
ALTER TABLE `laptop_price`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=410;

--
-- AUTO_INCREMENT for table `mesin_cuci_price`
--
ALTER TABLE `mesin_cuci_price`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=182;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `partners`
--
ALTER TABLE `partners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `process_kulkas`
--
ALTER TABLE `process_kulkas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `process_laptop`
--
ALTER TABLE `process_laptop`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `process_mesin_cuci`
--
ALTER TABLE `process_mesin_cuci`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `process_phone`
--
ALTER TABLE `process_phone`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `process_ps`
--
ALTER TABLE `process_ps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `process_tv`
--
ALTER TABLE `process_tv`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT for table `ps_detail_check`
--
ALTER TABLE `ps_detail_check`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ps_price`
--
ALTER TABLE `ps_price`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tv_detail_check`
--
ALTER TABLE `tv_detail_check`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tv_price`
--
ALTER TABLE `tv_price`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=891;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `partners`
--
ALTER TABLE `partners`
  ADD CONSTRAINT `FK_partners_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `process_kulkas`
--
ALTER TABLE `process_kulkas`
  ADD CONSTRAINT `FK_process_kulkas_users` FOREIGN KEY (`customers_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `process_laptop`
--
ALTER TABLE `process_laptop`
  ADD CONSTRAINT `FK_process_laptop_users` FOREIGN KEY (`customers_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `process_mesin_cuci`
--
ALTER TABLE `process_mesin_cuci`
  ADD CONSTRAINT `FK_process_mesin_cuci_users` FOREIGN KEY (`customers_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `process_phone`
--
ALTER TABLE `process_phone`
  ADD CONSTRAINT `FK_process_users` FOREIGN KEY (`customers_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `process_ps`
--
ALTER TABLE `process_ps`
  ADD CONSTRAINT `FK_process_ps_users` FOREIGN KEY (`customers_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `process_tv`
--
ALTER TABLE `process_tv`
  ADD CONSTRAINT `FK_process_tv_users` FOREIGN KEY (`customers_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `vouchers`
--
ALTER TABLE `vouchers`
  ADD CONSTRAINT `FK_vouchers_partners` FOREIGN KEY (`partners_id`) REFERENCES `partners` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
