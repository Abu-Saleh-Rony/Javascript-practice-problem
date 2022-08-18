// Problem 5: isBestFriend

function isBestFriend(friend1, friend2) {
    const isFriend1 = typeof friend1;
    const isFriend2 = typeof friend2;
    if (isFriend1 === "object" && isFriend2 === "object") {
        if (friend1.name === friend2.friend && friend1.friend === friend2.name) {
            return true;
        }
        else { return false; }
    }
    else { return "Something wrong in object"; }
}


console.log(isBestFriend({ name: "doe", friend: "john" }, { name: "john", friend: "doe" }));