import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import theme from '../../theme'
import { toast } from 'react-toastify'
import { useStateContext } from '../../State/StateContext'

const HomeFooter = () => {
    const palate = theme()
    const { mode } = useStateContext()
    return (
        <footer id="footer" style={{
            backgroundColor: palate.background.default,
            color: palate.neutral.light
        }}>
            <div className="footer-top" style={{
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            }}>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-6">
                            <div className="footer-info" style={{
                                backgroundColor: palate.background.default,
                                color: palate.neutral.light
                            }}>
                                <h3>Christian Youth Summit</h3>
                                <p style={{
                                    backgroundColor: palate.background.default,
                                    color: palate.neutral.light
                                }}>
                                    {/* ... <br /> */}
                                    Jerusalem Mission House Int'l, Beside Benue Links Park <br />
                                    Makurdi, Benue State, Nigeria<br />
                                    <br className='my-2' style={{ opacity: '0' }} />
                                    <div onClick={() => {
                                        toast.success('Copied', {
                                            position: 'top-center'
                                        })
                                        navigator.clipboard.writeText('0705 056 6463')
                                    }}>
                                        <strong>Phone:</strong> 0705 056 6463
                                    </div>
                                    <div onClick={() => {
                                        toast.success('Copied', {
                                            position: 'top-center'
                                        })
                                        navigator.clipboard.writeText('christianyouthsummitmkd@gmail.com')
                                    }}>
                                        <strong>Email:</strong> christianyouthsummitmkd@gmail.com
                                    </div>
                                    <br />
                                </p>
                                <div className="social-links mt-3" style={{
                                    backgroundColor: palate.background.default,
                                    color: palate.neutral.light
                                }}>
                                    <a href={`https://www.facebook.com/MakurdiYouthSummit`} style={{
                                        color: mode == 'light' && palate.neutral.light
                                    }}><FaFacebook className="facebook" /></a>
                                    <a href={`#`} style={{
                                        color: mode == 'light' && palate.neutral.light
                                    }}><FaTwitter className="twitter" /></a>
                                    <a href={`#`} style={{
                                        color: mode == 'light' && palate.neutral.light
                                    }}><FaInstagram className="instagram" /></a>
                                    <a href={`#`} style={{
                                        color: mode == 'light' && palate.neutral.light
                                    }}><FaYoutube className="youtube" /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 footer-links" style={{
                            backgroundColor: palate.background.default,
                            color: palate.neutral.light
                        }}>
                            <h4 style={{
                                backgroundColor: palate.background.default,
                                color: palate.neutral.light
                            }}>Useful Links</h4>
                            <ul>
                                <li> <Link to="/" style={{
                                    backgroundColor: palate.background.default,
                                    color: mode == 'light' && palate.neutral.mediumMain
                                }}>Home</Link></li>
                                <li> <Link to="/About" style={{
                                    backgroundColor: palate.background.default,
                                    color: mode == 'light' && palate.neutral.mediumMain
                                }}>About us</Link></li>
                                <li> <Link to="/Explore" style={{
                                    backgroundColor: palate.background.default,
                                    color: mode == 'light' && palate.neutral.mediumMain
                                }}>Events</Link></li>
                                <li> <Link to="/About" style={{
                                    backgroundColor: palate.background.default,
                                    color: mode == 'light' && palate.neutral.mediumMain
                                }}>Partner</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright" >
                    &copy; Copyright <strong><span>Christian Youth Summit</span></strong>. All Rights Reserved
                </div>
                {/* <div className="credits" style={{
                            backgroundColor: palate.background.default,
                            color: palate.neutral.light
                        }}>
                    Designed by <a href="#">Chia Ernest</a>
                </div> */}
            </div>
        </footer>
    )
}

export default HomeFooter