package com.jira.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.jira.entity.Person;
import com.jira.entity.Project;
import com.jira.entity.Task;

public class TestAddPerson {

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
			
			// Create Person object 
			Person person1 = new Person("Uyen", "Trinh", "https://", "assignee");
			
			
			project.addPerson(person1);
			
			// save person1 in database
			System.out.println(">>> thao: Save person1: " + person1);
			session.save(person1);
			
			System.out.println(">>> thao: Commit transaction");
			session.getTransaction().commit();
			
		} catch (Exception ex) {
			ex.printStackTrace();
		}

	}

}
