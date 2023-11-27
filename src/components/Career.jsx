import React from 'react'

export default function Career() {
    const all=[{
        pic:'https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp',
        title:"Top 5 Product-Based Companies That Don’t Require Coding",
        summary:"Every one of us wants to work in top product-based companies, Right? But, Not everyone",
    },{
        pic:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Machine-Learning-Engineer-Resume-Guide-768x480.webp",
        title:"Machine Learning Engineer Resume Guide: 11 Important Things To Include!",
        summary:"The current technological era is full of competition and those who have profound skillset are"
    },{
        pic:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Mechanical-Engineering-Resume-Important-Things-To-Look-Out-For-768x480.webp",
        title:"Mechanical Engineering Resume: 9 Important Things To Look Out For",
        summary:"With the development of technology, most of us started forgetting about mechanical engineering which pioneered"
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
