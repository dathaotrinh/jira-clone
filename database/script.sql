drop schema if exists jira_clone;

create schema jira_clone;
use jira_clone;

drop table if exists project;

create table project (
	  project_id int auto_increment,
    project_title varchar(100) not null,
    project_key varchar(100) not null,
    project_image varchar(100),
    created_date timestamp,
    primary key project(project_id)
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
	  fk_project_id int not null,
    fk_task_id int not null,
    primary key project_task(fk_project_id, fk_task_id),
    constraint fk_project foreign key (fk_project_id)
    references project(project_id),
    constraint fk_task foreign key (fk_task_id)
    references task(task_id)
);
