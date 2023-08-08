import React from "react";
import "../styles/home.css";
import AmazonLogo from "../../images/kdp.svg";
import RakutenKobo from "../../images/kobo.svg";
import AbeBooks from "../../images/abebooks.svg";
import CreateSpace from "../../images/createspace.svg";
import Work1 from "../../images/1.jpg";
import Work2 from "../../images/2.jpg";
import Work3 from "../../images/3.jpg";
import Work4 from "../../images/4.jpg";
import Work5 from "../../images/5.jpg";
import Work6 from "../../images/6.jpg";
import Work7 from "../../images/7.jpg";
import Work8 from "../../images/8.jpg";
import Work9 from "../../images/9.jpg";
import Work10 from "../../images/10.jpg";
import Susan from "../../images/testimonialpics/susan.jpeg";
import Megan from "../../images/testimonialpics/megan.jpg";
import Christina from "../../images/testimonialpics/chritiana.jpg";
import Solaru from "../../images/testimonialpics/solaru.jpg";
import Eze from "../../images/testimonialpics/eze.jpg";
import David from "../../images/testimonialpics/david.jpg";
import Rebecca from "../../images/testimonialpics/rebecca.jpg";
import Donnie from "../../images/testimonialpics/donnie.jpg";
import Ag from "../../images/testimonialpics/ag.jpg";
import Travis from "../../images/testimonialpics/travis.jpg";
import Ralph from "../../images/testimonialpics/Ralph.jpeg";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <div class="main">
          <h5 className="main-header">
            Tell us your rough ideas, we’ll tell the world your polished story{" "}
          </h5>
          <p className="para-header">
            In a couple of months, you can be a <span>published author</span>{" "}
            touching lives or not but time will pass regardless.
          </p>{" "}
          <a
            href="https://calendly.com/kalukalu/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-header-one">
              <h3>BOOK A CONSULT</h3>
            </button>
          </a>{" "}
          <a href="/contact-us">
            <button className="btn btn-header-two">
              <h3>CONTACT US NOW</h3>
            </button>
          </a>{" "}
          <p className="featured-header">As featured in</p>
          <img className="img-header" src={AmazonLogo} alt="" />
          <img className="img-header" src={RakutenKobo} alt="" />
          <img className="img-header" src={CreateSpace} alt="" />
        </div>
        <div className="menu">
          
        <img className="img-header-left" src={AbeBooks} alt="" />
        </div>
      </div>
      <div className="our-work">
        <h1>Our Work</h1>
        <img className="work-img" src={Work1} alt="img" />
        <img className="work-img" src={Work2} alt="img" />
        <img className="work-img" src={Work3} alt="img" />
        <img className="work-img" src={Work4} alt="img" />
        <img className="work-img" src={Work5} alt="img" />
        <img className="work-img" src={Work6} alt="img" />
        <img className="work-img" src={Work7} alt="img" />
        <img className="work-img" src={Work8} alt="img" />
        <img className="work-img" src={Work9} alt="img" />
        <img className="work-img" src={Work10} alt="img" />
      </div>
      <div className="cta-head">
        <div>
          <h5>
            You know what to say, <br />
            but don’t have time to say it? Allow us
          </h5>
          <a
            href="https://calendly.com/kalukalu/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cta-btn">
              <h3>BOOK A CONSULT</h3>
            </button>
          </a>{" "}
        </div>
      </div>

      <div className="testimonial">
        <h1 className="testimonial-header">Testimonial</h1>

        <div class="test-grid">
          <div class="test-item">
            <div className="">
              <p className="test-params">
                "I believe, like being a composer, it is a gift to come up with
                a piece of writing that can move people to action- Only some
                people have this gift. I believe you are one of those people.
                For those who are not great at writing, Kick&co services are the
                answer to their problem. Oftentimes, telling our stories can be
                difficult. We want to put ourselves in the best light. We are a
                little too close to our own pain and pride to tell it in a way
                that is interesting to others. Having someone write it for us,
                great storytellers like the team here is a boon. "
              </p>
              <div class="container">
                <img src={Susan} alt="description" class="image" />
                <div class="text-container">
                  <h4>Susan Ritter</h4>
                  <p className="text-test">
                    Founder, Wealthy Wise Woman, Greater Tampa Bay Area.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="test-item">
            <div className="">
              <p className="test-params">
                "Ghostwriting is a skill. To catch the thoughts and voice of
                another person and put it into your words is a skill, not many
                people do well, but you are super talented, so I can see why you
                are successful. I think this is a wonderful service. So many
                people have great ideas and stories to tell, but they don't have
                the words. They don't understand the craft. In those many, many
                cases, this team can help them get a story told. I know I will
                recommend you! If creativity is not your thing and words are not
                your best asset, check out Kick’s services. They're great at
                what they do."
              </p>
              <div class="container">
                <img src={Christina} alt="description" class="image" />
                <div class="text-container">
                  <h4>Christina Beauchemin</h4>
                  <p className="text-test">
                    Author, Speaker, Educator, Let My Legacy Be Love, LLC,
                    Malden Bridge, New York, United States
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="test-item">
            <div clasName="">
              <p className="test-params">
                "Love the direction you went with the narrative, fantastic
                writing. Gosh, I can just imagine the types of people who would
                benefit from YOU telling their story, you’re creating artwork
                with words– fantastic. Keep up the good work."
              </p>
              <div class="container">
                <img src={Megan} alt="description" class="image" />
                <div class="text-container">
                  <h4>Megan Tribble</h4>
                  <p className="text-test">
                    Content Marketer and Coach, Danville, Indiana, United
                    States.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="test-item">
            <div className="">
              <p className="test-params">
                "Contextualization and personalization are what AI is lacking
                right now. There will always be a need for great writers like
                Kick’s"
              </p>
              <div class="container">
                <img src={Solaru} alt="description" class="image" />
                <div class="text-container">
                  <h4>Elizabeth Solaru</h4>
                  <p className="text-test">
                    Director, Luxury Business Emporium, London Area, United
                    Kingdom.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="test-item">
            <div className="">
              <p className="test-params">
                "I love seeing a band of young people come together to create
                something and you have created something truly remarkable here;
                I happily recommend your services to people."
              </p>
              <div class="container">
                <img src={Eze} alt="description" class="image" />
                <div class="text-container">
                  <h4>Douglas Eze, CFF</h4>
                  <p className="text-test">
                    Founder & CEO, Largo Financial Services LLC. Washington
                    DC-Baltimore Area
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="test-item">
            <div className="">
              <p className="test-params">
                "Your experience of ghostwriting is a great example of turning
                ideas into profitable ventures. It's all about adding value and
                creating win-win partnerships. Providing this valuable service
                has been your key to success. Well done!"
              </p>
              <div class="container">
                <img src={David} alt="description" class="image" />
                <div class="text-container">
                  <h4>David D. Doerrier</h4>
                  <p className="text-test">
                    Presentation Empowerment Coach at David D. Doerrier, LLC
                    Atlanta Metropolitan Area
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="test-item">
            <div className="">
              <p className="test-params">"You walk your talk."</p>
              <div class="container">
                <img src={Rebecca} alt="description" class="image" />
                <div class="text-container">
                  <h4>Rebecca Jenkins</h4>
                  <p className="text-test">
                    Founder at RJEN. Bristol, United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="test-item">
            <div className="">
              <p className="test-params">
                "This team is an awesome team. Truly awesome. That word is
                overused, but you truly fill that word with meaning. It is truly
                an honor to read your work."
              </p>
              <div class="container">
                <img src={Donnie} alt="description" class="image" />
                <div class="text-container">
                  <h4>Donnie McFall, MBA</h4>
                  <p className="text-test">
                    Owner of McFall Consulting Inc. Minneapolis, Minnesota,
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="test-item">
            <div className="">
              <p className="test-params">
                "This is a great team! Very intellectual, and efficient, and
                serves as great accountability partners for projects you work
                on."
              </p>
              <div class="container">
                <img src={Ag} alt="description" class="image" />
                <div class="text-container">
                  <h4>Ag Goldsmith</h4>
                  <p className="text-test">
                    Finance Director, Hendrick Toyota Scion, Charleston, South
                    Carolina, United States
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="test-item">
            <div className="">
              <p className="test-params">
                "I want to send a big appreciation to Kick&co, I never thought
                I'd write a book until last year considering I didn't even like
                reading until last year. Your help, expertise, and openness to
                work with me is greatly appreciated."
              </p>
              <div class="container">
                <img src={Travis} alt="description" class="image" />
                <div class="text-container">
                  <h4>Travis Robbins</h4>
                  <p className="text-test">
                    Adventurer/Walker, The Connection Odyssey, Watertown, South
                    Dakota, United States
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="test-item">
            <div className="">
              <p className="test-params">
                "Kick&co creations are more than just compelling narratives;
                they are works of art. Reach out to them for exceptional
                ghostwriting and marketing services where you'll receive more
                than words, you’ll get stories told with passion and depth,
                especially for those seeking outstanding content and meaningful
                connections with their audience, look no further"
              </p>
              <div class="container">
                <img src={Ralph} alt="description" class="image" />
                <div class="text-container">
                  <h4>Ralph Danna P. A.</h4>
                  <p className="text-test">
                  Owner of Dannasales, Spring Hill, Florida, United States 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="what-we-do">
        <h2 className="what-we-do-head">What We Do</h2>
        <div className="content grid">
          <div className="box btn_shadow">
            <a href="/marketing">
              <h2 className="what-we-do-headers">Professional Ghostwriting</h2>
              <p className="what-we-do-params">
                A unique and discrete way to bring your ideas and stories to
                life. Experienced ghostwriters is to assist you in articulating
                your thoughts, concepts, and tales into polished and
                entertaining material while keeping completely confidential.
              </p>
            </a>
          </div>
          <div className="box btn_shadow">
            <a href="/marketing">
              <h2 className="what-we-do-headers">Copywriting</h2>
              <p className="what-we-do-params">
                Enhance your message, captivate the attention of your audience,
                and motivate real action. We offer expert copywriting services
                that are aimed to provide your organization with convincing and
                compelling material that has a long-term impact.
              </p>
            </a>
          </div>
          <div className="box btn_shadow">
            <a href="/marketing">
              <h2 className="what-we-do-headers">
                Marketing and Public Relations
              </h2>
              <p className="what-we-do-params">
                Through our Marketing and Public Relations services. We are
                committed to helping your business prosper and connect with your
                target audience on a meaningful level by having a strong
                awareness of the ever-changing marketing landscape and a passion
                for developing great storytelling.
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="masterpiece">
        <h2 className="masterpiece-head">THE PATH TO YOUR MASTERPIECE</h2>

        <div class="masterpiece-container">
          <div className="masterpiece-section">
            <span className="masterpiece-number">1</span>
            <h3 className="masterpiece-header">Clarity call</h3>
            <p>
              Clarity Call description Clarity Call description Clarity Call
              description Clarity Call description Clarity Call description
            </p>
          </div>
          <div className="masterpiece-section">
            <span className="masterpiece-number">2</span>
            <h3 className="masterpiece-header">Onboarding</h3>
            <p>
              Clarity Call description Clarity Call description Clarity Call
              description Clarity Call description Clarity Call description
            </p>
          </div>
          <div className="masterpiece-section">
            <span className="masterpiece-number">3</span>
            <h3 className="masterpiece-header"> Work commences </h3>
            <p>
              Clarity Call description Clarity Call description Clarity Call
              description Clarity Call description Clarity Call description
            </p>
          </div>
          <div className="masterpiece-section">
            <span className="masterpiece-number">4</span>
            <h3 className="masterpiece-header">Regular updates</h3>
            <p>
              Clarity Call description Clarity Call description Clarity Call
              description Clarity Call description Clarity Call description
            </p>
          </div>
          <div className="masterpiece-section">
            <span className="masterpiece-number">5</span>
            <h3 className="masterpiece-header">Draft Delivery </h3>
            <p>
              Clarity Call description Clarity Call description Clarity Call
              description Clarity Call description Clarity Call description
            </p>
          </div>
          <div className="masterpiece-section">
            <span className="masterpiece-number">6</span>
            <h3 className="masterpiece-header">Review notes</h3>
            <p>
              Clarity Call description Clarity Call description Clarity Call
              description Clarity Call description Clarity Call description
            </p>
          </div>
          <div className="masterpiece-section">
            <span className="masterpiece-number">7</span>
            <h3 className="masterpiece-header"> Final draft</h3>
            <p>
              Clarity Call description Clarity Call description Clarity Call
              description Clarity Call description Clarity Call description
            </p>
          </div>
          <div className="masterpiece-section">
            <span className="masterpiece-number">8</span>
            <h3 className="masterpiece-header">Reviews</h3>
            <p>
              Clarity Call description Clarity Call description Clarity Call
              description Clarity Call description Clarity Call description
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
