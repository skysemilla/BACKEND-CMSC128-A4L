create database fsr_ms;

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


