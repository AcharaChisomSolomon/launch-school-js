let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (const city of cities) {
    if (!city) continue
    console.log(city)
}