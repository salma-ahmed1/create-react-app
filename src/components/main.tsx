import Navbar from './navbar'
import Filterdiv from './filterdiv'
import Candidatediv from './candidatediv'

export default function Maindiv()
{
    return(
        <div className="maindiv">
            <Navbar></Navbar>
            <Innerdiv></Innerdiv>
        </div>
    )
}

function Innerdiv()
{
    return(
        <div className="innerdiv">
            <Filterdiv></Filterdiv>
            <Candidatediv></Candidatediv>
        </div>
    )
}