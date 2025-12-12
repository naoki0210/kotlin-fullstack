import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars({totalCount,totalVolume ,totalAlcohol}) {
    return (
        <BarChart
            xAxis={[{ data: ['今日の合計', '1日の目標', '残り'] }]}
            series={[{ data: [[totalAlcohol],[20],[20-totalAlcohol] ]}]}
            height={300}
            width={400}
            // yAxis={[{
            //     min:minValue -5,
            //     max:maxValue + 5
            // }]}
        />
    );
}