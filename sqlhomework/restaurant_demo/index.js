const pgp = require('pg-promise')(); //Make sure you immdiately call!
// require('pg-promise') return a function
//You have to call that fxn before you can connect to the database
//You normally don't pass anything in. But sometimes, you pass in debug info.


//2. Tell pg-promise to talk to my employees database
const db = pgp('postgress://localhost:5432/restaurant_demo');

// db.any('select * from restaurant_demo;')
//     .then(data => { // what you really want to do with the data
//       //  console.log(data);
//     })
//     .catch(err => {     
//         console.log('whoops!');
//         console.log(err);
//     })// if there's an error




const getReviewsByRetaurantId = id => {
    return db.any(`SELECT * FROM review WHERE restaurant_id = ${id}`)
        .then(review => {
            return review;
        })
        .catch(err => console.log(err))
    }


const getReviewsByAuthor = author => {
    return db.any(`
        SELECT * FROM review
        INNER JOIN reviewer
        ON reviewer.id = reviewer_id
        WHERE name = '${author}'`)
        .then(review => {
            return review;
        })
        .catch(err => console.log(err))
    }

const getAvgStarsByRestaurantName = () => {
    return db.any(`
    SELECT AVG(stars), name FROM review, restaurant
    WHERE review.restaurant_id = restaurant.id
    GROUP BY name`
        )
        .then(review => {
            return review;
        })
        .catch(err => console.log(err))
    }

const getNumberOfReviews = () => {
    return db.any(`
    SELECT COUNT(review), name FROM review, restaurant
    WHERE review.restaurant_id = restaurant.id
    GROUP BY name
    `)
        .then(review => {
            return review;
        })
        .catch(err => console.log(err))
    }

const getAllReviews = () => {
    return db.many(`
    SELECT reviewer.name, review.review, restaurant.name FROM restaurant
    INNER JOIN review
    ON review.restaurant_id = restaurant.id
    INNER JOIN reviewer
    ON review.reviewer_id = reviewer.id
    ORDER BY reviewer.name;
    `)
        .then(review => {
            return review;
        })
        .catch(err => console.log(err))
    }



    async function main() {
        //const reviewArray1 = await getReviewsByRetaurantId(1);
       // console.log(reviewArray1);
        
    //    const reviewArray2 = await getReviewsByAuthor("Kerry Cawthorne");
    //   console.log(reviewArray2);

    //    const reviewArray3 = await getAvgStarsByRestaurantName();
    //   console.log(reviewArray3);

    //    const reviewArray4 = await getNumberOfReviews();
    //   console.log(reviewArray4);

        const reviewArray5 = await getAllReviews();
        console.log(reviewArray5);
    }
    main();