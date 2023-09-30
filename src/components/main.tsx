export default function Maindiv()
{
    return(
        <div className="maindiv">
            <Navbar></Navbar>
            <Innerdiv></Innerdiv>
        </div>
    )
}

function Navbar()
{
    return(
        <div className="navbar">
            <p>here is navbar</p>
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

function Filterdiv()
{
    return(
        <div className="filterdiv">
            <p> I am filter div</p>
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