DROP DATABASE IF EXISTS thewinecellar_db;
CREATE DATABASE thewinecellar_db;
USE thewinecellar_db;

CREATE TABLE wines (
    id INT NOT NULL AUTO_INCREMENT,
    wine VARCHAR(200),
    winery VARCHAR(200),
    style VARCHAR(20),
    description TEXT,
    rating INT,
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP,
    PRIMARY KEY (id)
);