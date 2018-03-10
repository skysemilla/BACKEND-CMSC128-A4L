create database fsr_ms;

create table FSR(
	fsr_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	semester varchar(10) not null,
	isApproved boolean NOT NULL default 0,
	constraint fsr_id_pk PRIMARY KEY (fsr_id)
);

create table FACULTY(
	emp_id varchar(10) not null,
	emp_type varchar(20) not null,
	department varchar (10) not null,
	college varchar(20) not null,
	rank varchar(10) not null,
	--fsr_id int(10) not null,
	constraint faculty_emp_pk PRIMARY KEY (emp_id),
	---constraint faculty_fsr_id foreign key(fsr_id) references FSR(fsr_id)


);

create table FACULTY_NAME(
	f_name varchar(255) not null,
	m_name varchar(255) not null,
	l_name varchar (255) not null
);

create table ACTIVITY(
	activity_id int(10) AUTO_INCREMENT,
	credit_unit int (255) not null,
	activity_name varchar(20) not null,
	activity_type varchar(20) not null,
	no_of_hours int (5) not null,
	no_of_participants int (20) not null,
	activity_role varchar(10) not null,
	start_time datetime not null,
	end_time datetime not null,
	---activity_duration int(10) not null,
	fsr_id int(10) not null,


	constraint activity_activity_id PRIMARY KEY (activity_id),
	constraint activity_fsr_id foreign key(fsr_id) references FSR(fsr_id)


);

create table SERVICE(
	service_id int(10) AUTO_INCREMENT,
	category varchar(255) not null,
	title varchar(255) not null,
	no_of_hours int(10) not null,
	no_of_participants int(10) not null,
	role varchar(10) not null,
	credits int (10) not null
	fsr_id int(10) not null,

	constraint service_service_id PRIMARY KEY (service_id),
	constraint service_fsr_id foreign key(fsr_id) references FSR(fsr_id)	

);

create table COWORKER(
	coworker_id int (10) AUTO_INCREMENT,
	emp_id int (10) not null,
	publication_id int(10) not null,
	constraint coworker_coworker_id PRIMARY KEY (coworker_id),
	constraint coworker_emp_id foreign key(emp_id) references FACULTY(emp_id),

	constraint coworker_publication_id foreign key(publication_id) references PUBLICATION(publication_id),
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


