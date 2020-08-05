drop schema if exists jira_clone;

create schema jira_clone;
use jira_clone;

-- project related database

drop table if exists project;

create table project (
	project_id int auto_increment not null,
    project_title text not null,
    project_key varchar(100) not null,
    project_url varchar(100),
    created_date timestamp not null,
    last_updated timestamp not null,
    role varchar(10) not null,
    person_id int not null,
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
		-- role bool not null,  -- f is assignee t is lead
        primary key project_person(person_id, project_id),
        constraint fk_person_project foreign key (person_id)
        references person(person_id),
        constraint fk_project_person foreign key (project_id)
        references project(project_id)
);

-- task related database

drop table if exists task;

create table task (
  	task_id int auto_increment not null,
    task_title text not null,
    task_description text not null,
    task_attachment text,
    task_type int not null, -- 0 story 1 bug 2 epic 3 task
    task_status int not null, -- 0 backlog 1 selected 2 inprogress 3 done
    task_priority int not null, -- 0 lowest 1 low 2 medium 3 high 4 highest
    created_date timestamp not null,
    last_updated timestamp not null,
    primary key task(task_id)
);

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