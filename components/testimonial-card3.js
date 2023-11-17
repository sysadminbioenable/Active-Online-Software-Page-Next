import React from 'react'

import PropTypes from 'prop-types'

const TestimonialCard3 = (props) => {
  return (
    <>
      <header
        className={`testimonial-card3-testimonial-card ${props.rootClassName} `}
      >
        <svg viewBox="0 0 1024 1024" className="testimonial-card3-icon">
          <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
        </svg>
        <div className="testimonial-card3-testimonial">
          <span className="testimonial-card3-text">{props.quote}</span>
          <img
            alt={props.pictureAlt}
            src={props.pictureSrc}
            className="testimonial-card3-image"
          />
          <span className="testimonial-card3-text1">{props.name}</span>
        </div>
      </header>
      <style jsx>
        {`
          .testimonial-card3-testimonial-card {
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .testimonial-card3-icon {
            width: var(--dl-size-size-small);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .testimonial-card3-testimonial {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial-card3-text {
            color: var(--dl-color-gray-500);
            font-size: 1.25rem;
            text-align: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .testimonial-card3-image {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .testimonial-card3-text1 {
            font-size: 1.5rem;
            font-weight: 300;
          }
          .testimonial-card3-root-class-name {
            align-self: center;
          }
          @media (max-width: 767px) {
            .testimonial-card3-icon {
              height: var(--dl-size-size-small);
            }
          }
          @media (max-width: 479px) {
            .testimonial-card3-testimonial-card {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialCard3.defaultProps = {
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.',
  name: 'John Doe',
  pictureSrc:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
  pictureAlt: 'profile',
  rootClassName: '',
}

TestimonialCard3.propTypes = {
  quote: PropTypes.string,
  name: PropTypes.string,
  pictureSrc: PropTypes.string,
  pictureAlt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TestimonialCard3
