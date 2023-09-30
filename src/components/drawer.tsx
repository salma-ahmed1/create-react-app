import home from './home.svg';
import people from './svg1.svg';
import todo from './svg2.svg';
import share from './svg3.svg';
import paper from './svg4.svg';
import book from './svg5.svg';
import favourite from './svg6.svg';
import back from './svg7.svg';
import settings from './settings.svg';


export default function Drawer()
{
    return(
        <div className="drawer" >
                {/* profile photo */}
            <svg style={{ height: '7%' }}>
                <circle cx="23" cy="23" r="15"  fill="grey" />
            </svg>
                {/* home */}
            <a href=''>
                <img src= {home}  style={{ width: '50%', margin: '20%', padding: '10%'}}/>
            </a>

                {/* people */}
            <a href=' '>
                <img src={people}  style={{ width: '50%', margin: '20%', padding: '10%' }}/>
            </a>

                {/* todo */}
            <a href=' '>
                <img src={todo} style={{ width: '50%', margin: '20%', padding: '10%' }}/>
            </a>

                {/* share */}
            <a href=' '>
                <img src={share} style={{ width: '50%', margin: '20%', padding: '10%' }}/>
            </a>

                {/* paper */}
            <a href=' '>
             <img src={paper} style={{ width: '50%', margin: '20%', padding: '10%' }}/>
            </a>

                {/* book */}
            <a href=' '>
             <img src={book} style={{ width: '50%', margin: '20%', padding: '10%' }}/>
            </a>

                {/* favourite */}
            <a href=' '>
             <img src={favourite} style={{ width: '50%', margin: '20%', padding: '10%' }}/>
            </a>

                {/* back */}
            <a href=' '>
             <img src={back} style={{ width: '40%', margin: '25%', padding: '10%' }}/>
            </a>

                {/* settings */}
            <a href=' '>
             <img src={settings}  style={{ width: '50%', margin: '20%', paddingTop: '250%' }}/>
            </a>

                {/* profile */}
            <svg className="pro_pic"  style={{ position: 'absolute', bottom: '0', height: '7%' }}>
                <circle cx="23" cy="23" r="15"  fill="blue" />
                <text x="14" y="27" fill="lightblue">AS</text>
            </svg>
        </div>
    )
}