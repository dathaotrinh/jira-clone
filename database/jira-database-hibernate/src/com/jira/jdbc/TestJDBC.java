package com.jira.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;

public class TestJDBC {

	public static void main(String[] args) {
		try {
			String jdbcURL = "jdbc:mysql://localhost:3306/jira_clone?useSSL=false&serverTimezone=UTC";
			String user = "root";
			String pass = "root";
			
			Connection conn = DriverManager.getConnection(jdbcURL, user, pass);
			
			System.out.println("Connection successfull!");
		} catch(Exception ex) {
			ex.printStackTrace();
		}
	}

}
