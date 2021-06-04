-- 1. and 2. Restaurant DB V2:

-- CREATE DATABASE restaurant2;

-- CREATE TABLE restaurant(
--     id SERIAL PRIMARY KEY,
--     name varchar(25),
--     address varchar(100),
--     category varchar(25)
-- );

-- CREATE TABLE reviewer(
--     id SERIAL PRIMARY KEY,
--     name varchar(25),
--     email varchar,
--     karma integer CHECK(karma BETWEEN 0 AND 7)
-- );

-- CREATE TABLE review(
--     id SERIAL PRIMARY KEY,
--     reviewer_id integer REFERENCES reviewer(id),
--     stars integer CHECK(stars BETWEEN 1 AND 5),
--     title varchar(50),
--     review varchar,
--     restaurant_id integer REFERENCES restaurant(id)
-- );




-- 3. Enter Data:

-- INSERT INTO restaurant VALUES
-- (DEFAULT, 'Tony Steak', '123 N. Halsted St., Chicago, Il','American'),
-- (DEFAULT, 'Sparks Steakhouse', '2341 W. Harrison St., Chicago, Il', 'American'),
-- (DEFAULT, 'Ben Benson', '40 N. Clark St., Evanston, Il','Italian'),
-- (DEFAULT, 'Temporis', '3452 W. Cermak Ave., Berwyn, Il', 'Thai'),
-- (DEFAULT, 'Goosefoot', '32 N. Harlem Ave., Oak Park, Il', 'Mexican' );

-- INSERT INTO reviewer VALUES
-- (DEFAULT, 'Jason Spark', 'jasons@aol.com',1),
-- (DEFAULT, 'Ken More', 'kenm@yahoo.com', 3),
-- (DEFAULT, 'Peter Salone', 'peters@gmail.com', 5),
-- (DEFAULT, 'Mary Gionne', 'maryg@altavista.net', 7);

-- INSERT INTO review VALUES
-- (DEFAULT, 1, 5, 'Plenty to Like', 'Good steaks, good side dishes, variety of drinks, decent customer service.', 1),
-- (DEFAULT, 1, 3, 'Somewhat Overrated','Good food, but that is about it. There was as long wait for the waiter and food took even longer to arrive.', 2),
-- (DEFAULT, 2, 4, 'Classic', 'This restaurant has all the dishes from Mexican cusine you can imagine. Service is decent but interior upkeep is lacking', 5),
-- (DEFAULT, 3, 5, 'The Best', 'This is simply the best Mexican restaurant in the area. The food is top notch, the service is great, and prices are unbeatable.', 5),
-- (DEFAULT, 3, 2, 'Terrible', 'After a very long wait food arrived rather cold. Very pricy drinks, and bathroom was filthy.', 2),
-- (DEFAULT, 4, 5, 'True Thai', 'The most authentic Thai restaurant without actually going to Thailand. Excelelent service and low prices.', 4),
-- (DEFAULT, 4, 1, 'Avoid', 'This place is extremely pricy for what you get. Postions are tiny, very small selection of drinks, and waiters are rude. Will not be back', 3);



-- 4. Queries:
-- SELECT * FROM review WHERE restaurant_id = '2'

-- SELECT * FROM review
-- INNER JOIN restaurant
-- ON restaurant.id = restaurant_id
-- WHERE name = 'Sparks Steakhouse'

-- SELECT * FROM review
-- INNER JOIN reviewer
-- ON reviewer.id = reviewer_id
-- WHERE name = 'Peter Salone'

-- SELECT name, review FROM review, restaurant
-- WHERE review.restaurant_id = restaurant.id

-- SELECT AVG(stars), name FROM review, restaurant
-- WHERE review.restaurant_id = restaurant.id
-- GROUP BY name

-- SELECT COUNT(review), name FROM review, restaurant
-- WHERE review.restaurant_id = restaurant.id
-- GROUP BY name

SELECT reviewer.name, review.title, review.review, restaurant.name FROM restaurant
INNER JOIN review
ON review.restaurant_id = restaurant.id
INNER JOIN reviewer
ON review.reviewer_id = reviewer.id
ORDER BY reviewer.name;

