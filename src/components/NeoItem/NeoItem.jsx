import PropTypes from 'prop-types';


function NeoItem({ el }) {
  console.log('from item el==>', el.date);
  return (
    <tr>
      <td>{el.date}</td>
      <td>{el.count}</td>
      <td>{el.max_diameter_km}</td>
      <td>{el.is_potentially_hazardous_asteroid}</td>
      <td>{el.miss_distance_km}</td>
      <td>{el.relative_velocity_kph}</td>
    </tr>
  )
}

NeoItem.propTypes = {
  el: PropTypes.shape({
    date: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    total_count: PropTypes.number.isRequired,
    max_diameter_km: PropTypes.number.isRequired,
    is_potentially_hazardous_asteroid: PropTypes.bool.isRequired,
    miss_distance_km: PropTypes.number.isRequired,
    relative_velocity_kph: PropTypes.number.isRequired,
  })

}

export default NeoItem;
