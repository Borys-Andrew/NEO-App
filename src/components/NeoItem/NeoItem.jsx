import PropTypes from 'prop-types';


function NeoItem({ el }) {
  const {
    date,
    count,
    max_diameter_km,
    is_potentially_hazardous_asteroid,
    miss_distance_km,
    relative_velocity_kph,
  } = el
  return (
    <tr style={{ background: is_potentially_hazardous_asteroid && "red" }}>
      <td>{date}</td>
      <td>{count}</td>
      <td>{max_diameter_km}</td>
      <td>{is_potentially_hazardous_asteroid}</td>
      <td>{miss_distance_km}</td>
      <td>{relative_velocity_kph}</td>
    </tr>
  )
}

NeoItem.propTypes = {
  el: PropTypes.shape({
    date: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    max_diameter_km: PropTypes.number.isRequired,
    is_potentially_hazardous_asteroid: PropTypes.number.isRequired,
    miss_distance_km: PropTypes.number.isRequired,
    relative_velocity_kph: PropTypes.number.isRequired,
  })
}

export default NeoItem;
