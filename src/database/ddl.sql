DROP USER IF EXISTS 'skydev'@'localhost';
CREATE USER 'skydev'@'localhost' IDENTIFIED BY 'skydev';
DROP DATABASE IF EXISTS skydev;
CREATE DATABASE skydev;
GRANT SUPER ON *.* TO 'skydev'@'localhost';
GRANT ALL PRIVILEGES ON skydev.* TO 'skydev'@'localhost' WITH GRANT OPTION;
USE skydev;


create table EMPLOYEE( -- REPRESENTS FACULTY MEMBERS 
  emp_id varchar(10) not null,
  username varchar(20) not null,
  password varchar(20) not null,
  type varchar(7) not null, -- TYPE OF USER: ADMIN, FACULTY
  f_name varchar(255) NOT NULL,
  m_name varchar(255) not null,
  l_name varchar (255) not null,
  emp_type varchar(20),
  department varchar(10),
  college varchar(20),
  constraint employee_emp_id_pk PRIMARY KEY (emp_id),
  constraint employee_username_uk UNIQUE KEY (username)
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
  emp_id varchar(10) not null, 
  constraint activity_activity_id_pk PRIMARY KEY (activity_id),
  constraint activity_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id)
);

create table SERVICE(
  service_id int AUTO_INCREMENT,
  category varchar(255) not null,
  title varchar(255) not null,
  no_of_hours int(10) not null,
  no_of_participants int(10) not null,
  role varchar(10) not null,
  credits int (10) not null,
  emp_id varchar(10) not null,   
  constraint service_service_id_pk PRIMARY KEY (service_id),
  constraint service_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id)
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
  emp_id varchar(10) not null, 
  constraint publication_id_pk PRIMARY key (publication_id),
  constraint publication_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id)
);

create table COWORKER(
  coworker_id int AUTO_INCREMENT,
  emp_id varchar(10) not null, 
  publication_id int not null,
  constraint coworker_coworker_id PRIMARY KEY (coworker_id),
  constraint coworker_publication_id_fk foreign key (publication_id) references PUBLICATION(publication_id),
  constraint coworker_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id)
);

create table CONSULTATION(
  consultation_id int AUTO_INCREMENT,
  consultation_start_time datetime not null,
  consultation_end_time datetime not null,
  consultation_place varchar(255) not null,
  emp_id varchar(10) not null, 
  constraint consultation_consultation_id_pk PRIMARY key (consultation_id),
  constraint consultation_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id)
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
  emp_id varchar(10) not null, 
  constraint position_position_id_pk PRIMARY key (position_id),
  constraint position_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id)
);

create table SUBJECT( -- RESURRECTED SUBJECT TABLE FOR TEACHINGLOAD AND STUDYLOAD PURPOSES
  subject_code varchar(255) not null,
  section_code varchar(255) not null,
  isLecture boolean not null,
  units int not null,
  room varchar(255) not null,
  start_time datetime not null,
  end_time datetime not null,
  constraint subject_subject_code_pk PRIMARY key (subject_code)
);

create table SUBJECT_DAY(
  day varchar(255) not null,
  subject_code varchar(255) not null,
  constraint subject_day_subject_code_fk foreign key (subject_code) references SUBJECT(subject_code)
);

create table TEACHINGLOAD( -- THIS TABLE "EXTENDS" SUBJECT BUT A FEW ATTRIBUTES ARE ADDED
  teachingload_id int AUTO_INCREMENT not null,
  emp_id varchar(10) not null, 
  noOfStudents int not null,
  subject_code varchar(255) not null,
  constraint teachingload_teachingload_id_pk PRIMARY key (teachingload_id),
  constraint teachingload_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id),
  constraint teachingload_subject_code_fk foreign key (subject_code) references SUBJECT(subject_code)
);

create table STUDYLOAD( -- SAME CONCEPT AS THE TEACHINGLOAD 
  studyload_id int not null,
  degree varchar(255) not null,
  university varchar(255) not null,
  isFullTime boolean not null,
  credits int not null,
  emp_id varchar(10) not null, 
  subject_code varchar(255) not null,
  constraint studyload_studyload_id_pk PRIMARY key (studyload_id),
  constraint studyload_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id),
  constraint studyload_subject_code_fk foreign key (subject_code) references SUBJECT(subject_code)
);

--view procedure (activity)
DROP PROCEDURE IF EXISTS viewActivity;
DELIMITER GO
CREATE PROCEDURE viewActivity()
  BEGIN 
    SELECT * from ACTIVITY
END;
GO
DELIMITER ;

--insert procedure (activity)
DROP PROCEDURE IF EXISTS insertActivity;
DELIMITER GO
CREATE PROCEDURE insertActivity(   credit_unit int (255),
                                   activity_name varchar(20), 
                                   activity_type varchar(20), 
                                   no_of_hours int , 
                                   no_of_participants int (20), 
                                   activity_role varchar(10), 
                                   start_time datetime, 
                                   end_time datetime, 
                                   emp_id varchar(10) )
  BEGIN 
    INSERT INTO ACTIVITY
        values (credit_unit, activity_name, activity_type, no_of_hours, no_of_participants, activity_role, start_time, end_time, emp_id);
END;
GO
DELIMITER ;

--delete procedure (activity)
DROP PROCEDURE IF EXISTS deleteActivity;
DELIMITER GO
CREATE PROCEDURE deleteActivity(activity_id_del int)--id to be deleted
  BEGIN 
    DELETE FROM ACTIVITY
      where activity_id = activity_id_del;
END;
GO
DELIMITER ;

--update procedure (activity)
DROP PROCEDURE IF EXISTS updateActivity;
DELIMITER GO
CREATE PROCEDURE updateActivity(   activity_id_update int,
                                   credit_unit_update int (255),
                                   activity_name_update varchar(20), 
                                   activity_type_update varchar(20), 
                                   no_of_hours_update int , 
                                   no_of_participants_update int (20), 
                                   activity_role_update varchar(10), 
                                   start_time_update datetime, 
                                   end_time_update datetime, 
                                   emp_id_update varchar(10) )
  BEGIN 
    UPDATE ACTIVITY
        SET  credit_unit = credit_unit_update, 
             activity_name = activity_id_update,
             activity_type = activity_id_update, 
             no_of_hours = no_of_hours_update, 
             no_of_participants = no_of_participants_update, 
             activity_role = activity_role_update, 
             start_time = start_time_update, 
             end_time = end_time_update, 
             emp_id = emp_id_update
        WHERE activity_id = activity_id_update;
END;
GO
DELIMITER ;

INSERT INTO `EMPLOYEE` VALUES ('0000000000', 'admin','admin','ADMIN', 'hello', 'world', '!', 'ADMIN', 'ICS', 'CAS');
INSERT INTO `EMPLOYEE` VALUES ('0000000001', 'bea', 'bautista123', 'USER', 'Bianca', 'B?', 'Bautista', 'FACULTY', 'ICS', 'CAS');

