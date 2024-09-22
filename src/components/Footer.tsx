"use server";
import { FaGithub, FaInstagram, FaTelegram, FaTwitter, FaYoutube} from 'react-icons/fa'
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="bg-dark-2 d-print-none">
          <div className="container">
            <div className="row pt-4">
              <div className="col-md-3">
                <div className="copyright text-light pb-1">
                  <h3>Location</h3>
                  <p className="text-light mb-0">Sheraro,Tigray</p>
                  <p className="text-light mb-0">Phone: +251938792471</p>
                  <p className="text-light mb-0">Email: contact@Laravel.com</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="copyright text-light pb-1">
                  <h3>Company</h3>
                  <ul className="list-unstyled m-0">
                    <li>
                      <a href="#about" className="text-light">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-light">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="text-light">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="copyright text-light pb-1 text-center">
                  <h3>Around The Web</h3>
                  <div className="row">
                    <div className="col">
                      
                    </div>
                  </div>
                  <a
                    href="https://www.youtube.com/"
                    className="btn bg-light mt-1"
                    title="Youtube"
                  >
                    <FaYoutube className='text-danger' />
                  </a>
                  <a
                    href="https://www.twiter.com/"
                    className="btn bg-light mt-1 mx-3"
                    title="Twitter"
                  >
                    <FaTwitter className='text-info'/>

                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="btn bg-light mt-1 "
                    title="Instagram"
                  >
                    <FaInstagram className='text-danger' />
                  </a>
                  <a
                    href="https://t.me/"
                    className="btn bg-light mt-1 mx-3"
                    title="Telegram"
                  >
                    <FaTelegram className="text-info" />
                  </a>
                  <a
                    href="https://www.github.com/"
                    className="btn bg-light mt-1"
                    title="Github"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="container">
                  <div className="copyright text-light pb-1">
                    <h3>
                      About
                      <span className="text-info fw-bold"></span>
                    </h3>
                    <p className="text-light mb-0">
                      Focused on, simplicity, performance, efficiency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid px-5">
            <div className="copyright text-muted pb-1">
              <p>
                Edux is optimized for schooling.UI is simplified to improve
                schooling and fast web page loading, and constantly updated to
                avoid difficulty on using our web site, but we cannot warrant
                full simplicity of all While using our web site, you agree to
                have read and accepted our terms of use
                <a href="#cookies" className="text-light">
                  {" "}
                  cookie and privacy policy
                </a>
                <br />
                Copyright 2013-2024. All Rights Reserved.
                <br />
                <a href="https://www.MesaX-projects.com" className="text-light">
                  Powered by Mesa<span className="text-teal fw-bold"> X</span>{" "}
                  Projects.
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
