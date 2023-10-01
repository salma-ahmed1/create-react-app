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
                <circle cx="23" cy="23" r="15"  fill="#d9d9d9" />
            </svg>
                {/* home */}
            <a href=''>
                <img src= {home} />
            </a>

                {/* people */}
            <a href=' '>
                <img src={people} />
            </a>

                {/* todo */}
            <a href=' '>
                <img src={todo}/>
            </a>

                {/* share */}
            <a href=' '>
                <img src={share}/>
            </a>

                {/* paper */}
            <a href=' '>
             <img src={paper}/>
            </a>

                {/* book */}
            <a href=' '>
             <img src={book}/>
            </a>

                {/* favourite */}
            <a href=' '>
             <img src={favourite}/>
            </a>

                {/* back */}
            <a href=' '>
             <img src={back} style={{ width: '40%', margin: '25%', padding: '10%' }}/>
            </a>

                {/* settings */}
            <a href=' '>
             <img src={settings}  style={{ paddingTop: '250%' }}/>
            </a>

                {/* profile */}
            <svg className="pro_pic"  style={{ position: 'absolute', bottom: '0', height: '7%' }}>
                <circle cx="23" cy="23" r="15"  fill="#d7f5ed" />
                <text x="14" y="27" fill="#b1cdfd">AS</text>
            </svg>
        </div>
    )
}