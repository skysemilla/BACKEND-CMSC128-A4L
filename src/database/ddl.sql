drop database if exists skydev;
create database skydev;
use skydev;

create table FSR(
  fsr_id INT NOT NULL AUTO_INCREMENT,
  semester varchar(10) NOT NULL,
  isApproved boolean NOT NULL default 0,
  constraint fsr_id_pk PRIMARY KEY (fsr_id)
);

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
  fsr_id int not null,
  constraint activity_activity_id_pk PRIMARY KEY (activity_id),
  constraint activity_fsr_id_fk foreign key (fsr_id) references FSR(fsr_id)
);

create table SERVICE(
  service_id int AUTO_INCREMENT,
  category varchar(255) not null,
  title varchar(255) not null,
  no_of_hours int(10) not null,
  no_of_participants int(10) not null,
  role varchar(10) not null,
  credits int (10) not null,
  fsr_id int not null,  
  constraint service_service_id_pk PRIMARY KEY (service_id),
  constraint service_fsr_id_fk foreign key (fsr_id) references FSR(fsr_id)
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
  fsr_id int not null,
  constraint publication_id_pk PRIMARY key (publication_id),
  constraint publication_fsr_id_fk foreign key (fsr_id) references FSR(fsr_id)
);

create table COWORKER(
  coworker_id int AUTO_INCREMENT,
  publication_id int not null,
  constraint coworker_coworker_id PRIMARY KEY (coworker_id),
  constraint coworker_publication_id_fk foreign key (publication_id) references PUBLICATION(publication_id)
);

create table CONSULTATION(
  consultation_id int AUTO_INCREMENT,
  consultation_time datetime not null,
  consultation_date date not null,
  consultation_place varchar(255) not null,
  fsr_id int not null,
  constraint consultation_consultation_id_pk PRIMARY key (consultation_id),
  constraint consultation_fsr_id_fk foreign key (fsr_id) references FSR(fsr_id)
);

create table POSITIONN(
  position_id int AUTO_INCREMENT,
  office varchar(255) not null,
  credit_units int not null,
  fsr_id int not null,
  constraint position_position_id_pk PRIMARY key (position_id),
  constraint position_fsr_id_fk foreign key (fsr_id) references FSR(fsr_id)
);

create table SUBJECT(
  subject_code varchar(10) not null,
  room varchar(255) not null,
  start_time datetime not null,
  end_time datetime not null,
  section_code varchar(10) not null,
  fsr_id int not null,
  constraint subject_code_pk PRIMARY key (subject_code),
  constraint section_code_uk unique (section_code),
  constraint subject_fsr_id_fk foreign key (fsr_id) references FSR(fsr_id)
);

create table TEACHINGLOAD(
  subject_id int AUTO_INCREMENT not null,
  no_of_students int not null,
  constraint subject_id_pk PRIMARY key (subject_id)
);

create table STUDYLOAD(
  subject_id int AUTO_INCREMENT not null,
  school varchar(255) not null,
  constraint subject_id_pk PRIMARY key (subject_id)
);

