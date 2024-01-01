import React from 'react'
import { FaCalendarAlt, FaCommentAlt, FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import theme from '../../theme'

const Article = (props) => {
    const palate = theme()

    return (

        <article className="entry  br-3 shadow-sm animated--grow-in card" style={{
            backgroundColor: palate.background.default,
            color: palate.neutral.light
        }}>
            {/* 
                <div className="entry-img pic ">
                    <img src="/assets/img/blog/blog-1.jpg" alt="" className="img-fluid pic br-3" width={''} />
                </div> */}

            <h2 className="fs-5" style={{
                color: palate.neutral.dark
            }}>
                Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia
            </h2>

            <div className="my-2 fs-6 d-flex row">
                <li className="d-block col-sm-4 col-md-4 pr-3">
                    <div href="blog-single.html"><FaUserAlt className='mb-1' /> John Doe</div>
                </li>
                <li className="d-block col-sm-4 col-md-4 pr-3">
                    <div href="blog-single.html">
                        <time dateTime="2020-01-01"><FaCalendarAlt className='mb-1' /> Jan 1, 2020</time>
                    </div>
                </li>
                <li className="d-block col-sm-3 col-md-4 pr-3">
                    <div href="blog-single.html"><FaCommentAlt className='mb-1' /> 12 </div>
                </li>
            </div>

            <div className="entry-content">
                <p>
                    Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                    Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                </p>
                <div className="read-more">
                    <Link to={`/explore/discover/blog/${props?.id}`} className='noDec'>Read More</Link>
                </div>
            </div>

        </article>
    )
}

export default Article