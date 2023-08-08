// Code your solution in this file!
function distanceFromHqInBlocks(x) {
    if (x < 42) {
        return 42 - x;
    } else if (x > 42) {
        return x - 42;
    }
}

function distanceFromHqInFeet(x) {
    if (x < 42) {
        return (42 - x) * 264;
    } else if (x > 42) {
        return (x - 42) * 264;
    }
}

function distanceTravelledInFeet(x, y) {
    if (x > y) {
        return (x - y) * 264;
    } else if (x < y) {
        return (y - x) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0
    } else if (distance > 400, distance < 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000, distance < 2500) {
        return 25;
    } else if (distance > 2500) {
        return "cannot travel that far"
    }
}