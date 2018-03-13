DROP USER IF EXISTS 'skydev'@'localhost';
CREATE USER 'skydev'@'localhost' IDENTIFIED BY 'skydev';
DROP DATABASE IF EXISTS skydev;
CREATE DATABASE skydev;
GRANT SUPER ON *.* TO 'skydev'@'localhost';
GRANT ALL PRIVILEGES ON skydev.* TO 'skydev'@'localhost' WITH GRANT OPTION;
USE skydev;

create table FACULTY(
	emp_id varchar(10),
	emp_type varchar(20),
	department varchar (10),
	college varchar(20)

);

create table FACULTY_NAME(
	f_name varchar(10),
	m_name varchar(10),
	l_name varchar (10)

);