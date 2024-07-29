import { gql } from 'graphql-request';

export const allCategoryQuery = gql`
  query Categories {
    allCategory(sort: { order: ASC }) {
      _id
      title
      titleShort
      slug {
        current
      }
    }
  }
`;

export const categoryQuery = gql`
  query Category($slug: String!) {
    allCategory(where: { slug: { current: { eq: $slug } } }, limit: 1) {
      _id
      title
      titleShort
      slug {
        current
      }
      seo {
        metaTitle
        metaDescription
        socialImage {
          asset {
            _id
          }
        }
      }
    }
  }
`;

export const commonPostFieldsFragment = gql`
  fragment commonPostFields on Post {
    _id
    publishedAt
    featured
    cover {
      asset {
        _id
        altText
        metadata {
          lqip
        }
      }
    }
    title
    slug {
      current
    }
    author {
      _id
      name
      image {
        asset {
          _id
          altText
        }
      }
    }
    category {
      _id
      titleShort
      slug {
        current
      }
    }
  }
`;

export const commonCustomerStoryFieldsFragment = gql`
  fragment commonCustomerStoryFields on CustomerStory {
    _id
    publishedAt
    title
    lead
    slug {
      current
    }
    cover {
      asset {
        _id
        altText
        metadata {
          lqip
        }
      }
    }
    companyLogo {
      asset {
        _id
        altText
        metadata {
          lqip
        }
      }
    }
    author {
      _id
      name
      image {
        asset {
          _id
          altText
        }
      }
    }
  }
`;

export const commonPostFieldsWithRelatedFragment = gql`
  ${commonPostFieldsFragment}

  fragment commonPostFieldsWithRelated on Post {
    ...commonPostFields
    lead
    contentRaw
    related {
      ...commonPostFields
    }
    seo {
      metaTitle
      metaDescription
      socialImage {
        asset {
          _id
        }
      }
    }
  }
`;

export const commonCustomerStoryFieldsWithRelatedFragment = gql`
  ${commonCustomerStoryFieldsFragment}
  ${commonPostFieldsFragment}

  fragment commonCustomerStoryFieldsWithRelated on CustomerStory {
    ...commonCustomerStoryFields
    lead
    contentRaw
    related {
      ...commonPostFields
    }
    seo {
      metaTitle
      metaDescription
      socialImage {
        asset {
          _id
        }
      }
    }
  }
`;

export const allPostQuery = gql`
  ${commonPostFieldsWithRelatedFragment}

  query Posts {
    allPost(sort: { publishedAt: DESC }) {
      ...commonPostFieldsWithRelated
    }
  }
`;

export const latestPostsQuery = gql`
  ${commonPostFieldsWithRelatedFragment}

  query LatestPosts {
    allPost(sort: { publishedAt: DESC }, limit: 3) {
      ...commonPostFieldsWithRelated
    }
  }
`;

export const allPostWithLimitationsQuery = gql`
  ${commonPostFieldsFragment}

  query Posts($where: PostFilter, $offset: Int, $limit: Int) {
    allPost(sort: { publishedAt: DESC }, offset: $offset, limit: $limit, where: $where) {
      ...commonPostFields
    }
  }
`;

export const countPostQuery = gql`
  query CountPosts($where: PostFilter) {
    allPost(where: $where) {
      _id
    }
  }
`;

export const promotedPostQuery = gql`
  ${commonPostFieldsFragment}

  query PromotedPost {
    allPost(sort: { publishedAt: DESC }, where: { featured: { eq: true } }, limit: 1) {
      ...commonPostFields
      lead
    }
  }
`;

export const postQuery = gql`
  ${commonPostFieldsWithRelatedFragment}

  query Post($slug: String!) {
    allPost(where: { slug: { current: { eq: $slug } } }) {
      ...commonPostFieldsWithRelated
    }
  }
`;

export const allCustomerStoryQuery = gql`
  ${commonCustomerStoryFieldsWithRelatedFragment}

  query CustomerStories {
    allCustomerStory(sort: { publishedAt: DESC }) {
      ...commonCustomerStoryFieldsWithRelated
    }
  }
`;

export const allCustomerStoryWithLimitationsQuery = gql`
  ${commonCustomerStoryFieldsFragment}

  query CustomerStories($where: CustomerStoryFilter, $offset: Int, $limit: Int) {
    allCustomerStory(sort: { publishedAt: DESC }, offset: $offset, limit: $limit, where: $where) {
      ...commonCustomerStoryFields
    }
  }
`;

export const countCustomerStoryQuery = gql`
  query CountCustomerStories($where: CustomerStoryFilter) {
    allCustomerStory(where: $where) {
      _id
    }
  }
`;

export const customerStoryQuery = gql`
  ${commonCustomerStoryFieldsWithRelatedFragment}

  query CustomerStory($slug: String!) {
    allCustomerStory(where: { slug: { current: { eq: $slug } } }) {
      ...commonCustomerStoryFieldsWithRelated
    }
  }
`;

export const allLegalQuery = gql`
  query Legals {
    allLegal {
      _id
      _updatedAt
      title
      slug {
        current
      }
    }
  }
`;

export const legalQuery = gql`
  query Legal($slug: String!) {
    allLegal(where: { slug: { current: { eq: $slug } } }) {
      _updatedAt
      title
      slug {
        current
      }
      contentRaw
      seo {
        metaTitle
        metaDescription
        socialImage {
          asset {
            _id
          }
        }
      }
    }
  }
`;

export const bannerQuery = gql`
  query Banner {
    allBanner(where: { isPublished: { eq: true } }, limit: 1) {
      title
      linkText
      linkUrl
    }
  }
`;

export const pageQuery = gql`
  ${commonPostFieldsFragment}
  query Page {
    allPage(limit: 1) {
      title
      posts {
        ...commonPostFields
        lead
      }
    }
  }
`;

export const pageByTitleQuery = gql`
  query PricingPage($title: String!) {
    allPage(where: { title: { eq: $title } }, limit: 1) {
      title
      _updatedAt
      content {
        ... on Hero {
          _type
          tag
          heading
          description
          btnText
        }
        ... on Tools {
          _type
          title
          cards {
            ... on ToolsCard {
              title
              subtitle
            }
            ... on ToolsCardWithLink {
              title
              subtitle
              linkText
            }
          }
        }
        ... on Plans {
          title
          _type
          heading
          card1 {
            title
            price
            features
          }
          card2 {
            title
            price
            features
            btnText
          }
          card3 {
            title
            price
            features
            btnText
          }
        }
        ... on Benefits {
          _type
          title
          heading
          description
          btnText
          cards {
            title
            description
          }
        }
        ... on Features {
          _type
          title
          heading
          description
          items {
            title
            subtitle
          }
        }
        ... on CompairingTable {
          _type
          labels
          cols {
            isRowTitle
            features
            community {
              value
              booleanValue
            }
            enterprise {
              value
              booleanValue
            }
          }
        }
        ... on Faq {
          title
          _type
          heading
          items {
            ... on FaqItem {
              _type
              question
              simpleAnswer: answer
            }
            ... on FaqItemWithList {
              _type
              question
              detailedAnswer: answer {
                text
                listOfItems
              }
            }
          }
        }
      }
    }
  }
`;
