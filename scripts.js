
class Explorer {
    constructor(name, activity) {
        this.name = name;
        this.activity = activity;
    }

    describe(){
        return `${this.name} is going to ${this.activity}`
    }
}

class Place {
    constructor(city) {
        this.city = city;
        this.activities = [];
    }
    describe() {
        return `${this.name} is going to ${this.activity} in ${this.city}`
        }

addActivity(activity) {
        if(activity instanceof activity){
                this.activities.push(activity);
         } else{
         throw new Error(`You can only add an instance of Activity. Argument is not
         an activity: ${activity}`);
          }
        }
    }
    let explorer = new explorer(James,hiking);
    console.log(nexplorer.describe());