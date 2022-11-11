const findTheOldest = function(people) {

    people.sort((p1,p2) => {
        if (!p1.yearOfDeath) {
            const today = new Date();
            p1.yearOfDeath = today.getFullYear();
        }
        if (!p2.yearOfDeath) {
            const today = new Date();
            p2.yearOfDeath = today.getFullYear();
        }
        if ((p2.yearOfDeath-p2.yearOfBirth) > (p1.yearOfDeath-p1.yearOfBirth)) {
            return 1;
        } else {
            return -1;
        }
    });
    console.log(people[0]);
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
