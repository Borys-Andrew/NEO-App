import PropTypes from 'prop-types';
import NeoItem from '../NeoItem/NeoItem';

function NeoList({ neoList }) {
  const hazard = neoList.filter(({is_potentially_hazardous_asteroid}) => is_potentially_hazardous_asteroid > 0)
    .sort((a,b) => b.is_potentially_hazardous_asteroid - a.is_potentially_hazardous_asteroid)
    .splice(0,2)
    .map((el) => el.date)

  const modifiedNeoList = neoList.map((el) => ({
    ...el,
    is_highlited: hazard.includes(el.date)
  }))

  return(
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Total<br></br>per day</th>
          <th>Max-diametr of NEO<br></br>(km)</th>
          <th>Potentially hazardous
            <br></br>
            NEOs per day
          </th>
          <th>Closest NEO<br></br>(km)</th>
          <th>Fastest NEO<br></br>(kph)</th>
        </tr>
      </thead>
      <tbody>
      {modifiedNeoList.map((el) => <NeoItem el={el} key={el.date}/>)}
      </tbody>
    </table>
  )
}

NeoList.propTypes = {
  neoList: PropTypes.array
};

export default NeoList;
