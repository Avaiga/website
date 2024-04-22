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

export const allPostQuery = gql`
  ${commonPostFieldsWithRelatedFragment}

  query Posts {
    allPost(sort: { publishedAt: DESC }) {
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
