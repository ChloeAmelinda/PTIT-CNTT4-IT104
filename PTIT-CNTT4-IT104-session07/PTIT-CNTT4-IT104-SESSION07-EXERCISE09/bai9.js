"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class Comment {
    id;
    userId;
    content;
    replies;
    constructor(userId, content) {
        this.id = Math.random().toString(36).substring(2, 9);
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
class Post {
    id;
    likes;
    comments;
    userId;
    content;
    constructor(userId, content) {
        this.id = Math.random().toString(36).substring(2, 9);
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }
    addLike(userId) {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class User {
    id;
    posts;
    followers;
    constructor(id) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    createPost(content) {
        const newPost = new Post(this.id, content);
        this.posts.push(newPost);
    }
    comment(postId, commentContent) {
        const post = this.findPostById(postId);
        if (post) {
            const comment = new Comment(this.id, commentContent);
            post.addComment(comment);
        }
    }
    follow(user) {
        if (!this.followers.includes(user)) {
            this.followers.push(user);
        }
    }
    likePost(postId) {
        const post = this.findPostById(postId);
        if (post) {
            post.addLike(this.id);
        }
    }
    viewFeed() {
        console.log(`Feed for user ${this.id}:`);
        this.followers.forEach(user => {
            user.posts.forEach(post => {
                console.log(`- ${post.content} (by ${user.id})`);
            });
        });
    }
    findPostById(postId) {
        for (const user of this.followers) {
            const post = user.posts.find(p => p.id === postId);
            if (post)
                return post;
        }
        return undefined;
    }
}
const alice = new User("alice");
const bob = new User("bob");
bob.createPost("Hello world!");
alice.follow(bob);
alice.viewFeed();
//# sourceMappingURL=bai9.js.map