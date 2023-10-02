var select = 247;

export default function Candidatediv()
{
    return(
        <div className="candidatediv">

            <div className="candidate" style={{marginTop: '2%'}}>
                <input type="checkbox" style={{width: '5%', height: '30%'}}/>
                <span style={{fontWeight: 'bold', color: '#1c4ed8'}}>{select} Candidates</span>

                {/* <div style={{display: 'flex', flexDirection: 'row'}}>
                    <span style={{color: '#1c4ed8'}}>Qualified</span>
                    <span style={{color: '#1c4ed8'}}>Task</span>
                </div> */}
                <table style={{position: 'absolute', right: '7%'}}>
                    <tr>
                        <td style={{color: '#1c4ed8'}}>Qualified</td>
                        <td style={{width: '5%', borderRight: '2px solid #f3f3f4'}}></td>

                        <td style={{marginRight:'3%'}}>Task</td>
                        <td>
                            <span style={{margin: '3%',borderRadius: '30%', backgroundColor: '#f6f8fd', color: '#22215b'}}>25</span>
                        </td>
                        <td style={{width: '5%', borderRight: '2px solid #f3f3f4'}}></td>

                        <td style={{margin:'3%'}}>Disqualified</td>
                        <td>
                            <span style={{margin: '3%',borderRadius: '30%', backgroundColor: '#f6f8fd', color: '#22215b'}}>78</span>
                        </td>
                    </tr>
                </table>
            </div>
            <hr style={{width:'90%', color: '#eeeeee'}}/>



            <div className="candidate">
                <input type="checkbox" style={{width: '5%', height: '30%'}}/>
                <svg style={{width: '13%'}}>
                    <circle cx="50" cy="80" r="40"  fill="#e1e7f2" />
                    <text x="25" y="90" fill="#b1cdfd" style={{fontSize: '40px'}}>AS</text>
                </svg>
                <div className="details">
                    <h3 className="detailchild">Aaliyah Sanderson</h3>
                    <p className="detailchild">Riyadh, Saudi Arabia</p>
                    <p className="detailchild">Bachelor - Cambridge University (2023 - 2023)</p>
                    <p className="detailchild" style={{color: '#1c4ed8'}}>
                        <span>#top_candidate</span>
                        <span>#top_candidate</span>
                    </p>
                    <div className="detailchild" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span style={{backgroundColor: '#f3fafc', color: '#067092', borderRadius: '30px', padding: '1%'}}>New York</span>
                        <span style={{backgroundColor: '#f3fafc', color: '#067092', borderRadius: '30px', padding: '1%'}}>Marketing</span>
                        <span style={{backgroundColor: '#f3fafc', color: '#067092', borderRadius: '30px', padding: '1%'}}>London</span>
                    </div>
                </div>
            </div>
            <hr style={{width:'90%', color: '#eeeeee'}}/>

            <div className="candidate">
                <input type="checkbox" style={{width: '5%', height: '30%'}}/>
                <svg style={{width: '13%'}}>
                    <circle cx="50" cy="80" r="40"  fill="#e1e7f2" />
                    <text x="25" y="90" fill="#b1cdfd" style={{fontSize: '40px'}}>AS</text>
                </svg>
                <div className="details">
                    <h3 className="detailchild">John Doe</h3>
                    <p className="detailchild">Bostom, USA</p>
                    <p className="detailchild">Bachelor - MIT (2023 - 2023)</p>
                    <p className="detailchild" style={{color: '#1c4ed8'}}>
                        <span>#top_candidate</span>
                        <span>#top_candidate</span>
                    </p>
                    <div className="detailchild" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span style={{backgroundColor: '#f3fafc', color: '#067092', borderRadius: '30px', padding: '1%'}}>New York</span>
                        <span style={{backgroundColor: '#f3fafc', color: '#067092', borderRadius: '30px', padding: '1%'}}>Marketing</span>
                        <span style={{backgroundColor: '#f3fafc', color: '#067092', borderRadius: '30px', padding: '1%'}}>London</span>
                    </div>
                </div>
            </div>
            <hr style={{width:'90%', color: '#eeeeee'}}/>

            <div className="candidate">
                <input type="checkbox" style={{width: '5%', height: '30%'}}/>
                <svg style={{width: '13%'}}>
                    <circle cx="50" cy="80" r="40"  fill="#e1e7f2" />
                    <text x="25" y="90" fill="#b1cdfd" style={{fontSize: '40px'}}>AS</text>
                </svg>
                <div className="details">
                    <h3 className="detailchild">Thomas Matt</h3>
                    <p className="detailchild">Edinburgh, UK</p>
                    <p className="detailchild">Bachelor - Harvard University (2023 - 2023)</p>
                    <p className="detailchild" style={{color: '#1c4ed8'}}>
                        <span>#top_candidate</span>
                        <span>#top_candidate</span>
                    </p>
                    <div className="detailchild" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span style={{backgroundColor: '#f3fafc', color: '#067092', borderRadius: '30px', padding: '1%'}}>New York</span>
                        <span style={{backgroundColor: '#f3fafc', color: '#067092', borderRadius: '30px', padding: '1%'}}>Marketing</span>
                        <span style={{backgroundColor: '#f3fafc', color: '#067092', borderRadius: '30px', padding: '1%'}}>London</span>
                    </div>
                </div>
            </div>
            {/* <hr style={{width:'90%', color: '#eeeeee'}}/>

            <div className="candidate">
                <input type="checkbox" style={{width: '5%', height: '30%'}}/>
                <svg style={{width: '13%'}}>
                    <circle cx="50" cy="80" r="40"  fill="#e1e7f2" />
                    <text x="25" y="90" fill="#b1cdfd" style={{fontSize: '40px'}}>AS</text>
                </svg>
                <div className="details">
                    <h3 className="detailchild">Kamilia Smith</h3>
                    <p className="detailchild">London, UK</p>
                    <p className="detailchild">Bachelor - Boston University (2023 - 2023)</p>
                    <p className="detailchild" style={{color: '#1c4ed8'}}>
                        <span>#top_candidate</span>
                        <span>#top_candidate</span>
                    </p>
                    <div className="detailchild" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span style={{backgroundColor: '#f3fafc', color: '#067092', borderRadius: '30px', padding: '1%'}}>New York</span>
                        <span style={{backgroundColor: '#f3fafc', color: '#067092', borderRadius: '30px', padding: '1%'}}>Marketing</span>
                        <span style={{backgroundColor: '#f3fafc', color: '#067092', borderRadius: '30px', padding: '1%'}}>London</span>
                    </div>
                </div>
            </div>
            <hr style={{width:'90%', color: '#eeeeee'}}/>

            <div className="candidate">
                <input type="checkbox" style={{width: '5%', height: '30%'}}/>
                <svg style={{width: '13%'}}>
                    <circle cx="50" cy="80" r="40"  fill="#e1e7f2" />
                    <text x="25" y="90" fill="#b1cdfd" style={{fontSize: '40px'}}>AS</text>
                </svg>
                <div className="details">
                    <h3 className="detailchild">Roy Jade</h3>
                    <p className="detailchild">London, UK</p>
                    <p className="detailchild">Bachelor - Yale University (2023 - 2023)</p>
                    <p className="detailchild" style={{color: '#1c4ed8'}}>
                        <span>#top_candidate</span>
                        <span>#top_candidate</span>
                    </p>
                    <div className="detailchild" style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span style={{backgroundColor: '#f3fafc', color: '#067092', borderRadius: '30px', padding: '1%'}}>New York</span>
                        <span style={{backgroundColor: '#f3fafc', color: '#067092', borderRadius: '30px', padding: '1%'}}>Marketing</span>
                        <span style={{backgroundColor: '#f3fafc', color: '#067092', borderRadius: '30px', padding: '1%'}}>London</span>
                    </div>
                </div>
            </div>
            <hr style={{width:'90%', color: '#eeeeee'}}/> */}
        </div>
    )
}