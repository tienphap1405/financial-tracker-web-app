import PaymentsIcon from '@mui/icons-material/Payments';


export default function Navbar() {


    return (       
        <nav className="bg-gray-900 text-white flex flex-row p-5">            
            <button><PaymentsIcon className="text-white" style={{ fontSize: 40 }} /></button>
            <h1 className="font-bold text-2xl pl-20 pt-2">Dashboard</h1>
        </nav>
    );
    }
