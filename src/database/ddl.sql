DROP USER IF EXISTS 'skydev'@'localhost';
CREATE USER 'skydev'@'localhost' IDENTIFIED BY 'skydev';
DROP DATABASE IF EXISTS skydev;
CREATE DATABASE skydev;
GRANT SUPER ON *.* TO 'skydev'@'localhost';
GRANT ALL PRIVILEGES ON skydev.* TO 'skydev'@'localhost' WITH GRANT OPTION;
USE skydev;

create table ADMIN(
  admin_id int NOT NULL AUTO_INCREMENT,
  username varchar(20),
  password varchar(20),
  constraint admin_admin_id_pk PRIMARY key (admin_id)
);

create table ADMIN_NAME(
  f_name varchar(255) not null,
  m_name varchar(255) not null,
  l_name varchar (255) not null,
  admin_id int not null,
  constraint admin_name_admin_id_fk foreign key (admin_id) references ADMIN(admin_id)
);

create table FACULTY(
  emp_id varchar(10),
  emp_type varchar(20),
  department varchar (10),
  college varchar(20),
  username varchar(20),
  password varchar(20),
  constraint faculty_emp_id_pk PRIMARY KEY (emp_id)
);

create table FACULTY_NAME(
  f_name varchar(255) NOT NULL,
  m_name varchar(255) not null,
  l_name varchar (255) not null,
  emp_id varchar(10) not null,
  constraint faculty_name_emp_id_fk foreign key (emp_id) references FACULTY(emp_id)
);

create table ACTIVITY(
  activity_id int AUTO_INCREMENT,
  credit_unit int (255) not null,
  activity_name varchar(20) not null,
  activity_type varchar(20) not null,
  no_of_hours int not null,
  no_of_participants int (20) not null,
  activity_role varchar(10) not null,
  start_time datetime not null,
  end_time datetime not null,
  emp_id int not null,
  constraint activity_activity_id_pk PRIMARY KEY (activity_id),
  constraint activity_emp_id_fk foreign key (emp_id) references FACULTY(emp_id)
);

create table SERVICE(
  service_id int AUTO_INCREMENT,
  category varchar(255) not null,
  title varchar(255) not null,
  no_of_hours int(10) not null,
  no_of_participants int(10) not null,
  role varchar(10) not null,
  credits int (10) not null,
  emp_id int not null,  
  constraint service_service_id_pk PRIMARY KEY (service_id),
  constraint service_emp_id_fk foreign key (emp_id) references FACULTY(emp_id)
);

create table PUBLICATION(
  publication_id int not null AUTO_INCREMENT,
  credit_units int not null,
  category varchar(255) not null,
  funding varchar(255) not null,
  title varchar(255) not null,
  role varchar(255) not null,
  start_date datetime not null,
  end_date datetime not null,
  emp_id int not null,
  constraint publication_id_pk PRIMARY key (publication_id),
  constraint publication_emp_id_fk foreign key (emp_id) references FACULTY(emp_id)
);

create table COWORKER(
  coworker_id int AUTO_INCREMENT,
  emp_id int not null,
  publication_id int not null,
  constraint coworker_coworker_id PRIMARY KEY (coworker_id),
  constraint coworker_publication_id_fk foreign key (publication_id) references PUBLICATION(publication_id),
  constraint coworker_emp_id_fk foreign key (emp_id) references FACULTY(emp_id)
);

create table CONSULTATION(
  consultation_id int AUTO_INCREMENT,
  consultation_start_time datetime not null,
  consultation_end_time datetime not null,
  consultation_day date not null,
  consultation_place varchar(255) not null,
  emp_id int not null,
  constraint consultation_consultation_id_pk PRIMARY key (consultation_id),
  constraint consultation_emp_id_fk foreign key (emp_id) references FACULTY(emp_id)
);

create table CONSULTATION_DAY(
  consultation_id int not null,
  day varchar(255) not null,
  constraint consultation_day_consultation_id_fk foreign key (consultation_id) references CONSULTATION(consultation_id)
);

create table POSITIONN(
  position_id int AUTO_INCREMENT,
  office varchar(255) not null,
  credit_units int not null,
  emp_id int not null,
  constraint position_position_id_pk PRIMARY key (position_id),
  constraint position_emp_id_fk foreign key (emp_id) references FACULTY(emp_id)
);

create table TEACHINGLOAD(

  teachingload_id int AUTO_INCREMENT not null,
  isLecture boolean not null,
  noOfStudents int not null,
  units int not null,
  emp_id int not null,
  section_code varchar(255) not null,
  subject_code varchar(255) not null,
  room varchar(255) not null,
  no_of_hours int not null,
  constraint teachingload_teachingload_id_pk PRIMARY key (teachingload_id),
  constraint teachingload_emp_id_fk foreign key (emp_id) references FACULTY(emp_id)

);

create table TEACHINGLOAD_DAY(

  day varchar(255) not null,
  teachingload_id int not null,
  constraint teachingload_day_teachingload_id_fk foreign key (teachingload_id) references TEACHINGLOAD(teachingload_id)

);

create table STUDYLOAD(

  studyload_id int not null,
  degree varchar(255) not null,
  university varchar(255) not null,
  isFullTime boolean not null,
  credits int not null,
  units int not null,
  emp_id int not null,
  constraint studyload_studyload_id_pk PRIMARY key (studyload_id),
  constraint studyload_emp_id_fk foreign key (emp_id) references FACULTY(emp_id)


);

