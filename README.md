# Restaurant App

Ever have trouble deciding where to eat? The restaurant app makes deciding where to eat easy and exciting.
The Restaurant App allows users to create collections with restaurants that can be randomized at a click of a 
button. The randomize button randomly generates a suggested restaurant that you should eat at from your list 
of restaurants from your currently selected collection. Spend less time deciding and more time eating!

Not only does the app allow users to randomize a restaurant from a selected collection, you can also randomly
select the collection as well. For example, if you had collections named 'Italian', 'American', and 'Tacos', 
hitting the randomize collections button will randomly select a collection for you. Lets say the 'Tacos' collection
was randomly selected by our randomize function, the list of restaurants added to that collection will be listed
in the restaurants list section of the webpage. Users can then randomize a restaurant from the 'Tacos' collection
or manually select a restaurant to view details by clicking on the restaurants name. 

When a restaurant is clicked on, the restaurant details page will be loaded at the top of the page. The details
for the restaurant will be displayed using data from the Yelp Fusion database. The data being included at this 
time is address, phone number, Yelp rating, price ($ - $$$$), Yelp review count, Yelp categories, and transactions type.
Clicking on the restaurant title as well as any Yelp logos will link you directly to the Yelp page for the selected
restaurant.

The restaurant integrates the Yelp Fusion API to provide users with the ability to make search requests that return
restaurants from the Yelp Fusion Database. In the search for a restaurant section, enter any search term in the 
search field. For example you can search for terms as broad as 'food' or be as specific as searching for a restaurant
by name such as 'Howlin' Ray's'. After entering a search term, users are provided with the option of entering a city 
for location. The search will then make the request and return results based on the location you've provided. The
final search option is selecting the state in which you would like to search for restaurants. Select one of the fifty 
states from the dropdown box and click on search to submit your request!

After the search request is submitted, users will see a list of restaurants returned by the Yelp Fusion API. Each
result has restaurant details in addition to direct links to the restaurants Yelp page. A '+ Add Restaurant' button
is located at the top right of every restaurant result. Click on the '+ Add Restaurant' button to add the restaurant
to your currently selected Collection and the restaurant will be added to the bottom of your list.

- - -  

## Link to Restaurant App

https://thomas-restaurant-app-client.herokuapp.com/

- - -

## Tech Stack

* React for the frontend
* Redux for state management
* Node for the backend
* MongoDB or the database
* Enzyme, Chai, Mocha for testing

- - - 

## Code Description

The restaurant app is integrated with the Yelp Fusion API. For personal use, you need to place your unqiue Yelp Fusion API Key into a .env file.

- - -

## Schemas

**Collection**

```
{
    name: String,
}
```

**Restaurant**

```
{
    name: String,
    yelpId: String,
    address: String,
    rating: Number,
    price: String,
    image: String,
    url: String,
    categories: Array,
    reviewCount: Number,
    transactions: Array,
    phone: String,
    collectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Collection' },
}
```

**YelpRestaurant**

```
{
    name: String,
    yelpId: String,
    rating: Number,
    price: String,
    address: String,
    collectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Collection' },
}
```

**YelpSearch**

```
{
    searchResult: Array,
}
```

## API Endpoints

All requests and responses are in JSON format.

**Collections**

GET request to endpoint /api/collections will retrieve all collections.

POST request to endpoint /api/collections is for users to create a new Collection. It accepts the following request body:

```
{
    name,
}
```

DELETE request to endpoint /api/collections/:id will delete selected restaurant.

**Restaurants**

GET request to endpoint /api/restaurants will retrieve all restaurants.

POST request to endpoint /api/restaurants is for users to add a new restaurant to collection.

```
{
    name, 
    yelpId, 
    address, 
    rating, 
    price, 
    image, 
    url, 
    categories, 
    reviewCount, 
    transactions, 
    phone, 
    collectionId,
}
```

DELETE request to endpoint /api/restaurants/:id will delete selected restaurant.