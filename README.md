# Restaurant App

A template for developing and deploying Node.js apps.

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

