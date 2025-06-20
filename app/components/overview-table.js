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
            label: 'Money Spent (CAD)',
            width: 60,
            },
        ],
        height: 300,
    };
    const dataset = [
        {
            rent: 59,
            utilities: 57,
            Others: 86,
            Transport: 21,
            month: 'Jan',
        },
        {
            rent: 50,
            utilities: 52,
            Others: 78,
            Transport: 28,
            month: 'Feb',
        },
        {
            rent: 47,
            utilities: 53,
            Others: 106,
            Transport: 41,
            month: 'Mar',
        },
        {
            rent: 54,
            utilities: 56,
            Others: 92,
            Transport: 73,
            month: 'Apr',
        },
        {
            rent: 57,
            utilities: 69,
            Others: 92,
            Transport: 99,
            month: 'May',
        },
        {
            rent: 60,
            utilities: 63,
            Others: 103,
            Transport: 144,
            month: 'June',
        },
        {
            rent: 59,
            utilities: 60,
            Others: 105,
            Transport: 319,
            month: 'July',
        },
        {
            rent: 65,
            utilities: 60,
            Others: 106,
            Transport: 249,
            month: 'Aug',
        },
        {
            rent: 51,
            utilities: 51,
            Others: 95,
            Transport: 131,
            month: 'Sept',
        },
        {
            rent: 60,
            utilities: 65,
            Others: 97,
            Transport: 55,
            month: 'Oct',
        },
        {
            rent: 67,
            utilities: 64,
            Others: 76,
            Transport: 48,
            month: 'Nov',
        },
        {
            rent: 61,
            utilities: 70,
            Others: 103,
            Transport: 25,
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
                
                <div className="flex justify-between mt-2 ">
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: dataset[currentMonth - 1]?.rent || 0, label: 'Rent' },
                                        { id: 1, value: dataset[currentMonth - 1]?.utilities || 0, label: 'Utilities & Services bill' },
                                        { id: 2, value: dataset[currentMonth - 1]?.Others || 0, label: 'Others' },
                                        { id: 3, value: dataset[currentMonth - 1]?.Transport || 0, label: 'Public Transport' },
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
                                { dataKey: 'rent', label: 'Rent' },
                                { dataKey: 'utilities', label: 'Utilities & Services bill' },
                                { dataKey: 'Others', label: 'Others' },
                                { dataKey: 'Transport', label: 'Public Transport' },
                            ]}
                            {...chartSetting}
                        />
                </div>
              

            </div>

        </div>
    );
}