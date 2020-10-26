import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from "axios";
import AdoptableCats from '../AdoptableCats/AdoptableCats';
import AdoptableCritters from '../AdoptableCritters/AdoptableCritters';
import AdoptableDogs from '../AdoptableDogs/AdoptableDogs';
import './adoptableAnimals.scss'

class AdoptableAnimals extends React.Component {

    state = {
        selectedAnimal: '',
        animals: [{
            "id": 49599739,
            "organization_id": "AZ663",
            "url": "https://www.petfinder.com/cat/banjo-49599739/az/phoenix/twisted-tails-cat-rescue-az663/?referrer_id=1b2d2bc9-be05-46c5-9255-8a3cc4f353ca",
            "type": "Cat",
            "species": "Cat",
            "breeds": {
                "primary": "Tabby",
                "secondary": "Domestic Short Hair",
                "mixed": true,
                "unknown": false
            },
            "colors": {
                "primary": "Orange & White",
                "secondary": null,
                "tertiary": null
            },
            "age": "Young",
            "gender": "Male",
            "size": "Medium",
            "coat": "Short",
            "attributes": {
                "spayed_neutered": true,
                "house_trained": true,
                "declawed": false,
                "special_needs": false,
                "shots_current": true
            },
            "environment": {
                "children": true,
                "dogs": null,
                "cats": true
            },
            "tags": [],
            "name": "Banjo",
            "description": "Banjo is litter box trained. Neutered, up to date on vaccinations, microchipped and tested negative for Felv/fiv.\n\nGood with children...",
            "organization_animal_id": null,
            "photos": [
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599739/1/?bust=1603673402&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599739/1/?bust=1603673402&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599739/1/?bust=1603673402&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599739/1/?bust=1603673402"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599739/2/?bust=1603673402&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599739/2/?bust=1603673402&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599739/2/?bust=1603673402&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599739/2/?bust=1603673402"
                }
            ],
            "primary_photo_cropped": {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599739/1/?bust=1603673402&width=300",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599739/1/?bust=1603673402&width=450",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599739/1/?bust=1603673402&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599739/1/?bust=1603673402"
            },
            "videos": [],
            "status": "adoptable",
            "status_changed_at": "2020-10-26T00:50:21+0000",
            "published_at": "2020-10-26T00:50:21+0000",
            "distance": null,
            "contact": {
                "email": "rescue@twistedtailsrescue.org",
                "phone": "(805) 635-7297",
                "address": {
                    "address1": null,
                    "address2": null,
                    "city": "Phoenix",
                    "state": "AZ",
                    "postcode": "85053",
                    "country": "US"
                }
            },
            "_links": {
                "self": {
                    "href": "/v2/animals/49599739"
                },
                "type": {
                    "href": "/v2/types/cat"
                },
                "organization": {
                    "href": "/v2/organizations/az663"
                }
            }
        },
        {
            "id": 49599744,
            "organization_id": "IA74",
            "url": "https://www.petfinder.com/cat/ember-49599744/ia/monticello/animal-welfare-friends-ia74/?referrer_id=1b2d2bc9-be05-46c5-9255-8a3cc4f353ca",
            "type": "Cat",
            "species": "Cat",
            "breeds": {
                "primary": "Domestic Short Hair",
                "secondary": null,
                "mixed": true,
                "unknown": false
            },
            "colors": {
                "primary": null,
                "secondary": null,
                "tertiary": null
            },
            "age": "Adult",
            "gender": "Female",
            "size": "Medium",
            "coat": null,
            "attributes": {
                "spayed_neutered": true,
                "house_trained": true,
                "declawed": false,
                "special_needs": false,
                "shots_current": true
            },
            "environment": {
                "children": true,
                "dogs": null,
                "cats": null
            },
            "tags": [],
            "name": "Ember",
            "description": "Ember is a domestic shorthair that was born around April 2019 and weighs 8 pounds.\n\nHer adoption fee is $75....",
            "organization_animal_id": "16151482",
            "photos": [],
            "primary_photo_cropped": null,
            "videos": [],
            "status": "adoptable",
            "status_changed_at": "2020-10-26T00:49:24+0000",
            "published_at": "2020-10-26T00:49:24+0000",
            "distance": null,
            "contact": {
                "email": "wesavepets@netins.net",
                "phone": "(319) 975-8283",
                "address": {
                    "address1": "22407 Bus Hwy 151",
                    "address2": null,
                    "city": "Monticello",
                    "state": "IA",
                    "postcode": "52310",
                    "country": "US"
                }
            },
            "_links": {
                "self": {
                    "href": "/v2/animals/49599744"
                },
                "type": {
                    "href": "/v2/types/cat"
                },
                "organization": {
                    "href": "/v2/organizations/ia74"
                }
            }
        },
        {
            "id": 49599742,
            "organization_id": "NY520",
            "url": "https://www.petfinder.com/cat/erika-49599742/ny/massapequa/all-about-spay-neuter-inc-ny520/?referrer_id=1b2d2bc9-be05-46c5-9255-8a3cc4f353ca",
            "type": "Cat",
            "species": "Cat",
            "breeds": {
                "primary": "Domestic Short Hair",
                "secondary": null,
                "mixed": false,
                "unknown": false
            },
            "colors": {
                "primary": "Black & White / Tuxedo",
                "secondary": null,
                "tertiary": null
            },
            "age": "Baby",
            "gender": "Female",
            "size": "Medium",
            "coat": null,
            "attributes": {
                "spayed_neutered": true,
                "house_trained": true,
                "declawed": false,
                "special_needs": false,
                "shots_current": true
            },
            "environment": {
                "children": null,
                "dogs": null,
                "cats": null
            },
            "tags": [],
            "name": "Erika",
            "description": "Please contact Alicia (aasnadoptions@gmail.com), (516) 510-6738 for more information about this pet.Meet Erika a beautiful black and white female kitten....",
            "organization_animal_id": "16185770",
            "photos": [],
            "primary_photo_cropped": null,
            "videos": [],
            "status": "adoptable",
            "status_changed_at": "2020-10-26T00:49:22+0000",
            "published_at": "2020-10-26T00:49:22+0000",
            "distance": null,
            "contact": {
                "email": "AASNAdoptions@gmail.com",
                "phone": "(516) 510-6738",
                "address": {
                    "address1": "4209 Merrick Road",
                    "address2": null,
                    "city": "Massapequa",
                    "state": "NY",
                    "postcode": "11758",
                    "country": "US"
                }
            },
            "_links": {
                "self": {
                    "href": "/v2/animals/49599742"
                },
                "type": {
                    "href": "/v2/types/cat"
                },
                "organization": {
                    "href": "/v2/organizations/ny520"
                }
            }
        },
        {
            "id": 49599668,
            "organization_id": "NJ947",
            "url": "https://www.petfinder.com/cat/buzz-49599668/nj/green-brook/carls-cats-inc-nj947/?referrer_id=1b2d2bc9-be05-46c5-9255-8a3cc4f353ca",
            "type": "Cat",
            "species": "Cat",
            "breeds": {
                "primary": "Domestic Short Hair",
                "secondary": null,
                "mixed": false,
                "unknown": false
            },
            "colors": {
                "primary": "Black & White / Tuxedo",
                "secondary": null,
                "tertiary": null
            },
            "age": "Baby",
            "gender": "Male",
            "size": "Medium",
            "coat": "Short",
            "attributes": {
                "spayed_neutered": false,
                "house_trained": true,
                "declawed": false,
                "special_needs": false,
                "shots_current": true
            },
            "environment": {
                "children": true,
                "dogs": null,
                "cats": true
            },
            "tags": [],
            "name": "Buzz",
            "description": "Buzz and Budd were rescued on Tallwood Lane in Green Brook on September 3, 2020.  Their brother, Bear has been...",
            "organization_animal_id": null,
            "photos": [
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599668/1/?bust=1603672835&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599668/1/?bust=1603672835&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599668/1/?bust=1603672835&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599668/1/?bust=1603672835"
                }
            ],
            "primary_photo_cropped": {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599668/1/?bust=1603672835&width=300",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599668/1/?bust=1603672835&width=450",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599668/1/?bust=1603672835&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599668/1/?bust=1603672835"
            },
            "videos": [],
            "status": "adoptable",
            "status_changed_at": "2020-10-26T00:49:14+0000",
            "published_at": "2020-10-26T00:49:14+0000",
            "distance": null,
            "contact": {
                "email": "carlscats.mary@gmail.com",
                "phone": "(732) 668-7303",
                "address": {
                    "address1": null,
                    "address2": null,
                    "city": "Green Brook",
                    "state": "NJ",
                    "postcode": "08812",
                    "country": "US"
                }
            },
            "_links": {
                "self": {
                    "href": "/v2/animals/49599668"
                },
                "type": {
                    "href": "/v2/types/cat"
                },
                "organization": {
                    "href": "/v2/organizations/nj947"
                }
            }
        },
        {
            "id": 49599726,
            "organization_id": "GA987",
            "url": "https://www.petfinder.com/dog/deme-creme-49599726/ga/waynesville/south-georgia-equine-rescue-inc-ga987/?referrer_id=1b2d2bc9-be05-46c5-9255-8a3cc4f353ca",
            "type": "Dog",
            "species": "Dog",
            "breeds": {
                "primary": "Labrador Retriever",
                "secondary": "Beagle",
                "mixed": true,
                "unknown": false
            },
            "colors": {
                "primary": "White / Cream",
                "secondary": null,
                "tertiary": null
            },
            "age": "Baby",
            "gender": "Female",
            "size": "Medium",
            "coat": "Short",
            "attributes": {
                "spayed_neutered": false,
                "house_trained": false,
                "declawed": null,
                "special_needs": false,
                "shots_current": true
            },
            "environment": {
                "children": true,
                "dogs": true,
                "cats": true
            },
            "tags": [],
            "name": "Deme-Creme",
            "description": "There are a couple of things you will need to provide me when applying for my puppies. So if you...",
            "organization_animal_id": "900115001635052",
            "photos": [
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599726/3/?bust=1603673322&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599726/3/?bust=1603673322&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599726/3/?bust=1603673322&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599726/3/?bust=1603673322"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599726/1/?bust=1603673291&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599726/1/?bust=1603673291&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599726/1/?bust=1603673291&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599726/1/?bust=1603673291"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599726/2/?bust=1603673314&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599726/2/?bust=1603673314&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599726/2/?bust=1603673314&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599726/2/?bust=1603673314"
                }
            ],
            "primary_photo_cropped": {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599726/3/?bust=1603673322&width=300",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599726/3/?bust=1603673322&width=450",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599726/3/?bust=1603673322&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599726/3/?bust=1603673322"
            },
            "videos": [],
            "status": "adoptable",
            "status_changed_at": "2020-10-26T00:48:59+0000",
            "published_at": "2020-10-26T00:48:59+0000",
            "distance": null,
            "contact": {
                "email": "sgequinerescue@gmail.com",
                "phone": "(912) 548-3301",
                "address": {
                    "address1": null,
                    "address2": null,
                    "city": "Waynesville",
                    "state": "GA",
                    "postcode": "31566",
                    "country": "US"
                }
            },
            "_links": {
                "self": {
                    "href": "/v2/animals/49599726"
                },
                "type": {
                    "href": "/v2/types/dog"
                },
                "organization": {
                    "href": "/v2/organizations/ga987"
                }
            }
        },
        {
            "id": 49599727,
            "organization_id": "AZ663",
            "url": "https://www.petfinder.com/cat/spice-49599727/az/phoenix/twisted-tails-cat-rescue-az663/?referrer_id=1b2d2bc9-be05-46c5-9255-8a3cc4f353ca",
            "type": "Cat",
            "species": "Cat",
            "breeds": {
                "primary": "Tabby",
                "secondary": "Domestic Short Hair",
                "mixed": true,
                "unknown": false
            },
            "colors": {
                "primary": "Tabby (Orange / Red)",
                "secondary": null,
                "tertiary": null
            },
            "age": "Young",
            "gender": "Male",
            "size": "Medium",
            "coat": null,
            "attributes": {
                "spayed_neutered": true,
                "house_trained": true,
                "declawed": false,
                "special_needs": false,
                "shots_current": true
            },
            "environment": {
                "children": true,
                "dogs": null,
                "cats": true
            },
            "tags": [],
            "name": "Spice",
            "description": "Spice is litter box trained. Neutered, up to date on vaccinations, microchipped and tested negative for Felv/fiv.\n\nGood with children...",
            "organization_animal_id": null,
            "photos": [
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599727/1/?bust=1603673305&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599727/1/?bust=1603673305&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599727/1/?bust=1603673305&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599727/1/?bust=1603673305"
                }
            ],
            "primary_photo_cropped": {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599727/1/?bust=1603673305&width=300",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599727/1/?bust=1603673305&width=450",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599727/1/?bust=1603673305&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599727/1/?bust=1603673305"
            },
            "videos": [],
            "status": "adoptable",
            "status_changed_at": "2020-10-26T00:48:56+0000",
            "published_at": "2020-10-26T00:48:56+0000",
            "distance": null,
            "contact": {
                "email": "rescue@twistedtailsrescue.org",
                "phone": "(805) 635-7297",
                "address": {
                    "address1": null,
                    "address2": null,
                    "city": "Phoenix",
                    "state": "AZ",
                    "postcode": "85053",
                    "country": "US"
                }
            },
            "_links": {
                "self": {
                    "href": "/v2/animals/49599727"
                },
                "type": {
                    "href": "/v2/types/cat"
                },
                "organization": {
                    "href": "/v2/organizations/az663"
                }
            }
        },
        {
            "id": 49599688,
            "organization_id": "NY1359",
            "url": "https://www.petfinder.com/cat/farrah-49599688/ny/brooklyn/cypress-feline-rescue-ny1359/?referrer_id=1b2d2bc9-be05-46c5-9255-8a3cc4f353ca",
            "type": "Cat",
            "species": "Cat",
            "breeds": {
                "primary": "Domestic Short Hair",
                "secondary": null,
                "mixed": false,
                "unknown": false
            },
            "colors": {
                "primary": "Black & White / Tuxedo",
                "secondary": null,
                "tertiary": null
            },
            "age": "Baby",
            "gender": "Female",
            "size": "Medium",
            "coat": null,
            "attributes": {
                "spayed_neutered": true,
                "house_trained": true,
                "declawed": false,
                "special_needs": false,
                "shots_current": true
            },
            "environment": {
                "children": true,
                "dogs": null,
                "cats": true
            },
            "tags": [],
            "name": "FARRAH",
            "description": "MEET 5 MONTH OLD FARRAH! YES FARRAH IS AVAILABLE  ! TO FIRST COME QUALIFIED APPLICANTS. FARRAH ARRIVED ON MAY 31ST...",
            "organization_animal_id": null,
            "photos": [
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599688/1/?bust=1603672888&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599688/1/?bust=1603672888&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599688/1/?bust=1603672888&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599688/1/?bust=1603672888"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599688/2/?bust=1603672913&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599688/2/?bust=1603672913&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599688/2/?bust=1603672913&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599688/2/?bust=1603672913"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599688/3/?bust=1603672937&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599688/3/?bust=1603672937&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599688/3/?bust=1603672937&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599688/3/?bust=1603672937"
                }
            ],
            "primary_photo_cropped": {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599688/1/?bust=1603672888&width=300",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599688/1/?bust=1603672888&width=450",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599688/1/?bust=1603672888&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599688/1/?bust=1603672888"
            },
            "videos": [],
            "status": "adoptable",
            "status_changed_at": "2020-10-26T00:48:42+0000",
            "published_at": "2020-10-26T00:48:42+0000",
            "distance": null,
            "contact": {
                "email": "Cypressfelinerescue@yahoo.com",
                "phone": null,
                "address": {
                    "address1": null,
                    "address2": null,
                    "city": "Brooklyn",
                    "state": "NY",
                    "postcode": "11208",
                    "country": "US"
                }
            },
            "_links": {
                "self": {
                    "href": "/v2/animals/49599688"
                },
                "type": {
                    "href": "/v2/types/cat"
                },
                "organization": {
                    "href": "/v2/organizations/ny1359"
                }
            }
        },
        {
            "id": 49599724,
            "organization_id": "GA477",
            "url": "https://www.petfinder.com/cat/addie-greensboro-ga-49599724/ga/greensboro/circle-of-friends-animal-society-inc-ga477/?referrer_id=1b2d2bc9-be05-46c5-9255-8a3cc4f353ca",
            "type": "Cat",
            "species": "Cat",
            "breeds": {
                "primary": "Tortoiseshell",
                "secondary": "Domestic Long Hair",
                "mixed": true,
                "unknown": false
            },
            "colors": {
                "primary": "Tortoiseshell",
                "secondary": null,
                "tertiary": null
            },
            "age": "Young",
            "gender": "Female",
            "size": "Medium",
            "coat": "Long",
            "attributes": {
                "spayed_neutered": true,
                "house_trained": true,
                "declawed": false,
                "special_needs": false,
                "shots_current": true
            },
            "environment": {
                "children": true,
                "dogs": true,
                "cats": true
            },
            "tags": [],
            "name": "Addie - Greensboro, GA",
            "description": "Addie is shy at first but quickly purrs and snuggles when you hold her. Her fluffy tail is beautiful and...",
            "organization_animal_id": null,
            "photos": [
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/2/?bust=1603673248&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/2/?bust=1603673248&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/2/?bust=1603673248&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/2/?bust=1603673248"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/1/?bust=1603673218&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/1/?bust=1603673218&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/1/?bust=1603673218&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/1/?bust=1603673218"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/3/?bust=1603673225&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/3/?bust=1603673225&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/3/?bust=1603673225&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/3/?bust=1603673225"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/4/?bust=1603673229&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/4/?bust=1603673229&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/4/?bust=1603673229&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/4/?bust=1603673229"
                },
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/5/?bust=1603673235&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/5/?bust=1603673235&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/5/?bust=1603673235&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/5/?bust=1603673235"
                }
            ],
            "primary_photo_cropped": {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/2/crop/?bust=1603673248&width=300",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/2/crop/?bust=1603673248&width=450",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/2/crop/?bust=1603673248&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599724/2/crop/?bust=1603673248"
            },
            "videos": [],
            "status": "adoptable",
            "status_changed_at": "2020-10-26T00:48:26+0000",
            "published_at": "2020-10-26T00:48:26+0000",
            "distance": null,
            "contact": {
                "email": "info@cofas.org",
                "phone": null,
                "address": {
                    "address1": null,
                    "address2": null,
                    "city": "Greensboro",
                    "state": "GA",
                    "postcode": "30642",
                    "country": "US"
                }
            },
            "_links": {
                "self": {
                    "href": "/v2/animals/49599724"
                },
                "type": {
                    "href": "/v2/types/cat"
                },
                "organization": {
                    "href": "/v2/organizations/ga477"
                }
            }
        },
        {
            "id": 49599723,
            "organization_id": "WA132",
            "url": "https://www.petfinder.com/cat/eprom-49599723/wa/stanwood/noah-wa132/?referrer_id=1b2d2bc9-be05-46c5-9255-8a3cc4f353ca",
            "type": "Cat",
            "species": "Cat",
            "breeds": {
                "primary": "Domestic Short Hair",
                "secondary": null,
                "mixed": true,
                "unknown": false
            },
            "colors": {
                "primary": "Black",
                "secondary": null,
                "tertiary": null
            },
            "age": "Baby",
            "gender": "Male",
            "size": "Small",
            "coat": "Short",
            "attributes": {
                "spayed_neutered": true,
                "house_trained": false,
                "declawed": false,
                "special_needs": false,
                "shots_current": true
            },
            "environment": {
                "children": null,
                "dogs": null,
                "cats": null
            },
            "tags": [],
            "name": "Eprom",
            "description": "I am available to adopt BY APPOINTMENT ONLY. If you are interested in adopting, please call and leave a message...",
            "organization_animal_id": "45866867",
            "photos": [
                {
                    "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599723/1/?bust=1603673158&width=100",
                    "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599723/1/?bust=1603673158&width=300",
                    "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599723/1/?bust=1603673158&width=600",
                    "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599723/1/?bust=1603673158"
                }
            ],
            "primary_photo_cropped": {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599723/1/?bust=1603673158&width=300",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599723/1/?bust=1603673158&width=450",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599723/1/?bust=1603673158&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/49599723/1/?bust=1603673158"
            },
            "videos": [],
            "status": "adoptable",
            "status_changed_at": "2020-10-26T00:48:20+0000",
            "published_at": "2020-10-26T00:48:20+0000",
            "distance": null,
            "contact": {
                "email": "adopt@thenoahcenter.org",
                "phone": "360-629-7055   ",
                "address": {
                    "address1": "31300 Brandstrom Road",
                    "address2": null,
                    "city": "Stanwood",
                    "state": "WA",
                    "postcode": "98292",
                    "country": "US"
                }
            },
            "_links": {
                "self": {
                    "href": "/v2/animals/49599723"
                },
                "type": {
                    "href": "/v2/types/cat"
                },
                "organization": {
                    "href": "/v2/organizations/wa132"
                }
            }
        },
        {
            "id": 49599730,
            "organization_id": "WA113",
            "url": "https://www.petfinder.com/cat/fern-49599730/wa/spokane-valley/spokane-county-regional-animal-protection-service-wa113/?referrer_id=1b2d2bc9-be05-46c5-9255-8a3cc4f353ca",
            "type": "Bunny",
            "species": "Bunny",
            "breeds": {
                "primary": "Domestic Short Hair",
                "secondary": null,
                "mixed": true,
                "unknown": false
            },
            "colors": {
                "primary": null,
                "secondary": null,
                "tertiary": null
            },
            "age": "Baby",
            "gender": "Female",
            "size": "Medium",
            "coat": null,
            "attributes": {
                "spayed_neutered": false,
                "house_trained": false,
                "declawed": false,
                "special_needs": false,
                "shots_current": true
            },
            "environment": {
                "children": null,
                "dogs": null,
                "cats": null
            },
            "tags": [],
            "name": "Fern",
            "description": "Primary Color: Grey Secondary Color: Torbie",
            "organization_animal_id": "27038",
            "photos": [],
            "primary_photo_cropped": null,
            "videos": [],
            "status": "adoptable",
            "status_changed_at": "2020-10-26T00:47:36+0000",
            "published_at": "2020-10-26T00:47:36+0000",
            "distance": null,
            "contact": {
                "email": "sjobecuba@spokanecounty.org",
                "phone": "(509) 477-2532",
                "address": {
                    "address1": "6815 E. Trent",
                    "address2": null,
                    "city": "Spokane Valley",
                    "state": "WA",
                    "postcode": "99212",
                    "country": "US"
                }
            },
            "_links": {
                "self": {
                    "href": "/v2/animals/49599730"
                },
                "type": {
                    "href": "/v2/types/cat"
                },
                "organization": {
                    "href": "/v2/organizations/wa113"
                }
            }
        }]
    }

    // componentDidMount() {
    //     // axios.get('/animals')
    //     //     .then((res) => {
    //     //         this.setState({animals: res.data})
    //     //         console.log(res.data)
    //     //     })

    // //information for API access through PetFinder.com
    //     const API_KEY = 'Ab8xQ5x4ko6Ue4EfS12b2T4jmijVdGltbWXPJ8zLreFMbC9Lo1';
    //     const SECRET_KEY = 'vswXi2YoIUPufT0BrJCtRXoXKkJI8gEn16QehuXn';

    //     axios
    //         .post('https://api.petfinder.com/v2/oauth2/token',
    //             {
    //                 grant_type:'client_credentials',
    //                 client_id: API_KEY,
    //                 client_secret: SECRET_KEY
    //             }
    //         )
    //         .then((res) => {
    //             this.setState({authToken: res.data.access_token})
    //         })
    // }
    // //componentDidUpdate -- refreshing timed axios to keep up with token timeouts
    // componentDidUpdate() {
    //     if (!this.state.animals.length) {
    //         axios
    //         .get('https://api.petfinder.com/v2/animals?limit=10', { 
    //             headers: {
    //                 Authorization: `Bearer ${this.state.authToken}`
    //             }
    //         })
    //         .then((res) => {
    //             this.setState({animals: res.data.animals})
    //         })
    //     }     
    // }

    //function that filters contents of page based on button clicks
    animalFilter = (animalChoice) => {

        if (animalChoice === 'Cat'){
            const filteredAnimals = this.state.animals.filter(animal => animal.species === 'Cat')
            this.setState({selectedAnimal: filteredAnimals})
        } else if (animalChoice === 'Dog'){
            const filteredAnimals = this.state.animals.filter(animal => animal.species === 'Dog')
            this.setState({selectedAnimal: filteredAnimals})
        } else if (animalChoice === 'Critter'){
            const filteredAnimals = this.state.animals.filter(animal => animal.species !== 'Dog' && 'Cat')
            this.setState({selectedAnimal: filteredAnimals})
        }
    }


    render() {       
        
        const animalMap = this.state.selectedAnimal.length ? this.state.selectedAnimal : this.state.animals;

        return (
        <div className="animals">
            <div className="animals__hero">
                <h1 className="animals__hero-title">Available Animals</h1>
            </div>
            <h2 className="animals__intro">Looking for a specific animal? Choose from one of our options below:</h2>
            <div className="animals__nav">
                {/* <Link  className="animals__nav-link"> */}
                    <button value='Cat' onClick={(e) => this.animalFilter(e.target.value)} className="animals__nav-link-button">Cats</button>
                {/* </Link> */}
                {/* <Link to="/adoptable-animals/dogs" className="animals__nav-link"> */}
                    <button value='Dog' onClick={(e) => this.animalFilter(e.target.value)} className="animals__nav-link-button">Dogs</button>
                {/* </Link> */}
                {/* <Link to="/adoptable-animals/critters" className="animals__nav-link"> */}
                    <button value='Critter' onClick={(e) => this.animalFilter(e.target.value)} className="animals__nav-link-button">Critters</button>
                {/* </Link> */}
            </div>
            <div className="animals__available">
                {!this.state.animals.length ? 
                    (
                    <div className="animals__available-loading">
                        <h2>Loading...</h2>
                    </div>
                    ):( animalMap && 
                        animalMap.map(animal => {
                            return(
                                <div key={animal.id} className="animals__available-card">
                                    <img src={animal.photo} alt={animal.type} className="animals__available-card-image"/>
                                    <h3 className="animals__available-card-name">{animal.name}</h3>
                                    <div className="animals__available-card-content">
                                        <p className="animals__available-card-content-info">Type: {animal.type}</p>
                                        <p className="animals__available-card-content-info">Size: {animal.size}</p>
                                        <p className="animals__available-card-content-info">Age: {animal.age}</p>
                                    </div>
                                    <a href={animal.url} className="animals__available-card-link">
                                        <button className="animals__available-card-link-button">Learn More</button>
                                    </a>
                                </div>
                            )  
                        }) 
                    )}
            </div>
            <Switch>
                <Route path='/adoptable-animals/cats' exact component={AdoptableCats} catList={this.state.animals.filter(animal => {return animal.species === 'Cat'})} />
                <Route path='/adoptable-animals/dogs' exact component={AdoptableDogs} dogList={this.state.animals.filter(animal => {return animal.species === 'Dog'})} />
                <Route path='/adoptable-animals/critters' exact component={AdoptableCritters} critterList={this.state.animals.filter(animal => {return animal.species !== 'Cat' && 'Dog'})} />
            </Switch>            
        </div>
        );
    }
}

export default AdoptableAnimals;