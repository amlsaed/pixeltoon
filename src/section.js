import React from 'react';
import {Sections} from './sections'
import {Link} from 'react-router-dom'

function Section ({match}){
    const fetchsec=Sections.find(({name}) => name ===match.params.sectionName );
    const sec= fetchsec.sections;
    
        return(
            <div className="stories container  " >
            <div className="row ">
                    {sec.map((sec) => 
                    (
                        <div key={sec.id} className=" ">
                        <Link to={`${match.url}/${sec.secname}`}>
                            <img src={sec.img} alt="" className=" "/>
                            <span>{sec.ar}</span>
                        </Link>
                            
                       </div>
                    )
                    


                    )}
                    </div>
                </div>    
        )
    }


export default Section;
