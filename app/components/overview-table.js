
export default function Overview() {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const incomedata = 1230;
    const Expenses = 1111;
    const saving = incomedata - Expenses;
    const debit = 500 + saving;

    return (
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
            
        </div>
    );
}