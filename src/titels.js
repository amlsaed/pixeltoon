import React from 'react';
import {Sections} from './sections'
import {Link} from 'react-router-dom'
 




function Titels ({match}){
    const fetchsec=Sections.find(({name}) => name ===match.params.sectionName)
    .sections.find(({secname}) => secname ===match.params.secname);
    const sec=fetchsec.sub ;
  const hei = window.innerHeight;

        return(
            <div className="stories container my-5 storysec" style={{minHeight:hei-200}}>
            <div className="row py-5  justify-content-center">
                {sec.map((sub) => 
                     (
                        <div key={sub.id} className=" my-5 mx-4 px-5 storytype center-block text-center col-md-3 col-sm-12">
                        <Link to={`${match.url}/${sub.subname}`}>
                        <img src={sub.img} alt="صورة"/>
                        <span>{sub.arname}</span>
                        </Link>
                            
                       </div>
                     )
                    


                    )}    
            </div>
            </div>    
        )
        
    }
        


export default Titels;
