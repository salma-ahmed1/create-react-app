import svg1 from './svgnav1.svg'
import svg2 from './svgnav2.svg'
import svg3 from './svgnav3.svg'
import svg4 from './svgnav4.svg'
import svg5 from './svgnav5.svg'
export default function Navbar()
{
    return(
        <div className="navbar">
            <div>
            <h1 style={{ color: "#1c4ed8", margin: '20px 0px 0px 0px'}}>London Internship Program</h1>
            <p style={{ margin: '5'}}>London</p>
            </div>

            <select style={{color: '#1c4ed8',width: '20%', height:'40%', marginTop: '20px', borderRadius: '10px'}}> 
                <option style={{padding: '10px', margin:'10px'}}>
                    <span>Applied</span>
                    <span style={{margin: '3%',borderRadius: '30%', backgroundColor: '#f6f8fd', color: '#22215b'}}>78</span>
                </option>

                <option>
                    <span>Shortlisted</span>
                    <span style={{margin: '3%',borderRadius: '30%', backgroundColor: '#f6f8fd', color: '#22215b'}}>78</span>
                </option>

                <option style={{width: '10%', height: '10%'}}>
                    <span>Techncal Interview</span>
                    <span style={{margin: '3%',borderRadius: '30%', backgroundColor: '#f6f8fd', color: '#22215b'}}>78</span>
                </option>

                <option>
                    <span>Oppurtunity Browsing</span>
                    <span style={{margin: '3%',borderRadius: '30%', backgroundColor: '#f6f8fd', color: '#22215b'}}>78</span>
                </option>
                
            </select>

            <div style={{width: '30%'}}>
                <span>
                    <img src={svg1} alt=" " className='navbarimg'/>
                    <img src={svg2} alt=" " className='navbarimg'/>
                    <img src={svg3} alt=" " className='navbarimg'/>
                    <img src={svg4} alt=" " className='navbarimg'/>
                    <img src={svg5} alt=" " className='navbarimg'/>
                </span>
                <span>
                    <button style={{borderTopLeftRadius: '10px', borderBottomLeftRadius: '10%' ,height: '50%', backgroundColor: '#1c5ecd', color: 'white', fontWeight: 'bold'}}>Move to video interview</button>
                    <button style={{borderTopRightRadius: '10px', borderBottomRightRadius: '10px', height: '50%', backgroundColor: '#1c5ecd', color: 'white'}}>{'\u25BC'}</button>
                </span>
            </div>
        </div>
    )
}