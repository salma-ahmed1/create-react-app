import Navbar from './navbar'
import Filterdiv from './filterdiv'

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


function Candidatediv()
{
    return(
        <div className="candidatediv">
            <p>I am candidate div</p>
        </div>
    )
}