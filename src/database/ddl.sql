DROP USER IF EXISTS 'skydev'@'localhost';
CREATE USER 'skydev'@'localhost' IDENTIFIED BY 'skydev';
GRANT SUPER ON *.* TO 'skydev'@'localhost';
GRANT ALL PRIVILEGES ON skydev.* TO 'skydev'@'localhost' WITH GRANT OPTION;
DROP DATABASE IF EXISTS skydev;
CREATE DATABASE skydev;
USE skydev;



/* REPRESENTS FACULTY MEMBERS */
create table EMPLOYEE( 
  emp_id_increment int not null AUTO_INCREMENT,
  emp_id varchar(10) not null,
  username varchar(20) not null,
  password varchar(256) not null,
  type varchar(7) not null, 
  f_name varchar(255) NOT NULL,
  m_name varchar(255) not null,
  l_name varchar (255) not null,
  is_new boolean not null, /* needed for checking if the employee is required to change some attributes */
  department varchar(50),
  college varchar(50),
  emp_type varchar(255),
  semester varchar(20),
  year varchar(20),
  email varchar(255) not null,
  is_studying boolean not null, 
  is_full_time boolean,
  current_study_units int,
  max_study_units int,
  current_teaching_units int,
  min_teaching_units int,
  is_active boolean not null,
  is_being_approved boolean not null,
  constraint employee_emp_id_increment_pk PRIMARY KEY (emp_id_increment),
  constraint employee_emp_id_uk UNIQUE KEY (emp_id),
  constraint employee_username_uk UNIQUE KEY (username),
  constraint employee_email_uk UNIQUE KEY (email)
);

create table EMPLOYEE_FSR(
  semester varchar(20) not null,
  year varchar(20) not null,
  path_to_fsr varchar(255) not null,
  emp_id varchar(10) not null,
  constraint employee_fsr_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id) ON DELETE CASCADE ON UPDATE CASCADE
);

/* REPRESENTS EXTENSION BY THE FOREIGN KEY EMPLOYEE */
create table EXTENSION( 
  extension_id int AUTO_INCREMENT,
  credit_unit int (255) not null,
  extension_name varchar(20) not null,
  extension_type varchar(20) not null,
  no_of_hours int not null,
  no_of_participants int (20) not null,
  extension_role varchar(10) not null,
  start_time time not null,
  end_time time not null,
  funding_agency varchar(255) not null,
  emp_id varchar(10) not null, 
  constraint extension_extension_id_pk PRIMARY KEY (extension_id),
  constraint extension_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id) ON DELETE CASCADE ON UPDATE CASCADE
);

/* REPRESENTS THE PUBLICATIONS BY THE FOREIGN KEY EMPLOYEE */
create table PUBLICATION(
  publication_id int not null AUTO_INCREMENT,
  credit_units int not null,
  category varchar(255) not null,
  funding varchar(255),
  title varchar(255) not null,
  role varchar(255),
  start_date date,
  end_date date,
  emp_id varchar(10) not null, 
  constraint publication_id_pk PRIMARY key (publication_id),
  constraint publication_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id) ON DELETE CASCADE ON UPDATE CASCADE
);

create table FACULTYGRANT (
  type varchar(255),
  is_approved boolean,
  professional_chair varchar(255),
  grants varchar(255),
  grant_title varchar(255),
  start_date date,
  end_date date,
  emp_id varchar(10),
  constraint faculty_grant_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id) ON DELETE CASCADE ON UPDATE CASCADE
);

/* REPRESENTS A COWORKER PRESENT IN A PUBLICATION */
create table COWORKER(
  coworker_id int not null AUTO_INCREMENT,
  emp_id varchar(10) not null, 
  publication_id int not null,
  constraint coworker_coworker_id_pk PRIMARY key (coworker_id),
  constraint coworker_publication_id_fk foreign key (publication_id) references PUBLICATION(publication_id) ON DELETE CASCADE ON UPDATE CASCADE,
  constraint coworker_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id) ON DELETE CASCADE ON UPDATE CASCADE
);

/* REPRESENTS CONSULTATION HOURS */
create table CONSULTATION( 
  consultation_id int AUTO_INCREMENT,
  consultation_start_time time not null,
  consultation_end_time time not null,
  consultation_place varchar(255) not null,
  emp_id varchar(10) not null, 
  constraint consultation_consultation_id_pk PRIMARY key (consultation_id),
  constraint consultation_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id) ON DELETE CASCADE ON UPDATE CASCADE
);

/* MULTI-VALUED ATTRIBUTE OF CONSULTATION */
create table CONSULTATION_DAY( 
  consultation_id int not null,
  day varchar(255) not null,
  constraint consultation_day_consultation_id_fk foreign key (consultation_id) references CONSULTATION(consultation_id) ON DELETE CASCADE ON UPDATE CASCADE
);

/* REPRESENTS THE POSITIONS OBTAINED BY THE USER | pardon for the double n, apparently position is a reserved word */
create table POSITIONN(
  position_id int AUTO_INCREMENT,
  office varchar(255) not null,
  credit_units int not null,
  nature_of_work varchar(255) not null,
  emp_id varchar(10) not null, 
  constraint position_position_id_pk PRIMARY key (position_id),
  constraint position_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id) ON DELETE CASCADE ON UPDATE CASCADE
);

/* SUBJECT TABLE FOR TEACHINGLOAD AND STUDYLOAD PURPOSES */
create table SUBJECT(
  subject_id int not null AUTO_INCREMENT,
  subject_code varchar(255) not null,
  section_code varchar(255) not null,
  isLecture boolean not null,
  isGraduate boolean not null,
  units int not null,
  room varchar(255) not null,
  start_time time not null,
  end_time time not null,
  constraint subject_subject_id_pk PRIMARY key (subject_id)
);

/* REPRESENTS THE SUBJECTS OF A USER */
create table SUBJECT_DAY(
  day varchar(255) not null,
  subject_id int not null,
  constraint subject_day_subject_id_fk foreign key (subject_id) references SUBJECT(subject_id) ON DELETE CASCADE ON UPDATE CASCADE
);

/* THIS TABLE "EXTENDS" SUBJECT BUT A FEW ATTRIBUTES ARE ADDED */
create table TEACHINGLOAD(
  teachingload_id int not null AUTO_INCREMENT,
  emp_id varchar(10) not null, 
  no_of_students int not null,
  subject_id int not null,
  constraint teachingload_teachingload_id_pk PRIMARY key (teachingload_id),
  constraint teachingload_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id) ON DELETE CASCADE ON UPDATE CASCADE,
  constraint teachingload_subject_id_fk foreign key (subject_id) references SUBJECT(subject_id) ON DELETE CASCADE ON UPDATE CASCADE
);

/*START OF TEACHING LOAD OUTSIDE COLLEGE*/
create table TEACHINGLOAD_OUTSIDE_COLLEGE (
  college_outside_up_system varchar(20),
  no_of_subjects int,
  no_of_units_without_multipliers int,
  emp_id varchar(10) not null,
  constraint teachingload_outside_college_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id) ON DELETE CASCADE ON UPDATE CASCADE
);
/*END OF TEACHING LOAD OUTSIDE COLLEGE*/

/* SAME CONCEPT AS THE TEACHINGLOAD */
create table STUDYLOAD(
  studyload_id int not null AUTO_INCREMENT,
  credits int not null,
  course_no varchar(255) not null,
  emp_id varchar(10) not null,
  start_time time not null,
  school varchar (255) not null,
  no_of_days int not null,
  constraint studyload_studyload_id_pk PRIMARY key (studyload_id),
  constraint studyload_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id) ON DELETE CASCADE ON UPDATE CASCADE
);

/* CONTAINS STATIC DATA RELATED TO STUDYLOAD OF AN EMPLOYEE */
create table STUDY_CREDENTIALS (
  degree varchar(255),
  university varchar(255),
  emp_id varchar(10) not null,
  full_studyleave boolean not null,
  faculty_fellowship boolean not null,
  constraint studyload_study_credentials_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id) ON DELETE CASCADE ON UPDATE CASCADE
);

create table LIMITED_PRACTICE(
  limited_practice_id int not null AUTO_INCREMENT,
  haveApplied boolean not null,
  date_submitted date,
  emp_id varchar(10) not null,
  constraint limited_practice_id_pk PRIMARY key (limited_practice_id),
  constraint limited_practice_emp_id_fk foreign key (emp_id) references EMPLOYEE(emp_id) ON DELETE CASCADE ON UPDATE CASCADE
);

create table LOG(
  log_no int not null AUTO_INCREMENT,
  datemade timestamp not null,
  log_info varchar(255) not null,
  constraint log_log_no_pk PRIMARY key (log_no)
);

/* PROCEDURES FOR LOGS */
DROP PROCEDURE IF EXISTS view_logs;
DROP PROCEDURE IF EXISTS insert_log;

DELIMITER GO

CREATE PROCEDURE view_logs()
  BEGIN
    SELECT * FROM LOG;
  END;
GO

CREATE PROCEDURE insert_log(to_insert varchar(255))
  BEGIN
    INSERT INTO LOG
    VALUES (null, now(), to_insert);
  END;
GO

DELIMITER ;

/* END OF LOG PROCEDURES */

/* PROCEDURES FOR EMPLOYEE */
DROP PROCEDURE IF EXISTS view_employee; 
DROP PROCEDURE IF EXISTS view_employee_by_ID; 
DROP PROCEDURE IF EXISTS get_min_teaching_units;
DROP PROCEDURE IF EXISTS insert_study_credentials; 
DROP PROCEDURE IF EXISTS delete_employee;
DROP PROCEDURE IF EXISTS update_employee; 
DROP PROCEDURE IF EXISTS update_employee_teachingload;
DROP PROCEDURE IF EXISTS update_employee_studyload;
DROP PROCEDURE IF EXISTS update_employee_is_new;
DROP PROCEDURE IF EXISTS clear_employee;
DROP PROCEDURE IF EXISTS is_EMPLOYEE_active;

DELIMITER GO

CREATE PROCEDURE view_employee()
  BEGIN 
    SELECT * from EMPLOYEE;
  END;
GO

CREATE PROCEDURE view_employee_by_ID( emp_id_view varchar(20) )
  BEGIN 
    SELECT *, sha2(password,256) as hpassword from EMPLOYEE
    where emp_id = emp_id_view;
  END;
GO

CREATE PROCEDURE get_min_teaching_units( emp_id_view varchar(20) )
  BEGIN
    SELECT min_teaching_units from EMPLOYEE where emp_id = emp_id_view;
  END;
GO

CREATE PROCEDURE insert_employee( emp_id_insert varchar(10),
                                  username_insert varchar(20),
                                  password_insert varchar(256),
                                  type_insert varchar(7), 
                                  f_name_insert varchar(255) ,
                                  m_name_insert varchar(255) ,
                                  l_name_insert varchar (255) ,
                                  department_insert varchar(50),
                                  college_insert varchar(50),
                                  emp_type_insert varchar(255),
                                  semester_insert varchar(20),
                                  year_insert varchar(20),
                                  is_studying boolean,
                                  email_insert varchar(255),
                                  is_active_insert boolean,
                                  is_being_approved_insert boolean)
  BEGIN 

    IF is_studying THEN
      SET @min_teaching_units = 6,
          @max_study_units = 6;
    ELSE
      SET @min_teaching_units = 12,
          @max_study_units = 0;
    END IF;

    INSERT INTO EMPLOYEE 
    VALUES (NULL, emp_id_insert, username_insert, sha2(password_insert,256), type_insert, f_name_insert, m_name_insert, l_name_insert, 0, department_insert, college_insert, emp_type_insert, semester_insert, year_insert, email_insert, is_studying, NULL, 0, @max_study_units,0, @min_teaching_units,is_active_insert,is_being_approved_insert);
    call insert_log(concat("Employee #", emp_id_insert, " ", f_name_insert, " has been added to the table EMPLOYEE"));
    call insert_study_credentials(NULL, NULL, emp_id_insert, 1, 0);
    call insert_faculty_grant(NULL, NULL,NULL,NULL,NULL,NULL,NULL, emp_id_insert);
  END;
GO

CREATE PROCEDURE is_EMPLOYEE_active( emp_id_view varchar(20) )
  BEGIN
    Select is_active from employee where emp_id = emp_id_view;
  END;
GO  

CREATE PROCEDURE delete_employee( emp_id_insert varchar(10) )
  BEGIN 
    DELETE FROM EMPLOYEE
    WHERE emp_id = emp_id_insert;
    call insert_log(concat("Employee #", emp_id_insert, " has been deleted from the table EMPLOYEE"));
  END;
GO

CREATE PROCEDURE update_employee( emp_id_insert varchar(10),
                                  username_insert varchar(20),
                                  password_insert varchar(256),
                                  f_name_insert varchar(255) ,
                                  m_name_insert varchar(255) ,
                                  l_name_insert varchar (255) ,
                                  department_insert varchar(50),
                                  college_insert varchar(50),
                                  emp_type_insert varchar(255),
                                  email_insert varchar(255),
                                  is_studying_insert boolean,
                                  is_active_insert boolean,
                                  is_being_approved_insert boolean
)
  BEGIN 
    UPDATE EMPLOYEE
    SET username = username_insert,
        password = sha2(password_insert,256),
        f_name = f_name_insert,
        m_name = m_name_insert,
        l_name = l_name_insert,
        department = department_insert,
        college = college_insert,
        emp_type = emp_type_insert,
        email = email_insert,
        is_studying = is_studying_insert,
        is_active = is_active_insert,
        is_being_approved = is_being_approved_insert
    WHERE emp_id = emp_id_insert;
    call insert_log(concat("Employee #", emp_id_insert, " ", f_name_insert, " has been edited from the table EMPLOYEE"));
  END;
GO

CREATE PROCEDURE update_employee_is_new(emp_id_insert varchar(10),
                                        department_insert varchar(50),
                                        college_insert varchar(50),
                                        emp_type_insert varchar(255),
                                        email_insert varchar(255),
                                        is_studying_insert boolean,
                                        is_active_insert boolean,
                                        is_being_approved_insert boolean )
  BEGIN
    UPDATE EMPLOYEE
    SET
      department = department_insert,
      college = college_insert,
      emp_type = emp_type_insert,
      email = email_insert,
      is_studying = is_studying_insert,
      is_new = 0,
      is_active = is_active_insert,
      is_being_approved = is_being_approved_insert
    WHERE emp_id = emp_id_insert;
    call insert_log(concat("Employee #", emp_id_insert, "'s new attributes has been updated in the Database"));
  END;
GO

CREATE PROCEDURE update_employee_teachingload( emp_id_update varchar(10) )
  BEGIN
    UPDATE EMPLOYEE
    SET current_teaching_units = (SELECT SUM(b.units)from TEACHINGLOAD as a join SUBJECT as b on a.subject_id = b.subject_id where a.emp_id = emp_id_update)
    WHERE emp_id = emp_id_update;
    call insert_log(concat("Employee # ", emp_id_update, "'s teaching load has been updated"));
  END;
GO

CREATE PROCEDURE update_employee_studyload( emp_id_update varchar(10) )
  BEGIN
    UPDATE EMPLOYEE
    SET current_study_units = (SELECT SUM(credits)from STUDYLOAD where emp_id = emp_id_update)
    WHERE emp_id = emp_id_update;
    call insert_log(concat("Employee # ", emp_id_update, "'s teaching load has been updated"));
  END;
GO

DELIMITER ;

/* -- END OF PROCEDURES FOR EMPLOYEE */

/* PROCEDURES FOR EMPLOYEE_FSR */
DROP PROCEDURE IF EXISTS view_fsrs;
DROP PROCEDURE IF EXISTS insert_fsr;

DELIMITER GO

CREATE PROCEDURE view_fsrs()
  BEGIN
    SELECT * FROM EMPLOYEE_FSR;
  END;
GO

CREATE PROCEDURE insert_fsr( emp_id_insert varchar(10), path_to_fsr varchar(255), semester int , year int )
  BEGIN 
    INSERT INTO EMPLOYEE_FSR
    VALUES (semester, year, path_to_fsr, emp_id_insert);
    call insert_log(concat("FSR from semester and year ",semester, year, " has been added to the table EMPLOYEE_FSR" ));
  END;
GO

DELIMITER ;

/*START PROCEDURES FOR EXTENSION*/

DROP PROCEDURE IF EXISTS view_extension; 
DROP PROCEDURE IF EXISTS insert_extension; 
DROP PROCEDURE IF EXISTS delete_extension; 
DROP PROCEDURE IF EXISTS update_extension; 

DELIMITER GO
CREATE PROCEDURE view_extension()
  BEGIN 
    SELECT * from EXTENSION;
END;
GO

CREATE PROCEDURE insert_extension(   credit_unit int (255),
                                   extension_name varchar(20), 
                                   extension_type varchar(20), 
                                   no_of_hours int , 
                                   no_of_participants int (20), 
                                   extension_role varchar(10), 
                                   start_time time, 
                                   end_time time, 
                                   funding_agency varchar(255),
                                   emp_id varchar(10) )
  BEGIN 
    INSERT INTO EXTENSION
        values (NULL, credit_unit, extension_name, extension_type, no_of_hours, no_of_participants, extension_role, start_time, end_time, funding_agency, emp_id);
    call insert_log(concat("Extension name", extension_name, " has been added to the table EXTENSION"));
  END;
GO


CREATE PROCEDURE delete_extension(  extension_id_del int)
  BEGIN
      DELETE FROM EXTENSION
        where extension_id = extension_id_del;
  END;
GO


CREATE PROCEDURE update_extension(  extension_id_update int,
                                   credit_unit_update int (255),
                                   extension_name_update varchar(20), 
                                   extension_type_update varchar(20), 
                                   no_of_hours_update int , 
                                   no_of_participants_update int (20), 
                                   extension_role_update varchar(10), 
                                   start_time_update time, 
                                   end_time_update time, 
                                   funding_agency_update varchar(255),
                                   emp_id_update varchar(10) )
  BEGIN 
    UPDATE EXTENSION
        SET  credit_unit = credit_unit_update, 
             extension_name = extension_name_update,
             extension_type = extension_type_update, 
             no_of_hours = no_of_hours_update, 
             no_of_participants = no_of_participants_update, 
             extension_role = extension_role_update, 
             start_time = start_time_update, 
             end_time = end_time_update, 
             funding_agency = funding_agency_update,
             emp_id = emp_id_update
        WHERE extension_id = extension_id_update;
    call insert_log(concat("Extension #", extension_id_update, " with name ", extension_name_update, " has been edited in the table extension"));
  END;
GO

DELIMITER ;

/*END PROCEDURES FOR EXTENSION*/

/*START PROCEDURES FOR POSITION*/
DROP PROCEDURE IF EXISTS view_position;
DROP PROCEDURE IF EXISTS insert_position;
DROP PROCEDURE IF EXISTS delete_position;
DROP PROCEDURE IF EXISTS update_position;

DELIMITER GO

CREATE PROCEDURE view_position()
BEGIN
    SELECT * FROM POSITIONN;

END;
GO

CREATE PROCEDURE view_position_by_ID( emp_id_v varchar(10) )
  BEGIN
    SELECT * FROM POSITIONN
    WHERE emp_id = emp_id_v;
  END;
GO

CREATE PROCEDURE insert_position(office varchar(255),
                                credit_units int(10),
                                nature_of_work varchar(255),
                                emp_id varchar(10))
BEGIN
    INSERT INTO POSITIONN
      values (NULL, office, credit_units,nature_of_work, emp_id);
      call insert_log(concat("Position ", office,"/", nature_of_work, "and", credit_units," has been added to the table POSITIONN"));
END;
GO

CREATE PROCEDURE delete_position(position_id_del int)
  BEGIN 
    DELETE FROM POSITIONN
      where position_id = position_id_del;
     call insert_log(concat("Position #", position_id_del," has been deleted to the table POSITIONN"));

END;
GO

CREATE PROCEDURE update_position(position_id_update int,
                                office_update varchar(255),
                                credit_units_update int,
                                nature_of_work_update varchar(255),
                                emp_id_update varchar(10))
  BEGIN 
    UPDATE POSITIONN
        SET  office = office_update,
            credit_units = credit_units_update,
            emp_id = emp_id_update,
             nature_of_work =nature_of_work_update
        WHERE position_id = position_id_update;
        call insert_log(concat("Position #", position_id_update, " has been updated"));

END;
GO

DELIMITER ;

/* END OF POSITION PROCEDURES */

/* START OFPROCEDURES FOR PUBLICATION */
DROP PROCEDURE IF EXISTS view_publication; 
DROP PROCEDURE IF EXISTS view_publication_by_ID; 
DROP PROCEDURE IF EXISTS view_employee_publication; 
DROP PROCEDURE IF EXISTS insert_publication;
DROP PROCEDURE IF EXISTS delete_publication;
DROP PROCEDURE IF EXISTS update_publication;

DELIMITER GO
CREATE PROCEDURE view_publication()
BEGIN
    SELECT * FROM PUBLICATION;
END;
GO

CREATE PROCEDURE view_publication_by_ID(view_publication_id int)
  BEGIN
      SELECT * FROM PUBLICATION
      where publication_id = view_publication_id;
  END;
GO

CREATE PROCEDURE view_employee_publication(emp_id_view_publication varchar(10))
  BEGIN
      SELECT * FROM PUBLICATION 
      WHERE emp_id = emp_id_view_publication;
  END;
GO

CREATE PROCEDURE insert_publication( 
                credit_units int,
                category varchar(255),
                funding varchar(255),
                title varchar(255),
                role varchar(255),
                start_date date,
                end_date date,
                emp_id varchar(10)
)
  BEGIN
      INSERT INTO PUBLICATION
        values (NULL, credit_units, category, funding, title, role, start_date, end_date, emp_id);
        call insert_log(concat("Publication with title", title, " has been added to the table PUBLICATION"));

  END;
GO

CREATE PROCEDURE delete_publication(publication_id_del int)
  BEGIN 
  call delete_coworker(publication_id_del);
    DELETE FROM PUBLICATION
      where publication_id = publication_id_del;
       call insert_log(concat("Publication #", publication_id_del, " has been deleted to the table PUBLICATION"));
  END;
GO



CREATE PROCEDURE update_publication(

                credit_units_u int,
                category_u varchar(255),
                funding_u varchar(255),
                title_u varchar(255),
                role_u varchar(255),
                start_date_u date,
                end_date_u date,
                publication_id_u int
                )
  BEGIN 
    UPDATE PUBLICATION
        SET  credit_units = credit_units_u,
          category = category_u,
          funding = funding_u,
          title = title_u,
          role = role_u,
          start_date = start_date_u,
          end_date = end_date_u
        WHERE publication_id = publication_id_u;
        call insert_log(concat("Publication #", publication_id_u, " has been updated."));


  END;
GO

DELIMITER ;

/* END OF PROCEDURE FOR PUBLICATION */

/* START OF COWORKER PROCEDURES */
DROP PROCEDURE IF EXISTS view_coworker; 
DROP PROCEDURE IF EXISTS view_coworker_by_ID; 
DROP PROCEDURE IF EXISTS view_employee_coworker; 
DROP PROCEDURE IF EXISTS insert_coworker;
DROP PROCEDURE IF EXISTS delete_coworker;
DROP PROCEDURE IF EXISTS update_coworker;
DROP PROCEDURE IF EXISTS view_publication_coworkers;
DELIMITER GO

CREATE PROCEDURE view_coworker()
  BEGIN
      SELECT * FROM COWORKER;
  END;
GO

CREATE PROCEDURE view_coworker_by_ID(view_coworker_id int)
  BEGIN
      SELECT * FROM COWORKER
      where coworker_id = view_coworker_id;
  END;
GO

CREATE PROCEDURE view_publication_coworkers( publication_id_v int )
  BEGIN
    SELECT c.emp_id, e.f_name, e.l_name FROM COWORKER as c join Employee as e
    WHERE c.publication_id = publication_id_v and c.emp_id = e.emp_id;
  END;
GO

CREATE PROCEDURE view_possible_coworkers( cancelled_out varchar(10) )
  BEGIN
    SELECT * FROM EMPLOYEE where not emp_id = cancelled_out; 
  END;
GO

CREATE PROCEDURE insert_coworker( 
                emp_id varchar(10), 
                publication_id int
)
  BEGIN
      INSERT INTO COWORKER
        values (NULL, emp_id, publication_id);
        call insert_log(concat("Coworker with emp_id ", emp_id, " has been added to the table COWORKER"));

  END;
GO

CREATE PROCEDURE delete_coworker( coworker_id_del int
                                )
  BEGIN 
    DELETE FROM COWORKER
      where coworker_id = coworker_id_del;
      call insert_log(concat("Coworker # ", coworker_id_del, " has been deleted to the table COWORKER"));

  END;
GO

CREATE PROCEDURE update_coworker( coworker_id_u int,
                emp_id_u varchar(10), 
                                  publication_id_u int )
  BEGIN 
    UPDATE COWORKER
        SET  emp_id = emp_id_u,
          publication_id = publication_id_u
        WHERE coworker_id = coworker_id_u;
        call insert_log(concat("Coworker #", coworker_id, " has been updated."));
  END;
GO

DELIMITER ;

/* END OF COWORKER PROCEDURES */

/* SUBJECT PROCEDURES */
DROP PROCEDURE IF EXISTS view_subjects;
DROP PROCEDURE IF EXISTS add_subject;
DROP PROCEDURE IF EXISTS delete_subject;
DROP PROCEDURE IF EXISTS update_subject;

DELIMITER GO

CREATE PROCEDURE view_subjects()
  BEGIN
    Select * from SUBJECT;
  END;
GO

CREATE PROCEDURE add_subject(     subject_code_insert varchar(255),
                                  section_code_insert varchar(255),
                                  isLecture_insert boolean,
                                  isGraduate_insert boolean,
                                  units_insert int,
                                  room_insert varchar(255),
                                  start_time_insert time,
                                  end_time_insert time )
  BEGIN
    INSERT INTO SUBJECT
    VALUES (NULL, subject_code_insert, section_code_insert, isLecture_insert, isGraduate_insert, units_insert, room_insert, start_time_insert, end_time_insert);
    call insert_log(concat("Subject with code ", subject_code_insert, " and section ", section_code_insert, " has been inserted to the DATABASE"));
  END;
GO

CREATE PROCEDURE delete_subject(  subject_id_delete int )
  BEGIN
    DELETE FROM SUBJECT
      where subject_id = subject_id_delete;
    call insert_log(concat("Subject with id ", subject_id_delete, " has been deleted from the DATABASE"));
  END;
GO

CREATE FUNCTION is_subject_existing( subject_code_check varchar(255), section_code_check varchar(255) )
RETURNS BOOLEAN DETERMINISTIC
  BEGIN
    IF EXISTS(SELECT subject_id from subject where subject_code = subject_code_check and section_code = section_code_check) THEN
      RETURN true;
    END IF;
    RETURN false;
  END;
GO  

CREATE PROCEDURE update_subject( subject_id_edit int,
                                  subject_code_insert varchar(255),
                                        section_code_insert varchar(255),
                                        isLecture_insert boolean,
                                        isGraduate_insert boolean,
                                        units_insert int,
                                        room_insert varchar(255),
                                        start_time_insert time,
                                        end_time_insert time )
  BEGIN
    UPDATE SUBJECT
    set   subject_code = subject_code_insert,
          section_code = section_code_insert, 
          isLecture = isLecture_insert, 
          units = units_insert, 
          room = room_insert, 
          start_time = start_time_insert, 
          end_time = end_time_insert
    where subject_id = subject_id_edit;
  END;
GO

DELIMITER ;
/* END OF SUBJECT PROCEDURES */

/* PROCEDURES FOR TEACHINGLOAD */
DROP PROCEDURE IF EXISTS view_employee_teachingload; 
DROP PROCEDURE IF EXISTS view_teachingload; 
DROP PROCEDURE IF EXISTS insert_teachingload; 
DROP PROCEDURE IF EXISTS delete_teachingload;
DROP PROCEDURE IF EXISTS update_teachingload;
DROP PROCEDURE IF EXISTS view_by_teachingload_id;
DROP PROCEDURE IF EXISTS is_teaching_graduate;
DROP PROCEDURE IF EXISTS is_teaching_lecture;

DELIMITER GO

CREATE PROCEDURE view_employee_teachingload(emp_id varchar(20))
  BEGIN 
    SELECT a.teachingload_id, a.emp_id , b.subject_id, b.subject_code, b.section_code, b.isLecture, a.no_of_students, b.units, b.room, b.start_time, b.end_time from TEACHINGLOAD as a join SUBJECT as b on a.subject_id = b.subject_id where a.emp_id = emp_id;
  END;
GO

CREATE PROCEDURE view_by_teachingload_id(teachingload_id int)
  BEGIN 
    SELECT a.teachingload_id, a.emp_id , b.subject_id, b.subject_code, b.section_code, b.isLecture, a.no_of_students, b.units, b.room, b.start_time, b.end_time from TEACHINGLOAD as a join SUBJECT as b on a.subject_id = b.subject_id where a.teachingload_id = teachingload_id;
  END;
GO

CREATE PROCEDURE view_teachingload()
  BEGIN 
    SELECT a.teachingload_id, a.emp_id , b.subject_id, b.subject_code, b.section_code, b.isLecture, a.no_of_students, b.units, b.room, b.start_time, b.end_time from TEACHINGLOAD as a join SUBJECT as b on a.subject_id = b.subject_id;
  END;
GO


CREATE PROCEDURE is_teaching_graduate( teachingload_id int )
  BEGIN
    SELECT b.isGraduate from TEACHINGLOAD as a join SUBJECT as b on a.subject_id = b.subject_id where a.teachingload_id = teachingload_id;
  END;
GO

CREATE PROCEDURE is_teaching_lecture( teachingload_id int )
  BEGIN
    SELECT b.isLecture from TEACHINGLOAD as a join SUBJECT as b on a.subject_id = b.subject_id where a.teachingload_id = teachingload_id;
  END;
GO

CREATE PROCEDURE insert_teachingload(   subject_id int,
                                        emp_id_insert varchar(10), 
                                        no_of_students_insert int)
  BEGIN 
    INSERT INTO TEACHINGLOAD
    VALUES (NULL, emp_id_insert, no_of_students_insert, subject_id);
    call insert_log(concat("Teachingload with id ", subject_id ," has been added to the table TEACHINGLOAD"));    
    call update_employee_teachingload( emp_id_insert );
  END;
GO


CREATE PROCEDURE delete_teachingload( teachingload_id_delete int )
  BEGIN
    SET @emp_id_update = (Select a.emp_id from employee as a join teachingload as b on a.emp_id = b.emp_id where b.teachingload_id = teachingload_id_delete);
    DELETE FROM TEACHINGLOAD
    where teachingload_id = teachingload_id_delete;
    call update_employee_teachingload( @emp_id_update );
    call insert_log(concat("Teachingload #", teachingload_id_delete, " has been deleted from the table TEACHINGLOAD"));
  END;
GO

CREATE PROCEDURE update_teachingload(   to_edit int,
                                        subject_id_insert int,
                                        no_of_students_insert int )
  BEGIN 
      UPDATE teachingload
      SET no_of_students = no_of_students_insert,
          subject_id = subject_id_insert
      where teachingload_id = to_edit;
    call insert_log(concat("Teachingload #", to_edit, " has been edited in the table TEACHINGLOAD"));   
  END;
GO

DELIMITER ;

/* END OF TEACHINGLOAD PROCEDURES */

/* START TEACHINGLOAD OUTSIDE COLLEGE PROCEDURES */
DROP PROCEDURE IF EXISTS insert_teachingload_outside_college;
DROP PROCEDURE IF EXISTS update_teachingload_outside_college;

DELIMITER GO

CREATE PROCEDURE insert_teachingload_outside_college( emp_id_insert varchar(10),
                                            college_outside_up_system_insert varchar(20),
                                            no_of_subjects_insert int,
                                            no_of_units_without_multipliers_insert int )
  BEGIN
      INSERT INTO TEACHINGLOAD_OUTSIDE_COLLEGE
      VALUES ( college_outside_up_system_insert,
                no_of_subjects_insert,
                no_of_units_without_multipliers_insert,
                emp_id_insert );
      call insert_log(concat("Teachingload outside college ", emp_id_insert, " has been added to the DATABASE"));
  END;
GO

CREATE PROCEDURE update_teachingload_outside_college( emp_id_update varchar(10),
                                            college_outside_up_system_update varchar(20),
                                            no_of_subjects_update int,
                                            no_of_units_without_multipliers_update int )
  BEGIN   
      UPDATE TEACHINGLOAD_OUTSIDE_COLLEGE
      SET college_outside_up_system = college_outside_up_system_update,
          no_of_subjects = no_of_subjects_update,
          no_of_units_without_multipliers = no_of_units_without_multipliers_update
      WHERE emp_id = emp_id_update;
      call insert_log(concat("Teachingload outside college of ", emp_id_insert, " has been edited in the DATABASE"));
  END;
GO

DELIMITER ;
/* END TEACHINGLOAD OUTSIDE COLLEGE PROCEDURES */
/* STUDYLOAD PROCEDURES */
DROP PROCEDURE IF EXISTS view_studyload; 
DROP PROCEDURE IF EXISTS view_employee_studyload;
DROP PROCEDURE IF EXISTS view_studyload_id_studyload;
DROP PROCEDURE IF EXISTS insert_studyload;
DROP PROCEDURE IF EXISTS delete_studyload;
DROP PROCEDURE IF EXISTS update_studyload;

DELIMITER GO

/*

STUDYLOAD PEPOPLE

KELANGAN KASI KASAMA YUNG STUDY_CREDENTIALS SA VIEW NG ISANG STUDYLOAD KASI DUN MALALAMAN KUNG SAN NAG-AARAL YUNG MGA PROF
NGAYON YUNG STUDY_CREDENTIALS, NAKA ANCHOR YUNG TABLE NA YUN SA EMPLOYEE KASI BASED SA NAPAG AGREEHAN NAMEN NI @JAS, ANG ISANG PROF
AY ISANG COLLEGE LANG DIN YUNG PWEDENG PASUKAN FOR MASTERS/DOCTORS PER SEM, SO PARA MAGING MAS CONSISTENT YUNG DATA, ISANG BESES NALANG
MAGIINPUT YUNG PROF NG STUDY_CREDENTIALS NYA, THANKS

*/

-- CREATE PROCEDURE view_studyload()
--   BEGIN 
--     SELECT d.studyload_id, d.emp_id, a.subject_id, a.subject_code, a.section_code, a.isLecture, a.units, a.room, a.start_time, a.end_time, d.university, d.degree , d.credits from SUBJECT as a join (select b.studyload_id,  b.subject_id, b.emp_id, b.credits, c.university, c.degree from STUDYLOAD as b join STUDY_CREDENTIALS as c on b.emp_id = c.emp_id) as d on a.subject_id = d.subject_id;
--   END;
-- GO

CREATE PROCEDURE view_employee_studyload(emp_id_view int)
  BEGIN
    SELECT * FROM STUDYLOAD WHERE emp_id = emp_id_view;
  END;
GO

CREATE PROCEDURE view_studyload_id_studyload(studyload_id_view int)
  BEGIN
    SELECT * FROM STUDYLOAD WHERE studyload_id = studyload_id_view;
  END;
GO

CREATE PROCEDURE insert_studyload(  
                                    credits_insert int ,
                                    course_no_insert varchar(255),
                                    emp_id_insert varchar(10),
                                    start_time_insert time,
                                    school_insert varchar(255),
                                    no_of_days_insert int )
  BEGIN
      INSERT INTO STUDYLOAD
      VALUES (NULL, credits_insert, course_no_insert, emp_id_insert, start_time_insert,school_insert, no_of_days_insert);    
      call insert_log(concat("STUDYLOAD with course_no ", course_no_insert ," has been added to the table STUDYLOAD"));
      call update_employee_studyload(emp_id_insert);
  END;
GO

CREATE FUNCTION is_studyload_existing( subject_code_insert varchar(255), section_code_insert varchar(255))
RETURNS BOOLEAN DETERMINISTIC
  BEGIN
    IF EXISTS(SELECT a.studyload_id from STUDYLOAD as a join SUBJECT as b on a.subject_id = b.subject_id where b.subject_code = subject_code_insert and b.section_code = section_code_insert) THEN
      RETURN true;
    END IF;
    RETURN false;
  END;
GO  

CREATE PROCEDURE delete_studyload( studyload_id_delete int )
  BEGIN
    SET @emp_id_update = (Select a.emp_id from EMPLOYEE as a join STUDYLOAD as b on a.emp_id = b.emp_id where b.studyload_id = studyload_id_delete);
    DELETE FROM STUDYLOAD
    where studyload_id = studyload_id_delete;
    call update_employee_teachingload( @emp_id_update );
    call insert_log(concat("Studyload #", studyload_id_delete, " has been deleted from the table STUDYLOAD"));
  END;
GO

CREATE PROCEDURE update_studyload (   to_edit int,
                                      credits_insert int ,
                                      courseno_insert varchar(255) ,
                                      start_time_insert time ,
                                      school_insert varchar(255),
                                      no_of_days_insert int,
                                      emp_id_edit varchar(10))
  BEGIN
    UPDATE STUDYLOAD
    SET credits = credits_insert,
        course_no = courseno_insert,
        start_time = start_time_insert,
        school = school_insert,
        no_of_days = no_of_days_insert
    where studyload_id = to_edit AND emp_id = emp_id_edit;
    call insert_log(concat("Studyload #", to_edit, " with course ", courseno_insert, "by", emp_id_edit, " has been edited in the table STUDYLOAD"));   
  END;
GO

DELIMITER ;

/* END OF STUDYLOAD PROCEDURES */

/* STUDY_CREDENTIALS PROCEDURES */
DROP PROCEDURE IF EXISTS insert_study_credentials;
DROP PROCEDURE IF EXISTS update_study_credentials;

DELIMITER GO

CREATE PROCEDURE insert_study_credentials(  degree_insert varchar(255),
                                            university_insert varchar(255),
                                            emp_id_insert varchar(10),    
                                            full_studyleave_insert boolean,
                                            faculty_fellowship_insert boolean )
  BEGIN
    IF (select is_studying from EMPLOYEE where emp_id = emp_id_insert) = 1 THEN
      INSERT INTO STUDY_CREDENTIALS
      VALUES (  degree_insert,
                university_insert,
                emp_id_insert,
                full_studyleave_insert,
                faculty_fellowship_insert );
      call insert_log(concat("Study Credentials of ", emp_id_insert, " has been added to the DATABASE"));
    END IF;
  END;
GO

CREATE PROCEDURE update_study_credentials( emp_id_insert varchar(10),
                                            degree_insert varchar(255),
                                            university_insert varchar(255),  
                                            full_studyleave_insert boolean,
                                            faculty_fellowship_insert boolean )
  BEGIN
    IF (select is_studying from EMPLOYEE where emp_id = emp_id_insert) = 1 THEN
      UPDATE STUDY_CREDENTIALS
      SET degree = degree_insert,
          university = university_insert,
          full_studyleave = full_studyleave_insert,
          faculty_fellowship = faculty_fellowship_insert
      WHERE emp_id = emp_id_insert;
      call insert_log(concat("Study Credentials of ", emp_id_insert, " has been edited in the DATABASE"));
    END IF;
  END;
GO

DELIMITER ;

/* END OF STUDY CREDENTIALS PROCEDURES */

/* CONSULTATION PROCEDURES */
DROP PROCEDURE IF EXISTS view_employee_consultation; 
DROP PROCEDURE IF EXISTS insert_consultation; 
DROP PROCEDURE IF EXISTS view_consultation; 
DROP PROCEDURE IF EXISTS delete_consultation;
DROP PROCEDURE IF EXISTS update_consultation;

DELIMITER GO

CREATE PROCEDURE view_employee_consultation(emp_id varchar(20))
  BEGIN 
    SELECT a.emp_id, a.consultation_start_time, a.consultation_end_time, a.consultation_place, b.day from CONSULTATION as a join CONSULTATION_DAY as b on a.consultation_id = b.consultation_id where a.emp_id = emp_id;
END;
GO

CREATE PROCEDURE view_consultation()
  BEGIN 
    SELECT a.emp_id, a.consultation_start_time, a.consultation_end_time, a.consultation_place, b.day from CONSULTATION as a join CONSULTATION_DAY as b on a.consultation_id = b.consultation_id;
END;
GO

CREATE PROCEDURE view_consultation_by_ID( consultation_id_view varchar(20))
  BEGIN
    SELECT a.emp_id, a.consultation_start_time, a.consultation_end_time, a.consultation_place, b.day from CONSULTATION as a join CONSULTATION_DAY as b on a.consultation_id = b.consultation_id where a.consultation_id = consultation_id_view;
  END
GO

CREATE PROCEDURE insert_consultation(   consultation_start_time_insert time,
                                        consultation_end_time_insert time,
                                        consultation_place_insert varchar(255),
                                        day_insert varchar(255),
                                        emp_id_insert varchar(10))
BEGIN 
    INSERT INTO CONSULTATION
    VALUES (NULL, consultation_start_time_insert, consultation_end_time_insert, consultation_place_insert, emp_id_insert);
    INSERT INTO CONSULTATION_DAY
    VALUES (LAST_INSERT_ID(), day_insert);
    call insert_log(concat("Consultation time ",consultation_start_time_insert," to ",consultation_end_time_insert, " has been inserted to the table CONSULTATION"));
END;
GO

CREATE PROCEDURE delete_consultation( consultation_id_delete int )
BEGIN
  DELETE FROM CONSULTATION
  where consultation_id = consultation_id_delete;
  DELETE FROM CONSULTATION_DAY
  WHERE consultation_id = consultation_id_delete;
  call insert_log(concat("Consultation id ",consultation_id_delete, " has been deleted from the table CONSULTATION"));
END;
GO

CREATE PROCEDURE update_consultation(   consultation_id_edit int,
                                        consultation_start_time_edit time,
                                        consultation_end_time_edit time,
                                        consultation_place_edit varchar(255),
                                        day_edit varchar(255))
BEGIN 
    UPDATE CONSULTATION
    SET consultation_start_time = consultation_start_time_edit,     
        consultation_end_time = consultation_end_time_edit,
        consultation_place = consultation_place_edit
    where consultation_id = consultation_id_edit;
    UPDATE CONSULTATION_DAY
    SET day = day_edit
    where consultation_id = consultation_id_edit;
    call insert_log(concat("Consultation id ",consultation_id_edit, " has been updated from the table CONSULTATION"));
END;
GO

DELIMITER ;

/* END OF CONSULATATION PROCEDURE */

/* FACULTY GRANT PROCEDURES */
DROP PROCEDURE IF EXISTS view_faculty_grant; 
DROP PROCEDURE IF EXISTS insert_faculty_grant; 
DROP PROCEDURE IF EXISTS delete_faculty_grant; 
DROP PROCEDURE IF EXISTS update_faculty_grant; 

DELIMITER GO
CREATE PROCEDURE view_faculty_grant()
  BEGIN 
    SELECT * from FACULTYGRANT;
END;
GO

CREATE PROCEDURE view_faculty_grant_by_emp_id(emp_id_view_faculty_grant int)
  BEGIN 
    SELECT * from FACULTYGRANT
    where emp_id = emp_id_view_faculty_grant;
  END;
GO

CREATE PROCEDURE insert_faculty_grant(  
                  type varchar(255),
                    is_approved boolean,
                  professional_chair varchar(255),
                    grants varchar(255),
                    grant_title varchar(255),
                    start_date date,
                    end_date date,
                    emp_id varchar(10))
  BEGIN 
    INSERT INTO FACULTYGRANT
        values (type, is_approved, professional_chair, grants, grant_title, start_date, end_date, emp_id);
    call insert_log(concat("faculty grant with emp_id ", emp_id, " has been added to the table facultygrant"));
  END;
GO


CREATE PROCEDURE update_faculty_grant(  emp_id_update int,
                  type_update varchar(255),
                    is_approved_update boolean,
                  professional_chair_update varchar(255),
                    grants_update varchar(255),
                    grant_title_update varchar(255),
                    start_date_update date,
                    end_date_update date)
  BEGIN 
    UPDATE FACULTYGRANT
        SET  
          type = type_update,
          is_approved = is_approved_update,
          professional_chair = professional_chair_update,
          grants = grants_update,
          grant_title = grant_title_update,
          start_date = start_date_update,
          end_date = end_date_update
        WHERE emp_id = emp_id_update;
    call insert_log(concat("faculty grant with emp_id ", emp_id_update, " has been updated in the table FACULTYGRANT"));
  END;
GO
DELIMITER ;

/* END OF FACULTY GRANT PROCEDURES */

/* LIMITED PRACTICE PROCEDURES */
DROP PROCEDURE IF EXISTS view_limited_practice; 
DROP PROCEDURE IF EXISTS view_limited_practice_by_emp_id; 
DROP PROCEDURE IF EXISTS insert_limited_practice; 
DROP PROCEDURE IF EXISTS delete_limited_practice;
DROP PROCEDURE IF EXISTS insert_date_if_yes;
DROP PROCEDURE IF EXISTS update_limited_practice;
DELIMITER GO

CREATE PROCEDURE view_limited_practice()
  BEGIN 
    SELECT * from LIMITED_PRACTICE;
  END;
GO

CREATE PROCEDURE view_limited_practice_by_emp_id(emp_id_view_limited_practice int)
  BEGIN 
    SELECT * from LIMITED_PRACTICE
    where emp_id = emp_id_view_limited_practice;
  END;
GO


CREATE PROCEDURE insert_date_if_yes( limited_practice_id_u int,
                                      date_submitted_u date )
  BEGIN 
    UPDATE LIMITED_PRACTICE
        SET date_submitted = date_submitted_u
        WHERE limited_practice_id = limited_practice_id_u;
        call insert_log(concat("Limited practice  ", limited_practice_id_u, " has been updated from the table LIMITED PRACTICE"));
END;
GO

CREATE PROCEDURE insert_limited_practice( haveApplied boolean,
                      emp_id varchar(10) )
BEGIN
    INSERT INTO LIMITED_PRACTICE
      values (NULL, haveApplied, NULL,emp_id);
      call insert_log(concat("Limited practice of profession with emp_id ", emp_id, " has been added to the table LIMITED PRACTICE"));
END;
GO

CREATE PROCEDURE delete_limited_practice(limited_practice_id_del int)
  BEGIN 
    DELETE FROM LIMITED_PRACTICE
      where limited_practice_id = limited_practice_id_del;
      call insert_log(concat("Limited practice", limited_practice_id_del, " has been deleted from the table LIMITED PRACTICE"));
END;
GO


CREATE PROCEDURE update_limited_practice( limited_practice_id_u int,
                                haveApplied_u boolean,
                                date_submitted_u date,
                                emp_id_u varchar(10)
                                )
  BEGIN 
    UPDATE LIMITED_PRACTICE
        SET  limited_practice_id = limited_practice_id_u,
          haveApplied = haveApplied_u,
          date_submitted = date_submitted_u,
          emp_id = emp_id_u
        WHERE limited_practice_id = limited_practice_id_u;
        call insert_log(concat("Limited practice  ", limited_practice_id_u, " has been updated from the table LIMITED PRACTICE"));
END;
GO
DELIMITER ;

/* END OF LIMITED PRACTICE PROCEDURES */

DELIMITER GO

CREATE PROCEDURE clear_employee( emp_id_clear varchar(10) )
  BEGIN
    UPDATE EMPLOYEE
    SET
      emp_type = "NULL",
      semester = "NULL",
      year = "NULL",
      is_studying = 0,
      current_teaching_units = 0,
      current_study_units = 0,
      max_study_units = 0,
      min_teaching_units = 0,
      is_new = 0,
      is_active = 1,
      is_being_approved = 0
    WHERE emp_id = emp_id_clear;

    DELETE FROM EXTENSION
    WHERE emp_id = emp_id_clear;

    DELETE FROM PUBLICATION
    WHERE emp_id = emp_id_clear;

    DELETE FROM FACULTYGRANT
    WHERE emp_id = emp_id_clear;

    DELETE FROM COWORKER
    WHERE emp_id = emp_id_clear;

    DELETE FROM CONSULTATION
    WHERE emp_id = emp_id_clear;

    DELETE FROM POSITIONN
    WHERE emp_id = emp_id_clear;

    DELETE FROM TEACHINGLOAD
    WHERE emp_id = emp_id_clear; 

    DELETE FROM STUDYLOAD
    WHERE emp_id = emp_id_clear; 

    DELETE FROM LIMITED_PRACTICE
    WHERE emp_id = emp_id_clear; 

    call insert_log(concat("Employee #", emp_id_clear, "'s FSR has been approved. DATA CLEARED"));
  END;
GO

DELIMITER ;

/* POPULATE DATA */
call insert_employee("0000000001","Aaron","Magnaye","FACULTY","Aaron","Velasco","Magnaye","Regina", "asadsa","PROF","1st", "2017-2018", 1,"email1@gmail.com", 1, 0);
call insert_employee("0000000002","Bianca","Bianca123","ADMIN","Bianca","Bianca","Bautista","Igor","asadsa","PROF","1st", "2017-2018", 1,"email2@gmail.com", 1, 1);
call insert_employee("0000000003","Gary","Nash","ADMIN","Cole","Lawrence","Abbot","Cadman","asadsa","PROF","1st", "2017-2018", 1,"email3@gmail.com", 1, 1);
call insert_employee("0000000004","Merritt","Richard","FACULTY","Bernard","Slade","Galvin","Oleg","asadsa","PROF","1st", "2017-2018", 1,"email4@gmail.com", 1, 1);
call insert_employee("0000000005","Hop","Denton","ADMIN","Nehru","Cody","Sean","Ivory","asadsa","PROF","1st", "2017-2018", 1,"email5@gmail.com", 1, 1);
call insert_employee("0000000006","Isaiah","Herman","FACULTY","Mark","Quinn","Macaulay","Jerome","asadsa","PROF","1st", "2017-2018", 1,"email6@gmail.com", 1, 1);
call insert_employee("0000000007","Victor","Xanthus","ADMIN","Eric","Cade","Vincent","Leo","asadsa","PROF","1st", "2017-2018", 1,"email7@gmail.com", 1, 1);
call insert_employee("0000000008","Bert","Honorato","FACULTY","Gage","Kelly","Perry","Myles","asadsa","PROF","1st", "2017-2018", 1,"email8@gmail.com", 1, 1);
call insert_employee("0000000009","Noah","Gareth","FACULTY","Nissim","Jonah","Hashim","Emery","asadsa","PROF","1st", "2017-2018", 1,"email9@gmail.com", 1, 1);
call insert_employee("0000000000","Ryan","Keaton","ADMIN","Ralph","Ferdinand","Armando","Imogene","asadsa","PROF","1st", "2017-2018", 0,"email10@gmail.com", 1, 1);

-- call insert_study_credentials("MSCS", "UPLB","0000000001",1, 1);
-- call insert_study_credentials("MSCS", "UPLB","0000000002",1, 1);
-- call insert_study_credentials("MSCS", "UPLB","0000000003",1, 1);
-- call insert_study_credentials("MSCS", "UPLB","0000000004",1, 1);
-- call insert_study_credentials("MSCS", "UPLB","0000000005",1, 1);
-- call insert_study_credentials("MSCS", "UPLB","0000000006",1, 1);
-- call insert_study_credentials("MSCS", "UPLB","0000000007",1, 1);
-- call insert_study_credentials("MSCS", "UPLB","0000000008",1, 1);
-- call insert_study_credentials("MSCS", "UPLB","0000000009",1, 1);
-- call insert_study_credentials("MSCS", "UPLB","0000000000",1, 1);

call insert_extension(8,"Norman","Logan",1,3,"Arthur",('2:43:59'),('4:43:59'),"agency1", "0000000000");
call insert_extension(4,"Harper","Hamish",9,2,"Tarik",('2:43:59'),('4:43:59'),"agency2", "0000000001");
call insert_extension(4,"Mohammad","Reese",4,1,"Jason",('2:43:59'),('4:43:59'),"agency3", "0000000002");
call insert_extension(4,"Ishmael","Brody",9,9,"Elmo",('2:43:59'),('4:43:59'),"agency1", "0000000003");
call insert_extension(10,"Keaton","Phelan",9,9,"Allistair",('2:43:59'),('4:43:59'),"agency1", "0000000004");
call insert_extension(7,"Colorado","Christopher",10,7,"Hakeem",('2:43:59'),('4:43:59'),"agency1", "0000000005");
call insert_extension(8,"Mark","Jerome",9,1,"Holmes",('2:43:59'),('4:43:59'),"agency1", "0000000006");
call insert_extension(6,"Lucian","Amos",4,9,"Lester",('2:43:59'),('4:43:59'),"agency1", "0000000007");
call insert_extension(8,"Griffin","Hamish",10,2,"Hu",('2:43:59'),('4:43:59'),"agency1", "0000000008");
call insert_extension(3,"Brady","Kasper",5,6,"Basil",('2:43:59'),('4:43:59'),"agency3", "0000000009");


call insert_consultation(('2:30:01'),('2:30:01'), "schoogl", "monday", "0000000000");
call insert_consultation(('2:30:01'),('2:30:01'), "schogol", "monday", "0000000005");
call insert_consultation(('2:30:01'),('2:30:01'), "schouol", "monday" , "0000000000");
call insert_consultation(('2:30:01'),('2:30:01'), "schooyl", "monday" , "0000000004");
call insert_consultation(('2:30:01'),('2:30:01'), "schootl", "monday" , "0000000000");
call insert_consultation(('2:30:01'),('2:30:01'), "schoolr", "monday" , "0000000003");
call insert_consultation(('2:30:01'),('2:30:01'), "schoole", "monday" , "0000000000");
call insert_consultation(('2:30:01'),('2:30:01'), "schoolw", "monday" , "0000000002");
call insert_consultation(('2:30:01'),('2:30:01'), "schoosl", "monday" , "0000000000");
call insert_consultation(('2:30:01'),('2:30:01'), "schooal", "monday" , "0000000001");

call insert_position("aaron", 2, "A committee","0000000000");
call insert_position("aaron", 2, "B committee","0000000002");
call insert_position("aaron", 2, "A committee","0000000001");
call insert_position("aaron", 2, "A committee","0000000000");
call insert_position("aaron", 2, "A committee","0000000003");
call insert_position("aaron", 2,"A committee", "0000000004");
call insert_position("aaron", 2,"A committee", "0000000005");
call insert_position("aaron", 2, "A committee","0000000006");
call insert_position("aaron", 2, "A committee","0000000006");
call insert_position("aaron", 2, "A committee","0000000000");

call add_subject("cmsc 111", "a", 0, 0, 3, "a41", ('8:59:0'), ('9:59:0'));
call add_subject("cmsc 11", "k", 0, 0, 3, "a21", ('8:59:0'), ('9:59:0'));
call add_subject("cmsc 12", "l", 0, 0, 3, "a31", ('8:59:0'), ('9:59:0'));
call add_subject("cmsc 131", "m", 0, 0, 3, "a41", ('8:59:0'), ('9:59:0'));
call add_subject("cmsc 141", "n", 0, 0, 3, "a5l", ('8:59:0'), ('9:59:0'));
call add_subject("cmsc 151", "b", 0, 0, 3, "a41", ('8:59:0'), ('9:59:0'));
call add_subject("cmsc 1161", "v", 0, 0, 3, "a41", ('8:59:0'), ('9:59:0'));
call add_subject("cmsc 17", "c", 0, 0, 3, "q", ('8:59:0'), ('9:59:0'));
call add_subject("math 170", "x", 0, 0, 3, "a41", ('8:59:0'), ('9:59:0'));
call add_subject("cmsc 125", "z", 0, 0, 3, "a41", ('8:59:0'), ('9:59:0'));

call add_subject("CMSC 251", "A", 1, 1, 2, "PCLAB1", ('9:00:00'), ('11:0:0'));
call add_subject("CMSC 251", "K", 1, 1, 2, "PCLAB2", ('1:00:00'), ('12:0:0'));
call add_subject("CMSC 251", "J", 1, 1, 2, "PCLAB3", ('9:00:00'), ('13:0:0'));
call add_subject("CMSC 251", "I", 1, 1, 2, "PCLAB4", ('6:0:0'), ('14:0:0'));
call add_subject("CMSC 251", "H", 1, 1, 2, "PCLAB5", ('5:0:0'), ('15:0:0'));
call add_subject("CMSC 251", "G", 1, 1, 2, "PCLAB6", ('2:0:0'), ('16:0:0'));
call add_subject("CMSC 251", "F", 1, 1, 2, "PCLAB7", ('1:0:0'), ('17:0:0'));
call add_subject("CMSC 251", "E", 1, 1, 2, "PCLAB8", ('3:0:0'), ('18:0:0'));
call add_subject("CMSC 251", "D", 1, 1, 2, "PCLAB9", ('7:0:0'), ('19:0:0'));
call add_subject("CMSC 251", "C", 1, 1, 2, "PCLAB10", ('8:0:0'), ('10:0:0'));

call insert_teachingload(1, "0000000001", 12);
call insert_teachingload(2, "0000000002", 12);
call insert_teachingload(3, "0000000000", 12);
call insert_teachingload(4, "0000000000", 12);
call insert_teachingload(5, "0000000001", 12);
call insert_teachingload(6, "0000000003", 12);
call insert_teachingload(7, "0000000004", 12);
call insert_teachingload(8, "0000000005", 12);
call insert_teachingload(9, "0000000006", 12);
call insert_teachingload(10, "0000000007", 12);

call insert_studyload(3,"CMSC 200","0000000001","11:00:00","UPD",11);
call insert_studyload(3,"CMSC 210","0000000001","11:00:00","UPD",11);
call insert_studyload(3,"CMSC 220","0000000002","11:00:00","UPD",11);
call insert_studyload(3,"CMSC 230","0000000002","11:00:00","UPD",11);
call insert_studyload(3,"CMSC 240","0000000003","11:00:00","UPD",11);
call insert_studyload(3,"CMSC 250","0000000003","11:00:00","UPD",11);
call insert_studyload(3,"CMSC 260","0000000003","11:00:00","UPD",11);
call insert_studyload(3,"CMSC 10","0000000004","11:00:00","UPD",11);
call insert_studyload(3,"CMSC 20","0000000004","11:00:00","UPD",11);
call insert_studyload(3,"CMSC 200","0000000005","11:00:00","UPD",11);
call insert_studyload(3,"CMSC 20","0000000006","11:00:00","UPD",11);
call insert_studyload(3,"CMSC 00","0000000007","11:00:00","UPD",11);
call insert_studyload(3,"CMSC 20","0000000008","11:00:00","UPD",11);
call insert_studyload(3,"CMSC 25","0000000009","11:00:00","UPD",11);

call insert_publication(8,"9","agency1","whatever","Vice President","2018-10-04 18:45:43","2017-06-08 09:24:48","0000000003");
call insert_publication(1,"8","agency1","whatever","Vice President","2018-01-31 19:41:49","2018-09-12 19:55:38","0000000003");
call insert_publication(9,"5","agency1","whatever","Member","2017-11-16 15:02:24","2018-05-02 21:33:28","0000000001");
call insert_publication(5,"10","agency1","whatever","Vice President","2017-03-31 11:19:52","2018-06-30 11:35:49","0000000001");
call insert_publication(3,"6","agency1","whatever","Secretary","2018-09-06 13:29:22","2018-10-21 00:03:38","0000000003");
call insert_publication(6,"10","agency1","whatever","Member","2018-02-03 22:07:27","2018-10-01 03:07:04","0000000001");
call insert_publication(9,"5","agency1","whatever","Head","2018-06-16 20:55:02","2017-06-01 19:18:35","0000000001");
call insert_publication(10,"10","agency1","whatever","Secretary","2017-10-31 11:10:47","2018-08-15 08:00:00","0000000001");
call insert_publication(9,"1","agency1","whatever","Secretary","2018-02-20 16:18:35","2017-12-18 05:53:02","0000000000");
call insert_publication(8,"3","agency1","whatever","Head","2018-03-24 00:59:11","2018-11-17 09:38:07","0000000000");

call insert_coworker("0000000001",5);
call insert_coworker("0000000005",2);
call insert_coworker("0000000004",6);
call insert_coworker("0000000006",1);
call insert_coworker("0000000001",1);
call insert_coworker("0000000001",3);
call insert_coworker("0000000002",6);
call insert_coworker("0000000004",7);
call insert_coworker("0000000005",7);
call insert_coworker("0000000001",5);


call insert_faculty_grant("type", 1, "prof chair", "grantsada", "granttitle", "2018-10-04 18:45:43","2017-06-08 09:24:48", "0000000007");
call insert_faculty_grant("type", 1, "prof chair", "grantsada", "granttitle", "2018-10-04 18:45:43","2017-06-08 09:24:48", "0000000000");
call insert_faculty_grant("type", 1, "prof chair", "grantsada", "granttitle", "2018-10-04 18:45:43","2017-06-08 09:24:48", "0000000000");
call insert_faculty_grant("type", 1, "prof chair", "grantsada", "granttitle", "2018-10-04 18:45:43","2017-06-08 09:24:48", "0000000001");
call insert_faculty_grant("type", 1, "prof chair", "grantsada", "granttitle", "2018-10-04 18:45:43","2017-06-08 09:24:48", "0000000002");
call insert_faculty_grant("type", 1, "prof chair", "grantsada", "granttitle", "2018-10-04 18:45:43","2017-06-08 09:24:48", "0000000000");
call insert_faculty_grant("type", 1, "prof chair", "grantsada", "granttitle", "2018-10-04 18:45:43","2017-06-08 09:24:48", "0000000003");
call insert_faculty_grant("type", 1, "prof chair", "grantsada", "granttitle", "2018-10-04 18:45:43","2017-06-08 09:24:48", "0000000004");
call insert_faculty_grant("type", 1, "prof chair", "grantsada", "granttitle", "2018-10-04 18:45:43","2017-06-08 09:24:48", "0000000005");
call insert_faculty_grant("type", 1, "prof chair", "grantsada", "granttitle", "2018-10-04 18:45:43","2017-06-08 09:24:48", "0000000006");
