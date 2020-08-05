package com.jira.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.jira.entity.Person;
import com.jira.entity.Project;
import com.jira.entity.Task;

public class TestGetPersons {

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
			
			int id = 1; 
			
			Project project = session.get(Project.class, id);
		
			
			// save person1 in database
			System.out.println(">>> thao: " + project.getPersons());

			
		} catch (Exception ex) {
			ex.printStackTrace();
		}

	}

}
