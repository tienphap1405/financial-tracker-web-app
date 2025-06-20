import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { Divider } from '@mui/material';

export default function Overview() {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const incomedata = 1230;
    const Expenses = 1111;
    const saving = incomedata - Expenses;
    const debit = 500 + saving;
    const chartSetting = {
        yAxis: [
            {
            label: 'rainfall (mm)',
            width: 60,
            },
        ],
        height: 300,
    };
    const dataset = [
        {
            london: 59,
            paris: 57,
            newYork: 86,
            seoul: 21,
            month: 'Jan',
        },
        {
            london: 50,
            paris: 52,
            newYork: 78,
            seoul: 28,
            month: 'Feb',
        },
        {
            london: 47,
            paris: 53,
            newYork: 106,
            seoul: 41,
            month: 'Mar',
        },
        {
            london: 54,
            paris: 56,
            newYork: 92,
            seoul: 73,
            month: 'Apr',
        },
        {
            london: 57,
            paris: 69,
            newYork: 92,
            seoul: 99,
            month: 'May',
        },
        {
            london: 60,
            paris: 63,
            newYork: 103,
            seoul: 144,
            month: 'June',
        },
        {
            london: 59,
            paris: 60,
            newYork: 105,
            seoul: 319,
            month: 'July',
        },
        {
            london: 65,
            paris: 60,
            newYork: 106,
            seoul: 249,
            month: 'Aug',
        },
        {
            london: 51,
            paris: 51,
            newYork: 95,
            seoul: 131,
            month: 'Sept',
        },
        {
            london: 60,
            paris: 65,
            newYork: 97,
            seoul: 55,
            month: 'Oct',
        },
        {
            london: 67,
            paris: 64,
            newYork: 76,
            seoul: 48,
            month: 'Nov',
        },
        {
            london: 61,
            paris: 70,
            newYork: 103,
            seoul: 25,
            month: 'Dec',
        },
    ];
    return (
        <div>
            <div className="flex bg-white p-6 w-100 rounded-lg shadow-xl mt-10 ml-10 mr-10 flex-col text-black border-1">
                <div className="flex justify-between">
                    <h1 className="text-xl font-bold">Overview Dashboard</h1>
                    <h1 className="text-lg font-bold">Month: {currentMonth}/{currentYear}</h1>
                </div>
                
                <hr></hr>
                
                <div className="flex justify-between mt-2 ">
                    <div className="flex flex-col items-center p-1">
                        <h1>Income Summary this Month</h1>
                        <p className="text-red-500">{incomedata} CAD</p>
                    </div>

                    <div className="flex flex-col items-center p-1">
                        <h1>Expenses & Bills this Month</h1>
                        <p className="text-teal-500">{Expenses} CAD</p>
                    </div>

                    <div className="flex flex-col items-center p-1">
                        <h1>Savings ammount after deducting expenses</h1>
                        <p className="text-indigo-500">{saving} CAD</p>
                    </div>
                    
                    <div className="flex flex-col items-center p-1">
                        <h1>Current Debit Account</h1>
                        <p className="text-cyan-500">{debit} CAD</p>
                    </div>

                </div>
                
                <div>
                    <h1 className="text-lg font-bold mt-4">Note:</h1>
                    <p className="text-gray-600">
                        This is a summary of your financial status for the current month. 
                        Please ensure to update your transactions regularly for accurate tracking.
                    </p>
                </div>
            </div>

            <div className="flex bg-white p-6 w-100 rounded-lg shadow-xl mt-10 ml-10 mr-10 flex-col text-black border-1">
                <div className="flex justify-between">
                    <h1 className="text-xl font-bold">Monthly View Analytics</h1>
                    <h1 className="text-lg font-bold">Month: {currentMonth}/{currentYear}</h1>
                </div>
                
                <hr></hr>
                
                <div className="flex justify-between mt-2  ">
                    <PieChart
                        series={[
                            {
                            data: [
                                { id: 0, value: 10, label: 'series A' },
                                { id: 1, value: 15, label: 'series B' },
                                { id: 2, value: 20, label: 'series C' },
                            ],
                            highlightScope: { fade: 'global', highlight: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            },
                        ]}
                        width={200}
                        height={200}
                    />
                    <BarChart
                        dataset={dataset}
                        xAxis={[{ dataKey: 'month' }]}
                        series={[
                            { dataKey: 'london', label: 'London' },
                            { dataKey: 'paris', label: 'Paris' },
                            { dataKey: 'newYork', label: 'New York' },
                            { dataKey: 'seoul', label: 'Seoul' },
                        ]}
                        {...chartSetting}
                    />
                </div>
              

            </div>

        </div>
    );
}