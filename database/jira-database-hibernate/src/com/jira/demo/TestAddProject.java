package com.jira.demo;

import java.sql.Date;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.jira.entity.Person;
import com.jira.entity.Project;
import com.jira.entity.Task;

public class TestAddProject {

	public static void main(String[] args) {
		
		// Create SessionFactory
		
		SessionFactory factory = new Configuration()
				.configure("hibernate.cfg.xml")
				.addAnnotatedClass(Person.class)
				.addAnnotatedClass(Project.class)
				.addAnnotatedClass(Task.class)
				.buildSessionFactory();

		
		// Create Session
		
		Session session = factory.getCurrentSession();
		
		
		try {
			
			
			// begin transaction
			session.beginTransaction();
			

			// Create Project object 
			Project project1 = new Project("spring", "cwe", "https://", new Date(new java.util.Date().getTime()), new Date(new java.util.Date().getTime()));
			
	
			// save project1 in database
			session.save(project1);
			
//			System.out.println(">>> thao: Commit transaction");
			session.getTransaction().commit();
			
		} catch (Exception ex) {
			ex.printStackTrace();
		}

	}

}
