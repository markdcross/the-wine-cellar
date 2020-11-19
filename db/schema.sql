DROP DATABASE IF EXISTS thewinecellar_db;
CREATE DATABASE thewinecellar_db;
USE thewinecellar_db;

CREATE TABLE wines (
    id INT NOT NULL AUTO_INCREMENT,
    wine_name VARCHAR(200),
    winery VARCHAR(200),
    style VARCHAR(20),
    description TEXT,
    rating INT,
    consumed BOOLEAN DEFAULT false
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO wines (wine_name, winery, style, description, rating) VALUES ('Drama', 'Something Spanish', 'Red Blend', 'Fruity', 3);
INSERT INTO wines (wine_name, winery, style, description, rating) VALUES ('Crush', 'Dreaming Tree', 'Red Blend', 'Great', 4);
INSERT INTO wines (wine_name, winery, style, description, rating) VALUES ('Petit et petit', 'Michael David', 'Syrah Blend', 'Big and bold', 4);
INSERT INTO wines (wine_name, winery, style, description, rating) VALUES ('Buttercream', 'WD', 'Chardonnay', 'Buttery', 2);
