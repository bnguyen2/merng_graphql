const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const commentsResolves = require('./comments');

module.exports = {
  Post: {
    likeCount: parent => parent.likes.length,
    commentCount: parent => parent.comments.length
  },
  Query: {
    ...postsResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolves.Mutation
  },
  Subscription: {
    ...postsResolvers.Subscription
  }
};
