import React from 'react';
import "../styles/services.css";

export default function Services() {
  return (
    <>
     <div className="services-container">
        <div className="services">
          <div class="main-services">
            <h5 className="services-header">Services</h5>
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
        </div> 
    </>
  );
}
