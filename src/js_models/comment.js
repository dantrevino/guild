class Comment {
  constructor({
    id,
    body,
    blogId,
    authorId,
  }) {
    this.id = id;
    this.body = body;
    this.blogId = blogId;
    this.authorId = authorId;
    this.createdAt = `${new Date()}`;
  }
}

export default Comment;