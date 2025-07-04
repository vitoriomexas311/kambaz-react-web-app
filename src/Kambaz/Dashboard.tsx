import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/mem1.jpeg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/5678/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/meme2.png" width={200} />
            <div>
              <h5> CS5678 Python for Beginners </h5>
              <p className="wd-dashboard-course-title">
                Snake charming for the modern age{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/9012/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/meme3.png" width={200} />
            <div>
              <h5> CS9012 Java Programming </h5>
              <p className="wd-dashboard-course-title">
                Coffee-fueled coding adventures{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/3456/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/meme4.jpg" width={200} />
            <div>
              <h5> CS3456 JavaScript Basics </h5>
              <p className="wd-dashboard-course-title">
                Making websites do the cha-cha{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/7890/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/meme5.jpeg" width={200} />
            <div>
              <h5> CS7890 HTML & CSS </h5>
              <p className="wd-dashboard-course-title">
                Building websites like a digital architect{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/2345/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/meme6.jpeg" width={200} />
            <div>
              <h5> CS2345 Database Design </h5>
              <p className="wd-dashboard-course-title">
                Where data goes to make friends{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/6789/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/meme7.jpg" width={200} />
            <div>
              <h5> CS6789 Version Control </h5>
              <p className="wd-dashboard-course-title">
                Time travel for your code{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
