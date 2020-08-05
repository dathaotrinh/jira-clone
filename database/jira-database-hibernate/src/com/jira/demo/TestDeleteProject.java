package com.jira.demo;

import java.sql.Date;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.jira.entity.Person;
import com.jira.entity.Project;

public class TestDeleteProject {

	public static void main(String[] args) {
		
		// Create SessionFactory
		
		SessionFactory factory = new Configuration()
				.configure("hibernate.cfg.xml")
				.addAnnotatedClass(Person.class)
				.addAnnotatedClass(Project.class)
				.buildSessionFactory();

		
		// Create Session
		
		Session session = factory.getCurrentSession();
		
		
		try {
			
			// begin transaction
			session.beginTransaction();
						

			// Create Project object 
			Project project1 = session.get(Project.class, 3);
		
			
			session.delete(project1);
		
			
			
			
			System.out.println(">>> thao: Commit transaction");
			session.getTransaction().commit();
			
		} catch (Exception ex) {
			ex.printStackTrace();
		}

	}

}
