drop schema if exists jira_clone;

create schema jira_clone;
use jira_clone;

drop table if exists project;

create table project (
	  project_id varchar(100),
    project_title varchar(100) not null,
    project_key varchar(100) not null,
    project_image varchar(100),
    created_date timestamp,
    primary key project(project_id)
);


drop table if exists person;

create table person (
		person_id varchar(100) not null,
		first_name varchar(100) not null,
		last_name varchar(100) not null,
		image_url varchar(100),
		primary key person(person_id)
);

drop table if exists project_person;

create table project_person (
		person_id varchar(100)  not null,
		project_id varchar(100)  not null,
		role bit not null,  -- 0 is assignee 1 is lead
        primary key project_person(person_id, project_id),
        constraint fk_person_project foreign key (person_id)
        references person(person_id),
        constraint fk_project_person foreign key (project_id)
        references project(project_id)
);

drop table if exists auth;

create table auth (
	auth_id varchar(100) not null,
	username varchar(100) not null,
	password varchar(100) not null,
	email varchar(100) not null,
	fk_person_id varchar(100) not null,
	primary key auth(auth_id),
	constraint fk_person foreign key (fk_person_id)
	references person(person_id)
);



drop table if exists task;

create table task (
  	task_id int auto_increment,
    task_title varchar(100) not null,
    task_description varchar(100) not null,
    task_attachment varchar(100),
    created_date timestamp,
    last_updated timestamp,
    primary key task(task_id)
);

drop table if exists project_task;

create table project_task (
	project_id varchar(100) not null,
    task_id int not null,
    primary key project_task(project_id, task_id),
    constraint fk_project_task foreign key (project_id)
    references project(project_id),
    constraint fk_task_project foreign key (task_id)
    references task(task_id)
);
