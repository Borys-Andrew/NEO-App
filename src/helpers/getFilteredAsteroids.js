export function getFilteredAsteroids(objects) {
  let result = {

    date: objects[0].date,
    count: 0,
    max_diameter_km: null,
    is_potentially_hazardous_asteroid: 0,
    is_highlited: false,
    miss_distance_km: objects[0].miss_distance_km,
    relative_velocity_kph: 0,
  };

  for (let i = 0; i < objects.length; i++) {
    result.count++

    if (objects[i].max_diameter_km > result.max_diameter_km) {
      result.max_diameter_km = objects[i].max_diameter_km;
    }

    if (objects[i].is_potentially_hazardous_asteroid) {
      result.is_potentially_hazardous_asteroid++;
    }

    if (objects[i].miss_distance_km < result.miss_distance_km) {
      result.miss_distance_km = objects[i].miss_distance_km;
    }

    if (objects[i].relative_velocity_kph > result.relative_velocity_kph) {
      result.relative_velocity_kph = objects[i].relative_velocity_kph;
    }
  }

  return result;
}
