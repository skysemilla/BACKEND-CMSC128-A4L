DROP USER IF EXISTS 'skydev'@'localhost';
CREATE USER 'skydev'@'localhost' IDENTIFIED BY 'skydev';
DROP DATABASE IF EXISTS skydev;
CREATE DATABASE skydev;
GRANT SUPER ON *.* TO 'skydev'@'localhost';
GRANT ALL PRIVILEGES ON skydev.* TO 'skydev'@'localhost' WITH GRANT OPTION;
USE skydev;


create table EMPLOYEE( -- REPRESENTS FACULTY MEMBERS 
  emp_id_increment int not null AUTO_INCREMENT,
  emp_id varchar(10) not null,
  username varchar(20) not null,
  password varchar(20) not null,
  type varchar(7) not null, -- TYPE OF USER: ADMIN, FACULTY
  f_name varchar(255) NOT NULL,
  m_name varchar(255) not null,
  l_name varchar (255) not null,
  department varchar(10),
  college varchar(20),
  semester varchar(20) not null,
  constraint employee_emp_id_increment_pk PRIMARY KEY (emp_id_increment),
  constraint emp_id UNIQUE KEY (emp_id),
  constraint employee_username_uk UNIQUE KEY (username)
);

create table ACTIVITY( -- REPRESENTS ACTIVITIES BY THE FOREIGN KEY EMPLOYEE
  activity_id int AUTO_INCREMENT,
  credit_unit int (255) not null,
  activity_name varchar(20) not null,
  activity_type varchar(20) not null,
  no_of_hours int not null,
  no_of_participants int (20) not null,
  activity_role varchar(10) not null,
  start_time time not null,
  end_time time not null,
  emp_id varchar(10) not null, 
  constraint activity_activity_id_pk PRIMARY KEY (activity_id),
  constraint activity_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id)
);

create table SERVICE( -- REPRESENTS SERVICES BY THE FOREIGN KEY EMPLOYEE
  service_id int not null AUTO_INCREMENT,
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

create table PUBLICATION( -- REPRESENTS THE PUBLICATIONS BY THE FOREIGN KEY EMPLOYEE
  publication_id int not null AUTO_INCREMENT,
  credit_units int not null,
  category varchar(255) not null,
  funding varchar(255) not null,
  title varchar(255) not null,
  role varchar(255) not null,
  start_date varchar(255) not null,
  end_date varchar(255) not null,
  emp_id varchar(10) not null, 
  constraint publication_id_pk PRIMARY key (publication_id),
  constraint publication_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id)
);

create table COWORKER( -- REPRESENTS A COWORKER PRESENT IN A PUBLICATION
  coworker_id int AUTO_INCREMENT,
  emp_id varchar(10) not null, 
  publication_id int not null,
  constraint coworker_coworker_id PRIMARY KEY (coworker_id),
  constraint coworker_publication_id_fk foreign key (publication_id) references PUBLICATION(publication_id),
  constraint coworker_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id)
);

create table CONSULTATION( -- REPRESENTS CONSULTATION HOURS
  consultation_id int AUTO_INCREMENT,
  consultation_start_time time not null,
  consultation_end_time time not null,
  consultation_place varchar(255) not null,
  emp_id varchar(10) not null, 
  constraint consultation_consultation_id_pk PRIMARY key (consultation_id),
  constraint consultation_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id)
);

create table CONSULTATION_DAY( -- MULTI-VALUED ATTRIBUTE OF CONSULTATION
  consultation_id int not null,
  day varchar(255) not null,
  constraint consultation_day_consultation_id_fk foreign key (consultation_id) references CONSULTATION(consultation_id)
);

create table POSITIONN( -- REPRESENTS THE POSITIONS OBTAINED BY THE USER | pardon for the double n, apparently position is a reserved word
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
  start_time time not null,
  end_time time not null,
  constraint subject_subject_code_pk PRIMARY key (subject_code)
);

create table SUBJECT_DAY( -- REPRESENTS THE SUBJECTS OF A USER
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

---- PROCEDURES FOR EMPLOYEE

DROP PROCEDURE IF EXISTS view_employee; 
DELIMITER GO
CREATE PROCEDURE view_employee()
  BEGIN 
    SELECT * from EMPLOYEE;
END;
GO
DELIMITER ;

DROP PROCEDURE IF EXISTS view_employee_by_ID; 
DELIMITER GO
CREATE PROCEDURE view_employee_by_ID(emp_id_view int)
  BEGIN 
    SELECT * from EMPLOYEE
    where emp_id = emp_id_view;
END;
GO
DELIMITER ;

DROP PROCEDURE IF EXISTS insert_employee; 
DELIMITER GO
CREATE PROCEDURE insert_employee( emp_id_insert varchar(10),
                                  username_insert varchar(20),
                                  password_insert varchar(20),
                                  type_insert varchar(7), 
                                  f_name_insert varchar(255) ,
                                  m_name_insert varchar(255) ,
                                  l_name_insert varchar (255) ,
                                  emp_type_insert varchar(20),
                                  department_insert varchar(10),
                                  college_insert varchar(20)
)
BEGIN 
  INSERT INTO EMPLOYEE 
  VALUES (NULL, emp_id_insert, username_insert, password_insert, type_insert, f_name_insert, m_name_insert, l_name_insert, emp_type_insert, department_insert, college_insert);
END;
GO
DELIMITER ;

DROP PROCEDURE IF EXISTS delete_employee; 
DELIMITER GO
CREATE PROCEDURE delete_employee( emp_id_insert varchar(10) )
BEGIN 
  DELETE FROM EMPLOYEE
  WHERE emp_id = emp_id_insert;
END;
GO
DELIMITER ;

DROP PROCEDURE IF EXISTS update_employee; 
DELIMITER GO
CREATE PROCEDURE update_employee( emp_id_insert varchar(10),
                                  username_insert varchar(20),
                                  password_insert varchar(20),
                                  type_insert varchar(7), 
                                  f_name_insert varchar(255) ,
                                  m_name_insert varchar(255) ,
                                  l_name_insert varchar (255) ,
                                  emp_type_insert varchar(20),
                                  department_insert varchar(10),
                                  college_insert varchar(20)
)
BEGIN 
  UPDATE EMPLOYEE
  SET username = username_insert,
      password = password_insert,
      type = type_insert,
      f_name = f_name_insert,
      m_name = m_name_insert,
      l_name = l_name_insert,
      emp_type = emp_type_insert,
      department = department_insert,
      college = college_insert
    WHERE emp_id = emp_type_insert;
END;
GO
DELIMITER ;

---- END OF PROCEDURES FOR EMPLOYEE

---- PROCEDURES FOR ACTIVITY

DROP PROCEDURE IF EXISTS view_activity; 
DELIMITER GO
CREATE PROCEDURE view_activity()
  BEGIN 
    SELECT * from ACTIVITY;
END;
GO
DELIMITER ;

DROP PROCEDURE IF EXISTS insert_activity; 
DELIMITER GO
CREATE PROCEDURE insert_activity(   credit_unit int (255),
                                   activity_name varchar(20), 
                                   activity_type varchar(20), 
                                   no_of_hours int , 
                                   no_of_participants int (20), 
                                   activity_role varchar(10), 
                                   start_time time, 
                                   end_time time, 
                                   emp_id varchar(10) )
  BEGIN 
    INSERT INTO ACTIVITY
        values (NULL, credit_unit, activity_name, activity_type, no_of_hours, no_of_participants, activity_role, start_time, end_time, emp_id);
END;
GO
DELIMITER ;


DROP PROCEDURE IF EXISTS delete_activity; 
DELIMITER GO
CREATE PROCEDURE delete_activity(  activity_id_del int)
BEGIN
    DELETE FROM ACTIVITY
      where activity_id = activity_id_del;
END;
GO
DELIMITER ;


DROP PROCEDURE IF EXISTS update_activity; 
DELIMITER GO
CREATE PROCEDURE update_activity(   activity_id_update int,
                                   credit_unit_update int (255),
                                   activity_name_update varchar(20), 
                                   activity_type_update varchar(20), 
                                   no_of_hours_update int , 
                                   no_of_participants_update int (20), 
                                   activity_role_update varchar(10), 
                                   start_time_update time, 
                                   end_time_update time, 
                                   emp_id_update varchar(10) )
  BEGIN 
    UPDATE ACTIVITY
        SET  credit_unit = credit_unit_update, 
             activity_name = activity_name_update,
             activity_type = activity_type_update, 
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

---- END OF PROCEDURES FOR ACTIVITY

---- PROCEDURES FOR POSITIONN

DROP PROCEDURE IF EXISTS view_position; 
DELIMITER GO
CREATE PROCEDURE view_position()
BEGIN
    SELECT * FROM POSITIONN;
END;
GO
DELIMITER ;

DROP PROCEDURE IF EXISTS insert_position;
DELIMITER GO
CREATE PROCEDURE insert_position(office varchar(255),
                                credit_units int(10),
                                emp_id varchar(10))
BEGIN
    INSERT INTO POSITIONN
      values (NULL, office, credit_units, emp_id);
END;
GO
DELIMITER ;

DROP PROCEDURE IF EXISTS delete_position;
DELIMITER GO
CREATE PROCEDURE delete_position(position_id_del int)
  BEGIN 
    DELETE FROM POSITIONN
      where position_id = position_id_del;
END;
GO
DELIMITER ;

DROP PROCEDURE IF EXISTS update_position;
DELIMITER GO
CREATE PROCEDURE update_position(position_id_update int,
                                office_update varchar(255),
                                credit_units_update int,
                                emp_id_update varchar(10))
  BEGIN 
    UPDATE POSITIONN
        SET  office = office_update,
            credit_units = credit_units_update,
            emp_id = emp_id_update
        WHERE position_id = position_id_update;
END;
GO
DELIMITER ;

---- END OF PROCEDURES FOR POSITIONN

---- PROCEDURES FOR SERVICE

DROP PROCEDURE IF EXISTS view_service; 
DELIMITER GO
CREATE PROCEDURE view_service()
BEGIN
    SELECT * FROM SERVICE;
END;
GO
DELIMITER ;

DROP PROCEDURE IF EXISTS view_service_by_ID; 
DELIMITER GO
CREATE PROCEDURE view_service_by_ID(view_service_id int)
BEGIN
    SELECT * FROM SERVICE
    where service_id = view_service_id;
END;
GO
DELIMITER ;

DROP PROCEDURE IF EXISTS view_employee_service; 
DELIMITER GO
CREATE PROCEDURE view_employee_service(emp_id_view varchar(10))
BEGIN
    SELECT category, title, no_of_hours, no_of_participants, role, credits FROM SERVICE 
    WHERE emp_id = emp_id_view;
END;
GO
DELIMITER ;

DROP PROCEDURE IF EXISTS insert_service;
DELIMITER GO
CREATE PROCEDURE insert_service( 
                                category varchar(255),
                                title varchar(255),
                                no_of_hours int(10),
                                no_of_participants int(10),
                                role varchar(10),
                                credits int (10),
                                emp_id varchar(10)
)
BEGIN
    INSERT INTO SERVICE
      values (NULL, category, title, no_of_hours, no_of_participants, role, credits, emp_id);
END;
GO
DELIMITER ;

DROP PROCEDURE IF EXISTS delete_service;
DELIMITER GO
CREATE PROCEDURE delete_service(service_id_del int)
  BEGIN 
    DELETE FROM SERVICE
      where service_id = service_id_del;
END;
GO
DELIMITER ;

DROP PROCEDURE IF EXISTS update_service;
DELIMITER GO
CREATE PROCEDURE update_service( service_id_u int,
                                category_u varchar(255),
                                title_u varchar(255),
                                no_of_hours_u int(10),
                                no_of_participants_u int(10),
                                role_u varchar(10),
                                credits_u int (10) 
                                )
  BEGIN 
    UPDATE SERVICE
        SET  category = category_u,
            title = title_u,
            no_of_hours = no_of_hours_u,
            no_of_participants = no_of_participants_u,
            role = role_u,
            credits = credits_u
        WHERE service_id = service_id_u;
END;
GO
DELIMITER ;

---- END OF PROCEDURES FOR SERVICE

CALL insert_employee("0000000001","Aaron","Magnaye","FACULTY","Aaron","Velasco","Magnaye","Regina","Arden","1st");
CALL insert_employee("0000000002","Bianca","Bianca123","ADMIN","Bianca","Bianca","Bautista","Igor","Erich","1st");
CALL insert_employee("0000000003","Gary","Nash","ADMIN","Cole","Lawrence","Abbot","Cadman","Keelie","1st");
CALL insert_employee("0000000004","Merritt","Richard","FACULTY","Bernard","Slade","Galvin","Jin","Oleg","1st");
CALL insert_employee("0000000005","Hop","Denton","ADMIN","Nehru","Cody","Sean","Ivory","Ahmed","1st");
CALL insert_employee("0000000006","Isaiah","Herman","FACULTY","Mark","Quinn","Macaulay","Ariel","Jerome","1st");
CALL insert_employee("0000000007","Victor","Xanthus","ADMIN","Eric","Cade","Vincent","Delilah","Leo","1st");
CALL insert_employee("0000000008","Bert","Honorato","FACULTY","Gage","Kelly","Perry","Sandra","Myles","1st");
CALL insert_employee("0000000009","Noah","Gareth","FACULTY","Nissim","Jonah","Hashim","Sade","Emery","1st");
CALL insert_employee("0000000000","Ryan","Keaton","ADMIN","Ralph","Ferdinand","Armando","Zachary","Imogene","1st");

call insert_activity(8,"Norman","Logan",1,3,"Arthur",('2:43:59'),('4:43:59'), "0000000000");
call insert_activity(4,"Harper","Hamish",9,2,"Tarik",('2:43:59'),('4:43:59'), "0000000001");
call insert_activity(4,"Mohammad","Reese",4,1,"Jason",('2:43:59'),('4:43:59'), "0000000002");
call insert_activity(4,"Ishmael","Brody",9,9,"Elmo",('2:43:59'),('4:43:59'), "0000000003");
call insert_activity(10,"Keaton","Phelan",9,9,"Allistair",('2:43:59'),('4:43:59'), "0000000004");
call insert_activity(7,"Colorado","Christopher",10,7,"Hakeem",('2:43:59'),('4:43:59'), "0000000005");
call insert_activity(8,"Mark","Jerome",9,1,"Holmes",('2:43:59'),('4:43:59'), "0000000006");
call insert_activity(6,"Lucian","Amos",4,9,"Lester",('2:43:59'),('4:43:59'), "0000000007");
call insert_activity(8,"Griffin","Hamish",10,2,"Hu",('2:43:59'),('4:43:59'), "0000000008");
call insert_activity(3,"Brady","Kasper",5,6,"Basil",('2:43:59'),('4:43:59'), "0000000009");

call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "0000000000");
call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "0000000002");
call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "0000000001");
call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "0000000000");
call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "0000000003");
call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "0000000004");
call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "0000000005");
call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "0000000006");
call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "0000000006");
call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "0000000000");

call insert_position("aaron", 2, "0000000000");
call insert_position("aaron", 2, "0000000002");
call insert_position("aaron", 2, "0000000001");
call insert_position("aaron", 2, "0000000000");
call insert_position("aaron", 2, "0000000003");
call insert_position("aaron", 2, "0000000004");
call insert_position("aaron", 2, "0000000005");
call insert_position("aaron", 2, "0000000006");
call insert_position("aaron", 2, "0000000006");
call insert_position("aaron", 2, "0000000000");
