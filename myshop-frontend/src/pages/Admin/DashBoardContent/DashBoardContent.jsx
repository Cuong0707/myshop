import LineCharts from '../../../components/Admin/LineCharts/LineCharts';
import './DashBoardContent.css';

const DashBoardContent = () => {
  return (
    <div>
      <div className='chart-content'>
        <div className="income-chart">
          <div className='income-chart-content'>
            <div>
              <h3>Income</h3>
            </div>
            <LineCharts />
          </div>
        </div>
        <div className="income-chart">
          <div className='income-chart-content'>
            <div>
              <h3>Income</h3>
            </div>
            <LineCharts />
          </div>
        </div>
        <div className="income-chart">
          <div className='income-chart-content'>
            <div>
              <h3>Income</h3>
            </div>
            <LineCharts />
          </div>
        </div>
        <div className="income-chart">
          <div className='income-chart-content'>
            <div>
              <h3>Income</h3>
            </div>
            <LineCharts />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="card-header">

          </div>
          <div className="card-body">
            <div className="row">

            </div>
            <div className="table">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashBoardContent;