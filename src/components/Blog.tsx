import React, { useState } from 'react';
import { 
  BookOpen,
  Zap,
  Code,
  Palette,
  TrendingUp,
  Clock,
  Calendar,
  Tag,
  ExternalLink,
  X,
  ArrowRight
} from 'lucide-react';
import './Blog.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  icon: React.ReactNode;
  tags: string[];
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Mastering React Hooks: A Comprehensive Guide",
      excerpt: "Learn how to effectively use React Hooks to build modern, functional components with state and lifecycle features.",
      content: "React Hooks have revolutionized how we write React components. In this comprehensive guide, we'll explore useState, useEffect, useContext, and custom hooks. We'll dive into best practices, common pitfalls, and advanced patterns that will help you write cleaner, more maintainable React code. You'll learn how to manage complex state logic, handle side effects properly, and create reusable custom hooks that can be shared across your application.",
      category: "React",
      date: "2024-01-15",
      readTime: "8 min read",
      icon: <Code size={32} />,
      tags: ["React", "Hooks", "JavaScript", "Frontend", "Best Practices"]
    },
    {
      id: 2,
      title: "TypeScript Best Practices for Frontend Development",
      excerpt: "Discover essential TypeScript patterns and practices that will make your frontend code more robust and maintainable.",
      content: "TypeScript brings static typing to JavaScript, helping catch errors early and improve code quality. Here are the best practices I've learned from building large-scale applications. We'll cover type definitions, interfaces vs types, generics, and how to properly type common frontend patterns. You'll learn how to leverage TypeScript's advanced features to create type-safe applications that are easier to refactor and maintain.",
      category: "TypeScript",
      date: "2024-01-10",
      readTime: "6 min read",
      icon: <Zap size={32} />,
      tags: ["TypeScript", "JavaScript", "Best Practices", "Type Safety"]
    },
    {
      id: 3,
      title: "Building Responsive Layouts with CSS Grid and Flexbox",
      excerpt: "A deep dive into creating flexible, responsive layouts using modern CSS techniques.",
      content: "CSS Grid and Flexbox have changed how we approach web layout. Learn how to combine these powerful tools for optimal responsive design. We'll explore real-world examples, from simple card layouts to complex dashboard interfaces. You'll master the art of creating layouts that work seamlessly across all device sizes while maintaining clean, maintainable CSS code.",
      category: "CSS",
      date: "2024-01-05",
      readTime: "10 min read",
      icon: <Palette size={32} />,
      tags: ["CSS", "Responsive Design", "Flexbox", "Grid", "Layout"]
    },
    {
      id: 4,
      title: "Optimizing Web Performance in 2024",
      excerpt: "Latest techniques and tools to make your websites blazing fast and user-friendly.",
      content: "Web performance is crucial for user experience and SEO. Let's explore the most effective optimization strategies for modern web development. We'll cover everything from code splitting and lazy loading to image optimization and Core Web Vitals. You'll learn practical techniques that can be implemented immediately to improve your website's performance scores.",
      category: "Performance",
      date: "2024-01-02",
      readTime: "12 min read",
      icon: <TrendingUp size={32} />,
      tags: ["Performance", "Optimization", "Web Vitals", "SEO", "Lighthouse"]
    },
    {
      id: 5,
      title: "State Management Solutions: Redux vs Context API",
      excerpt: "Comparing different state management approaches in React applications.",
      content: "Choosing the right state management solution can make or break your React application. Let's compare Redux, Context API, and other alternatives. We'll examine when to use each solution, their performance implications, and how to structure your state management for scalability. This guide will help you make informed decisions for your next project.",
      category: "React",
      date: "2023-12-28",
      readTime: "9 min read",
      icon: <BookOpen size={32} />,
      tags: ["React", "Redux", "Context API", "State Management", "Performance"]
    },
    {
      id: 6,
      title: "The Future of Web Development: Trends to Watch",
      excerpt: "Exploring emerging technologies and trends that will shape web development in the coming years.",
      content: "From WebAssembly to AI-powered development, the web development landscape is evolving rapidly. Here's what you need to know about the technologies that will define the future of web development. We'll explore serverless architecture, edge computing, and how artificial intelligence is changing the way we build and deploy web applications.",
      category: "Web Development",
      date: "2023-12-20",
      readTime: "7 min read",
      icon: <Zap size={32} />,
      tags: ["Trends", "Web Development", "Future", "AI", "Innovation"]
    }
  ];

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const BlogPostModal: React.FC<{ post: BlogPost; onClose: () => void }> = ({ post, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="modal-header">
          <div className="post-icon-large">
            {post.icon}
          </div>
          <div className="modal-title-section">
            <span className="post-category">{post.category}</span>
            <h2>{post.title}</h2>
            <div className="post-meta">
              <span className="meta-item">
                <Calendar size={16} />
                {formatDate(post.date)}
              </span>
              <span className="meta-item">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
        <div className="modal-body">
          <div className="post-content">
            <p>{post.content}</p>
            <p>In this comprehensive guide, we've covered the essential concepts and best practices. Remember that the key to mastering any technology is consistent practice and staying updated with the latest developments in the ecosystem.</p>
            <div className="post-tags">
              <Tag size={18} />
              {post.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="blog" className="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h2>My Blog</h2>
          <p>Thoughts, tutorials, and insights about frontend development and web technologies</p>
        </div>

        <div className="blog-content">
          <div className="blog-sidebar">
            <div className="categories-section">
              <h4>
                <BookOpen size={20} />
                Categories
              </h4>
              <div className="categories-list">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                    <span className="post-count">
                      {category === 'All' 
                        ? blogPosts.length 
                        : blogPosts.filter(post => post.category === category).length
                      }
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="featured-posts">
              <h4>
                <Zap size={20} />
                Featured Posts
              </h4>
              <div className="featured-list">
                {blogPosts.slice(0, 3).map(post => (
                  <div key={post.id} className="featured-item" onClick={() => setSelectedPost(post)}>
                    <div className="featured-icon">
                      {post.icon}
                    </div>
                    <div className="featured-content">
                      <h5>{post.title}</h5>
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="blog-main">
            <div className="posts-grid">
              {filteredPosts.map(post => (
                <article key={post.id} className="blog-post">
                  <div className="post-icon">
                    {post.icon}
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="post-category">{post.category}</span>
                      <span className="post-date">
                        <Calendar size={14} />
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="post-footer">
                      <span className="read-time">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                      <button 
                        className="read-more-btn"
                        onClick={() => setSelectedPost(post)}
                      >
                        Read More
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="no-posts">
                <p>No posts found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedPost && (
        <BlogPostModal 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}
    </section>
  );
};

export default Blog;