import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard2 = (props) => {
  return (
    <>
      <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="blog-post-card2-image"
        />
        <div className="blog-post-card2-container">
          <div className="blog-post-card2-container1">
            <span className="blog-post-card2-text">{props.when}</span>
          </div>
          <h1 className="blog-post-card2-text1">{props.title}</h1>
          <span className="blog-post-card2-text2">{props.description}</span>
          <div className="blog-post-card2-container2">
            <div className="blog-post-card2-profile"></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card2-blog-post-card {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card2-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card2-image {
            width: 350px;
            height: 350px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: 0px;
          }
          .blog-post-card2-container {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .blog-post-card2-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card2-text {
            color: var(--dl-color-gray-500);
            font-weight: 300;
          }
          .blog-post-card2-text1 {
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card2-text2 {
            color: var(--dl-color-gray-500);
            font-size: 1.25rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card2-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card2-profile {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
          }

          @media (max-width: 991px) {
            .blog-post-card2-blog-post-card {
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .blog-post-card2-blog-post-card {
              flex-direction: column;
            }
            .blog-post-card2-image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .blog-post-card2-container2 {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard2.defaultProps = {
  profileAlt: 'profile',
  imageSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  rootClassName: '',
  imageAlt: 'image',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  profileSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  when: '3 days ago',
  title: 'Lorem ipsum dolor sit amet',
  label: 'ENTERPRISE',
  author: 'Jane Doe',
}

BlogPostCard2.propTypes = {
  profileAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  description: PropTypes.string,
  profileSrc: PropTypes.string,
  when: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  author: PropTypes.string,
}

export default BlogPostCard2
