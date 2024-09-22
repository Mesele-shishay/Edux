import "/public/favicon.png";
import "/public/css/home.css";
import { asset } from "@/utils/utils";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function HOME() {
  return (
    <>
      {/* Navbar */}
      <Header />

      {/* Header */}
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To Our App!</div>
          <div className="masthead-heading text-uppercase">
            It's Nice To Meet You
          </div>
          <a
            className="btn btn-primary btn-xl text-uppercase"
            href="/#services"
          >
            Tell Me More
          </a>
        </div>
      </header>

      {/* Services */}
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">
              A service that you'll love.
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-school fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Dashboard</h4>
              <p className="text-muted">
                with our website, you can use our dashboard system to easily
                manage your and track all your schooling activity.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Responsive Design</h4>
              <p className="text-muted">
                Our website is developed using responsive device to support
                mobile device users.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Web Security</h4>
              <p className="text-muted">Our web site is 99 % Secure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="page-section pt-2" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Who are we.</h3>
          </div>
          <ul className="timeline mb-0">
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={asset("img/about/1.jpg")}
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2013-2014 E.C</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut l.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={asset("img/about/2.jpg")}
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2014 E.C</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    recusandae sit vero unde, sed, incidunt et ea quo dolore
                    laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={asset("img/about/3.jpg")}
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2015 E.C</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image bg-primary">
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Web App!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Teams */}
      <section className="page-section pt-2 bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">
              Our website is maintained by.
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src={asset("img/team/1.jpg")}
                  alt="..."
                />
                <h4>Mesele Shishay</h4>
                <p className="text-muted">Lead Developer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-dark btn-social mx-2" href="#!">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-dark btn-social mx-2" href="#!">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src={asset("img/team/1.jpg")}
                  alt="..."
                />
                <h4>Mesele Shishay</h4>
                <p className="text-muted">Lead Marketer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-dark btn-social mx-2" href="#!">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-dark btn-social mx-2" href="#!">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src={asset("img/team/1.jpg")}
                  alt="..."
                />
                <h4>Mesele Shishay</h4>
                <p className="text-muted">Lead Designer</p>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Larry Parker Twitter Profile"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Larry Parker Facebook Profile"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Larry Parker LinkedIn Profile"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                You can follow and our developer using social link buttons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">
              We had like to hear your feedback.
            </h3>
          </div>
          <form id="contactForm" method="POST" action="{{ route('contact') }}">
            {/* @csrf */}
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  {/* {{-- Name input --}} */}
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name *"
                    required
                    value=""
                  />

                  {/* @error('name')
										<span className="error font-18 text-danger">
											{{ $message }}
										</span>
									@enderror */}
                </div>
                <div className="form-group">
                  {/* {{-- Email address input --}} */}
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email *"
                    required
                    value=""
                  />

                  {/* @error('email')
										<span className="error font-18 text-danger">
											{{ $message }}
										</span>
									@enderror */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  {/* {{-- Comment input --}} */}
                  <textarea
                    className="form-control"
                    id="comment"
                    name="comment"
                    placeholder="Your Comment *"
                    required
                  ></textarea>

                  {/* @error('comment')
										<span className="error font-18 text-danger">
											{{ $message }}
										</span>
									@enderror */}
                </div>
              </div>
            </div>
            {/* {{-- Submit Button --}} */}
            <div className="text-center">
              <button
                className="btn btn-primary btn-xl text-uppercase"
                id="contactBtn"
                value="contactBtn"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
