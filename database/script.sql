drop schema if exists jira_clone;

create schema jira_clone;
use jira_clone;

-- project related database

drop table if exists project;

create table project (
	project_id int auto_increment not null,
    project_title text not null,
    project_key varchar(100) not null,
    project_image varchar(100),
    created_date timestamp not null,
    primary key project(project_id)
);


-- person related database

drop table if exists person;

create table person (
		person_id int auto_increment not null,
		first_name varchar(100) not null,
		last_name varchar(100) not null,
		image_url varchar(100),
		primary key person(person_id)
);

drop table if exists project_person;

create table project_person (
		person_id int not null,
		project_id int  not null,
		role bool not null,  -- f is assignee t is lead
        primary key project_person(person_id, project_id),
        constraint fk_person_project foreign key (person_id)
        references person(person_id),
        constraint fk_project_person foreign key (project_id)
        references project(project_id)
);

drop table if exists auth;

create table auth (
	auth_id int not null,
	username varchar(100) not null,
	password varchar(100) not null,
	email varchar(100) not null,
	fk_person_id int not null,
	primary key auth(auth_id),
	constraint fk_person foreign key (fk_person_id)
	references person(person_id)
);


-- task related database

drop table if exists task;

create table task (
  	task_id int auto_increment not null,
    task_title text not null,
    task_description text not null,
    task_attachment text,
    created_date timestamp not null,
    last_updated timestamp not null,
    primary key task(task_id)
);

-- status

drop table if exists status;

create table status (
  	status_id int auto_increment not null,
    backlog bool not null,
    selected bool not null,
    inprogress bool not null,
	done bool not null,
    primary key status(status_id)
);

drop table if exists task_status;

create table task_status (
		task_id int not null,
		status_id int not null,
		primary key task_status(task_id, status_id),
		constraint fk_task_status foreign key (task_id)
		references task(task_id),
		constraint fk_status_task foreign key (status_id)
		references status(status_id)
);

-- type

drop table if exists type;

create table type (
  	type_id int auto_increment not null, 
    story bool not null,
    bug bool not null,
    epic bool not null,
		task bool not null,
    primary key type(type_id)
);

drop table if exists task_type;

create table task_type (
		task_id int not null,
		type_id int not null,
		primary key task_status(task_id, type_id),
		constraint fk_task_type foreign key (task_id)
		references task(task_id),
		constraint fk_type_task foreign key (type_id)
		references type(type_id)
);

-- priority

drop table if exists priority;

create table priority (
  	priority_id int auto_increment not null,
    highest bool not null,
    high bool not null,
    medium bool not null,
		low bool not null,
		lowest bool not null,
    primary key priority(priority_id)
);

drop table if exists task_priority;

create table task_priority (
		task_id int not null,
		priority_id int not null,
		primary key task_priority(task_id, priority_id),
		constraint fk_task_priority foreign key (task_id)
		references task(task_id),
		constraint fk_priority_task foreign key (priority_id)
		references priority(priority_id)
);

-- project

drop table if exists project_task;

create table project_task (
	project_id int not null,
    task_id int not null,
    primary key project_task(project_id, task_id),
    constraint fk_project_task foreign key (project_id)
    references project(project_id),
    constraint fk_task_project foreign key (task_id)
    references task(task_id)
);

drop table if exists task_person;

create table task_person (
		task_id int not null,
		person_id int not null,
		primary key task_person(task_id, person_id),
		constraint fk_task_person foreign key (task_id)
		references task(task_id),
		constraint fk_person_task foreign key (person_id)
		references person(person_id)
);

-- comment table

drop table if exists comment;

create table comment (
  	comment_id int auto_increment not null,
    content text not null,
    created_date timestamp not null,
	fk_task_id int not null,
    primary key comment(comment_id)
);


drop table if exists comment_person;

create table comment_person (
		person_id int not null,
		comment_id int auto_increment not null,
		primary key comment_person(comment_id, person_id),
		constraint fk_comment_person foreign key (comment_id)
		references comment(comment_id),
		constraint fk_person_comment foreign key (person_id)
		references person(person_id)
);
