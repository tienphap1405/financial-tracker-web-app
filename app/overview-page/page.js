import Overview from "../components/overview-table";
import Navbar from "../routes/navbar";
export default function OverviewPage(){
    return(
        <div>
            <Navbar></Navbar>
            <Overview/>
        </div>
    );
}