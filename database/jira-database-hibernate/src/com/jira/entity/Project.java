package com.jira.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="jira_clone")
public class Project {

	@Id
	@Column(name="project_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int projectId;
	
	@Column(name="project_title")
	private String projectTitle;
	
	@Column(name="project_key")
	private String projectKey;
	
	@Column(name="project_url")
	private String projectUrl;

	@Column(name="created_date")
	private Date createDate;
	
	

	public Project() {

	}

	public Project(String projectTitle, String projectKey, String projectUrl, Date createDate) {
		this.projectTitle = projectTitle;
		this.projectKey = projectKey;
		this.projectUrl = projectUrl;
		this.createDate = createDate;
	}

	public int getProjectId() {
		return projectId;
	}

	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}

	public String getProjectTitle() {
		return projectTitle;
	}

	public void setProjectTitle(String projectTitle) {
		this.projectTitle = projectTitle;
	}

	public String getProjectKey() {
		return projectKey;
	}

	public void setProjectKey(String projectKey) {
		this.projectKey = projectKey;
	}

	public String getProjectUrl() {
		return projectUrl;
	}

	public void setProjectUrl(String projectUrl) {
		this.projectUrl = projectUrl;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	@Override
	public String toString() {
		return "Project [projectId=" + projectId + ", projectTitle=" + projectTitle + ", projectKey=" + projectKey
				+ ", projectUrl=" + projectUrl + ", createDate=" + createDate + "]";
	}
	
	
	
}
