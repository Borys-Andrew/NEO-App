import PropTypes from 'prop-types';
import NeoItem from '../NeoItem/NeoItem';

function NeoList({ neoList }) {
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
      {neoList.map((el) => <NeoItem el={el} key={el.date}/>)}
      </tbody>
    </table>
  )
}

NeoList.propTypes = {
  neoList: PropTypes.array
};

export default NeoList;
