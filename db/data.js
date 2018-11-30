'use strict';

const collections = [
  {
    'name': 'Korean BBQ',
    'createdAt': '2018-11-26T23:32:03.049Z',
    'updatedAt': '2018-11-26T23:32:03.049Z',
    'id': '5bfc827341ac9904b8e885da'
  },
  {
    'name': 'Tacos',
    'createdAt': '2018-11-26T23:32:10.579Z',
    'updatedAt': '2018-11-26T23:32:10.579Z',
    'id': '5bfc827a41ac9904b8e885db'
  },
  {
    'name': 'Sushi',
    'createdAt': '2018-11-26T23:32:14.833Z',
    'updatedAt': '2018-11-26T23:32:14.833Z',
    'id': '5bfc827e41ac9904b8e885dc'
  },
  {
    'name': 'Fast Food',
    'createdAt': '2018-11-26T23:32:19.679Z',
    'updatedAt': '2018-11-26T23:32:19.679Z',
    'id': '5bfc828341ac9904b8e885dd'
  },
];

const restaurants = [
  {
    'categories': [
      {
        'alias': 'korean',
        'title': 'Korean'
      },
      {
        'alias': 'bbq',
        'title': 'Barbeque'
      }
    ],
    'transactions': [],
    'name': 'Stone Grill',
    'yelpId': 'C4bl1EIuQ7CepSgdS-7MzA',
    'address': '703 S Vermont Ave, Los Angeles, CA 90005',
    'rating': 4,
    'price': '$$',
    'image': 'https://s3-media3.fl.yelpcdn.com/bphoto/As3psK5m7e6xgQ7xPho-ig/o.jpg',
    'url': 'https://www.yelp.com/biz/stone-grill-los-angeles-4?adjust_creative=VH9AYiv5GeoUPXMBOIdOZA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=VH9AYiv5GeoUPXMBOIdOZA',
    'reviewCount': 376,
    'phone': '(213) 368-0888',
    'collectionId': '5bfc827341ac9904b8e885da',
    'createdAt': '2018-11-26T23:45:17.596Z',
    'updatedAt': '2018-11-26T23:45:17.596Z',
    'id': '5bfc858dde9e276aac92a82e'
  },
  {
    'categories': [
      {
        'alias': 'korean',
        'title': 'Korean'
      },
      {
        'alias': 'bbq',
        'title': 'Barbeque'
      },
      {
        'alias': 'tapas',
        'title': 'Tapas Bars'
      }
    ],
    'transactions': [],
    'name': 'Quarters Korean BBQ',
    'yelpId': 'TsVu9GJQwuFBZVP_sg2k7A',
    'address': '3465 W 6th St, Los Angeles, CA 90020',
    'rating': 4,
    'price': '$$',
    'image': 'https://s3-media1.fl.yelpcdn.com/bphoto/aVERSMCB-wxJ7afk3hWiGA/o.jpg',
    'url': 'https://www.yelp.com/biz/quarters-korean-bbq-los-angeles?adjust_creative=VH9AYiv5GeoUPXMBOIdOZA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=VH9AYiv5GeoUPXMBOIdOZA',
    'reviewCount': 2207,
    'phone': '(213) 365-8111',
    'collectionId': '5bfc827341ac9904b8e885da',
    'createdAt': '2018-11-26T23:45:40.584Z',
    'updatedAt': '2018-11-26T23:45:40.584Z',
    'id': '5bfc85a4de9e276aac92a830'
  },
  {
    'categories': [
      {
        'alias': 'bbq',
        'title': 'Barbeque'
      },
      {
        'alias': 'korean',
        'title': 'Korean'
      }
    ],
    'transactions': [],
    'name': 'Kang Ho-dong Baekjeong',
    'yelpId': 'qAAoilHU25Qr45FOQlA19g',
    'address': '3465 W 6th St, Los Angeles, CA 90020',
    'rating': 4.5,
    'price': '$$',
    'image': 'https://s3-media3.fl.yelpcdn.com/bphoto/izhJQsGE5LZAHQb-WmNwSA/o.jpg',
    'url': 'https://www.yelp.com/biz/kang-ho-dong-baekjeong-los-angeles-4?adjust_creative=VH9AYiv5GeoUPXMBOIdOZA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=VH9AYiv5GeoUPXMBOIdOZA',
    'reviewCount': 3867,
    'phone': '(213) 384-9678',
    'collectionId': '5bfc827341ac9904b8e885da',
    'createdAt': '2018-11-26T23:45:41.328Z',
    'updatedAt': '2018-11-26T23:45:41.328Z',
    'id': '5bfc85a5de9e276aac92a831'
  },
  {
    'categories': [
      {
        'alias': 'argentine',
        'title': 'Argentine'
      },
      {
        'alias': 'bbq',
        'title': 'Barbeque'
      },
      {
        'alias': 'empanadas',
        'title': 'Empanadas'
      }
    ],
    'transactions': [
      'pickup'
    ],
    'name': 'ACA Grill',
    'yelpId': 'k2dhvRV0gtPoDWLuH2OMTQ',
    'address': '3062 W 8th St, Los Angeles, CA 90005',
    'rating': 4.5,
    'price': '$$',
    'image': 'https://s3-media2.fl.yelpcdn.com/bphoto/PSc26n1PdPPS78QwDDKmDw/o.jpg',
    'url': 'https://www.yelp.com/biz/aca-grill-los-angeles-2?adjust_creative=VH9AYiv5GeoUPXMBOIdOZA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=VH9AYiv5GeoUPXMBOIdOZA',
    'reviewCount': 398,
    'phone': '(213) 674-7708',
    'collectionId': '5bfc827341ac9904b8e885da',
    'createdAt': '2018-11-26T23:47:23.146Z',
    'updatedAt': '2018-11-26T23:47:23.146Z',
    'id': '5bfc860bde9e276aac92a833'
  },
];

module.exports = { restaurants, collections };