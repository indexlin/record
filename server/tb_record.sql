/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 50721
 Source Host           : localhost:3391
 Source Schema         : local_record

 Target Server Type    : MySQL
 Target Server Version : 50721
 File Encoding         : 65001

 Date: 30/01/2020 02:21:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_record
-- ----------------------------
DROP TABLE IF EXISTS `tb_record`;
CREATE TABLE `tb_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(20) DEFAULT '',
  `device` varchar(20) DEFAULT '',
  `platform` varchar(20) DEFAULT '',
  `browser` varchar(20) DEFAULT '',
  `version` varchar(20) DEFAULT '',
  `system_version` varchar(20) DEFAULT '',
  `name` varchar(20) NOT NULL,
  `temperature` varchar(20) NOT NULL,
  `journey` text NOT NULL,
  `date` varchar(20) NOT NULL,
  `fever` varchar(10) NOT NULL,
  `cold` varchar(10) NOT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `del` int(1) DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_record
-- ----------------------------
BEGIN;
INSERT INTO `tb_record` VALUES (1, '192.168.80.1', 'Macintosh', 'OS X', 'Chrome', '76.0.3809.100', '10_15_2', '34', '37.1', 'sdf', '2020-01-30', '是', '否', 1580321122, NULL, 0);
INSERT INTO `tb_record` VALUES (2, '192.168.80.1', 'iPhone', 'iOS', 'Safari', '11.0', '11_0', '小红1·', '35', '上了艰苦奋斗数量大幅减少浪费空间的老师打开肌肤343离开家隋东风', '2020-01-30', '否', '是', 1580321245, NULL, 0);
INSERT INTO `tb_record` VALUES (3, '192.168.80.1', 'iPhone', 'iOS', 'Safari', '11.0', '11_0', '隋东风', '36', '水电费水电费sdfsldfjsajdfsdfsdfsdfsdfsdfdf\r\ndfdfd\r\n\r\ndf\r\n', '2020-01-30', '否', '是', 1580321323, 1580321648, 1);
INSERT INTO `tb_record` VALUES (4, '192.168.80.1', 'iPhone', 'iOS', 'Safari', '11.0', '11_0', '34', '34', '3444', '2020-01-30', '是', '否', 1580321431, NULL, 0);
INSERT INTO `tb_record` VALUES (5, '192.168.80.1', 'iPhone', 'iOS', 'Safari', '11.0', '11_0', 'sdfs', '36', '3434', '2020-01-30', '否', '否', 1580321446, NULL, 0);
INSERT INTO `tb_record` VALUES (6, '192.168.80.1', 'iPhone', 'iOS', 'Safari', '11.0', '11_0', 'sdfsdf', '34', '344', '2020-01-30', '是', '是', 1580321469, NULL, 0);
INSERT INTO `tb_record` VALUES (7, '192.168.80.1', 'iPhone', 'iOS', 'Safari', '11.0', '11_0', '隋东风', '37', 'dfdfg', '2020-01-30', '是', '否', 1580321648, NULL, 0);
INSERT INTO `tb_record` VALUES (8, '192.168.80.1', 'iPhone', 'iOS', 'Safari', '11.0', '11_0', '隋东风3', '39', 'sdfdsf', '2020-01-30', '是', '是', 1580321669, NULL, 0);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
