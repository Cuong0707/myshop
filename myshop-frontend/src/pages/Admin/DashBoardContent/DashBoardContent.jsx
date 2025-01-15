import LineCharts from '../../../components/Admin/LineCharts/LineCharts';
import './DashBoardContent.css';

const DashBoardContent = () => {
  return (
    <div>
      <div className='chart-content'>
        <div className="box-chart">
          <div className='info-chart-content users-chart-color'>
            <div className='header-chart'>
              <div>
                <h2>$6.200</h2>
                <span>(40.9%)</span>
              </div>
              <h3>Users</h3>
            </div>
            <LineCharts />
          </div>
        </div>
        <div className="box-chart">
          <div className='info-chart-content income-chart-color'>
            <div className='header-chart'>
              <div>
                <h2>$6.200</h2>
                <span>(40.9%)</span>
              </div>
              <h3>Income</h3>
            </div>
            <LineCharts />
          </div>
        </div>
        <div className="box-chart">
          <div className='info-chart-content conversion-chart-color'>
            <div className='header-chart'>
              <div>
                <h2>$6.200</h2>
                <span>(40.9%)</span>
              </div>
              <h3>Conversion Rate</h3>
            </div>
            <LineCharts />
          </div>
        </div>
        <div className="box-chart">
          <div className='info-chart-content sessions-chart-color'>
            <div className='header-chart'>
              <div>
                <h2>$6.200</h2>
                <span>(40.9%)</span>
              </div>
              <h3>Sessions</h3>
            </div>
            <LineCharts />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="header-card">
            <p>Traffic & Sales</p>
          </div>
          <div className="body-card">
            <div className="row-card">
              <div className="left-row-card">
                <div className="progress-group">
                  Monday
                  <div className="progress" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar"></div>
                  </div>
                </div>
                <div className="progress-group">
                  Tuesday
                  <div className="progress" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar"></div>
                  </div>
                </div>
                <div className="progress-group">
                  Wednesday
                  <div className="progress" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar"></div>
                  </div>
                </div>
              </div>
              <div className="right-row-card">
                <div className="progress-group">
                  Male
                  <div className="progress" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar"></div>
                  </div>
                </div>
                <div className="progress-group">
                  Female
                  <div className="progress" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-card">
              <table>
                <thead>
                  <tr>
                    <th>Users</th>
                    <th>Country</th>
                    <th>Usage</th>
                    <th>PaymentMethod</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cuong</td>
                    <td>Viet Nam</td>
                    <td>50%</td>
                    <td>MoMo</td>
                    <td>5 Minutes ago</td>
                  </tr>
                  <tr>
                    <td>Cuong</td>
                    <td>Viet Nam</td>
                    <td>50%</td>
                    <td>MoMo</td>
                    <td>5 Minutes ago</td>
                  </tr>
                  <tr>
                    <td>Cuong</td>
                    <td>Viet Nam</td>
                    <td>50%</td>
                    <td>MoMo</td>
                    <td>5 Minutes ago</td>
                  </tr>
                  <tr>
                    <td>Cuong</td>
                    <td>Viet Nam</td>
                    <td>50%</td>
                    <td>MoMo</td>
                    <td>5 Minutes ago</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashBoardContent;