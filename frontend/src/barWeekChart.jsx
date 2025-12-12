import { BarChart } from '@mui/x-charts/BarChart';

export default function WeekBars({drinkWeek} = []) {
    const dates = drinkWeek.map((d) => d.drinkName) || [];
    const amounts = drinkWeek.map((d) => {
        const alcohol = d.volume * (d.percent/100) * 0.8 ;
        return Math.round(alcohol * 10)/10;
    })

    return (
        <BarChart
            xAxis={[{ data: dates }]}
            series={[{ data: amounts }]}
            height={300}
            width={400}
            // yAxis={[{
            //     min:minValue -5,
            //     max:maxValue + 5
            // }]}
        />
    );
}