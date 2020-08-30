const GET_LANDING_PAGE = /* GraphQL */ `
  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
    }
  }

  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }
`;

export default GET_LANDING_PAGE;
