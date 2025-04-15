import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import Nav from "@/src/layout/header/Nav";

const projectDetails = [
  {
    id: 1,
    title: "Software Development",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaqu quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eosqui ratione voluptatem sequi nesciunt. Neque porro quisquam est dolorem epsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temporae",
    image_1: "../assets/images/projects/project-details.jpg",
    projectInfomation: {
      client: "Webtend Digital Studio",
      category: "Web Development",
      date: "February 25, 2023",
      location: "Melbourne, Australia",
    },

    theChallenge:
      "mAt vero eos et accusamus etiusto odio dignissimos ducimus blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi occaecati cupiditate similique sunin culpa qui officia deserunt mollitia animi est laborum et dolorum fuga. Et harum quidem rerum facilis esty expedita distinctio. Nam libero tempore cum soluta nobis est eligendi optio cumquey nihil impedit quo minus quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earume",
    theResults:
      "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    image_2: "../assets/images/projects/project-middle1.jpg",
    image_3: "../assets/images/projects/project-middle2.jpg",
    prevProject_id: 3,
    nextProject_id: 2,
    prevProject_title: "Digital Product Design",
    nextProject_title: "Web Development",
    prevProject_image: "../assets/images/projects/prev-project.jpg",
    nextProject_image: "../assets/images/projects/next-project.jpg",
  },
  {
    id: 2,
    title: "Software Development",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaqu quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eosqui ratione voluptatem sequi nesciunt. Neque porro quisquam est dolorem epsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temporae",
    image_1: "../assets/images/projects/project-details.jpg",
    projectInfomation: {
      client: "Webtend Digital Studio",
      category: "Web Development",
      date: "February 25, 2023",
      location: "Melbourne, Australia",
    },
    theChallenge:
      "mAt vero eos et accusamus etiusto odio dignissimos ducimus blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi occaecati cupiditate similique sunin culpa qui officia deserunt mollitia animi est laborum et dolorum fuga. Et harum quidem rerum facilis esty expedita distinctio. Nam libero tempore cum soluta nobis est eligendi optio cumquey nihil impedit quo minus quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earume",
    theResults:
      "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    image_2: "../assets/images/projects/project-middle1.jpg",
    image_3: "../assets/images/projects/project-middle2.jpg",
    prevProject_id: 1,
    nextProject_id: 3,
    prevProject_title: "Digital Product Design",
    nextProject_title: "Web Development",
    prevProject_image: "../assets/images/projects/prev-project.jpg",
    nextProject_image: "../assets/images/projects/next-project.jpg",
  },
  {
    id: 3,
    title: "Software Development",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaqu quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eosqui ratione voluptatem sequi nesciunt. Neque porro quisquam est dolorem epsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi temporae",
    image_1: "../assets/images/projects/project-details.jpg",
    projectInfomation: {
      client: "Webtend Digital Studio",
      category: "Web Development",
      date: "February 25, 2023",
      location: "Melbourne, Australia",
    },
    theChallenge:
      "mAt vero eos et accusamus etiusto odio dignissimos ducimus blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi occaecati cupiditate similique sunin culpa qui officia deserunt mollitia animi est laborum et dolorum fuga. Et harum quidem rerum facilis esty expedita distinctio. Nam libero tempore cum soluta nobis est eligendi optio cumquey nihil impedit quo minus quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earume",
    theResults:
      "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    image_2: "../assets/images/projects/project-middle1.jpg",
    image_3: "../assets/images/projects/project-middle2.jpg",
    prevProject_id: 2,
    nextProject_id: 1,
    prevProject_title: "Digital Product Design",
    nextProject_title: "Web Development",
    prevProject_image: "../assets/images/projects/prev-project.jpg",
    nextProject_image: "../assets/images/projects/next-project.jpg",
  },
];

const ProjectDetails = () => {
  const dark = true;
  const singleMenu = true;

  const router = useRouter();
  const { id } = router.query;
  const project = projectDetails.find((project) => project.id === parseInt(id));

  return (
    <Layout
      footer={1}
      dark={dark}
      singleMenu={singleMenu}
      hideHeader={true}
      hideFooter={true}
    >
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
                    <img
                      src="../assets/images/icons/Message.svg"
                      alt="Toggler"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-75 rel z-1"
        style={{
          backgroundImage: "url(../assets/images/hero/hero-two-bg.png)",
        }}
      >
        <div className="container container-1290">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title style-two mt-65 mb-30 wow fadeInUp delay-0-2s">
                {project?.title}
                <img
                  className="mxw-10 leaf"
                  src="../assets/images/video/leaf.png"
                  alt="Leaf"
                />
              </h1>
              <div className="banner-text wow fadeInUp delay-0-3s">
                {project?.description}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Project Details Image start */}
      <div className="project-details-image rel z-1">
        <div className="container-fluid">
          <div className="image wow fadeInUp delay-0-2s">
            <img src={project?.image_1} alt="Project" />
          </div>
        </div>
      </div>
      {/* Project Details Image end */}
      {/* Project Details Content Area start */}
      <section className="project-details-area pt-80 rel z-1">
        <div className="container container-1290">
          <div className="row pb-35 wow fadeInUp delay-0-2s">
            <div className="col-lg-4">
              <h3 className="title mb-30">Project Information's</h3>
            </div>
            <div className="col-lg-8">
              <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
                <div className="col">
                  <h5>Client</h5>
                  <p className="sub-title mb-20">
                    {project?.projectInfomation.client}
                  </p>
                </div>
                <div className="col">
                  <h5>Category</h5>
                  <p className="sub-title mb-20">
                    {project?.projectInfomation.category}
                  </p>
                </div>
                <div className="col">
                  <h5>Date</h5>
                  <p className="sub-title mb-20">
                    {project?.projectInfomation.date}
                  </p>
                </div>
                <div className="col">
                  <h5>Location</h5>
                  <p className="sub-title mb-20">
                    {project?.projectInfomation.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row pt-50 pb-70 wow fadeInUp delay-0-2s">
            <div className="col-lg-4">
              <h3 className="title mb-30">The Challenge</h3>
            </div>
            <div className="col-lg-8">
              <div className="big-letter text">{project?.theChallenge}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="image mb-30 wow fadeInUp delay-0-2s">
                <img
                  src="../assets/images/projects/project-middle1.jpg"
                  alt="Project"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image mb-30 wow fadeInUp delay-0-4s">
                <img
                  src="../assets/images/projects/project-middle2.jpg"
                  alt="Project"
                />
              </div>
            </div>
          </div>
          <div className="row pt-40 pb-105 rpb-80 wow fadeInUp delay-0-2s">
            <div className="col-lg-4">
              <h3 className="title mb-30">The Results</h3>
            </div>
            <div className="col-lg-8">
              <div className="text">{project?.theResults}</div>
            </div>
          </div>
          <hr />
        </div>
      </section>
      {/* Project Details Content Area End */}
      {/* Next Prev Post Area start */}
      <section className="next-prev-post-area">
        <div className="container container-1290">
          <div className="next-prev-post pt-110 rpt-80 pb-100 rpb-70">
            <div className="prev-post wow fadeInLeft delay-0-2s">
              <div className="image">
                <img src={project?.prevProject_image} alt="Prev" />
              </div>
              <div className="content">
                <h4>
                  <Link
                    legacyBehavior
                    href={`/project-details/${project?.prevProject_id}`}
                  >
                    {project?.prevProject_title}
                  </Link>
                </h4>
                <Link
                  legacyBehavior
                  href={`/project-details/${project?.prevProject_id}`}
                >
                  <a className="read-more">
                    Prev <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="next-post wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link
                    legacyBehavior
                    href={`/project-details/${project?.nextProject_id}`}
                  >
                    {project?.nextProject_title}
                  </Link>
                </h4>
                <Link
                  legacyBehavior
                  href={`/project-details/${project?.nextProject_id}`}
                >
                  <a className="read-more">
                    Next <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
              <div className="image">
                <img src={project?.nextProject_image} alt="Next" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Next Prev Post Area end */}
      {/* footer area start */}
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
    </Layout>
  );
};
export default ProjectDetails;
