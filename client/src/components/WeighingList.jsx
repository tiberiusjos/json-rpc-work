import React from 'react';
import { Table } from 'reactstrap';

class WeighingList extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>License Plate</th>
            <th>Time</th>
            <th>Date</th>
            <th>Device ID</th>
            <th>Weighing Result</th>
            <th>Tare Weight</th>
            <th>Total Net Weight</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(({
              id,
              license_plate,
              time,
              date,
              device_id,
              weighing_result,
              tare_weight,
              total_net_weight
            }) => (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{license_plate}</td>
                <td>{time}</td>
                <td>{date}</td>
                <td>{device_id}</td>
                <td>{weighing_result}</td>
                <td>{tare_weight}</td>
                <td>{total_net_weight}</td>
              </tr>
            ))            
          }
        </tbody>
      </Table>
    )
  }
}

export default WeighingList;
