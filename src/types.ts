import { objectType } from "nexus";

const users = [
  {
    id: "1",
    name: "user1",
  },
  {
    id: "2",
    name: "user2",
  },
  {
    id: "3",
    name: "user3",
  },
];

const posts = [
  {
    id: "1",
    content: "user1-content1",
    authorId: "1",
  },
  {
    id: "2",
    content: "user1-content2",
    authorId: "1",
  },

  {
    id: "3",
    content: "user2-content1",
    authorId: "2",
  },
  {
    id: "4",
    content: "user2-content2",
    authorId: "2",
  },

  {
    id: "5",
    content: "user3-content1",
    authorId: "3",
  },
  {
    id: "6",
    content: "user3-content2",
    authorId: "3",
  },
];

const User = objectType({
  name: "User",
  definition: (t) => {
    t.nonNull.id("id");
    t.nonNull.string("name");
    t.nonNull.list.nonNull.field("posts", {
      type: "Post",
      resolve: (parent) => {
        return posts.filter((v) => v.authorId === parent.id);
      },
    });
  },
});

const Post = objectType({
  name: "Post",
  definition: (t) => {
    t.nonNull.id("id");
    t.nonNull.string("content");
    t.nonNull.int("authorId");
  },
});

const Query = objectType({
  name: "Query",
  definition: (t) => {
    t.list.field("users", {
      type: User,
      resolve: () => users,
    });
  },
});

export default { User, Post, Query };
