import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import ActiveUsers from '../components/active-users'
import FeatureCard1 from '../components/feature-card1'
import TestimonialCard3 from '../components/testimonial-card3'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Geosquare</title>
          <meta property="og:title" content="Geosquare" />
        </Head>
        <section className="home-hero">
          <div className="home-menu">
            <div id="mobile-menu" className="home-mobile-navigation">
              <img
                alt="pastedImage"
                src="/pastedimage-no9b-1500h.png"
                className="home-logo"
              />
              <div className="home-links">
                <span className="Link">Solutions</span>
                <span className="Link">How it works</span>
                <span className="Link">Prices</span>
              </div>
              <div id="close-mobile-menu" className="home-close-mobile-menu">
                <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                  <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
              </div>
            </div>
            <div className="home-desktop-navigation">
              <nav className="home-centered">
                <div className="home-left">
                  <div className="home-container01"></div>
                  <div className="home-links1">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M426 426h172q0-34-26-59t-60-25-60 25-26 59zM810 396l128 116h-128v342h-212v-256h-172v256h-212v-342h-128l426-384 170 154v-112h128v226z"></path>
                    </svg>
                    <Link href="/buy">
                      <a className="home-link Link">Buy Properties</a>
                    </Link>
                    <svg
                      viewBox="0 0 513.1702857142857 1024"
                      className="home-icon04"
                    >
                      <path d="M513.143 268.571v58.286c0 10.286-8 18.286-18.286 18.286h-96c-17.714 109.714-101.714 181.143-231.429 196.571 85.143 90.857 176 200.571 262.286 306.286 4.571 5.143 5.714 13.143 2.286 19.429-2.857 6.286-9.143 10.286-16.571 10.286h-111.429c-5.714 0-10.857-2.286-14.286-6.857-92-110.286-176.571-211.429-284.571-326.286-3.429-3.429-5.143-8-5.143-12.571v-72.571c0-9.714 8-18.286 18.286-18.286h64c100.571 0 163.429-33.714 180-96h-244c-10.286 0-18.286-8-18.286-18.286v-58.286c0-10.286 8-18.286 18.286-18.286h236c-21.714-42.857-73.143-64.571-153.143-64.571h-82.857c-10.286 0-18.286-8.571-18.286-18.286v-76c0-10.286 8-18.286 18.286-18.286h475.429c10.286 0 18.286 8 18.286 18.286v58.286c0 10.286-8 18.286-18.286 18.286h-133.143c18.286 23.429 30.286 50.857 36.571 82.286h97.714c10.286 0 18.286 8 18.286 18.286z"></path>
                    </svg>
                    <span className="Link">Sell Properties</span>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon06"
                    >
                      <path d="M838.857 272c5.714 5.714 10.857 12.571 16 20.571h-269.714v-269.714c8 5.143 14.857 10.286 20.571 16zM566.857 365.714h310.857v603.429c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h457.143v310.857c0 30.286 24.571 54.857 54.857 54.857zM658.286 786.286v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM658.286 640v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM658.286 493.714v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286z"></path>
                    </svg>
                    <span className="Link">Transaction records</span>
                  </div>
                </div>
                <div className="home-right">
                  <div className="home-get-started">
                    <span className="home-text005">Sign in</span>
                  </div>
                  <div id="open-mobile-menu" className="home-burger-menu">
                    <img
                      alt="pastedImage"
                      src="/pastedimage-yxbd.svg"
                      className="home-mobile-menu-button"
                    />
                  </div>
                </div>
              </nav>
            </div>
            <div>
              <div className="home-container03">
                <Script
                  html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
                ></Script>
              </div>
            </div>
          </div>
          <header className="home-header">
            <h1 className="home-text006">
              Explore the insights of Real Estate Transactions with Geosquare
            </h1>
            <p className="home-text007">
              <span>Property for your Future and Investments</span>
              <br></br>
              <span>Each property is hand-picked, personally visited.</span>
            </p>
            <div className="home-get-started1">
              <span className="home-text011">Explore new Properties</span>
            </div>
          </header>
          <div className="home-dashboard-preview">
            <div className="home-outline">
              <img
                alt="pastedImage"
                src="https://media.istockphoto.com/id/1130833057/photo/close-up-real-estate-agent-with-house-model-hand-putting-signing-contract-have-a-contract-in.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=gmE_XumwxXAhDK3OSFM14lKRPVkzX6ybQH8jmc8PUpA="
                loading="lazy"
                className="home-image"
              />
            </div>
          </div>
        </section>
        <section className="home-features">
          <div className="home-title">
            <span className="home-text012">How do you benfit</span>
          </div>
          <div className="home-cards">
            <div className="home-container04">
              <div className="home-schedule card">
                <div>
                  <span className="home-text013">
                    <br></br>
                    <span> Property Buyers</span>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M426 128h556v768h-256v-170h84v-86h-84v-86h84v-84h-84v-78l-86-58v-36h-54q-68-44-160-106v-64zM348 244l292 194v458h-214v-342h-170v342h-214v-448z"></path>
                  </svg>
                </div>
                <span className="home-text016">
                  <span className="home-text017">
                    Unlock Your Dream Home&apos;s True Value
                  </span>
                  <br></br>
                  <span>
                    Explore actual property transactions to ensure you&apos;re
                    getting the best deal and buy your dream home with
                    confidence.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-publish card">
                <div>
                  <span className="home-text021">
                    <br></br>
                    <span>Property Sellers</span>
                  </span>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon10"
                  >
                    <path d="M804.571 566.857v274.286c0 20-16.571 36.571-36.571 36.571h-219.429v-219.429h-146.286v219.429h-219.429c-20 0-36.571-16.571-36.571-36.571v-274.286c0-1.143 0.571-2.286 0.571-3.429l328.571-270.857 328.571 270.857c0.571 1.143 0.571 2.286 0.571 3.429zM932 527.429l-35.429 42.286c-2.857 3.429-7.429 5.714-12 6.286h-1.714c-4.571 0-8.571-1.143-12-4l-395.429-329.714-395.429 329.714c-4 2.857-8.571 4.571-13.714 4-4.571-0.571-9.143-2.857-12-6.286l-35.429-42.286c-6.286-7.429-5.143-19.429 2.286-25.714l410.857-342.286c24-20 62.857-20 86.857 0l139.429 116.571v-111.429c0-10.286 8-18.286 18.286-18.286h109.714c10.286 0 18.286 8 18.286 18.286v233.143l125.143 104c7.429 6.286 8.571 18.286 2.286 25.714z"></path>
                  </svg>
                </div>
                <span className="home-text024">
                  <span className="home-text025">
                    Maximize Your Property&apos;s Worth
                  </span>
                  <br></br>
                  <span>
                    Sell your property profitably by understanding the market
                    price for homes like yours. Zapkey provides the insights you
                    need
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-container07">
              <div className="home-analyze card">
                <div>
                  <span className="home-text029">
                    <br></br>
                    <span>Property Owners</span>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M365.714 146.286h292.571v-73.143h-292.571v73.143zM1024 512v274.286c0 50.286-41.143 91.429-91.429 91.429h-841.143c-50.286 0-91.429-41.143-91.429-91.429v-274.286h384v91.429c0 20 16.571 36.571 36.571 36.571h182.857c20 0 36.571-16.571 36.571-36.571v-91.429h384zM585.143 512v73.143h-146.286v-73.143h146.286zM1024 237.714v219.429h-1024v-219.429c0-50.286 41.143-91.429 91.429-91.429h201.143v-91.429c0-30.286 24.571-54.857 54.857-54.857h329.143c30.286 0 54.857 24.571 54.857 54.857v91.429h201.143c50.286 0 91.429 41.143 91.429 91.429z"></path>
                  </svg>
                </div>
                <span className="home-text032">
                  <span className="home-text033">
                    Discover the True Value of Your Home
                  </span>
                  <br></br>
                  <span>
                    Wondering what your home is worth? Find out in just a few
                    clicks. Enter your city and project&apos;s name, and uncover
                    your property&apos;s current value
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-get-leads card">
                <div>
                  <span className="home-text037">
                    <br></br>
                    <span>Brokers</span>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM480 928c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.078 0 384 171.922 384 384s-171.922 384-384 384zM512 512v-128h128v-64h-128v-64h-64v64h-128v256h128v128h-128v64h128v64h64v-64h128.002l-0.002-256h-128zM448 512h-64v-128h64v128zM576.002 704h-64.002v-128h64.002v128z"></path>
                  </svg>
                </div>
                <span className="home-text040">
                  <span className="home-text041">
                    Empower Your Real Estate Expertise
                  </span>
                  <br></br>
                  <span>
                    Equip yourself with real-time, easily accessible data from
                    Zapkey. Delight home buyers and sellers with credible
                    information for informed decisions
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="home-quote-container">
          <div className="home-quote">
            <span className="home-message">
              Our mission at Geosquare is clear: to empower Buyers, Sellers,
              Brokers, Developers, and Financial Institutions with fast,
              informed, and secure decisions. We understand that the path to
              successful real estate transactions is paved with data and
              insights. That&apos;s why we&apos;ve dedicated ourselves to
              aggregating and standardizing publicly available property
              registration data, primarily focusing on residential properties.
            </span>
            <div className="home-author">
              <img
                alt="image"
                src="/final%20geo-300w.png"
                className="home-avatar"
              />
              <span className="home-quote1">
                <span className="home-text045">Geosquare </span>
                <br className="home-text046"></br>
                <br></br>
              </span>
            </div>
          </div>
        </section>
        <section className="home-statistics">
          <div className="home-container10">
            <ActiveUsers
              caption="Transaction details"
              statistic="9.5M+"
            ></ActiveUsers>
            <ActiveUsers caption=" Properties" statistic="50k+"></ActiveUsers>
            <ActiveUsers caption="Projects" statistic="900+"></ActiveUsers>
            <ActiveUsers caption=" Agents" statistic="2K+"></ActiveUsers>
          </div>
        </section>
        <section className="home-banners">
          <div className="home-banner-manage">
            <div className="home-container11">
              <div className="home-left1">
                <span className="home-text048 title">
                  <span className="home-text049">Data You Can Trust</span>
                  <br className="home-text050"></br>
                </span>
                <span className="home-text051">
                  We take pride in sourcing our data directly from the revenue
                  authorities of respective states, ensuring transparency,
                  accuracy, and reliability. Our data represents property buy,
                  sell, or rent agreements, meticulously registered with the
                  required fees and stamp duties. The result is a treasure trove
                  of information that&apos;s designed to empower you.
                </span>
                <div className="home-get-started2 template-button">
                  <span className="home-text052">Explore Data</span>
                </div>
              </div>
              <div className="home-image-container">
                <img
                  alt="pastedImage"
                  src="https://www.addressofchoice.com/aoc_assets/blog/1556875918_How_to_check_Property_and_Land_Records_in_India.jpg"
                  className="home-cards-image"
                />
              </div>
            </div>
          </div>
          <div className="home-banner-advanced-analytics">
            <div className="home-centered-container">
              <div className="home-image-container1">
                <img
                  alt="pastedImage"
                  src="https://lh3.googleusercontent.com/dqbFrMMTRsPhZ5ganxkzINYkBlTqKGrMCgZnDAziJwjMTqvQrw96IkZidKOMCwQT46VoLTVnsREBkLxSpcvwC9YSiIg=w640-h400-e365-rj-sc0x00ffffff"
                  className="home-cards-image1"
                />
              </div>
              <div className="home-right1">
                <h2 className="home-text053 title">Unlock Valuable Insights</h2>
                <div className="home-category">
                  <span className="home-text054">
                    Gain access to a treasure trove of over 80 lakh property
                    transactions, right at your fingertips. Geosquare, your
                    trusted real estate partner, empowers you with comprehensive
                    and up-to-date information on property registrations.
                  </span>
                  <span className="home-text055">View -&gt;</span>
                </div>
                <div className="home-category1">
                  <span className="home-text056">
                    Exclusive look at the top-selling residential projects in
                    major cities. Uncover the most sought-after properties with
                    ease, ensuring that your investment choices are
                    well-informed and secure
                  </span>
                  <span className="home-text057">View -&gt;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-banner">
            <div className="home-container12">
              <div className="home-left2">
                <h2 className="home-text058 title">Focused project Coverage</h2>
                <span className="home-text059">
                  Currently, Geosquare has meticulously sourced and organized
                  data for more than 5,000 projects. While we may not cover
                  every project or property just yet, our commitment to
                  expanding our coverage is unwavering. We are dedicated to
                  prioritizing the projects and properties that matter most to
                  you.
                </span>
                <div className="home-get-started3 template-button">
                  <span className="home-text060">
                    Explore trending projects
                  </span>
                </div>
              </div>
              <div className="home-image-container2">
                <img
                  alt="pastedImage"
                  src="https://www.projectsmonitor.com/wp-content/uploads/2018/05/Real-Estate-Banner.jpeg"
                  className="home-cards-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home-integrations">
          <div className="home-centered-container1">
            <div className="home-pills-container">
              <div className="home-features1">
                <h2 className="home-text061">
                  Your Trusted Partner in any Property Transactions
                </h2>
                <div className="home-container13">
                  <FeatureCard1
                    title="NA PLOTS"
                    imageSrc="data:image/jpeg;base64,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"
                    rootClassName="rootClassName"
                  ></FeatureCard1>
                  <FeatureCard1
                    title="FLATS"
                    imageSrc="data:image/jpeg;base64,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"
                    rootClassName="rootClassName1"
                  ></FeatureCard1>
                  <FeatureCard1
                    title="PROJECTS"
                    imageSrc="https://www.sobha.com/blog/wp-content/uploads/2019/03/02Mar2019FI.webp"
                    rootClassName="rootClassName2"
                  ></FeatureCard1>
                  <FeatureCard1
                    title="SHOPS"
                    imageSrc="data:image/jpeg;base64,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"
                    rootClassName="rootClassName3"
                  ></FeatureCard1>
                  <FeatureCard1
                    title="OFFICES"
                    imageSrc="data:image/jpeg;base64,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"
                    rootClassName="rootClassName7"
                  ></FeatureCard1>
                  <FeatureCard1
                    title="BUNGLOWS"
                    imageSrc="https://plotson.com/wp-content/uploads/2017/12/IMG-20171125-WA0016-525x350.jpg"
                    rootClassName="rootClassName6"
                  ></FeatureCard1>
                  <FeatureCard1
                    title="LANDS"
                    imageSrc="https://img.freepik.com/free-photo/view-land-plot-real-estate-business-development_23-2149916719.jpg"
                    rootClassName="rootClassName5"
                  ></FeatureCard1>
                  <FeatureCard1
                    title="VILLA'S"
                    imageSrc="https://www.elitehavens.com/magazine/wp-content/uploads/2021/05/Header.jpg"
                    rootClassName="rootClassName4"
                  ></FeatureCard1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-how-it-works">
          <div className="home-centered-container2">
            <div className="home-heading">
              <span className="home-text062 title">
                Curious about your home&apos;s value?          
              </span>
            </div>
            <div className="home-category2">
              <div className="home-headng">
                <span className="home-text063">
                  Your Gateway to Informed Choices
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text064">
                  Our platform is designed to provide you with the means to make
                  faster, more informed, and secure decisions. We believe in the
                  transformative power of data and how it can revolutionize your
                  real estate journey.
                </span>
                <div className="home-get-started4 template-button">
                  <span className="home-text065">Get started</span>
                </div>
              </div>
              <div className="home-container14">
                <img
                  alt="pastedImage"
                  src="https://www.mashvisor.com/blog/wp-content/uploads/2018/08/bigstock-206727097.jpg"
                  className="home-pasted-image"
                />
              </div>
            </div>
            <div className="home-row">
              <div className="home-category3">
                <div className="home-headng1">
                  <span className="home-text066">
                    Transparency and Accuracy
                  </span>
                  <span className="home-text067">
                    The data we present is sourced directly from revenue
                    authorities of respective states, ensuring its accuracy and
                    reliability. Registration data comprises property purchase,
                    sale, or rental agreements registered with revenue
                    authorities, accompanied by the necessary registration fees
                    and stamp duties.
                  </span>
                </div>
                <img
                  alt="image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5p6jjai4FZuXYZmDj8q-XD_SU8iRNPiuEIg&amp;usqp=CAU"
                  className="home-image1"
                />
              </div>
              <div className="home-category4">
                <div className="home-headng2">
                  <span className="home-text068">Real-time Data Insights </span>
                  <span className="home-text069">
                    Geosquare is your go-to resource for transparent,
                    trustworthy, and insightful real estate data. We invite you
                    to explore our platform, unlock the potential of your
                    property investments, and stay updated with the latest
                    trends in the real estate market.
                  </span>
                </div>
                <img
                  alt="image"
                  src="https://img.freepik.com/premium-vector/business-data-analytics-research-data-scientist-team-working-concept_115495-470.jpg"
                  className="home-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home-pricing">
          <div className="home-centered-container3">
            <div className="home-heading1">
              <span className="home-text070 title">
                Discover the Top Project Areas
              </span>
              <span className="home-text071">
                Geosquare brings you an exclusive look at the top-selling
                residential projects in major cities. Uncover the most
                sought-after properties with ease, ensuring that your investment
                choices are well-informed and secure.
              </span>
            </div>
            <div className="home-cards1">
              <div className="home-card">
                <span className="home-text072">Pune</span>
                <span className="home-text073">Trending Areas</span>
                <div className="home-bullet-points">
                  <div className="home-point">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon16"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text074">Wakad</span>
                  </div>
                  <div className="home-point01">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon18"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text075">Hadapsar</span>
                  </div>
                  <div className="home-point02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon20"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text076">Chikhali</span>
                  </div>
                  <div className="home-point03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon22"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text077">Baner</span>
                  </div>
                  <div className="home-point04">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon24"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text078">Punawale</span>
                  </div>
                </div>
              </div>
              <div className="home-card1">
                <span className="home-text079">Mumbai</span>
                <span className="home-text080">Trending Areas</span>
                <div className="home-bullet-points1">
                  <div className="home-point05">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon26"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text081">Kandivali</span>
                  </div>
                  <div className="home-point06">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon28"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text082">Dahisar</span>
                  </div>
                  <div className="home-point07">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon30"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text083">Borivali</span>
                  </div>
                  <div className="home-point08">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon32"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text084">
                      <span>Bhandup</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-point09">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon34"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text087">Malad</span>
                  </div>
                </div>
              </div>
              <div className="home-card2">
                <span className="home-text088">Others</span>
                <span className="home-text089">Trending Areas</span>
                <div className="home-bullet-points2">
                  <div className="home-point10">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon36"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text090">Chembur</span>
                  </div>
                  <div className="home-point11">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon38"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text091">Ghatkopar</span>
                  </div>
                  <div className="home-point12">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon40"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text092">Kurla</span>
                  </div>
                  <div className="home-point13">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon42"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text093">Goregaon</span>
                  </div>
                  <div className="home-point14">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon44"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text094">Mulund</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-testimonals">
          <span className="home-text095">
            <span>Show more</span>
            <br></br>
          </span>
          <div className="home-testimonial">
            <h1 className="home-text098">
              <span>Our clients speak</span>
            </h1>
            <span className="home-text100">
              At Geosquare, we&apos;re not just a platform; we&apos;re your
              partner in every real estate decision you make. We&apos;re
              dedicated to making your journey through property transactions
              smooth, informed, and secure. Together, let&apos;s unlock the true
              potential of real estate.
            </span>
            <div className="home-container15">
              <TestimonialCard3
                name="Nirav Patel"
                quote="Geosquare is my go-to resource for real-time property data! Their platform is incredibly user-friendly, and it's a game-changer for anyone buying or selling property. I love how I can stay informed about market trends, making confident decisions every step of the way."
                pictureSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBg4-gsiUwBXgued44xm2wycd6l1sQzDjxA&amp;usqp=CAU"
                rootClassName="rootClassName"
              ></TestimonialCard3>
              <TestimonialCard3
                name="Ranjana Shah"
                quote="Geosquare's real-time property data has simplified my property transactions. The accuracy and speed of their information are unmatched. I've saved both time and money thanks to Geosquare. Highly recommended!"
                pictureSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkN4EaJzth6zTdpTZK6krgnMXJhvZNh-0ryg&amp;usqp=CAU"
                rootClassName="rootClassName"
              ></TestimonialCard3>
              <TestimonialCard3
                name="Pranav Mehra"
                quote="Geosquare has revolutionized the way I watch property transactions. Their real-time data is a game-changer, providing crucial insights that help me make informed investment decisions. The peace of mind I get from their service is priceless!"
                pictureSrc="https://media.licdn.com/dms/image/D4D03AQEe_vD9H4mXcg/profile-displayphoto-shrink_800_800/0/1642480449005?e=2147483647&amp;v=beta&amp;t=9nTAeoghSbYSIbnhu7mNp_p92gyBJrOwGLf-wukW_gY"
                rootClassName="rootClassName"
              ></TestimonialCard3>
            </div>
          </div>
        </section>
        <section className="home-action-bar">
          <div className="home-action">
            <div className="home-heading2">
              <span className="home-text101 title">
                Buy &amp; Sell your property
              </span>
              <span className="home-text102">Sell Smarter, Not Harder</span>
              <div className="home-get-started5 template-button">
                <span className="home-text103">
                  <span>Search</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-images">
              <img
                alt="image"
                src="https://img.iproperty.com.my/angel-legacy/1110x624-crop/static/2021/10/buyhome-investment-main.jpg"
                className="home-image3"
              />
            </div>
          </div>
        </section>
        <section className="home-faq">
          <div className="home-heading3">
            <span className="home-text106 title">
              Frequently asked questions
            </span>
          </div>
          <div className="home-accordion">
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header1">
                <span className="home-text107">
                  What is Geosquare?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text108">
                  A Geo Square property portal is an IT-enabled and AI-assisted
                  property portal that uses geographic and square foot data to
                  provide users with a more comprehensive and informative search
                  experience.
                </span>
              </div>
            </div>
            <div className="accordionContainer">
              <div className="home-header2">
                <span className="home-text109">
                  How does GeoSquare make the real estate journey smooth,
                  informed, and secure?
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text110">
                  At Geosquare, we&apos;re not just a platform; we&apos;re your
                  partner in every real estate decision you make. We&apos;re
                  dedicated to making your journey through property transactions
                  smooth, informed, and secure. Together, let&apos;s unlock the
                  true potential of real estate.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header3">
                <span className="home-text111">
                  How does GeoSquare&apos;s aggregation and standardization of
                  publicly available property registration data benefit Buyers,
                  Sellers, Brokers, Developers, and Financial Institutions?
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text112">
                  we&apos;ve revolutionized the real estate experience by
                  aggregating and standardizing publicly available property
                  registration data. Our primary focus is on residential
                  properties, making us a vital resource for Buyers, Sellers,
                  Brokers, Developers, and Financial Institutions.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header4">
                <span className="home-text113">
                  How can GeoSquare help users make a wise investment in their
                  dream home by providing insights into actual transactions?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text114">
                  we don&apos;t just help you find a property; we guide you to
                  your dream home with confidence. Explore actual transactions,
                  and let us ensure you make a wise investment.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header5">
                <span className="home-text115">
                  How does GeoSquare provide sellers with insights into the true
                  market value of their properties, and how does this help them
                  to maximize profits?
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text116">
                  Geosquare empowers sellers to maximize profits effortlessly.
                  We provide insights into the true market value of properties
                  like yours, making your sale smooth and profitable.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="home-container17">
              <Script
                html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
              ></Script>
            </div>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-top">
            <div className="home-right2">
              <div className="home-category5">
                <img
                  alt="image"
                  src="/final%20geo-300w.png"
                  className="home-image4"
                />
                <div className="home-contact">
                  <span className="home-text117">Contact</span>
                  <a
                    href="mailto:geosquare@bioenabletech.com?subject=Support"
                    className="home-link1"
                  >
                    sales@geosquare.in
                  </a>
                </div>
              </div>
              <div className="home-category6">
                <span className="home-text118">Company</span>
                <div className="home-links2">
                  <Link href="/about">
                    <a className="home-link2">About</a>
                  </Link>
                  <span className="home-text119">Team</span>
                  <Link href="/news">
                    <a className="home-link3">News</a>
                  </Link>
                  <Link href="/partners">
                    <a className="home-link4">Partners</a>
                  </Link>
                  <span className="home-text120">Careers</span>
                </div>
              </div>
              <div className="home-category7">
                <span className="home-text121">Socials</span>
                <div className="home-links3">
                  <span className="home-text122">Twitter</span>
                  <span className="home-text123">Linkedin</span>
                  <a
                    href="https://www.instagram.com/geosquare_/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link5"
                  >
                    Instagram
                  </a>
                  <span className="home-text124">Facebook</span>
                  <span className="home-text125">
                    <span>Whatsapp</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </div>
              <form
                name="contactform"
                action="https://docs.google.com/forms/d/14xWgq3xVnq7u51gkqGt0aoXATA9vNOwVdT-ZOszllJg/formResponse"
                method="POST"
                target="_self"
                enctype="application/x-www-form-urlencoded"
                className="home-form"
              >
                <div
                  action="https://docs.google.com/forms/d/14xWgq3xVnq7u51gkqGt0aoXATA9vNOwVdT-ZOszllJg/formResponse"
                  method="POST"
                  target="_self"
                  className="home-container18"
                >
                  <h1 className="home-text129">Contact us</h1>
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
                    className="home-textinput1 input"
                  />
                  <textarea
                    id="entry.1002460782"
                    name="entry.1002460782"
                    placeholder="Elaborate your Concerns"
                    className="home-textarea textarea"
                  ></textarea>
                  <button type="submit" className="home-button button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="home-bottom">
            <span className="home-text130">Copyright © Geosquare - 2023</span>
          </div>
          <span>Text</span>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 1000px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            background-color: #5228f5;
          }
          .home-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-mobile-navigation {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100vw;
            height: 100vh;
            display: flex;
            z-index: 150;
            position: fixed;
            transform: translateX(100%);
            transition: transform 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-logo {
            width: 64px;
          }
          .home-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-close-mobile-menu {
            top: var(--dl-space-space-oneandhalfunits);
            right: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-icon {
            width: 24px;
            height: 24px;
            display: flex;
          }
          .home-desktop-navigation {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .home-centered {
            width: 1397px;
            display: flex;
            max-width: 1200px;
            box-sizing: initial;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 40px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .home-left {
            width: 1011px;
            height: 105px;
            display: flex;
            align-items: center;
            padding-top: 38px;
            margin-right: 52px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .home-container01 {
            width: 213px;
            height: 79px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/final%20geo-300w.png');
            background-position: center;
          }
          .home-links1 {
            display: flex;
            font-size: 19px;
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .home-icon02 {
            width: 24px;
            height: 24px;
          }
          .home-link {
            text-decoration: none;
          }
          .home-icon04 {
            width: 24px;
            height: 24px;
          }
          .home-icon06 {
            width: 24px;
            height: 24px;
          }
          .home-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-get-started {
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #000000;
          }
          .home-get-started:hover {
            background-color: #5228f5;
          }
          .home-text005 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .home-burger-menu {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-mobile-menu-button {
            width: 40px;
            height: 40px;
            display: none;
          }
          .home-container03 {
            display: contents;
          }
          .home-header {
            display: flex;
            margin-top: 140px;
            align-items: center;
            flex-direction: column;
          }
          .home-text006 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .home-text007 {
            color: rgb(238, 233, 254);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-get-started1 {
            color: white;
            cursor: pointer;
            display: flex;
            margin-top: 40px;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #000000;
          }
          .home-get-started1:hover {
            color: black;
            background-color: #ffffff;
          }
          .home-text011 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-dashboard-preview {
            top: 650px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: #633df6;
            border-width: 30px;
            border-radius: 100px;
            flex-direction: column;
            background-color: #633df6;
          }
          .home-outline {
            display: flex;
            align-items: center;
            border-color: #7350f7;
            border-width: 20px;
            border-radius: 70px;
            flex-direction: column;
            background-color: #7350f7;
          }
          .home-image {
            width: 900px;
            z-index: 10;
            user-select: none;
          }
          .home-features {
            width: 100%;
            height: 943px;
            display: flex;
            z-index: 1;
            align-items: center;
            padding-top: 331px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            background-color: #dadde4;
          }
          .home-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text012 {
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 72px;
          }
          .home-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .home-container04 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-schedule {
            height: 189px;
            padding-top: 11px;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text013 {
            font-size: 28px;
            font-style: normal;
            font-weight: 500;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-icon08 {
            fill: var(--dl-color-template-blue-bg);
            width: 24px;
            height: 24px;
          }
          .home-text016 {
            line-height: 24px;
          }
          .home-publish {
            width: 564px;
            height: 189px;
            padding-top: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-text021 {
            font-size: 28px;
            font-style: normal;
            font-weight: 500;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-icon10 {
            fill: var(--dl-color-danger-300);
            width: 24px;
            height: 24px;
          }
          .home-text024 {
            line-height: 24px;
          }
          .home-container07 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .home-analyze {
            height: 181px;
            padding-top: 0px;
          }
          .home-text029 {
            font-size: 28px;
            font-style: normal;
            font-weight: 500;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .home-icon12 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
          }
          .home-text032 {
            line-height: 24px;
          }
          .home-get-leads {
            height: 179px;
            padding-top: 0px;
          }
          .home-text037 {
            font-size: 28px;
            font-style: normal;
            font-weight: 500;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-icon14 {
            fill: var(--dl-color-success-300);
            width: 24px;
            height: 24px;
          }
          .home-text040 {
            line-height: 24px;
          }
          .home-quote-container {
            width: 100%;
            height: 466px;
            display: flex;
            align-items: center;
            padding-top: 160px;
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: 160px;
            justify-content: center;
            background-color: #000000;
          }
          .home-quote {
            width: 1299px;
            display: flex;
            max-width: 1200px;
            flex-direction: column;
            justify-content: center;
          }
          .home-message {
            color: rgb(255, 255, 255);
            z-index: 100;
            font-size: 30px;
            max-width: 950px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 300;
            line-height: 40px;
          }
          .home-author {
            width: 800px;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: row;
          }
          .home-avatar {
            width: 64px;
            height: 64px;
            object-fit: cover;
            border-radius: 50%;
          }
          .home-quote1 {
            color: rgb(151, 126, 249);
            width: 100%;
            max-width: 800px;
            margin-left: var(--dl-space-space-unit);
          }
          .home-text046 {
            color: #977ef9;
          }
          .home-statistics {
            width: 100%;
            height: 299px;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            justify-content: center;
            background-color: #5228f5;
          }
          .home-container10 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-banners {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-banner-manage {
            width: 100%;
            height: 383px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: 38px;
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .home-container11 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-left1 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text048 {
            font-style: normal;
            text-align: left;
            font-weight: 400;
          }
          .home-text051 {
            color: rgb(0, 0, 0);
            width: auto;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-get-started2 {
            transition: 0.3s;
            margin-bottom: 0;
          }
          .home-get-started2:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text052 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-image-container {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-cards-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            user-select: none;
          }
          .home-banner-advanced-analytics {
            width: 100%;
            height: 614px;
            display: flex;
            align-items: center;
            padding-top: 41px;
            padding-left: 28px;
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: 11px;
            justify-content: center;
            background-color: #eff0f2;
          }
          .home-centered-container {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            justify-content: center;
          }
          .home-image-container1 {
            flex: 1;
            display: flex;
          }
          .home-cards-image1 {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .home-right1 {
            flex: 1;
            display: flex;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text053 {
            font-style: normal;
            text-align: left;
            font-weight: 400;
          }
          .home-category {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text054 {
            color: rgb(0, 0, 0);
            font-size: 22px;
            font-style: normal;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text055 {
            color: rgb(82, 40, 245);
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 600;
          }
          .home-text055:hover {
            color: #000000;
          }
          .home-category1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text056 {
            color: rgb(0, 0, 0);
            font-size: 24px;
            font-style: normal;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text057 {
            color: rgb(82, 40, 245);
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 600;
          }
          .home-text057:hover {
            color: #000000;
          }
          .home-banner {
            width: 100%;
            height: 506px;
            display: flex;
            align-items: center;
            padding-top: 45px;
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-banner:hover {
            transition-duration: 2s;
          }
          .home-container12 {
            width: 100%;
            height: 364px;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-left2 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text058 {
            font-style: normal;
            text-align: left;
            font-weight: 400;
          }
          .home-text059 {
            color: rgb(0, 0, 0);
            width: auto;
            font-style: normal;
            font-weight: 300;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-get-started3 {
            transition: 0.3s;
            margin-bottom: 0;
          }
          .home-get-started3:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text060 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-image-container2 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-cards-image2 {
            width: 631px;
            height: 412px;
            object-fit: contain;
          }
          .home-integrations {
            width: 1588px;
            height: 742px;
            display: flex;
            padding: var(--dl-space-space-sevenunits);
            transform: matrix3d();
            align-items: center;
            padding-top: 29px;
            padding-left: 44px;
            padding-right: 236px;
            flex-direction: column;
            justify-content: center;
            background-color: #eff0f2;
          }
          .home-centered-container1 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pills-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-features1 {
            width: 1236px;
            height: 651px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-text061 {
            font-size: 3rem;
            font-style: normal;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container13 {
            flex: 0 0 auto;
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: flex-start;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }

          .home-how-it-works {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #211062;
          }
          .home-centered-container2 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-heading {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text062 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 300;
          }
          .home-category2 {
            color: white;
            width: 1163px;
            height: 329px;
            display: flex;
            overflow: hidden;
            padding-left: var(--dl-space-space-fourunits);
            border-radius: 50px;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            background-color: #5228f5;
          }
          .home-headng {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-text063 {
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            margin-bottom: 16px;
          }
          .home-text064 {
            color: rgb(238, 233, 254);
            font-style: normal;
            font-weight: 300;
            line-height: 24px;
            margin-bottom: 40px;
          }
          .home-get-started4 {
            margin-bottom: 0px;
          }
          .home-get-started4:hover {
            color: black;
            background-color: #ffffff;
          }
          .home-text065 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-container14 {
            flex: 1;
            height: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
          }
          .home-pasted-image {
            width: 522px;
            height: 333px;
            object-fit: contain;
            margin-right: 0px;
          }
          .home-row {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: row;
          }
          .home-category3 {
            flex: 1;
            color: white;
            height: 555px;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .home-headng1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .home-text066 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            margin-bottom: 16px;
          }
          .home-text067 {
            color: rgb(30, 30, 30);
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
          }
          .home-image1 {
            width: 583px;
            height: 313px;
            object-fit: cover;
          }
          .home-category4 {
            flex: 1;
            color: white;
            height: 555px;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: #000000;
          }
          .home-headng2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .home-text068 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            margin-bottom: 16px;
          }
          .home-text069 {
            color: rgb(238, 233, 254);
            line-height: 24px;
          }
          .home-image2 {
            width: 582px;
            height: 300px;
            object-fit: cover;
          }
          .home-pricing {
            width: 100%;
            height: 895px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: #5228f5;
          }
          .home-centered-container3 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text070 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            text-align: center;
            font-weight: 300;
          }
          .home-text071 {
            color: rgb(238, 233, 254);
            width: 800px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-cards1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-card {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .home-text072 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text073 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-bullet-points {
            height: 120px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-point {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon16 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text074 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point01 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon18 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text075 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point02 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon20 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text076 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point03 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon22 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text077 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point04 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon24 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text078 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-card1 {
            flex: 1;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: 40px;
            border-radius: 50px;
            padding-right: 40px;
            flex-direction: column;
            padding-bottom: 54px;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .home-text079 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text080 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-bullet-points1 {
            width: 109px;
            height: 121px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-point05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon26 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text081 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point06 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon28 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text082 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point07 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon30 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text083 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point08 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon32 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text084 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point09 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon34 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text087 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-card2 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: 40px;
            border-radius: 50px;
            padding-right: 40px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #000000;
          }
          .home-text088 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text089 {
            color: rgb(255, 255, 255);
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-bullet-points2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-point10 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon36 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text090 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point11 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon38 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text091 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point12 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon40 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text092 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point13 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon42 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text093 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point14 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon44 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text094 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-testimonals {
            width: 100%;
            display: flex;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-text095 {
            cursor: pointer;
            display: none;
          }
          .home-testimonial {
            width: 100%;
            height: 698px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: 12px;
          }
          .home-text098 {
            color: var(--dl-color-gray-black);
            font-size: 3rem;
            font-style: normal;
            font-weight: 500;
          }
          .home-text100 {
            color: var(--dl-color-gray-black);
            font-size: 1.15rem;
            max-width: 650px;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-container15 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-action-bar {
            width: 100%;
            display: flex;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-action {
            width: 100%;
            height: 427px;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: row;
            justify-content: space-between;
            background-color: #5228f5;
          }
          .home-heading2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: 51px;
          }
          .home-text101 {
            color: var(--dl-color-gray-white);
            text-align: left;
          }
          .home-text102 {
            color: rgb(238, 233, 254);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-get-started5 {
            margin-bottom: 0px;
          }
          .home-text103 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-images {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image3 {
            width: 572px;
            height: 426px;
            object-fit: cover;
            user-select: none;
          }
          .home-faq {
            width: 100%;
            display: flex;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            padding-bottom: 120px;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=60&w=1500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D');
          }
          .home-heading3 {
            width: 100%;
            display: flex;
            align-items: center;
            user-select: none;
            flex-direction: column;
          }
          .home-text106 {
            text-align: center;
          }
          .home-accordion {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text107 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text108 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header2 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text109 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text110 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header3 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text111 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text112 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header4 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text113 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text114 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header5 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text115 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text116 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-container17 {
            display: contents;
          }
          .home-footer {
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
          .home-top {
            width: 1279px;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-right2 {
            gap: var(--dl-space-space-fiveunits);
            width: 1163px;
            height: 237px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-category5 {
            width: 240px;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .home-image4 {
            width: 163px;
            height: 65px;
            object-fit: cover;
          }
          .home-contact {
            display: flex;
            margin-top: 52px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text117 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-link1 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: underline;
          }
          .home-category6 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text118 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link2 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-text119 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-link3 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-link4 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-text120 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-category7 {
            width: 154px;
            display: flex;
            flex-direction: column;
          }
          .home-text121 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-links3 {
            gap: var(--dl-space-space-unit);
            width: 108px;
            height: 157px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text122 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text123 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-link5 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-text124 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text125 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-container18 {
            width: 271px;
            height: 208px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text129 {
            color: var(--dl-color-gray-white);
          }
          .home-textinput1 {
            margin-top: var(--dl-space-space-halfunit);
          }
          .home-textarea {
            width: 253px;
            height: 66px;
            margin-top: var(--dl-space-space-halfunit);
          }
          .home-button {
            margin-top: var(--dl-space-space-halfunit);
          }
          .home-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            user-select: none;
            flex-direction: column;
          }
          .home-text130 {
            color: rgb(104, 104, 104);
            font-size: 14px;
            line-height: 30px;
          }
          @media (max-width: 1200px) {
            .home-container01 {
              align-self: center;
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-close-mobile-menu {
              align-items: center;
              justify-content: center;
            }
            .home-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-centered {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .home-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-links1 {
              display: none;
            }
            .home-get-started {
              display: none;
            }
            .home-mobile-menu-button {
              display: flex;
            }
            .home-header {
              width: 100%;
              max-width: 1200px;
            }
            .home-image {
              width: 100%;
            }
            .home-features {
              padding-top: 260px;
            }
            .home-title {
              width: 100%;
              max-width: 1200px;
            }
            .home-text012 {
              font-size: 36px;
              line-height: 40px;
            }
            .home-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .home-text016 {
              line-height: 21px;
            }
            .home-text017 {
              line-height: 21px;
            }
            .home-text024 {
              line-height: 21px;
            }
            .home-text025 {
              line-height: 21px;
            }
            .home-text032 {
              line-height: 21px;
            }
            .home-text033 {
              line-height: 21px;
            }
            .home-text037 {
              font-size: 24px;
            }
            .home-text040 {
              line-height: 21px;
            }
            .home-text041 {
              line-height: 21px;
            }
            .home-quote-container {
              padding-top: var(--dl-space-space-sevenunits);
              padding-bottom: var(--dl-space-space-sevenunits);
            }
            .home-message {
              width: 100%;
              max-width: 800px;
            }
            .home-author {
              width: 100%;
              max-width: 800px;
            }
            .home-statistics {
              height: 800px;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-container10 {
              height: 100%;
              flex-direction: column;
            }
            .home-banner-manage {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-left1 {
              margin-right: var(--dl-space-space-threeunits);
            }
            .home-cards-image {
              width: 360px;
            }
            .home-banner-advanced-analytics {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text061 {
              align-self: center;
            }
            .home-container13 {
              grid-template-columns: 1fr 1fr;
            }
            .home-category2 {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-headng {
              margin-left: var(--dl-space-space-fourunits);
            }
            .home-container14 {
              width: 100%;
            }
            .home-pasted-image {
              height: auto;
            }
            .home-headng1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-headng2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-text071 {
              width: 100%;
              max-width: 600px;
            }
            .home-cards1 {
              display: flex;
              flex-direction: column;
            }
            .home-card {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text073 {
              font-size: 16px;
            }
            .home-card1 {
              width: 100%;
              align-items: flex-start;
            }
            .home-card2 {
              width: 100%;
              align-items: flex-start;
            }
            .home-testimonals {
              align-items: center;
              flex-direction: column;
            }
            .home-text098 {
              text-align: center;
            }
            .home-text100 {
              text-align: center;
            }
            .home-container15 {
              flex-direction: column;
            }
            .home-action {
              flex-direction: column;
            }
            .home-heading2 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-text101 {
              font-size: 36px;
              line-height: 36px;
            }
            .home-accordion {
              width: 100%;
              max-width: 1200px;
            }
            .home-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .home-top {
              flex-direction: column;
            }
            .home-right2 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-text117 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link1 {
              text-decoration: underline none;
            }
            .home-links2 {
              gap: var(--dl-space-space-unit);
            }
            .home-links3 {
              gap: var(--dl-space-space-unit);
            }
            .home-text130 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              height: 620px;
              position: relative;
              padding-bottom: 180px;
              background-color: var(--dl-color-template-blue-bg);
            }
            .home-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-left {
              margin-left: var(--dl-space-space-unit);
            }
            .home-right {
              margin-right: var(--dl-space-space-unit);
            }
            .home-get-started {
              display: none;
            }
            .home-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .home-text006 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .home-text007 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .home-get-started1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-dashboard-preview {
              top: 520px;
              width: 90%;
              border-width: 10px;
              border-radius: 45px;
            }
            .home-outline {
              border-width: 10px;
              border-radius: 35px;
            }
            .home-image {
              width: 100%;
            }
            .home-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text012 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .home-container04 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-text013 {
              font-size: 24px;
            }
            .home-text016 {
              font-size: 14px;
            }
            .home-text017 {
              font-size: 14px;
            }
            .home-publish {
              margin-left: 0px;
            }
            .home-text021 {
              font-size: 24px;
            }
            .home-text024 {
              font-size: 14px;
            }
            .home-text025 {
              font-size: 14px;
            }
            .home-container07 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-analyze {
              margin-right: 0px;
            }
            .home-text029 {
              font-size: 24px;
            }
            .home-text032 {
              font-size: 14px;
            }
            .home-text033 {
              font-size: 14px;
            }
            .home-text040 {
              font-size: 14px;
            }
            .home-text041 {
              font-size: 14px;
            }
            .home-quote-container {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-message {
              font-size: 24px;
              line-height: 31px;
            }
            .home-author {
              width: 100%;
            }
            .home-avatar {
              width: 40px;
              height: 40px;
            }
            .home-quote1 {
              font-size: 14px;
              max-width: 800px;
            }
            .home-text045 {
              font-size: 14px;
              max-width: 800px;
            }
            .home-statistics {
              height: 100%;
            }
            .home-container10 {
              gap: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .home-banner-manage {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-container11 {
              flex-direction: column;
            }
            .home-left1 {
              margin-right: 0px;
            }
            .home-text048 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text049 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text050 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text051 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text052 {
              font-size: 16px;
            }
            .home-image-container {
              justify-content: center;
            }
            .home-cards-image {
              margin-top: var(--dl-space-space-threeunits);
            }
            .home-banner-advanced-analytics {
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-centered-container {
              flex-direction: column-reverse;
            }
            .home-right1 {
              margin-left: 0px;
            }
            .home-text053 {
              font-size: 28px;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text054 {
              font-size: 20px;
            }
            .home-text056 {
              font-size: 20px;
            }
            .home-banner {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-container12 {
              flex-direction: column;
            }
            .home-left2 {
              margin-right: 0px;
            }
            .home-integrations {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-how-it-works {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text062 {
              margin-bottom: 0px;
            }
            .home-headng {
              padding-bottom: 0px;
            }
            .home-get-started4 {
              display: none;
            }
            .home-container14 {
              width: 100%;
            }
            .home-row {
              height: auto;
              flex-direction: column;
            }
            .home-pricing {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-card {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text072 {
              font-size: 28px;
            }
            .home-card1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text079 {
              font-size: 28px;
            }
            .home-card2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text088 {
              font-size: 28px;
            }
            .home-testimonals {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: 0px;
            }
            .home-text095 {
              display: flex;
              font-style: normal;
              margin-top: var(--dl-space-space-oneandhalfunits);
              font-weight: 600;
            }
            .home-testimonial {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-action-bar {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-action {
              align-items: center;
            }
            .home-heading2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text101 {
              font-size: 28px;
              text-align: left;
            }
            .home-text103 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .home-images {
              justify-content: center;
            }
            .home-image3 {
              width: 100%;
            }
            .home-faq {
              padding: var(--dl-space-space-fourunits);
            }
            .home-heading3 {
              width: 100%;
            }
            .home-text106 {
              font-size: 36px;
              line-height: 36px;
            }
            .home-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              padding-bottom: 160px;
            }
            .home-logo {
              margin-left: 0px;
            }
            .home-icon {
              align-items: center;
              justify-content: center;
            }
            .home-text007 {
              color: #eee9fe;
            }
            .home-get-started1 {
              width: 100%;
            }
            .home-dashboard-preview {
              top: 500px;
            }
            .home-features {
              padding-top: 200px;
            }
            .home-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container04 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container07 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .home-analyze {
              margin-bottom: 0px;
            }
            .home-statistics {
              height: 500px;
            }
            .home-text051 {
              line-height: 24px;
            }
            .home-cards-image {
              width: 100%;
              margin-top: var(--dl-space-space-twounits);
            }
            .home-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container13 {
              grid-gap: var(--dl-space-space-halfunit);
            }
            .home-category2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-pricing {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-testimonals {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-testimonial {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-action-bar {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
