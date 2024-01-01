import React from 'react'
import theme from '../theme'
import { FaTree } from 'react-icons/fa'
import Search from '../components/discover/Search'

const BlogSingle = () => {
    const palate = theme()

    return (
        <section id="blog" class="blog">
            <div class="container">

                <div class="row">

                    <div class="col-lg-8">
                        <article class="entry entry-single br-3 shadow-sm animated--grow-in" style={{
                            backgroundColor: palate.background.default,
                            color: palate.neutral.light
                        }}>
                            <h2 class="">
                                <div href="blog-single.html">Dolorum optio tempore voluptdivs dignissimos cumque fugdiv qui quibusddivm quidiv</div>
                            </h2>

                            <div class="entry-meta">
                                <ul>
                                    <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="blog-single.html">John Doe</a></li>
                                    <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                                    <li class="d-flex align-items-center"><i class="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li>
                                </ul>
                            </div>

                            <div class="entry-content">
                                <p>
                                    Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                                    Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                                </p>

                                <p>
                                    Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.
                                </p>
                                {/* 
                                <blockquote>
                                    <p>
                                        Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.
                                    </p>
                                </blockquote> */}

                                <p>
                                    Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat.
                                    Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem harum qui qui blanditiis neque.
                                    Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel magnam quod et tempora deleniti error rerum nihil tempora.
                                </p>

                                <h3>Et quae iure vel ut odit alias.</h3>
                                <p>
                                    Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.
                                    Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione aspernatur dolor. Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores natus aperiam dolor consequatur id ex sed. Quibusdam rerum dolores sint consequatur quidem ea.
                                    Beatae minima sunt libero soluta sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam voluptatem voluptatem accusamus mollitia aut atque aut.
                                </p>

                                <img src="assets/img/blog/blog-inside-post.jpg" class="img-fluid" alt="" />

                                <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                                <p>
                                    Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel.
                                    Consectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
                                </p>
                                <p>
                                    Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi asperiores est veniam.
                                </p>

                            </div>

                            <div class="entry-footer d-flex">
                                <FaTree className='mt-1 mr-2' />
                                <ul class="tags d-flex">
                                    <a style={{
                                        color: palate.danger.main,
                                        marginRight: `10px`
                                    }}
                                        className=""><div>Creative</div></a>
                                    <a style={{
                                        color: palate.danger.main,
                                        marginRight: `10px`
                                    }}
                                        className=""><div>Tips</div></a>
                                    <a style={{
                                        color: palate.danger.main,
                                        marginRight: `10px`
                                    }}
                                        className=""><div>Marketing</div></a>
                                </ul>
                            </div>

                        </article>
                        {/* <!-- End blog entry --> */}

                        <div class="blog-comments">

                            <h4 class="comments-count">8 Comments</h4>

                            <div id="comment-1" class="comment br-3" style={{
                                backgroundColor: palate.background.default,
                                color: palate.neutral.light
                            }}>
                                <div class="d-flex">
                                    <div className='p-3'>
                                        <div className="d-flex pb-2" style={{
                                            borderBottom: `1px solid rgba(150,150,150,0.3)`
                                        }}>
                                            <h5 className='mr-3 fs'>Georgia Reader</h5>
                                            <time datetime="2020-01-01">01 Jan, 2020</time>
                                        </div>
                                        <p>
                                            Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta.
                                            Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End comment #1 --> */}

                            {/* <!-- End comment #4 --> */}

                            <div class="reply-form br-3" style={{
                                backgroundColor: palate.background.default,
                                color: palate.neutral.light
                            }}>
                                <h4>Leave a Comment</h4>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div class="row">
                                        <div class="col form-group">
                                            <textarea
                                                name="comment"
                                                style={{
                                                    backgroundColor: palate.background.default,
                                                    color: palate.neutral.light
                                                }}
                                                class="form-control"
                                                placeholder="Your Comment*" />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        class="btn btn-danger">Post Comment</button>

                                </form>

                            </div>

                        </div>
                        {/* <!-- End blog comments --> */}

                    </div>
                    {/* <!-- End blog entries list --> */}
                    <div className="col-lg-4">
                        <Search className={`d-block sidenav shadow-sm br-3 ml-md-auto ml-md-3 animated--grow-in `} class={``} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSingle