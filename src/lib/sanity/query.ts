import { gql } from 'graphql-request';

export const allCategoryQuery = gql`
  query Categories {
    allCategory(sort: { order: ASC }) {
      _id
      title
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
    categories {
      _id
      title
      slug {
        current
      }
    }
  }
`;

export const allPostQuery = gql`
  ${commonPostFieldsFragment}

  query Posts {
    allPost(sort: { publishedAt: DESC }) {
      ...commonPostFields
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
    allPost(sort: { publishedAt: DESC }, where: { promoted: { eq: true } }, limit: 1) {
      ...commonPostFields
      lead
    }
  }
`;

export const postQuery = gql`
  ${commonPostFieldsFragment}

  query Post($slug: String!) {
    allPost(where: { slug: { current: { eq: $slug } } }) {
      ...commonPostFields
      lead
      contentRaw
      tags {
        _id
        label
        slug {
          current
        }
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
