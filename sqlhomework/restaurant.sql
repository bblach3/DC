-- #2

-- CREATE TABLE restaurant(
--     id SERIAL PRIMARY KEY,
--     nameof varchar,
--     distance integer,
--     stars integer,
--     category varchar,
--     favorire_dish varchar,
--     does_takeout boolean,
--     last_time_ate date
-- );



-- 4. Insert Data
-- INSERT INTO restaurant VALUES
-- (DEFAULT, 'Tony Steak', 3, 1, 'American', 'Filet Mignon', TRUE, '2021-04-09'),
-- (DEFAULT, 'Sparks Steakhouse', 20, 2, 'American', 'Beef Wellington', TRUE, '2020-11-22'),
-- (DEFAULT, 'Ben Benson', 14, 3, 'Italian', 'Fetuccinni Alfredo', TRUE,'2020-06-14'),
-- (DEFAULT, 'Temporis', 9, 5, 'Thai', 'Shrimp Noddles', FALSE, '2021-02-18'),
-- (DEFAULT, 'Goosefoot', 6, 5, 'Mexican', 'Fish Tacos Ala Creme', FALSE, '2021-05-25');



-- 5. Writing Queries
-- SELECT nameof FROM restaurant WHERE stars=5;

-- SELECT favorire_dish FROM restaurant WHERE stars=5;

-- SELECT id FROM restaurant WHERE nameof= 'Tony Steak';

-- SELECT * FROM restaurant WHERE category= 'American';

-- SELECT * FROM restaurant WHERE does_takeout=TRUE;

-- SELECT * FROM restaurant WHERE does_takeout=TRUE AND category = 'Italian';

-- SELECT * FROM restaurant WHERE distance < 5;

-- SELECT * FROM restaurant WHERE last_time_ate < now() - interval '1 week';

-- SELECT * FROM restaurant WHERE last_time_ate < now() - interval '1 week' AND stars=5;



-- 6. Aggregation
-- SELECT * FROM restaurant ORDER BY distance ASC

-- SELECT * FROM restaurant ORDER BY distance ASC LIMIT 2

-- SELECT * FROM restaurant ORDER BY stars DESC LIMIT 2

-- SELECT * FROM restaurant WHERE distance < 10 ORDER BY stars DESC LIMIT 2 

-- SELECT COUNT(*) FROM restaurant

-- SELECT category, COUNT(*) FROM restaurant GROUP BY category

-- SELECT AVG(stars), category FROM restaurant GROUP BY category

-- SELECT MAX(stars), category FROM restaurant GROUP BY category


