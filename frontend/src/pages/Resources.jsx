import React, { useState } from 'react';
import ResourceCard from '../components/Resource';
import './Resources.css';

const sampleData = [
  {
    title: "Beginner's Guide to Financial Planning for Small Businesses",
    type: "Guide",
    description: "Comprehensive guide covering budgeting, cash flow management, and financial planning strategies for small businesses and MSMEs.",
    image: "https://via.placeholder.com/600x400",
    link: "https://example.com/finance-guide",
    category: "Finance"
  },
  {
    title: "Digital Marketing 101: Reaching Your Customers Online",
    type: "Course",
    description: "Learn the fundamentals of digital marketing including social media, SEO, and online advertising to grow your business.",
    image: "https://via.placeholder.com/600x400",
    link: "https://example.com/digital-marketing",
    category: "Marketing"
  },
  {
    title: "Understanding Government Schemes for MSMEs",
    type: "Article",
    description: "Detailed overview of government support programs, subsidies, and schemes available for micro, small, and medium enterprises.",
    image: "https://via.placeholder.com/600x400",
    link: "https://example.com/government-schemes",
    category: "Government Schemes"
  },
  {
    title: "Business Registration and Legal Compliance",
    type: "Guide",
    description: "Step-by-step guide to register your business, understand legal requirements, and maintain compliance.",
    image: "https://via.placeholder.com/600x400",
    link: "https://example.com/legal-guide",
    category: "Legal"
  },
  {
    title: "Export-Import Fundamentals",
    type: "Course",
    description: "Learn the basics of international trade, export procedures, and import regulations for expanding your business globally.",
    image: "https://via.placeholder.com/600x400",
    link: "https://example.com/export-import",
    category: "Trade"
  },
  {
    title: "Technology Solutions for Small Businesses",
    type: "Article",
    description: "Explore affordable technology solutions and digital tools to streamline operations and improve efficiency.",
    image: "https://via.placeholder.com/600x400",
    link: "https://example.com/tech-solutions",
    category: "Technology"
  }
];

const categories = ["All Categories", "Finance", "Marketing", "Government Schemes", "Legal", "Trade", "Technology"];
const types = ["All Types", "Guide", "Course", "Article"];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedType, setSelectedType] = useState('All Types');

  const filteredResources = sampleData.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || resource.category === selectedCategory;
    const matchesType = selectedType === 'All Types' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="resources-page">
      <div className="resources-header">
        <h1 className="resources-title">Educational Resources</h1>
        <p className="resources-subtitle">
          Empower yourself with knowledge. Access guides, articles, and courses to boost your skills.
        </p>
      </div>

      <div className="resources-controls">
        <div className="search-container">
          <div className="search-input-wrapper">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              placeholder="Search resources by title or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="filter-container">
          <div className="filter-group">
            <label className="filter-label">Category</label>
            <div className="select-wrapper">
              <svg className="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 6h18l-9 9-9-9z"></path>
              </svg>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">Type</label>
            <div className="select-wrapper">
              <svg className="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 6h18l-9 9-9-9z"></path>
              </svg>
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="filter-select"
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="resources-grid">
        {filteredResources.map((resource, index) => (
          <ResourceCard key={index} resource={resource} />
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="no-results">
          <h3>No resources found</h3>
          <p>Try adjusting your search terms or filters.</p>
        </div>
      )}
    </div>
  );
};

export default Resources;