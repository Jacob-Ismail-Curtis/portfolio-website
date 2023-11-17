import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';
import ResumePDF from '../../public/Resume.pdf';

function Timeline() {
   return (
      <div className="flex flex-col md:flex-row justify-center my-20 ">
         <div className="w-full md:w-8/12">
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
         {/* Add a download link for the resume */}
         <div className="text-center mt-4">
            <a
               href={ResumePDF}
               target="_blank" // Open in a new tab
               rel="noopener noreferrer"
               className="text-black font-bold hover:underline underline-offset-8 decoration-4 mb-5">
               Download Resume (PDF)
            </a>
         </div>
      </div>
   )
}

export default Timeline;
