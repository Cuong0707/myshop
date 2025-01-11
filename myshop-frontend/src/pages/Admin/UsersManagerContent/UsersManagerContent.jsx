import LineCharts from "../../../components/Admin/LineCharts/LineCharts";
import "./UsersManagerContent.css";
const UsersManagerContent = () => { 
    return (
        <div>
            <div className="chart-first">
                <LineCharts height={400}/>
            </div>
            <div className="chart-second">
                <LineCharts height={400}/>
            </div>
            
        </div>
    )
}
export default UsersManagerContent;