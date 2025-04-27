import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Calendar, User, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
}

const BlogCard: React.FC<{
  post: BlogPost;
  delay?: number;
}> = ({ post, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="card group hover:shadow-xl"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-neutral-500 mb-3">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{post.author}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="text-neutral-700 mb-4">
          {post.excerpt}
        </p>
        <Link 
          to={`/blog/${post.id}`} 
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800"
        >
          Read More
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [postsRef, postsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts: BlogPost[] = [
    {
      id: 'prevent-frozen-pipes',
      title: 'How to Prevent Frozen Pipes This Winter',
      excerpt: 'Learn essential tips to protect your plumbing from freezing temperatures and avoid costly damage during the winter months.',
      content: 'Full blog post content here...',
      author: 'John Winters',
      date: 'December 15, 2023',
      image: 'https://images.pexels.com/photos/6265939/pexels-photo-6265939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Winter Tips',
      tags: ['Frozen Pipes', 'Winter', 'Maintenance', 'Prevention']
    },
    {
      id: 'water-heater-maintenance',
      title: '5 Signs Your Water Heater Needs Maintenance',
      excerpt: 'Recognize the warning signs that your water heater needs attention before it fails completely and leaves you in cold water.',
      content: 'Full blog post content here...',
      author: 'Mike Rodriguez',
      date: 'November 8, 2023',
      image: 'https://images.pexels.com/photos/6492398/pexels-photo-6492398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Maintenance',
      tags: ['Water Heater', 'Maintenance', 'Repair', 'Energy Efficiency']
    },
    {
      id: 'bathroom-remodel-trends',
      title: 'Top Bathroom Remodeling Trends for 2024',
      excerpt: 'Discover the latest design and technology trends that are transforming bathrooms into luxurious, efficient, and eco-friendly spaces.',
      content: 'Full blog post content here...',
      author: 'Sarah Miller',
      date: 'October 22, 2023',
      image: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Remodeling',
      tags: ['Bathroom', 'Remodeling', 'Design', 'Trends']
    },
    {
      id: 'drain-clearing-tips',
      title: 'DIY Drain Clearing Tips (And When to Call a Pro)',
      excerpt: 'Learn safe and effective methods to clear minor drain clogs yourself, and recognize when it\'s time to call in professional help.',
      content: 'Full blog post content here...',
      author: 'Lisa Chen',
      date: 'September 14, 2023',
      image: 'https://images.pexels.com/photos/5588371/pexels-photo-5588371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'DIY',
      tags: ['Drains', 'Clogs', 'DIY', 'Maintenance']
    },
    {
      id: 'water-saving-tips',
      title: 'Water Conservation: Save Money and the Environment',
      excerpt: 'Simple but effective ways to reduce your water usage, lower your utility bills, and contribute to environmental conservation.',
      content: 'Full blog post content here...',
      author: 'John Winters',
      date: 'August 30, 2023',
      image: 'https://images.pexels.com/photos/7599546/pexels-photo-7599546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Conservation',
      tags: ['Water Conservation', 'Eco-Friendly', 'Savings', 'Tips']
    },
    {
      id: 'toilet-repair-guide',
      title: 'The Ultimate Guide to Toilet Repairs',
      excerpt: 'Troubleshoot common toilet problems with our comprehensive guide to repairs, from running toilets to weak flushes and everything in between.',
      content: 'Full blog post content here...',
      author: 'Mike Rodriguez',
      date: 'July 18, 2023',
      image: 'https://images.pexels.com/photos/6035356/pexels-photo-6035356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Repair',
      tags: ['Toilet', 'Repair', 'DIY', 'Troubleshooting']
    },
  ];

  const filteredPosts = blogPosts
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(post => 
      activeCategory === 'all' || post.category === activeCategory
    );

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="bg-primary-900 py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Plumbing Tips & Advice
            </h1>
            <p className="text-primary-100 text-xl mb-10">
              Expert insights, maintenance tips, and DIY guides to help you maintain your plumbing and prevent costly problems.
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white bg-opacity-20 text-white border border-primary-400 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent placeholder-white placeholder-opacity-70"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-white" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Filters */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section 
        ref={postsRef}
        className="section bg-neutral-50"
      >
        <div className="container">
          {filteredPosts.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={postsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  delay={index * 0.1}
                />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-2">No articles found</h3>
              <p className="text-neutral-600 mb-6">
                No articles match your search criteria. Please try a different search term or category.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="btn btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-primary-100 text-lg mb-8">
              Get the latest plumbing tips, maintenance advice, and special offers delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-400"
                required
              />
              <button type="submit" className="btn btn-accent whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
            <p className="text-primary-200 text-sm mt-4">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;