create database fsr_ms;

create table FSR(
	fsr_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	semester varchar(10) not null,
	isApproved boolean NOT NULL default 0,
	constraint fsr_id_pk PRIMARY KEY (fsr_id)
);

create table FACULTY(
	emp_id varchar(10) NOT NULL PRIMARY KEY,
	emp_type varchar(20) not null,
	department varchar (10) not null,
	college varchar(20) not null
);

create table FACULTY_NAME(
	f_name varchar(10) NOT NULL,
	m_name varchar(10) NOT NULL,
	l_name varchar (10) NOT NULL
);

create table CONSULTATION(
	consultation_id int not null AUTO_INCREMENT,
	consultation_time datetime not null,
	consultation_date date not null,
	consultation_place varchar(255) not null,
	fsr_id int not null foreign key,
	constraint fsr_id_fk foreign key (fsr_id) references FSR(fsr_id)
);

create table POSITION(
	position_id int not null AUTO_INCREMENT PRIMARY key,
	office varchar(255),
	credit_units int not null,
	fsr_id int not null foreign key,
	emp_id varchar(10) not null foreign key,
	constraint position_id_pk PRIMARY key (position_id),
	constraint fsr_id_fk foreign key (fsr_id) references FSR(fsr_id),
	constraint emp_id_fk foreign key (emp_id) references FACULTY(emp_id)
);

create table PUBLICATION(
	publication_id int not null AUTO_INCREMENT PRIMARY key,
	credit_units int not null,
	category varchar(255) not null,
	funding varchar(255) not null,
	title varchar(255) not null,
	role varchar(255) not null,
	start_date datetime not null,
	end_date datetime not null,
	fsr_id int not null foreign key,
	constraint publication_id_pk PRIMARY key (publication_id),
	constraint fsr_id_fk foreign key (fsr_id) references FSR(fsr_id)
);

create table SUBJECT(
	subject_code varchar(10) not null PRIMARY key,
	room varchar(255) not null,
	start_time datetime not null,
	end_time datetime not null,
	section_code varchar(10) not null unique,
	fsr_id int not null foreign key,
	constraint subject_code_pk PRIMARY key (subject_code),
	constraint section_code_uk unique (section_code),
	constraint fsr_id_fk foreign key (fsr_id) references FSR(fsr_id)
);

create table WORKLOAD(
	subject_id int AUTO_INCREMENT not null PRIMARY key,
	no_of_students int not null,
	constraint subject_id_pk PRIMARY key (subject_id)
);

create table STUDYLOAD(
	subject_id int AUTO_INCREMENT not null PRIMARY key,
	school varchar(255) not null,
	constraint subject_id_pk PRIMARY key (subject_id)
);

