-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-11-2018 a las 15:48:55
-- Versión del servidor: 10.1.34-MariaDB
-- Versión de PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gps`
--

CREATE TABLE `gps` (
  `id` bigint(20) NOT NULL,
  `point` geometry NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `gps`
--

INSERT INTO `gps` (`id`, `point`) VALUES
(1, '\0\0\0\0\0\0\0\0\0\0\0\0\03@\0\0\0\0\0\03@'),
(2, '\0\0\0\0\0\0\0\0\0\0\0\0\03@fffff�3@');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `gps`
--
ALTER TABLE `gps`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `gps`
--
ALTER TABLE `gps`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
