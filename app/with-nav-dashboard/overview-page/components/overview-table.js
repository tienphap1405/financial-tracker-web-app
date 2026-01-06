import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import testdata from '@/test_data.json'
export default function Overview() {
    const fullMonthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ];
    const currentMonthName = fullMonthNames[new Date().getMonth()];
    const currentMonth = new Date().getMonth();
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

    return (
        <div className='flex flex-col pt-10 mx-auto'>
            
            <div className='grid grid-cols-3 gap-4 mx-10'>
                <div className="flex bg-white p-10 rounded-lg shadow-xl flex-col text-black border-1">
                    <div className="flex flex-col items-center p-1">
                        <h1>Income Summary this Month</h1>
                        <p className="text-red-500">{incomedata} CAD</p>
                    </div>
                </div>

                <div className="flex bg-white p-6 w-100 rounded-lg shadow-xl flex-col text-black border-1">
                    <div className="flex flex-col items-center p-1">
                        <h1>Expenses & Bills this Month</h1>
                        <p className="text-teal-500">{Expenses} CAD</p>
                    </div>
                </div>   

                <div className="flex bg-white p-6 w-100 rounded-lg shadow-xl flex-col text-black border-1">
                    <div className="flex flex-col items-center p-1">
                        <h1>Savings ammount after deducting expenses</h1>
                        <p className="text-indigo-500">{saving} CAD</p>
                    </div>
                </div>

                <div className="flex bg-white p-6 w-100 rounded-lg shadow-xl flex-col text-black border-1">
                    <div className="flex flex-col items-center p-1">
                        <h1>Current Debit Account</h1>
                        <p className="text-cyan-500">{debit} CAD</p>
                    </div>
                </div>
            </div>
                  
   
            <div className='flex flex-row mt-5'>
                <div className="flex bg-white p-6 w-1/2 rounded-lg shadow-xl mt-5 ml-10 mr-10 flex-col text-black border-1">
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: testdata[currentMonth]?.rent || 0, label: 'Rent' },
                                        { id: 1, value: testdata[currentMonth]?.utilities || 0, label: 'Utilities & Services bill' },
                                        { id: 2, value: testdata[currentMonth]?.Others || 0, label: 'Others' },
                                        { id: 3, value: testdata[currentMonth]?.Transport || 0, label: 'Public Transport' },
                                    ],
                                    highlightScope: { fade: 'global', highlight: 'item' },
                                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                },
                            ]}
                            width={200}
                            height={200}
                        />
                </div>

                <div className="flex bg-white p-10 w-50 rounded-lg shadow-xl mt-10 mr-10 flex-col text-black border-1">
                        <BarChart
                            dataset={[testdata[currentMonth]]}
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