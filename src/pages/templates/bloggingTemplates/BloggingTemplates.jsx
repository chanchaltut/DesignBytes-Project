import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const categories = [
    "All",
    "Personal Blog",
    "Fashion Blog",
    "Food Blog",
    "Travel Blog",
    "Tech Blog",
    "Lifestyle",
    "Business Blog",
    "Photography",
    "News & Magazine",
    "Health & Fitness",
];

const templateSections = [
    {
        title: "Weekly bestsellers",
        key: "weekly",
        viewAll: true,
        templates: [
            {
                title: "BlogMaster - Professional Blogging Platform",
                image: "/images/sb6.png",
                price: "$49",
                rating: 4.9,
                sales: 24600,
                author: "BlogDesigns",
                category: "Personal Blog",
            },
            {
                title: "FashionBlog Pro - Style & Fashion Blog Theme",
                image: "/images/sb5.jpg",
                price: "$39",
                rating: 4.8,
                sales: 18900,
                author: "FashionStudio",
                category: "Fashion Blog",
            },
            {
                title: "FoodiePress - Recipe & Food Blog Template",
                image: "/images/sb2.png",
                price: "$35",
                rating: 4.7,
                sales: 22100,
                author: "FoodieDesigns",
                category: "Food Blog",
            },
            {
                title: "TravelJournal - Adventure Blog Theme",
                image: "/images/sb3.jpg",
                price: "$42",
                rating: 4.8,
                sales: 16700,
                author: "TravelDesigns",
                category: "Travel Blog",
            },
        ],
    },
    {
        title: "Hot under $30",
        key: "under30",
        viewAll: true,
        templates: [
            {
                title: "TechBlogger - Technology News & Reviews",
                image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500",
                price: "$28",
                rating: 4.6,
                sales: 12400,
                author: "TechStudio",
                category: "Tech Blog",
            },
            {
                title: "LifestyleBlog - Modern Lifestyle Theme",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500",
                price: "$25",
                rating: 4.7,
                sales: 9800,
                author: "LifestyleDesigns",
                category: "Lifestyle",
            },
            {
                title: "BizBlogger - Business & Corporate Blog",
                image: "https://images.unsplash.com/photo-1545670723-196ed0954986?w=500",
                price: "$32",
                rating: 4.5,
                sales: 8700,
                author: "BusinessDesigns",
                category: "Business Blog",
            },
            {
                title: "PhotoBlog - Photography Portfolio Blog",
                image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=500",
                price: "$29",
                rating: 4.8,
                sales: 7600,
                author: "PhotoStudio",
                category: "Photography",
            },
        ],
    },
    {
        title: "New trending blog themes",
        key: "trending",
        viewAll: true,
        templates: [
            {
                title: "NewsMag Pro - News & Magazine Platform",
                image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500",
                price: "$45",
                rating: 4.9,
                sales: 6200,
                author: "NewsDesigns",
                category: "News & Magazine",
            },
            {
                title: "FitnessBlog - Health & Wellness Theme",
                image: "https://images.unsplash.com/photo-1571019613540-996a4a6e8a15?w=500",
                price: "$38",
                rating: 4.7,
                sales: 5800,
                author: "FitnessStudio",
                category: "Health & Fitness",
            },
            {
                title: "MinimalBlog - Clean Personal Blog",
                image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500",
                price: "$33",
                rating: 4.8,
                sales: 4400,
                author: "MinimalDesigns",
                category: "Personal Blog",
            },
            {
                title: "TravelStories - Travel Blog & Journal",
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500",
                price: "$36",
                rating: 4.8,
                sales: 3100,
                author: "TravelStories",
                category: "Travel Blog",
            },
        ],
    },
    {
        title: "Specialized blog designs",
        key: "specialized",
        viewAll: true,
        templates: [
            {
                title: "FoodCritic - Restaurant & Recipe Blog",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500",
                price: "$34",
                rating: 4.8,
                sales: 2800,
                author: "FoodCritic",
                category: "Food Blog",
            },
            {
                title: "StyleIcon - Fashion & Beauty Blog",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500",
                price: "$37",
                rating: 4.7,
                sales: 2500,
                author: "StyleIcon",
                category: "Fashion Blog",
            },
            {
                title: "HealthGuru - Wellness & Lifestyle Blog",
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",
                price: "$31",
                rating: 4.8,
                sales: 2200,
                author: "HealthGuru",
                category: "Health & Fitness",
            },
            {
                title: "TechReview - Technology Review Blog",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500",
                price: "$30",
                rating: 4.6,
                sales: 1900,
                author: "TechReview",
                category: "Tech Blog",
            },
        ],
    },
];

function TemplateCard({ template }) {
    const isBlogMaster = template.title.includes('BlogMaster');
    return (
        <div className="bg-white rounded-lg shadow group overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="relative overflow-hidden">
                <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button
                    className="absolute top-2 right-2 bg-[#00D4FF] text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg"
                    onClick={() => {
                        if (isBlogMaster) {
                            window.open('/preview/blog-template-1', '_blank');
                        } else {
                            // fallback: do nothing or show a message
                        }
                    }}
                >
                    Live Preview
                </button>
            </div>
            <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold text-base mb-1 text-[#00204a] group-hover:text-[#00D4FF] transition-colors">
                    {template.title}
                </h3>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                    by <span className="ml-1 font-medium text-[#00D4FF]">{template.author}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[#00D4FF] font-bold text-lg">{template.price}</span>
                    <span className="flex items-center text-yellow-500 font-semibold">
                        <FaStar className="mr-1" /> {template.rating}
                    </span>
                </div>
                <span className="text-gray-400 text-xs mb-2">{template.sales.toLocaleString()} Sales</span>
            </div>
        </div>
    );
}

function CategoryTabs({ selected, onSelect }) {
    return (
        <div className="flex flex-wrap gap-2 md:gap-4 mb-8 mt-4">
            {categories.map((cat) => (
                <button
                    key={cat}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${selected === cat ? "bg-[#00D4FF] text-white border-[#00D4FF]" : "bg-white text-[#00204a] border-gray-200 hover:bg-[#f0f8ff]"}`}
                    onClick={() => onSelect(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}

function Section({ section, selectedCategory }) {
    const filteredTemplates =
        selectedCategory === "All"
            ? section.templates
            : section.templates.filter((t) => t.category === selectedCategory);
    if (filteredTemplates.length === 0) return null;
    return (
        <section className="mb-12">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#00204a]">{section.title}</h2>
                {section.viewAll && (
                    <button className="text-[#00D4FF] font-semibold text-sm hover:underline">View all</button>
                )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredTemplates.map((template, idx) => (
                    <TemplateCard key={idx} template={template} />
                ))}
            </div>
        </section>
    );
}

const BloggingTemplates = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search, setSearch] = useState("");

    // Filter logic for all sections
    const filterTemplate = (template) => {
        const searchLower = search.toLowerCase();
        return (
            (!selectedCategory || selectedCategory === "All" || template.category === selectedCategory) &&
            (
                template.title.toLowerCase().includes(searchLower) ||
                template.author.toLowerCase().includes(searchLower) ||
                (template.category && template.category.toLowerCase().includes(searchLower))
            )
        );
    };

    return (
        <div className="min-h-screen bg-[#f5f6fa] py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Breadcrumb and Header */}
                <div className="mb-6">
                    <nav className="text-xs text-gray-500 mb-2 mt-4">
                        Home <span className="mx-1">/</span> <span className="text-[#00D4FF]">Blogging Templates</span>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#00204a] mb-2 mt-8">Blogging Templates and Blog Themes</h1>
                    <p className="text-gray-600 mb-4 max-w-2xl mt-4">Beautiful blog templates and themes for every niche. Start your blogging journey with professional, responsive designs that engage your audience.</p>
                    <div className="flex items-center gap-2 max-w-md">
                        <input
                            type="text"
                            placeholder="Search within this category"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyDown={e => { if (e.key === 'Enter') e.preventDefault(); }}
                        />
                        <button className="bg-[#7bb661] px-4 py-2 rounded-r text-white text-lg" onClick={e => e.preventDefault()}>
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99a1 1 0 0 0 1.41-1.41l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                        </button>
                    </div>
                </div>
                {/* Category Tabs */}
                <CategoryTabs selected={selectedCategory} onSelect={setSelectedCategory} />
                {/* Sections */}
                {templateSections.map((section) => {
                    // Filter templates in this section
                    const filteredTemplates = section.templates.filter(filterTemplate);
                    if (filteredTemplates.length === 0) return null;
                    return <Section key={section.key} section={{ ...section, templates: filteredTemplates }} selectedCategory={selectedCategory} />;
                })}
            </div>
        </div>
    );
};

export default BloggingTemplates; 