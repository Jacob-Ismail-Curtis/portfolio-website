import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
   return (
      <div className="flex flex-col md:flex-row justify-center my-20 ">
         <div className="w-full md:w-9/12">
            <Title>Experience</Title>
            {timeline.map(item => (
               <TimelineItem 
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  details={item.details}
                  skills={item.skills}
               />
            ))}
         </div>
      </div>
   )
}

export default Timeline;
