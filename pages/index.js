import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout footer={1} singleMenu dark>
      {/* the first section in the home page */}
      <section className="hero-area-six pt-185 rpt-150 pb-130 rpb-100 rel z-1">
        <div className="container container-1620">
          <div className="hero-six-wrapper">
            <div className="hero-social">
              <a href="#">
                <i className="fab fa-facebook-f" /> <span>Facebook</span>
              </a>
              <a href="#">
                <i className="fab fa-twitter" /> <span>Twitter</span>
              </a>
              <a href="#">
                <i class="fab fa-linkedin" aria-hidden="true"></i>
                <span>linkedin</span>
              </a>
              <a href="#">
                <i class="fab fa-instagram" aria-hidden="true"></i>
                <span>instagram</span>
              </a>
            </div>
            <div className="row no-gap">
              <div className="col-xl-4">
                <div className="left-image">
                  <img src="assets/images/hero/hero-six1.png" alt="Hero" />
                </div>
              </div>
              <div className="col-xl-4">
                <div className="hero-six-content">
                  <h1>Creative Marketing Agency</h1>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusantium doloremque laudantium totam aperiam eaque
                  </p>
                  <Link href="#services" className="theme-btn style-two">
                    Explore Services <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 align-self-end">
                <div className="right-image">
                  <img src="assets/images/hero/hero-six2.png" alt="Hero" />
                </div>
              </div>
            </div>
            <div className="down-arrow">
              <a href="#about">
                Scroll Down <i className="fal fa-arrow-down" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Hero Section End */}
      {/* Services area start */}
      <div className="headline-six-wrapper rel z-1 py-60 rpy-30">
        <div className="headline-area-six bgc-primary py-20 rpy-10">
          <div className="container-fluid">
            <div className="headline-wrap-two style-two">
              <span className="marquee-wrap">
                <span className="marquee-inner left">
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Digital Marketing</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Product Design</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Mobile Apps Design</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Branding Identity</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Web Optimizations</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Email Marketing</b>
                  </span>
                </span>
                <span className="marquee-inner left">
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Digital Marketing</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Product Design</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Mobile Apps Design</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Branding Identity</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Web Optimizations</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Email Marketing</b>
                  </span>
                </span>
                <span className="marquee-inner left">
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Digital Marketing</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Product Design</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Mobile Apps Design</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Branding Identity</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Web Optimizations</b>
                  </span>
                  <span className="marquee-item">
                    <i className="flaticon-star-symbol" />
                    <b>Email Marketing</b>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      {/* Services Area end */}
      {/* About Us Area start */}
      <section
        id="about"
        className="about-area-six pt-130 rpt-100 pb-80 rpb-50 rel z-1"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-md-6">
              <div className="about-content-six mb-40 wow fadeInUp delay-0-2s">
                <div className="col-xl-5 col-lg-3 pb-50">
                  <div className="about-image rmb-45 wow fadeInUp delay-0-2s">
                    <img
                      src="assets/images/about/circle-text-white.svg"
                      alt="Circle Text"
                    />
                  </div>
                </div>
                <div className="section-title">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>
                    Our Main Goal to Satisficed Local &amp; Global Clients
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="about-image-six mb-50 wow fadeInUp delay-0-4s">
                <img src="assets/images/about/about-six.jpg" alt="About" />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="about-features mb-50 wow fadeInUp delay-0-4s">
                <div className="feature-six-item">
                  <div className="icon">
                    <i className="far fa-rocket-launch" />
                  </div>
                  <div className="content">
                    <h5>Company Mission</h5>
                    <p>
                      Our mission is to empower businesses with cutting-edge
                      digital solutions
                    </p>
                    <Link className="read-more" href="about">
                      <span>Read More</span>{" "}
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div className="feature-six-item">
                  <div className="icon">
                    <i className="far fa-bullseye-arrow" />
                  </div>
                  <div className="content">
                    <h5>Company Vision &amp; Goals</h5>
                    <p>
                      We are dedicated to crafting digitals experiences that
                      seamlessly
                    </p>
                    <Link className="read-more" href="about">
                      <span>Read More</span>{" "}
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* About Us Area end */}
      {/* Services Area start */}
      <section id={"services"} className="what-we-do-area pt-90 rpt-80 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-8">
              <div className="what-we-do-content mb-55">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">What We Do</span>
                  <h2>Latest Way to Get Web Solutions &amp; Business Growth</h2>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-3s">
                  <div className="number">
                    <span>01</span>
                  </div>
                  <div className="content">
                    <h5>Mobile Solutions</h5>
                    <p>
                      Sed ut perspiciatis unde omnis natus error voluptatem
                      accusantium doloremque
                    </p>
                    <Link legacyBehavior href={`/service-details/${1}`}>
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-5s">
                  <div className="number">
                    <span>02</span>
                  </div>
                  <div className="content">
                    <h5>Web Solutions</h5>
                    <p>
                      Quis autem veleum iure reprehe nderitecy quie voluptate
                      velit esse quam nihile
                    </p>
                    <Link legacyBehavior href={`/service-details/${2}`}>
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-7s">
                  <div className="number">
                    <span>03</span>
                  </div>
                  <div className="content">
                    <h5>Custome Solutions</h5>
                    <p>
                      We denounce with righteous indignation and dislike
                      beguiled demoralized charms
                    </p>
                    <Link legacyBehavior href={`/service-details/${3}`}>
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="what-we-do-image mb-55 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/services/what-we-do.jpg"
                  alt="What We Do"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Area end */}
      {/* Video Area start */}
      <div
        className="video-area-six pt-175 rpt-125 pb-185 rpb-135 bgs-cover"
        style={{
          backgroundImage: "url(assets/images/background/video-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="video-six-content wow fadeInUp delay-0-2s">
            <span className="video-title mb-20 rmb-0">Co-working</span>
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-3 col-lg-4">
                <div className="text mt-35">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 text-center">
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play mt-35"
                >
                  <img src="assets/images/icons/play-icon.png" alt="Play" />
                </a>
              </div>
              <div className="col-xl-3 col-lg-4">
                <span className="video-text text-lg-start text-center mt-35">
                  Video
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Area end */}
      {/* Team Area start */}
      <section className="team-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Team Members</span>
                <h2>Meet Our Professionals Team</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="team-member style-four wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/team/member-six1.jpg"
                    alt="Team Member"
                  />
                </div>
                <Link href={`/team-details/${1}`}>
                  <div className="content">
                    <h5>Patrick V. Schroeder</h5>
                    <span>UI/UX Designer</span>
                    <div className="team-social">
                      <div className="social-style-two">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                      <button>
                        <i className="far fa-plus" />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="team-member style-four wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/team/member-six2.jpg"
                    alt="Team Member"
                  />
                </div>
                <Link href={`/team-details/${2}`}>
                  <div className="content">
                    <h5>Jonathan S. Wilcox</h5>
                    <span>Senior Manager</span>
                    <div className="team-social">
                      <div className="social-style-two">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                      <button>
                        <i className="far fa-plus" />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="team-member style-four wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/team/member-six3.jpg"
                    alt="Team Member"
                  />
                </div>
                <Link href={`/team-details/${3}`}>
                  <div className="content">
                    <h5>Steven G. Seman</h5>
                    <span>Web Developer</span>
                    <div className="team-social">
                      <div className="social-style-two">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                      <button>
                        <i className="far fa-plus" />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="team-member style-four wow fadeInUp delay-0-8s">
                <div className="image">
                  <img
                    src="assets/images/team/member-six4.jpg"
                    alt="Team Member"
                  />
                </div>
                <Link href={`/team-details/${4}`}>
                  <div className="content">
                    <h5>Troy V. Richardson</h5>
                    <span>Digital Marketer</span>
                    <div className="team-social">
                      <div className="social-style-two">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                      <button>
                        <i className="far fa-plus" />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Team Area end */}
      {/* Why Choose Us start */}
      <section className="demo-area pb-60 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-8">
              <div className="why-choose-us-content pb-30">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Why Choose Us</span>
                  <h2>Web Design Company That You Can Trust</h2>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="why-choose-item style-three wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Competitive rates</h5>
                      </div>
                      <p>
                        We are strategic marketing the have proven programming
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item style-three wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Premium Development</h5>
                      </div>
                      <p>
                        We are strategic marketing the have proven programming
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item style-three wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>No contracts needed</h5>
                      </div>
                      <p>
                        We are strategic marketing the have proven programming
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item style-three wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Retina &amp; Flexible</h5>
                      </div>
                      <p>
                        We are strategic marketing the have proven programming
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="why-choose-right mb-60 style-two style-three wow fadeInLeft delay-0-2s">
                <div className="image-one mb-30">
                  <img
                    src="assets/images/services/why-choose1.jpg"
                    alt="Why Choose"
                  />
                </div>
                <div className="image-two">
                  <img
                    src="assets/images/services/why-choose2.jpg"
                    alt="Why Choose"
                  />
                </div>
                <div className="why-choose-border-shape" />
                <div className="text-shape">
                  <img
                    className="text"
                    src="assets/images/services/web-design-text.svg"
                    alt="Web Design Text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Why Choose Us end */}
      {/* Headline area start */}

      {/* Headline Area end */}
      {/* Projects Area start */}
      <section
        id={"projects"}
        className="project-timeline-area pt-90 rpt-75 rel z-1"
      >
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center pb-25">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-30 wow fadeInLeft delay-0-2s">
                <span className="sub-title mb-15">Recent Works Gallery</span>
                <h2>Lat’s Look Our Recent Project Gallery</h2>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link legacyBehavior href="/project-list">
                <a className="theme-btn mb-25 wow fadeInRight delay-0-2s">
                  View More Projects <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">01</span>
              <h4>
                <Link legacyBehavior href={`/project-details/${1}`}>
                  <a>Business Task Management Dashboard Design</a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <img
                src="assets/images/projects/project-timeline1.jpg"
                alt="Project TimeLine Image"
              />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href={`/project-details/${1}`}>
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">02</span>
              <h4>
                <Link legacyBehavior href={`/project-details/${2}`}>
                  <a>PSD, Figma &amp; XD to HTML Design &amp; Development</a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <img
                src="assets/images/projects/project-timeline2.jpg"
                alt="Project TimeLine Image"
              />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href={`/project-details/${2}`}>
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">03</span>
              <h4>
                <Link legacyBehavior href={`/project-details/${3}`}>
                  <a>Mobile Application Design &amp; Development</a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <img
                src="assets/images/projects/project-timeline3.jpg"
                alt="Project TimeLine Image"
              />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href={`/project-details/${3}`}>
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Area end */}
      {/* Statistics Area start */}
      <div className="statistics-area pt-100 rpt-70 pb-70 rpb-40 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={25} />
                <span className="counter-title">Years Of Experience</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                <i className="fal fa-check-circle" />
                <Counter end={3} extraClass={"k"} />
                <span className="counter-title">Project’s Complete</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-4s">
                <i className="fal fa-check-circle" />
                <Counter end={48} />
                <span className="counter-title">Professionals Team Member</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-5s">
                <i className="fal fa-check-circle" />
                <Counter end={92} />
                <span className="counter-title">Awards Winning</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      {/* Statistics Area end */}
      {/* Testimonial Area start */}
      <section className="testimonial-section pt-130 rpt-90">
        <div className="container container-1210">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonials-four.jpg"
                  alt="Testimonial Left Image"
                />
                <div className="bottom-border" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-one-right-part">
                <Swiper
                  {...sliderProps.testimonialsActiveSwiper}
                  className="testimonials-active wow fadeInUp delay-0-2s"
                >
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="testimonial-controls mt-75 rmt-40 wow fadeInUp delay-0-2s">
                  <button className="testimonial-prev slick-arrow">
                    <i className="far fa-chevron-left" />
                  </button>
                  <div className="testimonial-dots">
                    <div className="slick-dots"></div>
                  </div>
                  <button className="testimonial-next slick-arrow">
                    <i className="far fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Area end */}
      {/* Blog Style Two start */}
      <section
        id={"blog"}
        className="blog-area-two pt-125 rpt-100 pb-70 rpb-40 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Blog &amp; News</span>
                <h2>Read Our Latest News &amp; Blog Get Every Updates</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog-six1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />
                      <a href="#">February 18, 2023</a>
                    </li>
                  </ul>
                  <hr />
                  <h5>
                    <Link href="blog-details">
                      Voice Skills For Google Assistant And Amazon Alexa
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-five wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog-six2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />
                      <a href="#">February 18, 2023</a>
                    </li>
                  </ul>
                  <hr />
                  <h5>
                    <Link href="blog-details">
                      Voice Skills For Google Assistant And Amazon Alexa
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-five wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/blog/blog-six3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />
                      <a href="#">February 18, 2023</a>
                    </li>
                  </ul>
                  <hr />
                  <h5>
                    <Link href="blog-details">
                      Voice Skills For Google Assistant And Amazon Alexa
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Blog Style Two end */}
      {/* Client Logo Two start */}
      <section
        id={"clients"}
        className="client-logo-area pb-90 pt-100 rpb-70 rel z-1"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Global Clients</span>
                <h2>
                  I’ve 1253+ Global Clients &amp; lot’s of Project Complete
                </h2>
              </div>
            </div>
          </div>
          <div className="client-logo-wrap-two">
            <Link
              className="client-logo-item wow fadeInUp delay-0-2s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo-six1.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-3s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo-six2.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-4s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo-six3.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-5s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo-six4.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-6s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo-six5.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-2s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo-six6.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-3s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo-six7.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-4s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo-six8.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-5s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo-six9.png"
                alt="Client Logo"
              />
            </Link>
            <Link
              className="client-logo-item wow fadeInUp delay-0-6s"
              href="contact"
            >
              <img
                src="assets/images/client-logos/client-logo-six10.png"
                alt="Client Logo"
              />
            </Link>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
    </Layout>
  );
};
export default Index;
