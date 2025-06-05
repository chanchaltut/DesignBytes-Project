import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const categories = [
    "All",
    "Email Marketing",
    "Landing Pages",
    "Social Media",
    "Newsletter",
    "Ad Banners",
    "Presentations",
    "Infographics",
    "Brochures",
    "Flyers",
    "Postcards",
];

const templateSections = [
    {
        title: "Weekly bestsellers",
        key: "weekly",
        viewAll: true,
        templates: [
            {
                title: "EmailPro - Advanced Email Marketing Suite",
                image: "/images/sb4.png",
                price: "$59",
                rating: 4.9,
                sales: 32400,
                author: "EmailMasters",
                category: "Email Marketing",
            },
            {
                title: "ConvertMax - High-Converting Landing Pages",
                image: "/images/sb1.jpg",
                price: "$49",
                rating: 4.8,
                sales: 28900,
                author: "ConversionPro",
                category: "Landing Pages",
            },
            {
                title: "SocialBoost - Social Media Templates",
                image: "/images/sb6.png",
                price: "$29",
                rating: 4.7,
                sales: 25600,
                author: "SocialDesigns",
                category: "Social Media",
            },
            {
                title: "NewsletterHub - Professional Newsletter Templates",
                image: "/images/sb2.png",
                price: "$39",
                rating: 4.8,
                sales: 21300,
                author: "NewsletterPro",
                category: "Newsletter",
            },
        ],
    },
    {
        title: "Hot under $25",
        key: "under25",
        viewAll: true,
        templates: [
            {
                title: "BannerCraft - Digital Ad Banner Collection",
                image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500",
                price: "$19",
                rating: 4.6,
                sales: 12400,
                author: "BannerDesigns",
                category: "Ad Banners",
            },
            {
                title: "PitchPerfect - Business Presentation Templates",
                image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500",
                price: "$24",
                rating: 4.7,
                sales: 9800,
                author: "PresentationPro",
                category: "Presentations",
            },
            {
                title: "InfoGraphic Pro - Data Visualization Templates",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
                price: "$22",
                rating: 4.5,
                sales: 8700,
                author: "InfoDesigns",
                category: "Infographics",
            },
            {
                title: "PrintPro - Brochure & Flyer Collection",
                image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500",
                price: "$18",
                rating: 4.6,
                sales: 7600,
                author: "PrintDesigns",
                category: "Brochures",
            },
        ],
    },
    {
        title: "New trending templates",
        key: "trending",
        viewAll: true,
        templates: [
            {
                title: "InstagramPro - Instagram Story & Post Templates",
                image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500",
                price: "$35",
                rating: 4.9,
                sales: 6200,
                author: "InstagramDesigns",
                category: "Social Media",
            },
            {
                title: "EmailCampaign - Responsive Email Templates",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500",
                price: "$45",
                rating: 4.8,
                sales: 5800,
                author: "CampaignMasters",
                category: "Email Marketing",
            },
            {
                title: "LeadMagnet - Lead Generation Landing Pages",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
                price: "$55",
                rating: 4.8,
                sales: 4400,
                author: "LeadGenPro",
                category: "Landing Pages",
            },
            {
                title: "PostcardPro - Direct Mail Marketing",
                image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=500",
                price: "$25",
                rating: 4.7,
                sales: 3100,
                author: "DirectMailDesigns",
                category: "Postcards",
            },
        ],
    },
    {
        title: "Digital marketing essentials",
        key: "essentials",
        viewAll: true,
        templates: [
            {
                title: "FacebookAds - Social Media Ad Templates",
                image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500",
                price: "$31",
                rating: 4.8,
                sales: 2800,
                author: "SocialAdPro",
                category: "Social Media",
            },
            {
                title: "WebinarPro - Webinar Presentation Templates",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500",
                price: "$42",
                rating: 4.7,
                sales: 2500,
                author: "WebinarDesigns",
                category: "Presentations",
            },
            {
                title: "NewsletterStudio - Monthly Newsletter Templates",
                image: "https://images.unsplash.com/photo-1596276122653-651d8230df82?w=500",
                price: "$33",
                rating: 4.8,
                sales: 2200,
                author: "NewsletterStudio",
                category: "Newsletter",
            },
            {
                title: "FlyerFactory - Event & Promotional Flyers",
                image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=500",
                price: "$21",
                rating: 4.6,
                sales: 1900,
                author: "FlyerDesigns",
                category: "Flyers",
            },
        ],
    },
];

function TemplateCard({ template }) {
    const isEmailPro = template.title.includes('EmailPro');
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
                        if (isEmailPro) {
                            window.open('/preview/marketing-template-1', '_blank');
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

const MarketingTemplates = () => {
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
                        Home <span className="mx-1">/</span> <span className="text-[#00D4FF]">Marketing Templates</span>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#00204a] mb-2 mt-8">Marketing Templates and Promotional Designs</h1>
                    <p className="text-gray-600 mb-4 max-w-2xl mt-4">Professional marketing templates for email campaigns, landing pages, social media, and more. Boost your marketing efforts with stunning designs.</p>
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

export default MarketingTemplates; 