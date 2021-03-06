///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

const pizza = {
    name: 'Cheesy Madness', 
    price: '17.99',
    category: 'Heavyweight appetizer',
    popularity: '7.5/10',
    rating: '4 stars',
    tags: 'For: Heavyweight children due to cheese, more cheese, extra more cheese, a dash of slightly more cheese. Note: this is not for lactose-intoletant people.',
};



//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

console.log (pizza.popularity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

console.log (pizza.tags)


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/
pizza.price = '15.99'
let {price} = pizza
console.log(price)


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

let {category} = pizza
console.log(category)


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

const foodArr = [
     {
    name: 'Texas Slammer', 
    price: '8.99',
    category: 'Meal',
    popularity: '8/10',
    rating: '4 stars',
    tags: 'Glueten-free. 1000 calories.',
},

 {
    name: 'Glizzy Gobbler', 
    price: '4.99',
    category: 'Main Course',
    popularity: '5/10',
    rating: '3 stars',
    tags: '650 calories. Toppings included.',
},



{
    name: 'Automatic brainfreeze', 
    price: '2.99',
    category: 'Drink',
    popularity: '6/10',
    rating: '2.5 stars',
    tags: 'Gluten-free. Sugar-free. No high-fructose corn syrup.',
},


 {
    name: 'Little guys', 
    price: '6.99',
    category: 'Side/ main meal',
    popularity: '5/10',
    rating: '2 stars',
    tags: '6 chicken tenders. Made with real Chicken.',
},

{
    name: 'Fish Fellet', 
    price: '15.99',
    category: 'Side-dish',
    popularity: '9/10',
    rating: '4 stars',
    tags: '12 pieces. Vegitarian platter optional. ',
}
]







//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

const glutenFree = foodArr.filter ((foodObj) => foodObj.tags.split(' ').includes('Gluten-free.'))
// console.log (glutenFree)
// const filteredFood = foodArr.filter(/* CALLBACK HERE */)



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

function filterByProperty(property, number, type) {
let filterFood = foodArr.filter(function (foodObj){
    if (type === 'above') {
        return parseInt(foodObj[property]) > number; 
    } else {
        return parseInt(foodObj[property]) < number;
    }
}); 
    return filterFood
}


// console.log(parseInt('9/10'))




/*
Invoke the `filterByProperty` function passing
in a value for each paramter.

You'll have to console.log to see the filtered array
*/

console.log(filterByProperty("popularity", 6, "above"))
//CODE HERE