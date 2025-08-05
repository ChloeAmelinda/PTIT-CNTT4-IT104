function greetingWithWeather(name, weather) {
    if(weather === "sunny") {
        return `Hello ${name}, it's a beautiful sunny day!`;
    }	
    else if(weather === "rainy") {
        return `Hello ${name}, don't forget your umbrella, it's rainy today!`;
    }
    else{
        return `Hello ${name}, the weather is ivariable today!`;
    }
}
console.log(greetingWithWeather("Alice", "sunny"));
console.log(greetingWithWeather("Bob", "rainy"));
console.log(greetingWithWeather("Charlie", "cloudy"));