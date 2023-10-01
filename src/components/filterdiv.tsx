import paper from './svg4.svg'
// import up from './uparraow.svg'
import down from './downarrow.svg'
var count = 0;

export default function Filterdiv()
{
    return(
        <div className="filterdiv">
            <input type="text" placeholder="  search by name, edu, exp, or #tag"/>
            <div className='filter' style={{marginTop: '20px',borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                <p style={{padding: '5px'}}>Filters</p>
                <p style={{padding: '5px'}}>{count} selected</p>
            </div>

            <details >
                <summary className='filter'>
                    <div className='row'>
                        <img src={paper} alt=' '/>
                        <p>Personal Information</p>
                    </div>
                    <img src={down} alt=' ' style={{width: '8%', margin: '5px 9px 0px 0px', padding: '0'}}/>
                </summary>
            </details>

            <details >
                <summary className='filter'>
                    <div className='row'>
                        <img src={paper} alt=' '/>
                        <p>Education</p>
                    </div>
                    <img src={down} alt=' ' style={{width: '8%', margin: '5px 9px 0px 0px', padding: '0'}}/>
                </summary>
            </details>

            <details>
                <summary className='filter'>
                    <div className='row'>
                        <img src={paper} alt=' '/>
                        <p>Work Experience</p>
                    </div>
                    <img src={down} alt=' ' style={{width: '8%', margin: '5px 9px 0px 0px', padding: '0'}}/>
                </summary>
            </details>


            <details>
                <summary className='filter'>
                    <div className='row'>
                        <img src={paper} alt=' '/>
                        <p>Activity Filter</p>
                    </div>
                    <img src={down} alt=' ' style={{width: '8%', margin: '5px 9px 0px 0px', padding: '0'}}/>
                </summary>
            </details>


            <details>
                <summary style={{borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', display: 'flex', justifyContent: 'flex-start', backgroundColor: 'white', width: '87%', marginTop: '3px'}}>
                    <img src={paper} alt=' ' style={{width: '10%', height: '38%', margin: '17px 5px 5px 5px', padding: '0px'}}/>
                    <p>Advanced Filter</p>
                </summary>
            </details>
        </div>
    )
}