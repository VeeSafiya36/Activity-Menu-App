
// Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// Use at least one array.
// Use at least two classes.
// Your menu should have the options to create, view, and delete elements.

// created an Activity class that takes in a name and explorer
class Activity {
    constructor(name, explorer) {
    this.name = name;
    this.explorer = explorer;
    }
 
// created a describe method with explorer and activity
    describe() {
    return `${this.explorer} is interested in ${this.name}!`
    
    }
// created a City class that takes in a name. Activities is made into an empty array
    }
    class City {
    constructor(name) {
    this.name = name;
    this.activities = [];
    }
 
// an add activity method is created that takes in an activity as one of the parameters. Activities array is pushed
// into the activity argument
    addActivity(activity) {
    if (activity instanceof Activity) {
    this.activities.push(activity);
    } else {
    throw new Error(`You can only add an instance of Activity. 
    argument is not an activity: ${activity}`);
    }
    }
    
    // a describe method is created that takes in name and the length of the activities array
    describe() {
    return `${this.name} has ${this.activities.length} activities.`;
    }
    }

    // the Menu class is created and cities is made into an empty array. Selected city is made null.
    class Menu {
    constructor() {
    this.cities = [];
    this.selectedCity = null;
    }
    
// a start method is created that includes a switch statement for creating, viewing, deleting, and displaying
// a city
    start() { 
    let selection = this.showMainMenuOptions(); 
    while (selection != 0) {
    switch(selection) {
    case '1' :
    this.createCity();
    break;
    case '2' :
    this.viewCity();
    break;
    case '3' :
    this.deleteCity();
    break;
    case '4' :
    this.displayCity();
    break;
    default:
    selection = 0;
    }
    selection = this.showMainMenuOptions();
    }
    alert('See You Later!');
    }
    
   // a show main menu options is created, outlining the options for city 
    showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create a new city
    2) view a city
    3) delete a city
    4) display all cities
    `);
    }
    
    // a show city main menu options method is created that takes in activity information for adding and
    // deleting a new activity
    showCityMenuOptions(activityInfo) {
    return prompt(`
    0) back
    1) add a new activity
    2) delete an activity
    -----------------
    ${activityInfo}
    `);
    }
   
    // display cities method was created by using a for loop that iterates over the cities array
    displayCity() {
    let cityString = '';
    for (let i = 0; i < this.cities.length; i++) {
    cityString += i+ ') ' + this.cities[i].name + '\n';
    }
    alert(cityString);
    }
    
    // a city method was created to push city names from the cities array into the new city name
    createCity() {
    let name = prompt('Enter name for city: ');
    this.cities.push(new City(name));
    }
    
    // view city method was created by using an if statement and for loop that iterates over 
    //selectedCity.activities array
    viewCity() {
    let index = prompt("Enter the index of the city that you want to view:");

    if (index > -1 && index < this.cities.length) {
    this.selectedCity = this.cities[index];

    let description = 'City Name: ' + this.selectedCity.name + '\n';
    description += ' ' + this.selectedCity.describe() + '\n ';

    for (let i = 0; i < this.selectedCity.activities.length; i++) {
    description += i + ') ' + this.selectedCity.activities[i].describe() + '\n';
    }

    // a switch statement is used for the creation and deletion of an activity
    let selection1 = this.showCityMenuOptions(description);
    switch (selection1) {
    case '1' :
    this.createActivity();
    break;
    case '2' :
    this.deleteActivity();
    }
    } 
    }
    
    // a delete city method is created by using an if statement that ensures that the user's input is between 0
    // and 4 and if so, deletes a city
    deleteCity() {
    let index = prompt('Enter the index of the City that you wish to delete: ');
    if (index > -1 && index < this.cities.length) {
    this.cities.splice(index,1);
    }
    }
    
    // a create activity method was created to add an activity
    createActivity() {
    let name = prompt('Enter name for new activity: ');
    let explorer = prompt('Enter explorer for new activity: ');
    this.selectedCity.addActivity(new Activity(name,explorer));
    }
    
    // a delete activity was created by using an if statement that ensures the user's input is between
    // 0 and 4, and if so, deletes an activity.
    deleteActivity() {
    let index = prompt('Enter the index of the activity that you wish to delete: ');
    if (index > -1 && index < this.selectedCity.activities.length) { 
        this.selectedCity.activities.splice(index,1);
    }
    }
    }
    let menu = new Menu();
    menu.start();