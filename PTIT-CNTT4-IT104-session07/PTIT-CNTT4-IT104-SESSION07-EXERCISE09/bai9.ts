class Comment {
  public id: string;
  public userId: string;
  public content: string;
  public replies: string[];

  constructor(userId: string, content: string) {
    this.id = Math.random().toString(36).substring(2, 9);
    this.userId = userId;
    this.content = content;
    this.replies = [];
  }

  addReply(reply: string): void {
    this.replies.push(reply);
  }
}

class Post {
  public id: string;
  public likes: string[];
  public comments: Comment[];
  public userId: string;
  public content: string;

  constructor(userId: string, content: string) {
    this.id = Math.random().toString(36).substring(2, 9);
    this.userId = userId;
    this.content = content;
    this.likes = [];
    this.comments = [];
  }

  addLike(userId: string): void {
    if (!this.likes.includes(userId)) {
      this.likes.push(userId);
    }
  }

  addComment(comment: Comment): void {
    this.comments.push(comment);
  }
}

class User {
  public id: string;
  public posts: Post[];
  public followers: User[];

  constructor(id: string) {
    this.id = id;
    this.posts = [];
    this.followers = [];
  }

  createPost(content: string): void {
    const newPost = new Post(this.id, content);
    this.posts.push(newPost);
  }

  comment(postId: string, commentContent: string): void {
    const post = this.findPostById(postId);
    if (post) {
      const comment = new Comment(this.id, commentContent);
      post.addComment(comment);
    }
  }

  follow(user: User): void {
    if (!this.followers.includes(user)) {
      this.followers.push(user);
    }
  }

  likePost(postId: string): void {
    const post = this.findPostById(postId);
    if (post) {
      post.addLike(this.id);
    }
  }

  viewFeed(): void {
    console.log(`Feed for user ${this.id}:`);
    this.followers.forEach(user => {
      user.posts.forEach(post => {
        console.log(`- ${post.content} (by ${user.id})`);
      });
    });
  }

  private findPostById(postId: string): Post | undefined {
    for (const user of this.followers) {
      const post = user.posts.find(p => p.id === postId);
      if (post) return post;
    }
    return undefined;
  }
}


const alice = new User("alice");
const bob = new User("bob");

bob.createPost("Hello world!");
alice.follow(bob);
alice.viewFeed();


