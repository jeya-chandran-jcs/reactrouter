import React from 'react'

export default function Fullstack() {
    const all=[{
        pic:'https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers-768x480.webp',
        title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2023",
        summary:"When you’re hiring a full-stack developer, what are the most important things you look for?",
    },{
        pic:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer--768x480.webp",
        title:"Top Differences: Full Stack Developer vs Software Engineer 2023",
        summary:"A Full Stack Developer is a tech all-rounder. They work on both the front and"
    },{
        pic:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design-768x480.webp",
        title:"Horizontal vs Vertical Scaling for Efficient System Design",
        summary:"In the world of system design, envision a digital skyscraper – a multifaceted structure built"
    }
]
  return (
    <div className="container">
        <div className='row'>
            {all.map((items)=>(
            <div className='col-lg-4 col-md-6 mb-4 size'>
                <div className='card'>
                    <img src={items.pic} />
                    <div className='card-body'>
                        <h5 className='card-title'>
                           {items.title}
                        </h5>
                        <p className='card-text'>
                        {items.summary}
                        </p>
                        <p className='card-text  end'>
                            <strong> READ MORE </strong> &gt;&gt;
                        </p>
                        <span className='space'></span>
                    </div>
                    <div className='card-footer text-muted'>
                        <div className='row'>
                            <div className='card-text'>
                            24 November 2023 . No Comments           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             ))}
        </div>
    </div>
  )
}
