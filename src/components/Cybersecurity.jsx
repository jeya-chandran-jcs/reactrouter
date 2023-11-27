import React from 'react'

export default function Cybersecurity() {
    const all=[{
        pic:'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More-768x480.webp',
        title:"What Is Hacking? Types of Hacking & More",
        summary:"Have you ever wondered what hacking is all about? It’s a big deal in today’s",
    },{
        pic:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers-768x480.webp",
        title:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
        summary:"Cybersecurity Vs Ethical Hacking: Top 10 Differences"
    },{
        pic:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
        title:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
        summary:"Look around today, you will witness that we are more reliant on technology and devices"
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
