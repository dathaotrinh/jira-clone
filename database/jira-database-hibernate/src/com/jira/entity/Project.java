package com.jira.entity;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name="project")
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
	@CreationTimestamp
	private Date createdDate;

	@Column(name="last_updated")
	@UpdateTimestamp
	private Date lastUpdated;
	
	@OneToMany(cascade=CascadeType.ALL, fetch=FetchType.LAZY, targetEntity=Person.class)
	@JoinColumn(name="project_id_fk", referencedColumnName="person_id")
	private List<Person> persons;
	
	public Project() {

	}

	


	public Project(String projectTitle, String projectKey, String projectUrl, Date createdDate, Date lastUpdated) {
		this.projectTitle = projectTitle;
		this.projectKey = projectKey;
		this.projectUrl = projectUrl;
		this.createdDate = createdDate;
		this.lastUpdated = lastUpdated;
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
		return createdDate;
	}

	public void setCreateDate(Date createDate) {
		this.createdDate = createDate;
	}

	
	public List<Person> getPersons() {
		return persons;
	}


	public void setPersons(List<Person> persons) {
		this.persons = persons;
	}

	public void addPerson(Person person) {
		if(this.persons == null) {
			this.persons = new ArrayList<>();
		}
		this.persons.add(person);
	}


	@Override
	public String toString() {
		return "Project [projectId=" + projectId + ", projectTitle=" + projectTitle + ", projectKey=" + projectKey
				+ ", projectUrl=" + projectUrl + ", createDate=" + createdDate +  "]";
	}

	
}
