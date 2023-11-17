import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import BlogPostCard2 from '../components/blog-post-card2'

const News = (props) => {
  return (
    <>
      <div className="news-container">
        <Head>
          <title>News - Geosquare</title>
          <meta property="og:title" content="News - Geosquare" />
        </Head>
        <div className="news-container1">
          <nav className="news-centered">
            <div className="news-left">
              <Link href="/">
                <a className="news-link">
                  <div className="news-container2"></div>
                </a>
              </Link>
              <div className="news-links">
                <svg viewBox="0 0 1024 1024" className="news-icon">
                  <path d="M426 426h172q0-34-26-59t-60-25-60 25-26 59zM810 396l128 116h-128v342h-212v-256h-172v256h-212v-342h-128l426-384 170 154v-112h128v226z"></path>
                </svg>
                <span className="Link">Buy Properties</span>
                <svg
                  viewBox="0 0 513.1702857142857 1024"
                  className="news-icon2"
                >
                  <path d="M513.143 268.571v58.286c0 10.286-8 18.286-18.286 18.286h-96c-17.714 109.714-101.714 181.143-231.429 196.571 85.143 90.857 176 200.571 262.286 306.286 4.571 5.143 5.714 13.143 2.286 19.429-2.857 6.286-9.143 10.286-16.571 10.286h-111.429c-5.714 0-10.857-2.286-14.286-6.857-92-110.286-176.571-211.429-284.571-326.286-3.429-3.429-5.143-8-5.143-12.571v-72.571c0-9.714 8-18.286 18.286-18.286h64c100.571 0 163.429-33.714 180-96h-244c-10.286 0-18.286-8-18.286-18.286v-58.286c0-10.286 8-18.286 18.286-18.286h236c-21.714-42.857-73.143-64.571-153.143-64.571h-82.857c-10.286 0-18.286-8.571-18.286-18.286v-76c0-10.286 8-18.286 18.286-18.286h475.429c10.286 0 18.286 8 18.286 18.286v58.286c0 10.286-8 18.286-18.286 18.286h-133.143c18.286 23.429 30.286 50.857 36.571 82.286h97.714c10.286 0 18.286 8 18.286 18.286z"></path>
                </svg>
                <span className="Link">Sell Properties</span>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="news-icon4"
                >
                  <path d="M838.857 272c5.714 5.714 10.857 12.571 16 20.571h-269.714v-269.714c8 5.143 14.857 10.286 20.571 16zM566.857 365.714h310.857v603.429c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h457.143v310.857c0 30.286 24.571 54.857 54.857 54.857zM658.286 786.286v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM658.286 640v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM658.286 493.714v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286z"></path>
                </svg>
                <span className="Link">Transaction records</span>
              </div>
            </div>
            <div className="news-right">
              <div id="open-mobile-menu" className="news-burger-menu">
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-yxbd1.svg"
                  className="news-mobile-menu-button"
                />
              </div>
            </div>
            <span className="news-text03">News at Geosquare</span>
          </nav>
          <h1 className="news-text04">Geosquare: Latest News</h1>
        </div>
        <div className="news-blog">
          <div className="news-container3">
            <BlogPostCard2
              when="1 day ago"
              title="Godrej Properties to exceed guidance, record best-ever deliveries in FY24, says Pirojsha Godrej"
              imageSrc="https://img.etimg.com/thumb/msid-104916707,width-300,height-225,imgsize-31556,,resizemode-75/our-priority-is-to-launch-all-projects-added-over-last-two-years-within-this-financial-year-pirojsha-godrej.jpg"
              description="Godrej Properties is set to surpass its guidance for new bookings, cash collections, and project deliveries in the current financial year, driven by strong housing demand and project response. The company is launching 14 new projects and 10 new phases of ongoing projects in the second half of the fiscal year, its biggest pipeline of launches in any half-yearly period."
              rootClassName="rootClassName3"
            ></BlogPostCard2>
            <BlogPostCard2
              when="1 day ago"
              title="Shapoorji Pallonji Real Estate eyes Rs 1,500 crore revenue from two housing projects in Pune"
              imageSrc="https://img.etimg.com/thumb/msid-104887775,width-300,height-225,imgsize-23980,,resizemode-75/shapoorji-pallonji-real-estate-eyes-rs-1500-crore-revenue-from-two-housing-projects-in-pune.jpg"
              description="With a development potential of over 142 million square feet, Shapoorji Pallonji Real Estate has made inroads into most Indian cities -- Mumbai, Pune, Bangalore, Gurugram, and Kolkata, the statement said. Joyville is a USD 200 million platform by Shapoorji Pallonji, ADB, IFC and Actis to develop aspirational housing projects in India. It has already launched multiple projects across major cities."
              rootClassName="rootClassName4"
            ></BlogPostCard2>
            <BlogPostCard2
              when="2 days ago"
              title="Mahindra Lifespace Developers records Rs 455 crore pre-sales in July-September"
              imageSrc="https://img.etimg.com/thumb/msid-104755541,width-300,height-225,imgsize-91518,,resizemode-75/mahindra-lifespace-developers-records-rs-455-crore-pre-sales-in-july-september.jpg"
              description="The company’s collections in residential business during the quarter stood at Rs 311 crore. The developer launched 0.47 million sq ft of saleable area as part of its phase 3 at Tathawade in Pune."
              rootClassName="rootClassName1"
            ></BlogPostCard2>
          </div>
          <div className="news-container4"></div>
        </div>
        <footer className="news-footer">
          <div className="news-top">
            <div className="news-right1">
              <div className="news-category">
                <img
                  alt="image"
                  src="/final%20geo-200h.png"
                  className="news-image"
                />
                <div className="news-contact">
                  <span className="news-text05">Contact</span>
                  <a
                    href="mailto:geosquare@bioenabletech.com?subject=Support"
                    className="news-link1"
                  >
                    sales@geosquare.in
                  </a>
                </div>
              </div>
              <div className="news-category1">
                <span className="news-text06">Company</span>
                <div className="news-links1">
                  <Link href="/about">
                    <a className="news-link2">About</a>
                  </Link>
                  <span className="news-text07">Team</span>
                  <span className="news-text08">News</span>
                  <Link href="/partners">
                    <a className="news-link3">Partners</a>
                  </Link>
                  <span className="news-text09">Careers</span>
                </div>
              </div>
              <div className="news-category2">
                <span className="news-text10">Socials</span>
                <div className="news-links2">
                  <span className="news-text11">Twitter</span>
                  <span className="news-text12">Linkedin</span>
                  <span className="news-text13">Instagram</span>
                  <span className="news-text14">Facebook</span>
                  <span className="news-text15">
                    <span>Whatsapp</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </div>
              <form
                method="POST"
                name="contactform"
                action="https://docs.google.com/forms/d/e/1FAIpQLScnOzbxNbGZPM6GXZSCQA48QpPOkpbOPrkEdSXkPcRjNw6MAQ/formResponse"
                target="_self"
                enctype="application/x-www-form-urlencoded"
                className="news-form"
              >
                <div className="news-container5">
                  <h1 className="news-text19">Contact us</h1>
                  <input
                    type="text"
                    id="entry.1364274971"
                    name="entry.1364274971"
                    placeholder="Email"
                    className="input"
                  />
                  <input
                    type="text"
                    id="entry.309042636"
                    name="entry.309042636"
                    placeholder="Phone"
                    className="news-textinput1 input"
                  />
                  <textarea
                    id="entry.1002460782"
                    name="entry.1002460782"
                    placeholder="Elaborate your Concerns"
                    className="news-textarea textarea"
                  ></textarea>
                  <button type="submit" className="news-button button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="news-bottom">
            <span className="news-text20">Copyright © Geosquare - 2023</span>
          </div>
          <span>Text</span>
        </footer>
      </div>
      <style jsx>
        {`
          .news-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .news-container1 {
            width: 100%;
            height: 355px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #5228f5;
          }
          .news-centered {
            top: 51px;
            left: 0px;
            right: 0px;
            width: 1454px;
            height: 105px;
            margin: auto;
            display: flex;
            position: absolute;
            max-width: 1200px;
            box-sizing: initial;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: 40px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .news-left {
            width: 1033px;
            height: 100%;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            padding-top: 38px;
            margin-right: 52px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .news-link {
            display: contents;
          }
          .news-container2 {
            width: 213px;
            height: 79px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            text-decoration: none;
            background-image: url('/external/final%20geo-300w-300w.png');
            background-position: center;
          }
          .news-links {
            display: flex;
            font-size: 19px;
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .news-icon {
            width: 24px;
            height: 24px;
          }
          .news-icon2 {
            width: 24px;
            height: 24px;
          }
          .news-icon4 {
            width: 24px;
            height: 24px;
          }
          .news-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .news-burger-menu {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .news-mobile-menu-button {
            width: 40px;
            height: 40px;
            display: none;
          }
          .news-text03 {
            color: var(--dl-color-gray-black);
            width: 100%;
            font-style: normal;
            font-weight: 500;
          }
          .news-text04 {
            top: 251px;
            left: 0px;
            color: rgb(255, 255, 255);
            right: 0px;
            margin: auto;
            position: absolute;
            font-size: 52px;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            line-height: 80px;
          }
          .news-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .news-container3 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .news-container4 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .news-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
            background-color: #000000;
          }
          .news-top {
            width: 1279px;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .news-right1 {
            gap: var(--dl-space-space-fiveunits);
            width: 1163px;
            height: 237px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: flex-start;
          }
          .news-category {
            width: 240px;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .news-image {
            width: 163px;
            height: 65px;
            object-fit: cover;
          }
          .news-contact {
            display: flex;
            margin-top: 52px;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-text05 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .news-link1 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: underline;
          }
          .news-category1 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-text06 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .news-links1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-link2 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .news-text07 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .news-text08 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .news-link3 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .news-text09 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .news-category2 {
            width: 154px;
            display: flex;
            flex-direction: column;
          }
          .news-text10 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .news-links2 {
            gap: var(--dl-space-space-unit);
            width: 108px;
            height: 157px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .news-text11 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .news-text12 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .news-text13 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .news-text14 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .news-text15 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .news-form {
            width: 288px;
            height: 100%;
            display: flex;
          }
          .news-container5 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .news-text19 {
            color: var(--dl-color-gray-white);
          }
          .news-textinput1 {
            margin-top: var(--dl-space-space-halfunit);
          }
          .news-textarea {
            width: 253px;
            height: 66px;
            margin-top: var(--dl-space-space-halfunit);
          }
          .news-button {
            margin-top: var(--dl-space-space-halfunit);
          }
          .news-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            user-select: none;
            flex-direction: column;
          }
          .news-text20 {
            color: rgb(104, 104, 104);
            font-size: 14px;
            line-height: 30px;
          }
          @media (max-width: 991px) {
            .news-centered {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .news-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .news-links {
              display: none;
            }
            .news-mobile-menu-button {
              display: flex;
            }
            .news-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .news-top {
              flex-direction: column;
            }
            .news-right1 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .news-text05 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .news-link1 {
              text-decoration: underline none;
            }
            .news-links1 {
              gap: var(--dl-space-space-unit);
            }
            .news-links2 {
              gap: var(--dl-space-space-unit);
            }
            .news-text20 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .news-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .news-left {
              margin-left: var(--dl-space-space-unit);
            }
            .news-right {
              margin-right: var(--dl-space-space-unit);
            }
            .news-text04 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .news-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .news-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .news-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .news-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default News
