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
  constraint employee_emp_id_pk PRIMARY KEY (emp_id),
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
  start_time datetime not null,
  end_time datetime not null,
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
  start_date datetime not null,
  end_date datetime not null,
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
                                   start_time datetime, 
                                   end_time datetime, 
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
                                   start_time_update datetime, 
                                   end_time_update datetime, 
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
    WHERE service_id = emp_id_view;
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

CALL insert_employee("0000000001","Nicholas","Xavier","ADMIN","Callum","Scott","Christopher","Regina","Arden","1st"),("Scott","Keane","Christian","FACULTY","Cain","Lewis","Donovan","Maya","Adena","1st"),("Amal","Declan","Hunter","FACULTY","Ethan","Abbot","Malachi","Jenna","Dominic","1st"),("Guy","Hedley","Brock","FACULTY","Deacon","Upton","Hamish","Xander","Xander","1st"),("Walter","Aristotle","Logan","ADMIN","Kelly","Beck","Randall","Kato","Nicholas","1st"),("Marshall","Adam","Curran","FACULTY","Demetrius","Dalton","Garth","Rylee","Olivia","1st"),("Tanner","James","Francis","ADMIN","Tarik","Allen","Jamal","Mikayla","Dora","1st"),("Isaac","Derek","Garrett","ADMIN","Zahir","Branden","Raymond","Branden","Ray","1st"),("Hayes","William","Hedley","FACULTY","Castor","Brendan","Brent","Jada","Wade","1st"),("Linus","Colby","Chadwick","FACULTY","Merrill","Keane","Kasimir","Phillip","Sean","1st");
CALL insert_employee("0000000002","Vaughan","Ryder","ADMIN","Harrison","Hedley","Clarke","Igor","Erich","1st"),("Baker","Clayton","Charles","ADMIN","Rahim","Zachary","Brennan","Natalie","Allistair","1st"),("Owen","Harlan","Alfonso","ADMIN","Silas","Hunter","Clark","Ross","Conan","1st"),("Tanner","Ulric","Hunter","FACULTY","Hayes","Lawrence","Orlando","Aubrey","Unity","1st"),("Isaac","Arsenio","Reece","ADMIN","Addison","Thaddeus","Gavin","Carson","Camden","1st"),("Charles","Fulton","Ali","ADMIN","Graham","Carl","Magee","Hiroko","Kirk","1st"),("Bradley","Duncan","Benjamin","FACULTY","Raymond","Castor","Edan","Naomi","Liberty","1st"),("Barrett","Jarrod","Wang","FACULTY","Colt","Tanek","Gil","Maxwell","Keely","1st"),("Lionel","Brennan","Aaron","FACULTY","Moses","Elton","Gage","Cooper","Finn","1st"),("Barry","Merrill","Eric","ADMIN","Wayne","Leonard","Lane","Roary","Penelope","1st");
CALL insert_employee("0000000003","Gary","Nash","ADMIN","Cole","Lawrence","Abbot","Cadman","Keelie","1st"),("Lucas","Moses","Quamar","FACULTY","Rudyard","Quentin","Ezekiel","Marshall","Aaron","1st"),("Lamar","Tate","Melvin","ADMIN","Otto","Malik","Vance","Courtney","Lane","1st"),("Walker","Adrian","Geoffrey","FACULTY","Ralph","Harper","Phelan","Addison","Cara","1st"),("Logan","Todd","Reuben","FACULTY","Austin","Alfonso","Forrest","Cecilia","Lev","1st"),("Cooper","Xavier","Nigel","ADMIN","Buckminster","Jasper","Prescott","Quintessa","Xander","1st"),("Dean","Lester","Xanthus","FACULTY","Abel","Rudyard","Vaughan","Shad","Wilma","1st"),("Trevor","Jermaine","Bradley","FACULTY","Thane","Kuame","Rajah","MacKenzie","Pandora","1st"),("Lawrence","Duncan","Amery","FACULTY","Wing","Ezra","Christopher","Kimberley","Kirk","1st"),("Cedric","Marvin","Tyrone","ADMIN","Dominic","Allistair","Stone","Zia","Hop","1st");
CALL insert_employee("0000000004","Merritt","Richard","FACULTY","Bernard","Slade","Galvin","Jin","Oleg","1st"),("Yasir","Kenneth","Xavier","ADMIN","Brett","Chaney","Keaton","Ferdinand","Jolie","1st"),("Stewart","Oleg","Samuel","FACULTY","Kennedy","Gil","Erasmus","Zachary","Tyrone","1st"),("Judah","Lamar","Jakeem","ADMIN","Luke","Chaim","Denton","Guy","Melyssa","1st"),("Dolan","Bruno","Galvin","ADMIN","Blake","Levi","Clinton","Eagan","Donovan","1st"),("Trevor","Perry","Clarke","ADMIN","Ralph","Guy","Clarke","Kim","Lareina","1st"),("Roth","Moses","Thomas","ADMIN","Yardley","Christian","Ronan","Noel","Galena","1st"),("Lance","Chase","Baxter","FACULTY","Grady","Thor","Cullen","Martha","Myles","1st"),("Evan","Griffin","Dennis","FACULTY","Ciaran","Kasper","George","Lenore","Xenos","1st"),("Ian","Brody","Brady","ADMIN","Buckminster","Otto","Brock","Kylynn","Priscilla","1st");
CALL insert_employee("0000000005","Hop","Denton","ADMIN","Nehru","Cody","Sean","Ivory","Ahmed","1st"),("Harper","Lane","Damon","FACULTY","Forrest","Caesar","Talon","Elvis","Chase","1st"),("Walter","Ezra","Arsenio","FACULTY","Burke","Wing","Jesse","Ronan","Knox","1st"),("Edward","Clinton","Solomon","FACULTY","Macaulay","Erich","Caldwell","August","Taylor","1st"),("Ryan","Prescott","Josiah","FACULTY","Eaton","Brennan","Quinlan","Shad","Tarik","1st"),("Peter","Hiram","Kuame","FACULTY","Gil","Arthur","Daniel","Brian","Stephanie","1st"),("Reuben","Bernard","Caleb","ADMIN","Murphy","Kasper","Ignatius","Ryder","Karina","1st"),("Forrest","Raphael","Christian","ADMIN","Vance","Quamar","Todd","Richard","Vladimir","1st"),("Nasim","Macaulay","Price","FACULTY","Dane","Ray","Bevis","Christen","Emma","1st"),("Orson","Griffith","Ivor","FACULTY","Leonard","Howard","Felix","Carla","Francesca","1st");
CALL insert_employee("0000000006","Isaiah","Herman","FACULTY","Mark","Quinn","Macaulay","Ariel","Jerome","1st"),("Yuli","Nasim","Oleg","FACULTY","Nigel","Leroy","Quinn","Barclay","Fallon","1st"),("Tiger","Hop","Stuart","ADMIN","Arsenio","Keefe","Devin","Shay","Miriam","1st"),("Paki","Hashim","Armando","ADMIN","Isaiah","Marshall","Kelly","Leslie","Sasha","1st"),("Dorian","Ian","Talon","FACULTY","Connor","Aristotle","Melvin","Murphy","Karyn","1st"),("Amir","Coby","Ciaran","ADMIN","Kibo","Caesar","Quinn","Wendy","Carl","1st"),("Malcolm","Basil","Ray","ADMIN","Kennan","Jared","Jameson","Angelica","Hedwig","1st"),("Allen","Aristotle","Yasir","ADMIN","Kermit","Ciaran","Brandon","Clayton","Rebekah","1st"),("Tobias","Leo","Kenneth","ADMIN","Keegan","Raymond","Zachary","Lucas","Lucian","1st"),("Jason","Zachary","Ali","ADMIN","Stuart","Salvador","Cullen","Brent","Katelyn","1st");
CALL insert_employee("0000000007","Victor","Xanthus","ADMIN","Eric","Cade","Vincent","Delilah","Leo","1st"),("Amery","Nicholas","Andrew","ADMIN","Cullen","Myles","Bevis","Denton","Flynn","1st"),("Myles","Price","Ira","ADMIN","Zeus","Mason","Henry","Jasmine","Charlotte","1st"),("Stephen","Marshall","Aladdin","ADMIN","Vance","Ryan","Allistair","Geoffrey","Breanna","1st"),("Talon","Reuben","Barry","ADMIN","Colby","Abel","Quinlan","Gabriel","Mohammad","1st"),("Eric","Harrison","Garrison","FACULTY","Bernard","Stuart","Daquan","Abraham","Caldwell","1st"),("Rooney","Silas","Roth","FACULTY","Gregory","Brody","John","Raja","Basil","1st"),("Quinlan","Alan","Finn","FACULTY","Jameson","Eaton","Michael","George","Denton","1st"),("Luke","Merrill","Kirk","ADMIN","Flynn","Keane","Aladdin","Alea","Isabelle","1st"),("Kasimir","Barrett","Hop","ADMIN","Upton","Barclay","Russell","Haley","Isaiah","1st");
CALL insert_employee("0000000008","Bert","Honorato","FACULTY","Gage","Kelly","Perry","Sandra","Myles","1st"),("Jarrod","Cade","Chancellor","FACULTY","Eagan","Lionel","Darius","Lysandra","Rinah","1st"),("Ray","Trevor","Carl","ADMIN","Colin","Beau","Christopher","Breanna","Yvette","1st"),("Abbot","Hu","Callum","ADMIN","Baker","Macaulay","Dante","Kim","Dana","1st"),("Carter","Jarrod","Holmes","ADMIN","Kenneth","Fletcher","Alfonso","Tana","Fiona","1st"),("Kato","Adrian","Paki","ADMIN","Wallace","Dolan","Graham","Elijah","Cain","1st"),("Cadman","Martin","Upton","ADMIN","Alfonso","Geoffrey","Tad","Iris","Raja","1st"),("Beau","Beau","Jason","FACULTY","Kane","Zane","Grant","Sydnee","Oliver","1st"),("Talon","Tucker","Carl","ADMIN","Damon","Ronan","Castor","Bianca","Aquila","1st"),("Malcolm","Curran","Dylan","ADMIN","Honorato","Kasimir","Melvin","Carol","Margaret","1st");
CALL insert_employee("0000000009","Noah","Gareth","FACULTY","Nissim","Jonah","Hashim","Sade","Emery","1st"),("Grady","Sebastian","Louis","ADMIN","Cruz","Justin","Kenyon","Davis","Duncan","1st"),("Zachary","Cooper","Kermit","FACULTY","Merritt","Bruce","Clark","Hu","Adam","1st"),("Micah","Timothy","Grant","FACULTY","Perry","Conan","Avram","Charles","Kadeem","1st"),("Kirk","Lester","Dexter","FACULTY","Galvin","Darius","Harlan","Lucius","Alexis","1st"),("Jordan","Merrill","Craig","ADMIN","Simon","Galvin","Kenneth","Blake","Addison","1st"),("Grant","Brian","Erich","ADMIN","Lucius","Tarik","Moses","Kenneth","Phillip","1st"),("Paul","Abdul","Kasimir","FACULTY","Tyler","Hiram","Deacon","Leslie","Kim","1st"),("Xenos","Ezekiel","Blaze","FACULTY","Edward","Flynn","Cadman","Adam","Mufutau","1st"),("Igor","Grant","Buckminster","ADMIN","Felix","Marsden","Duncan","Naida","Brock","1st");
CALL insert_employee("0000000000","Ryan","Keaton","ADMIN","Ralph","Ferdinand","Armando","Zachary","Imogene","1st"),("Blaze","Rafael","Aidan","FACULTY","Micah","Leo","Benjamin","Cameran","Ann","1st"),("Dexter","Connor","Grant","ADMIN","Yuli","Donovan","Quinn","Harrison","Harlan","1st"),("Rafael","Myles","Cain","ADMIN","Ishmael","Caesar","Jerome","Quentin","Daria","1st"),("Jerome","Kenyon","Marshall","ADMIN","Jermaine","Geoffrey","Castor","Naida","Plato","1st"),("Ezra","Kirk","Fletcher","FACULTY","Damian","Dieter","Ian","Cameron","Quon","1st"),("Rafael","Chaim","Lane","FACULTY","Lucian","Barry","Oscar","Calvin","Abdul","1st"),("Nolan","Ferdinand","Travis","FACULTY","Jarrod","Palmer","Daniel","Allen","Noelani","1st"),("Caesar","Ishmael","Hamilton","FACULTY","Steven","Holmes","Lewis","Tanner","Kylynn","1st"),("Porter","Solomon","Curran","ADMIN","Dean","Martin","Philip","Francis","Chester","1st");

call insert_activity(9,"Raphael","Erasmus",2,2,"Grant","December/Wed/2017","Kristen","1st"),(7,"Mannix","Ryder",1,1,"Boris","September/Sat/2018","Libby","1st"),(10,"Jamal","Jelani",10,6,"Gary","April/Tue/2018","Neil","1st"),(3,"Harlan","Talon",9,3,"Declan","June/Mon/2018","Quon","1st"),(9,"Rajah","Benjamin",1,3,"Lance","July/Fri/2017","Medge","1st"),(4,"Christian","Lewis",6,6,"Darius","February/Mon/2019","Blaine","1st"),(2,"Samuel","Raja",7,1,"Craig","October/Sun/2018","Demetrius","1st"),(3,"Calvin","Camden",3,3,"Knox","March/Thu/2017","Mariko","1st"),(7,"Magee","Nissim",9,10,"Abel","March/Thu/2018","Salvador","1st"),(8,"Norman","Logan",1,3,"Arthur","December/Wed/2018","Velma","1st", "0000000000");
call insert_activity(10,"Raymond","Salvador",4,9,"Hammett","March/Thu/2018","Garrett","1st"),(3,"Carl","Zachary",7,6,"Kasimir","October/Tue/2018","Savannah","1st"),(2,"Sebastian","Tanner",5,8,"Christian","January/Wed/2018","Minerva","1st"),(3,"Moses","Ivan",6,2,"Daniel","November/Mon/2018","Shelly","1st"),(10,"Holmes","Harper",6,5,"Hedley","November/Mon/2018","Judah","1st"),(8,"Logan","Fritz",5,7,"Noble","March/Thu/2017","Hermione","1st"),(4,"Yuli","Tanner",9,2,"Andrew","June/Thu/2017","Xavier","1st"),(8,"Tad","Felix",3,10,"Barry","November/Sat/2017","Irene","1st"),(9,"Murphy","Mufutau",9,6,"Amery","May/Tue/2017","Angelica","1st"),(4,"Harper","Hamish",9,2,"Tarik","July/Thu/2018","Colby","1st", "0000000001");
call insert_activity(9,"Tanek","Barry",2,2,"Ivan","February/Wed/2019","May","1st"),(4,"Erich","Raymond",8,6,"Amir","December/Sat/2017","Stacey","1st"),(4,"Kelly","Carlos",2,6,"Ethan","February/Sat/2019","Jacob","1st"),(10,"Jameson","Zephania",7,7,"Grant","June/Fri/2017","Melissa","1st"),(4,"Coby","Galvin",10,3,"Forrest","April/Fri/2017","Declan","1st"),(7,"Perry","Garrison",8,7,"Vincent","June/Thu/2018","Illiana","1st"),(10,"Philip","Thane",2,2,"Maxwell","March/Tue/2019","Driscoll","1st"),(5,"Chadwick","Timon",9,10,"Mason","June/Sat/2017","Quintessa","1st"),(6,"Upton","Dominic",10,10,"Jeremy","October/Fri/2017","Grady","1st"),(4,"Mohammad","Reese",4,1,"Jason","November/Mon/2018","Yoshi","1st", "0000000002");
call insert_activity(8,"Ivor","Marsden",10,1,"Talon","May/Sat/2017","Kelsie","1st"),(10,"Myles","Hunter",3,2,"Cedric","July/Fri/2018","Jesse","1st"),(8,"Colton","Isaiah",8,10,"Xander","October/Sat/2018","Quincy","1st"),(2,"Arsenio","Thor",3,9,"Dante","June/Wed/2017","Julian","1st"),(1,"Brent","Colby",7,8,"Roth","March/Mon/2018","Nadine","1st"),(9,"Armand","Walter",9,9,"Simon","November/Sun/2017","Rina","1st"),(8,"Anthony","Bert",9,7,"Allen","October/Sat/2018","Victor","1st"),(4,"Solomon","Wing",5,2,"Ian","February/Tue/2018","Isaac","1st"),(6,"Louis","Nehru",8,2,"Fulton","January/Tue/2018","Daria","1st"),(4,"Ishmael","Brody",9,9,"Elmo","June/Sun/2017","Brittany","1st", "0000000003");
call insert_activity(8,"Davis","Zeph",4,3,"Daniel","August/Sat/2018","Jessica","1st"),(3,"Hoyt","Zeus",1,7,"Burton","December/Wed/2017","Vivien","1st"),(9,"Wing","Bernard",9,1,"Otto","March/Wed/2019","Isabella","1st"),(3,"Porter","Daquan",2,10,"Ulysses","December/Tue/2017","Marsden","1st"),(10,"Christopher","Howard",8,3,"Yasir","February/Wed/2019","Hakeem","1st"),(7,"Elmo","Beck",4,6,"Nero","January/Wed/2018","Jesse","1st"),(10,"Simon","Troy",3,4,"Paul","August/Sun/2017","Beverly","1st"),(9,"Chaney","Prescott",7,2,"Louis","January/Tue/2018","Shelley","1st"),(7,"Finn","Francis",1,10,"Seth","December/Wed/2017","Mariko","1st"),(10,"Keaton","Phelan",9,9,"Allistair","April/Tue/2017","Rana","1st", "0000000004");
call insert_activity(5,"Garrett","Paki",8,8,"Oren","November/Tue/2018","Pamela","1st"),(3,"Ulysses","Kenyon",5,6,"Josiah","August/Tue/2018","Quinn","1st"),(5,"Noah","Cody",3,8,"Dexter","June/Mon/2017","Glenna","1st"),(8,"Bernard","Vladimir",9,10,"Herrod","February/Sat/2019","Lois","1st"),(2,"Carson","Rogan",1,5,"Carter","February/Mon/2019","Mark","1st"),(9,"Lucas","Jack",7,5,"Colt","October/Thu/2018","Tucker","1st"),(2,"Quinlan","Dylan",6,1,"Mannix","May/Fri/2018","Axel","1st"),(3,"Gray","Gavin",1,5,"Clarke","May/Wed/2017","Henry","1st"),(6,"Luke","Zachary",6,3,"Isaac","February/Thu/2018","Sawyer","1st"),(7,"Colorado","Christopher",10,7,"Hakeem","December/Tue/2017","Nayda","1st", "0000000005");
call insert_activity(2,"Tad","Keaton",1,9,"Eagan","March/Fri/2018","Melissa","1st"),(2,"Camden","Chaim",3,7,"Ralph","December/Mon/2017","Bruno","1st"),(4,"Hayden","Kirk",4,8,"Nero","January/Wed/2018","Tanner","1st"),(9,"Upton","Cedric",8,9,"Kamal","January/Wed/2018","Alvin","1st"),(7,"Isaiah","Porter",7,1,"Herman","October/Sun/2017","Carolyn","1st"),(7,"Jerry","Hayden",8,8,"Chadwick","June/Fri/2018","Finn","1st"),(6,"Amery","Colin",9,7,"Honorato","December/Sat/2017","Marvin","1st"),(1,"Cameron","Keegan",2,6,"Salvador","November/Mon/2018","Cadman","1st"),(7,"Blaze","Byron",9,5,"Dean","February/Thu/2018","Shoshana","1st"),(8,"Mark","Jerome",9,1,"Holmes","January/Fri/2019","Lawrence","1st", "0000000006");
call insert_activity(4,"Yoshio","Amir",6,5,"Lee","October/Mon/2017","Carter","1st"),(7,"Otto","Nigel",8,6,"Mark","February/Wed/2018","August","1st"),(5,"Uriel","Nehru",8,9,"Vernon","October/Thu/2017","Malcolm","1st"),(8,"Oscar","Micah",4,1,"Vernon","March/Thu/2018","Yetta","1st"),(10,"Dale","Hammett",8,5,"John","November/Tue/2018","Kieran","1st"),(7,"Hyatt","Sylvester",9,6,"Noble","November/Wed/2017","Adara","1st"),(6,"Omar","Arsenio",3,9,"Colorado","May/Thu/2018","Jayme","1st"),(2,"Wesley","Kamal",2,9,"Donovan","April/Sun/2017","Harper","1st"),(6,"Branden","Dennis",3,4,"Logan","August/Wed/2017","Lars","1st"),(6,"Lucian","Amos",4,9,"Lester","July/Wed/2017","Germane","1st", "0000000007");
call insert_activity(3,"Perry","Tad",7,7,"Nissim","April/Sun/2018","Lani","1st"),(4,"Julian","Fulton",9,7,"Nissim","February/Mon/2019","Forrest","1st"),(4,"Louis","Neil",6,9,"Hasad","September/Wed/2018","Erich","1st"),(10,"Denton","Orlando",5,4,"Jermaine","June/Tue/2017","Merritt","1st"),(9,"Lee","Judah",3,1,"Louis","October/Wed/2018","Zenia","1st"),(9,"Judah","Raja",10,4,"Acton","December/Sun/2017","Arsenio","1st"),(9,"Carter","Octavius",5,4,"David","September/Thu/2017","Dominique","1st"),(4,"Burke","Adam",6,5,"Demetrius","April/Wed/2018","Blair","1st"),(10,"Henry","Keaton",9,6,"Felix","July/Sat/2017","Troy","1st"),(8,"Griffin","Hamish",10,2,"Hu","March/Thu/2018","Kylan","1st", "0000000008");
call insert_activity(9,"Tarik","Leroy",1,9,"Jared","July/Thu/2017","Boris","1st"),(9,"Quamar","Keefe",1,10,"Kasper","October/Mon/2018","Orla","1st"),(10,"Graiden","Hilel",2,6,"Lionel","May/Tue/2018","Geraldine","1st"),(4,"Malachi","Wallace",8,1,"Noah","May/Tue/2017","Levi","1st"),(6,"Marvin","Malcolm",9,8,"Colby","June/Fri/2017","Astra","1st"),(2,"Brady","Wing",2,10,"Kareem","September/Fri/2018","Gary","1st"),(3,"Jelani","Jamal",6,7,"Cain","August/Sun/2017","Plato","1st"),(1,"Dustin","Elvis",8,2,"Asher","August/Wed/2017","Tobias","1st"),(10,"Eaton","Tyler",2,6,"Raymond","October/Wed/2018","Charlotte","1st"),(3,"Brady","Kasper",5,6,"Basil","November/Sat/2018","Gray","1st", "0000000009");

call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "000000000");
call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "000000002");
call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "000000001");
call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "000000000");
call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "000000003");
call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "000000004");
call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "000000005");
call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "000000006");
call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "000000006");
call insert_service("aaron", "aaron", 2, 2, "aaron", 2, "000000000");

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





(NULL, credit_unit, activity_name, activity_type, no_of_hours, no_of_participants, activity_role, start_time, end_time, emp_id);