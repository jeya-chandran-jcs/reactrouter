import React from 'react'

export default function Datascience() {
    const all=[{
        pic:'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-1536x768.webp',
        title:"Impact of Certification Programs on Hiring Data Scientists",
        summary:"Data scientists are the creators behind transforming the raw data into edible data insights. These",
    },{
        pic:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers-768x480.webp",
        title:"Top Product-Based Companies for Data Science Freshers",
        summary:"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing"
    },{
        pic:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering-768x480.webp",
        title:"What is the Difference between Data Science and Data Engineering?",
        summary:"India has been making some serious waves in the world of data. Just like the"
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
