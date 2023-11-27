import React from 'react'

export default function All() {
    const all=[{
        pic:'https://www.guvi.in/blog/wp-content/uploads/2023/11/Product-based-Companies-for-IoT-Solutions-Architects-in-India-01.jpg',
        title:"Best 15 Product-based Companies for IoT Solutions Architects in India",
        summary:"The domain of the Internet of Things (IoT) has become a pivotal element in driving",
    },{
        pic:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp",
        title:"Top 5 Product-Based Companies That Don’t Require Coding",
        summary:"Every one of us wants to work in top product-based companies, Right? But, Not everyone"
    },{
        pic:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-1-1-1536x804.webp",
        title:"12 Key Elements For A Professional UI/UX Designer Resume Guide",
        summary:"The field of UI/UX designing is all about innovation and creativity. People should understand the"
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
