import theme from '../theme';
import HomeFooter from '../components/home/HomeFooter';
import { useStateContext } from '../State/StateContext';
import React, { useEffect } from 'react';

const AboutPage = () => {
    const palate = theme()
    const { setTitle, mode } = useStateContext()

    useEffect(() => {
        setTitle('About')
    }, [])

    return <>
        <main id="main" className='container-fluid mb-5 about ml-auto'>
            {/* <!-- ======= About Section ======= --> */}
            <div className="d-sm-flex align-items-center justify-content-between m-2 my-3" >
                <h1 className="h3 mb-0">About</h1>
            </div>
            <section id="about" className="about p-2">
                <div className="">

                    <div className="row content p-0 animated--grow-in">
                        <div className="col-md-6">
                            <h1>Christian Youth Summit</h1>
                            <h3 className='mb-0'>In Pursuit Of Revival</h3>

                            <div className="m-auto d-flex animated--grow-in slideInLeft py-3" >
                                <img src="/cysm.png" className="img-fluid m-auto br-3" alt="" style={{
                                    backgroundColor: mode == 'dark' && palate.background.default
                                }} />
                            </div>
                        </div>
                        <div className="col-md-6 pt-4 pt-lg-0">
                            <p>
                                Is an annual interdenominational conference of young people under a highly saturated atmosphere of God's prescence.
                                Every moment of the retreat is strategically and prayerfully planned to produce remarkable experiences of spiritual refreshing, rekindling and personal revival
                            </p>
                            <p>
                                The main thrust of the summit is to pursue transformation in the lives of youths, provide and engage young people in descipleship, create exposures for leadership and capacity development, and to channel and maximize the grace of God upon their lives in strategic kingdom labours for revival
                            </p>
                            <p>
                                The summit was first held in january 2010 and has over the years provided a platform for youths across various denominational backgrounds, schools, careers and a different spheres of life
                            </p>

                            <div className="col-md-12 pl-0 pl-md-2 col-lg-8 pl-lg-4 p-3 py-4">
                                <div className="shadow-sm br-3 p-2 card-h cardEl">
                                    <i>
                                        You have taught your children and nursing infants to give you praise. they silence your enemies who were seeking revenge
                                    </i>
                                    <div className="py-2"></div>
                                    <div className="text-right pr-3 text-primary">~Psalm 8:2, NIV</div>
                                </div>
                            </div>

                            <div className='m-0 p-0 d-none d-lg-block'>
                                <p>
                                    Several thousands of young people have participated in this Summit for the past years with a genuine hunger for God and have left with a burning passion to see and participate in kingdom labours that will usher in a move of God in these last days.
                                </p>
                            </div>



                            <div className="col-md-8">
                                <div className='m-0 p-0 d-none d-xl-block'>
                                    <h5>
                                        <b>Who Attends</b>
                                    </h5>
                                    <p>
                                        The summit is primarily for young people and is generaly opened to participants between the ages 13 to 50. Majourity of targeted participants are christian youths, however, those whom the lord can affect bynthe ministry of His word, deliver from the power of darkness and translate to His dear son are very welcome
                                    </p>
                                </div>
                            </div>

                            <div className='pl-2 d-lg-none d-md-none d-xl-block'>
                                <h5>
                                    <b>Our Mission</b>
                                </h5>
                                <p>
                                    We have over the years aimed at raising and equipping agents of transformation, with the focal point of interest and mobilization been:

                                    <ul className='upper'>
                                        <li>
                                            <b>
                                                Christian Youths
                                            </b> across various denominations
                                        </li>

                                        <li>
                                            <b>
                                                Youth leaders and workers
                                            </b> of churches and ministries
                                        </li>


                                        <li>
                                            <b>
                                                Youth pastors and ministers
                                            </b> of churches and ministries
                                        </li>


                                        <li>
                                            <b>
                                                students
                                            </b> from tetiary and secondary schools
                                        </li>


                                        <li>
                                            <b>
                                                Leaders
                                            </b> of churches and ministries with passion and burden for youths
                                        </li>
                                    </ul>

                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 d-block d-md-none">
                            {/* <div className="m-auto d-flex animated--grow-in slideInRight py-3" >
                                <img src="/assets/Arc (2).jpg" className="img-fluid m-auto br-3 cardEl" alt="" />
                            </div> */}
                            <div className="m-auto d-flex animated--grow-in slideInRight py-3" >
                                <img src="/assets/img/slide/slide-2.jpg" className="img-fluid m-auto br-3 cardEl" alt="" />
                            </div>
                        </div>

                        <div className="col-md-6 pt-4 pt-lg-0">
                            <div className='pl-2 d-lg-block d-md-block d-xl-none'>
                                <h5>
                                    <b>Our Mission</b>
                                </h5>
                                <p>
                                    We have over the years aimed at raising and equipping agents of transformation, with the focal point of interest and mobilization been:

                                    <ul className='upper'>
                                        <li>
                                            <b>
                                                Christian Youths
                                            </b> across various denominations
                                        </li>

                                        <li>
                                            <b>
                                                Youth leaders and workers
                                            </b> of churches and ministries
                                        </li>


                                        <li>
                                            <b>
                                                Youth pastors and ministers
                                            </b> of churches and ministries
                                        </li>


                                        <li>
                                            <b>
                                                students
                                            </b> from tetiary and secondary schools
                                        </li>


                                        <li>
                                            <b>
                                                Leaders
                                            </b> of churches and ministries with passion and burden for youths
                                        </li>
                                    </ul>

                                </p>
                            </div>
                            <div className='m-0 p-0 d-block d-lg-none'>
                                <p>
                                    Several thousands of young people have participated in this Summit for the past years with a genuine hunger for God and have left with a burning passion to see and participate in kingdom labours that will usher in a move of God in these last days.
                                </p>
                            </div>
                            <div className='m-0 p-0 d-md-block d-xl-none'>
                                <h5>
                                    <b>Who Attends</b>
                                </h5>
                                <p>
                                    The summit is primarily for young people and is generaly opened to participants between the ages 13 to 50. Majourity of targeted participants are christian youths, however, those whom the lord can affect by the ministry of His word, deliver from the power of darkness and translate to His dear son are very welcome
                                </p>
                            </div>
                            <h5>
                                <b>What Happens here?</b>
                            </h5>
                            <p>
                                Coming together is an awesome and worthwhile experience for every moment spent under such a weighty atmosphere of God's prescence. Every session is saturated with the move and manifestation of the Holy Spirit. These are sessions such as

                                <ul className='noBullets mt-2'>
                                    <li>
                                        <b>
                                            Messages and Teachings
                                        </b>
                                        <p>
                                            These exository sessions are the main thrust of the program and reveal the burden as contained in the theme. We look up to God for a fresh insight and practical implications of His word to us that will provoke us to arise and become channels through whom God can flow to impact and affect our generation
                                        </p>
                                    </li>
                                    <li>
                                        <b>
                                            Prayer Uproars
                                        </b>
                                        <p>
                                            These are deliberate slots of corporate suplications and intercessions, these have been moments of visitation for several lives and the impact has been enormous
                                        </p>
                                    </li>
                                    <li>
                                        <b>
                                            Bible Study
                                        </b>
                                        <p>
                                            This is a strong crucial component of our programs. A developed bible study outline is used with coordination of our facilitators in an impactful study session
                                        </p>
                                    </li>
                                    <li>
                                        <b>
                                            Worship His majesty
                                        </b>
                                        <p>
                                            This is a strong feature of our programs. it is designed to launch us into deep worship of our King and to bring down his prescence
                                        </p>
                                    </li>
                                    <li>
                                        <b>
                                            Counselling and Ministration
                                        </b>
                                        <p>
                                            There are moments of definite personal and corporate visitations as the word of God confronts various areas of our lives and as young people, we will be required to make deliberate resonses and take responsibility over the demand upon our lives
                                        </p>
                                    </li>
                                    <li>
                                        <b>
                                            Impartion Night
                                        </b>
                                        <p>
                                            This is the concluding session of our Programs, scheduled for articipants to tarry in His prescence for definite, personal and corporate encounters
                                        </p>
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div className="col-md-6 d-none d-md-block">
                            {/* <div className="m-auto d-flex animated--grow-in slideInRight py-3" >
                                <img src="/assets/Arc (2).jpg" className="img-fluid m-auto br-3 cardEl" alt="" style={{
                                    backgroundColor: mode == 'dark' && palate.background.default
                                }} />
                            </div> */}
                            <div className="m-auto d-flex animated--grow-in slideInRight py-3" >
                                <img src="/assets/img/slide/slide-2.jpg" className="img-fluid m-auto br-3 cardEl" alt="" style={{
                                    backgroundColor: mode == 'dark' && palate.background.default
                                }} />
                            </div>
                        </div>
                    </div >
                </div >
            </section >


            {/* <section id="team" className="team" >
                <div className="container py-3 br-3" style={{
                    backgroundColor: palate.background.default,
                    color: palate.neutral.light
                }}>

                    <div className="section-title">
                        <h2>Experience</h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-6">
                            <div className="member d-flex align-items-start cardEl" style={{
                                backgroundColor: palate.background.default,
                                color: palate.neutral.light
                            }}>
                                <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4  style={{
                            backgroundColor: palate.background.default,
                            color: palate.neutral.light
                        }}>Walter White</h4>
                                    <span>Chief Executive Officer</span>
                                    <p>Explicabo voluptatem mollitia et repellat</p>
                                    <div className="social">
                                        <a href=""><i className="ri-twitter-fill"></i></a>
                                        <a href=""><i className="ri-facebook-fill"></i></a>
                                        <a href=""><i className="ri-instagram-fill"></i></a>
                                        <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="member d-flex align-items-start cardEl" style={{
                                backgroundColor: palate.background.default,
                                color: palate.neutral.light
                            }}>
                                <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4  style={{
                            backgroundColor: palate.background.default,
                            color: palate.neutral.light
                        }}>Sarah Jhonson</h4>
                                    <span>Product Manager</span>
                                    <p>Aut maiores voluptates amet et quis</p>
                                    <div className="social">
                                        <a href=""><i className="ri-twitter-fill"></i></a>
                                        <a href=""><i className="ri-facebook-fill"></i></a>
                                        <a href=""><i className="ri-instagram-fill"></i></a>
                                        <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start cardEl" style={{
                                backgroundColor: palate.background.default,
                                color: palate.neutral.light
                            }}>
                                <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4  style={{
                            backgroundColor: palate.background.default,
                            color: palate.neutral.light
                        }}>William Anderson</h4>
                                    <span>CTO</span>
                                    <p>Quisquam facilis cum velit laborum corrupti</p>
                                    <div className="social">
                                        <a href=""><i className="ri-twitter-fill"></i></a>
                                        <a href=""><i className="ri-facebook-fill"></i></a>
                                        <a href=""><i className="ri-instagram-fill"></i></a>
                                        <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start cardEl" style={{
                                backgroundColor: palate.background.default,
                                color: palate.neutral.light
                            }}>
                                <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4 >Amanda Jepson</h4>
                                    <span>Accountant</span>
                                    <p>Dolorum tempora officiis odit laborum officiis</p>
                                    <div className="social">
                                        <a href=""><i className="ri-twitter-fill"></i></a>
                                        <a href=""><i className="ri-facebook-fill"></i></a>
                                        <a href=""><i className="ri-instagram-fill"></i></a>
                                        <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section> */}
        </main >
        <HomeFooter />
        <a href="#" className="d-flex align-items-center justify-content-center">
            Back to top
        </a>
    </>
}

export default AboutPage