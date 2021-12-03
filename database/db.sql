CREATE DATABASE projectsdb

CREATE TABLE projects {
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) UNIQUE,
  description VARCHAR(255),
}