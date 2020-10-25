//adopters profile seed data
const adopterProfilesData=[
  {
      first_name: "Cheryl",
      last_name: "Dyck",
      email: "cheryl@email.com",
      animal: "dog",
      age: "baby",
      size: "large"  
  },
  {
      first_name: "Stan",
      last_name: "Dyck",
      email: "stan@email.com",
      animal: "dog",
      age: "baby",
      size: "large"  
  },
  {
      first_name: "Andrew",
      last_name: "Haas",
      email: "andrew@email.com",
      animal: "dog",
      age: "adult",
      size: "small"  
  },
  {
      first_name: "Jon",
      last_name: "Barson",
      email: "jon@email.com",
      animal: "cat",
      age: "adult",
      size: "medium"  
  },
]

//animals profile seed data
const animalProfilesData=[
  {
      name: "Clover",
      size: "large",
      age: "baby",
      type: "dog",
      photo: "../../../public/images/andriyko-podilnyk-3a1NOxCBY10-unsplash.jpg",
      link: "mylink.com"
  },
  {
      name: "Murphy",
      size: "small",
      age: "adult",
      type: "dog",
      photo: "../../../public/images/brianna-santellan-LGG5P7KCziU-unsplash.jpg",
      link: "mylink.com"
  },
  {
      name: "Boots",
      size: "medium",
      age: "adult",
      type: "cat",
      photo: "../../../public/images/brianna-santellan-LGG5P7KCziU-unsplash.jpg",
      link: "mylink.com"
  },
]

exports.seed = function(knex) {
  return knex('adopter_profiles')
      //delete all existing entries for adopters table
      .del()
      //inserts seed data
      .then (() => {            
          return knex('adopter_profiles').insert(adopterProfilesData);
      })
      .then(() => {
          return knex('animal_profiles')
              //delete all existing entries for animals table
              .del()
              //inserts seed data
              .then(() => {
                  return knex('animal_profiles').insert(animalProfilesData);
              });
      });
}
