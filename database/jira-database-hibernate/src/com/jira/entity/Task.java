package com.jira.entity;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="task")
public class Task {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="task_id")
	private int taskId;
	
	@Column(name="task_title")
	private String taskTitle;
	
	@Column(name="task_description")
	private String taskDescription;
	
	@Column(name="task_attachment")
	private String taskAttachment;
	
	@Column(name="created_date")
	private Date createdDate;
	
	@Column(name="last_updated")
	private Date lastUpdated;

	
	public Task() {
		
	}
	
	public Task(String taskTitle, String taskDescription, String taskAttachment, Date createdDate, Date lastUpdated) {
		this.taskTitle = taskTitle;
		this.taskDescription = taskDescription;
		this.taskAttachment = taskAttachment;
		this.createdDate = createdDate;
		this.lastUpdated = lastUpdated;
	}

	public int getTaskId() {
		return taskId;
	}

	public void setTaskId(int taskId) {
		this.taskId = taskId;
	}

	public String getTaskTitle() {
		return taskTitle;
	}

	public void setTaskTitle(String taskTitle) {
		this.taskTitle = taskTitle;
	}

	public String getTaskDescription() {
		return taskDescription;
	}

	public void setTaskDescription(String taskDescription) {
		this.taskDescription = taskDescription;
	}

	public String getTaskAttachment() {
		return taskAttachment;
	}

	public void setTaskAttachment(String taskAttachment) {
		this.taskAttachment = taskAttachment;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getLastUpdated() {
		return lastUpdated;
	}

	public void setLastUpdated(Date lastUpdated) {
		this.lastUpdated = lastUpdated;
	}

	@Override
	public String toString() {
		return "Task [taskId=" + taskId + ", taskTitle=" + taskTitle + ", taskDescription=" + taskDescription
				+ ", taskAttachment=" + taskAttachment + ", createdDate=" + createdDate + ", lastUpdated=" + lastUpdated
				+ "]";
	}
    
}
