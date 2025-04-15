import TeamSkills from "@/src/components/TeamSkills";
import Layout from "@/src/layout/Layout";
import Nav from "@/src/layout/header/Nav";
import { useRouter } from 'next/router';
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Patrick V. Schroeder",
    position: "UI/UX Designer",
    description: "On the other hand, we denounce with righteous indignation dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs those who fail in their duty through weakness of wil same",
    location: "55 Main Street, Melbourne, Australia",
    email: "support@gmail.com",
    phone: "+000 (123) 456 88",
    image: "../assets/images/team/team-profile.jpg",
    socialLinks: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" }
    ]
  },
  {
    id: 2,
    name: "Jonathan S. Wilcox",
    position: "Senior Manager",
    description: "On the other hand, we denounce with righteous indignation dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs those who fail in their duty through weakness of wil same",
    location: "55 Main Street, Melbourne, Australia",
    email: "support@gmail.com",
    phone: "+000 (123) 456 88",
    image: "../assets/images/team/team-profile.jpg",
    socialLinks: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" }
    ]
  },
  {
    id: 3,
    name: "Steven G. Seman",
    position: "Web Developer",
    description: "On the other hand, we denounce with righteous indignation dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs those who fail in their duty through weakness of wil same",
    location: "55 Main Street, Melbourne, Australia",
    email: "support@gmail.com",
    phone: "+000 (123) 456 88",
    image: "../assets/images/team/team-profile.jpg",
    socialLinks: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" }
    ]
  },
  {
    id: 4,
    name: "Joseph E. Curran",
    position: "Senior Manager",
    description: "On the other hand, we denounce with righteous indignation dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs those who fail in their duty through weakness of wil same",
    location: "55 Main Street, Melbourne, Australia",
    email: "support@gmail.com",
    phone: "+000 (123) 456 88",
    image: "../assets/images/team/team-profile.jpg",
    socialLinks: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" }
    ]
  },
];

const TeamDetails = ({ params }) => {
  const dark= true;
  const singleMenu= true;

  const router = useRouter();
  const { id } = router.query;
  
  const member = teamMembers.find(m => m.id === parseInt(id));

  return (
    <Layout footer={1} dark singleMenu={singleMenu} hideHeader={true} hideFooter={true}>
       <header className="main-header menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1620 clearfix">
          <div className="header-inner rpy-10 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                   <a>
                    <img
                      src={
                        dark
                          ? "../assets/images/logos/logo-white.png"
                          : "../assets/images/logos/logo.png"
                      }
                      alt="Logo"
                      title="Logo"
                    />
                  </a> 
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <Nav singleMenu={singleMenu} />
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            {/* <NavSearch /> */}
            {/* Menu Button */}
            <div className="menu-btns ">
              {/* menu sidbar */}
              <div className="menu-sidebar">
                <button>
                  <img src="../assets/images/icons/Message.svg" alt="Toggler" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
      {/* Team Profile Area start */}
      <section
        className="team-profile-area pt-220 rpt-150 pb-130 rpb-100 rel"
        style={{ backgroundImage: "url(../assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-6">
              <div className="team-profile-image rmb-55 wow fadeInLeft delay-0-2s">
              <img src={member?.image} alt={member?.name} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-profile-content wow fadeInRight delay-0-2s">
                <h2>{member?.name}</h2>
                <span className="designation">{member?.position}</span>
                <p>{member?.description}</p>
                <div className="team-sub-title mt-55 mb-30">
                  <h4>Get In Touch</h4>
                </div>
                <div className="contact-info-item">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="content">
                    <b className="title">Location</b>
                    <span className="text">
                      {member?.location}
                    </span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="content">
                    <b className="title">Email Address</b>
                    <span className="text">
                      <a href={`mailto:${member?.email}`}>{member?.email}</a>
                    </span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="icon">
                    <i className="far fa-phone" />
                  </div>
                  <div className="content">
                    <b className="title">Phone Us</b>
                    <span className="text">
                      <a href={`callto:${member?.phone}`}>{member?.phone}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Profile Area end */}
      {/* Skill Area start */}
      <section className="skill-area pt-130 rpt-100 rel z-1">
        <div className="container container-1290">
          <div className="row gap-80">
            <div className="col-lg-6">
              <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Best Skills</span>
                <h2>We Have Lot’s Experience and Professionals</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="skill-content wow fadeInUp delay-0-4s">
                <p>
                  Similique sunin culpa qui officia deserunt mollitia animi est
                  laborum et dolorum fuga. Et harum quidem rerum facilis esty
                  expedita distinctioam nobis est eligendi optio cumquey
                </p>
                <TeamSkills />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skill Area end */}
      {/* Contact Form Area start */}
      <section className="contact-area pt-80 rpt-50 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title mb-50 text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Work Together</span>
                <h2>Let’s Work Together For Your Nest Projects</h2>
              </div>
            </div>
            <div className="col-xl-10 col-lg-11">
              <form
                id="teamForm"
                className="form-style-one z-1 rel wow fadeInUp delay-0-3s"
                action="#"
                name="teamForm"
                method="post"
              >
                <div className="row gap-60 pt-15">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">
                        <i className="far fa-user" />
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">
                        <i className="far fa-envelope" />
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone">
                        <i className="far fa-phone" />
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-50">
                    <div className="form-group">
                      <select name="select-subject" id="select-subject">
                        <option value="default" selected>
                          Subject
                        </option>
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="SEO">SEO</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">
                        <i className="far fa-pencil" />
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Message"
                        required={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group pt-5 mb-0">
                      <button
                        type="submit"
                        className="theme-btn style-two w-100"
                      >
                        Send Message us <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer
      className="main-footer rel z-1"
      style={{
        backgroundImage: "url(../assets/images/footer/footer-bg-shape.png)",
      }}
    >
      <div className="container container-1290">
        <div className="footer-top pt-80 pb-60">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="footer-logo mb-20 wow fadeInRight delay-0-2s animated">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src={
                        dark
                          ? "../assets/images/logos/footer-logo-white.png"
                          : "../assets/images/logos/footer-logo.png"
                      }
                      alt="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 text-lg-end">
              <div className="social-style-four mb-20 wow fadeInLeft delay-0-2s animated">
                <a href="#">
                  <i className="fab fa-facebook-f" /> <span>Facebook</span>
                </a>
                <a href="#">
                  <i className="fab fa-twitter" /> <span>Twitter</span>
                </a>
                <a href="#">
                  <i className="fab fa-dribbble" /> <span>Dribbble</span>
                </a>
                <a href="#">
                  <i className="fab fa-behance" /> <span>Behance</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="footer-left-content pt-80">
              <div className="lets-work mb-50 wow fadeInUp delay-0-2s animated">
                <img
                  src="../assets/images/footer/lets-work.png"
                  alt="Let's Work Man"
                />
                <span>Let’s Work Together</span>
              </div>
              <div className="footer-contact-info wow fadeInUp delay-0-3s animated">
                <a
                  className="theme-btn style-three"
                  href="mailto:support@gmail.com"
                >
                  support@gmail.com <i className="far fa-arrow-right" />
                </a>
                <a
                  className="theme-btn style-three phone-number"
                  href="callto:+000(123)45688"
                >
                  +000 (123) 456 88 <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-right-content">
              <h4 className="footer-title wow fadeInUp delay-0-2s animated">
                Quick Links
              </h4>
              <div className="footer-widget widget_nav_menu">
                <ul className="list-style-two wow fadeInUp delay-0-3s animated">
                  <li>
                    <Link legacyBehavior href="about">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="services">
                      Popular Services
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="team">
                      Team Member
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="blog">
                      Latest News
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="contact">
                      Contact Us?
                    </Link>
                  </li>
                </ul>
                <ul className="list-style-two wow fadeInUp delay-0-4s animated">
                  <li>
                    <Link legacyBehavior href="index">
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="index2">
                      Development
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="index3">
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="contact">
                      Need a Career
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="faqs">
                      Faqs ?
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-6">
              <div className="footer-bottom-menu pt-40 pb-35 rpb-0 wow fadeInRight delay-0-2s animated">
                <ul>
                  <li>
                    <Link legacyBehavior href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/faqs">
                      <a>FAQs</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="services">
                      How IT Works
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="copyright-text text-lg-end pt-40 pb-35 rpt-10 wow fadeInLeft delay-0-2s animated">
                <p>
                  Copyright @2023,{" "}
                  <Link legacyBehavior href="/">
                    <a>Ygency</a>
                  </Link>{" "}
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
      {/* Contact Form Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default TeamDetails;
