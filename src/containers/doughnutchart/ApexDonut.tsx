import DonutChart from "react-donut-chart";
import Donutdata1 from "./Donutdata1.json";

const reactDonutChartdata = [
  {
    label: "JEWELERY",
    value: 25,
    color: "#00E396"
  },
  {
    label: "ELECTRONICS",
    value: 65,
    color: "#FEB019"
  },
  {
    label: "WOMEN'S CLOTHING",
    value: 100,
    color: "#FF4560"
  },
  {
    label: "HOSPITAL",
    value: 15,
    color: "#775DD0"
  }
];
const reactDonutChartBackgroundColor = [
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0"
];
const reactDonutChartInnerRadius = 0.5;
const reactDonutChartSelectedOffset = 0.04;

let reactDonutChartStrokeColor = "#FFFFFF";
const reactDonutChartOnMouseEnter = (item:any) => {
    let reactDonutChartdata:any;
  let color = reactDonutChartdata.find((q:any) => q.label === item.label).color;
  reactDonutChartStrokeColor = color;
};

export default function ApexDonut({ filter, setFilter, data }: { filter: any; setFilter: any , data :any}) {
  return (
    <div className="App">
      <DonutChart
        width={355} height={350}
        onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
        strokeColor={reactDonutChartStrokeColor}
        data={data}
        colors={reactDonutChartBackgroundColor}
        innerRadius={reactDonutChartInnerRadius}
        selectedOffset={reactDonutChartSelectedOffset}
        onClick={(item, toggled) =>
            toggled
                ? setFilter(item.label)
                : setFilter("")
        }
      />
    </div>
  );
}
