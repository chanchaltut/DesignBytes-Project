import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const categories = [
    "All",
    "Drupal",
    "Joomla",
    "Magento",
    "Shopify",
    "PrestaShop",
    "OpenCart",
    "BigCommerce",
    "WooCommerce",
    "October CMS",
    "Ghost",
];

const templateSections = [
    {
        title: "Weekly bestsellers",
        key: "weekly",
        viewAll: true,
        templates: [
            {
                title: "DrupalPro - Advanced Drupal Theme Collection",
                image: "/images/sb5.jpg",
                price: "$79",
                rating: 4.8,
                sales: 18400,
                author: "DrupalMasters",
                category: "Drupal",
            },
            {
                title: "JoomlaCraft - Professional Joomla Templates",
                image: "/images/sb3.jpg",
                price: "$69",
                rating: 4.7,
                sales: 15600,
                author: "JoomlaDesigns",
                category: "Joomla",
            },
            {
                title: "MagentoMax - E-commerce Magento Themes",
                image: "/images/sb2.png",
                price: "$89",
                rating: 4.9,
                sales: 12300,
                author: "MagentoExperts",
                category: "Magento",
            },
            {
                title: "ShopifyPro - Premium Shopify Store Themes",
                image: "/images/sb1.jpg",
                price: "$59",
                rating: 4.8,
                sales: 21700,
                author: "ShopifyDesigns",
                category: "Shopify",
            },
        ],
    },
    {
        title: "Hot under $50",
        key: "under50",
        viewAll: true,
        templates: [
            {
                title: "PrestaMax - PrestaShop E-commerce Themes",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
                price: "$45",
                rating: 4.6,
                sales: 8400,
                author: "PrestaDesigns",
                category: "PrestaShop",
            },
            {
                title: "OpenCartPro - OpenCart Store Templates",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
                price: "$39",
                rating: 4.7,
                sales: 7200,
                author: "OpenCartDesigns",
                category: "OpenCart",
            },
            {
                title: "BigCommerce Elite - Professional Store Themes",
                image: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=500",
                price: "$49",
                rating: 4.5,
                sales: 6800,
                author: "BigCommerceStudio",
                category: "BigCommerce",
            },
            {
                title: "WooCommerceHub - WordPress E-commerce Themes",
                image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500",
                price: "$35",
                rating: 4.8,
                sales: 9600,
                author: "WooDesigns",
                category: "WooCommerce",
            },
        ],
    },
    {
        title: "New trending CMS themes",
        key: "trending",
        viewAll: true,
        templates: [
            {
                title: "OctoberCMS Pro - Modern CMS Templates",
                image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500",
                price: "$55",
                rating: 4.9,
                sales: 4200,
                author: "OctoberDesigns",
                category: "October CMS",
            },
            {
                title: "GhostThemes - Beautiful Blog Templates",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500",
                price: "$42",
                rating: 4.7,
                sales: 3800,
                author: "GhostStudio",
                category: "Ghost",
            },
            {
                title: "DrupalStudio - Creative Drupal Themes",
                image: "https://images.unsplash.com/photo-1545670723-196ed0954986?w=500",
                price: "$65",
                rating: 4.8,
                sales: 3400,
                author: "DrupalStudio",
                category: "Drupal",
            },
            {
                title: "JoomlaElite - Premium Joomla Collection",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500",
                price: "$58",
                rating: 4.8,
                sales: 3100,
                author: "JoomlaElite",
                category: "Joomla",
            },
        ],
    },
    {
        title: "E-commerce CMS solutions",
        key: "ecommerce",
        viewAll: true,
        templates: [
            {
                title: "MagentoStudio - Advanced Magento Themes",
                image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500",
                price: "$75",
                rating: 4.9,
                sales: 2800,
                author: "MagentoStudio",
                category: "Magento",
            },
            {
                title: "ShopifyHub - Responsive Shopify Themes",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500",
                price: "$52",
                rating: 4.7,
                sales: 2500,
                author: "ShopifyHub",
                category: "Shopify",
            },
            {
                title: "PrestaStudio - Modern PrestaShop Themes",
                image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500",
                price: "$48",
                rating: 4.8,
                sales: 2200,
                author: "PrestaStudio",
                category: "PrestaShop",
            },
            {
                title: "OpenCartMax - Premium OpenCart Themes",
                image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500",
                price: "$44",
                rating: 4.6,
                sales: 1900,
                author: "OpenCartMax",
                category: "OpenCart",
            },
        ],
    },
];

function TemplateCard({ template }) {
    const isDrupalPro = template.title.includes('DrupalPro');
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
                        if (isDrupalPro) {
                            window.open('/preview/cms-template-1', '_blank');
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

const CMSTemplates = () => {
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
                        Home <span className="mx-1">/</span> <span className="text-[#00D4FF]">CMS Templates</span>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#00204a] mb-2 mt-8">CMS Templates and Content Management Themes</h1>
                    <p className="text-gray-600 mb-4 max-w-2xl mt-4">Professional templates for popular content management systems. Beautiful, functional designs for Drupal, Joomla, Magento, Shopify, and more.</p>
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

export default CMSTemplates; 