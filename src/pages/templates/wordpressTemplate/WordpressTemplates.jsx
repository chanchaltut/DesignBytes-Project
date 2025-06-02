import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const categories = [
    "All",
    "Corporate",
    "Creative",
    "Retail",
    "eCommerce",
    "Blog / Magazine",
    "Technology",
    "Entertainment",
    "Nonprofit",
    "Education",
    "Real Estate",
];

const themeSections = [
    {
        title: "Weekly bestsellers",
        key: "weekly",
        viewAll: true,
        themes: [
            {
                title: "Avada | Website Builder For WordPress & WooCommerce",
                image: "/images/sb1.jpg",
                price: "$69",
                rating: 4.8,
                sales: 1020401,
                author: "ThemeFusion",
                category: "Corporate",
            },
            {
                title: "WoodMart - Multipurpose WooCommerce Theme",
                image: "/images/sb2.png",
                price: "$59",
                rating: 4.7,
                sales: 95700,
                author: "xtemos",
                category: "eCommerce",
            },
            {
                title: "Betheme | Responsive Multipurpose WordPress & WooCommerce Theme",
                image: "/images/sb3.jpg",
                price: "$60",
                rating: 4.7,
                sales: 321300,
                author: "muffingroup",
                category: "Creative",
            },
            {
                title: "Impreza – WordPress Website and WooCommerce Builder",
                image: "/images/sb4.png",
                price: "$59",
                rating: 4.9,
                sales: 114100,
                author: "UpSolution",
                category: "Creative",
            },
        ],
    },
    {
        title: "Hot under $40",
        key: "under40",
        viewAll: true,
        themes: [
            {
                title: "Mow - Elementor Blog & Magazine WordPress Theme",
                image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500",
                price: "$19",
                rating: 4.5,
                sales: 1400,
                author: "Frenify",
                category: "Blog / Magazine",
            },
            {
                title: "Herrington - Business Consulting WordPress Theme",
                image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=500",
                price: "$39",
                rating: 4.8,
                sales: 1100,
                author: "Bravis-Themes",
                category: "Corporate",
            },
            {
                title: "Anvogue - Multipurpose WooCommerce WordPress Theme",
                image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500",
                price: "$35",
                rating: 4.7,
                sales: 1000,
                author: "PressLayouts",
                category: "eCommerce",
            },
            {
                title: "Wooti WP - Ultimate Multipurpose WordPress Theme",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500",
                price: "$39",
                rating: 4.6,
                sales: 875,
                author: "TemplateMela",
                category: "eCommerce",
            },
        ],
    },
    {
        title: "New bestsellers",
        key: "new",
        viewAll: true,
        themes: [
            {
                title: "Arolax | Creative Digital Agency Theme",
                image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500",
                price: "$59",
                rating: 4.9,
                sales: 2600,
                author: "crowdyTheme",
                category: "Creative",
            },
            {
                title: "Ecomus - Multipurpose WooCommerce Theme",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
                price: "$47",
                rating: 4.7,
                sales: 1500,
                author: "drfurdi",
                category: "eCommerce",
            },
            {
                title: "Merto - Multipurpose WooCommerce WordPress Theme",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
                price: "$49",
                rating: 4.8,
                sales: 1100,
                author: "skygroup",
                category: "eCommerce",
            },
            {
                title: "Elementra - 100% Elementor WordPress Theme",
                image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500",
                price: "$39",
                rating: 4.9,
                sales: 863,
                author: "ThemeREX",
                category: "Business",
            },
        ],
    },
    {
        title: "Top creative items",
        key: "creative",
        viewAll: true,
        themes: [
            {
                title: "Revision - Optimized Personal Blog WordPress Theme",
                image: "/images/sb5.jpg",
                price: "$69",
                rating: 4.9,
                sales: 838,
                author: "codesupplyco",
                category: "Blog / Magazine",
            },
            {
                title: "Helo | Multi-Purpose Elementor WordPress Theme",
                image: "/images/sb6.png",
                price: "$39",
                rating: 4.8,
                sales: 718,
                author: "wealcoder_agency",
                category: "Corporate",
            },
            {
                title: "Maag - Modern Blog & Magazine WordPress Theme",
                image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500",
                price: "$69",
                rating: 4.9,
                sales: 655,
                author: "codesupplyco",
                category: "Blog / Magazine",
            },
            {
                title: "Gurus - Business Consulting WordPress Theme",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500",
                price: "$39",
                rating: 4.7,
                sales: 648,
                author: "Bravis-Themes",
                category: "Business",
            },
        ],
    },
    {
        title: "Top creative WordPress themes",
        key: "creativewp",
        viewAll: true,
        themes: [
            {
                title: "Artistic - Creative Digital Agency WordPress Theme",
                image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500",
                price: "$59",
                rating: 4.8,
                sales: 602,
                author: "awaken",
                category: "Creative",
            },
            {
                title: "Kimono - Photography Portfolio WordPress Theme",
                image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=500",
                price: "$39",
                rating: 4.7,
                sales: 557,
                author: "Bravis-Themes",
                category: "Photography",
            },
            {
                title: "Hubfolio - Creative Portfolio & Digital Agency WordPress Theme",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500",
                price: "$59",
                rating: 4.8,
                sales: 493,
                author: "ThemesCamp",
                category: "Portfolio",
            },
            {
                title: "Xinterio - Interior Design WordPress Theme",
                image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500",
                price: "$39",
                rating: 4.6,
                sales: 454,
                author: "themeStek",
                category: "Real Estate",
            },
        ],
    },
];

function ThemeCard({ theme }) {
    const isAvada = theme.title.includes('Avada');
    return (
        <div className="bg-white rounded-lg shadow group overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="relative overflow-hidden">
                <img
                    src={theme.image}
                    alt={theme.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button
                    className="absolute top-2 right-2 bg-[#00D4FF] text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg"
                    onClick={() => {
                        if (isAvada) {
                            window.open('/preview/wordpress-theme-1', '_blank');
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
                    {theme.title}
                </h3>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                    by <span className="ml-1 font-medium text-[#00D4FF]">{theme.author}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[#00D4FF] font-bold text-lg">{theme.price}</span>
                    <span className="flex items-center text-yellow-500 font-semibold">
                        <FaStar className="mr-1" /> {theme.rating}
                    </span>
                </div>
                <span className="text-gray-400 text-xs mb-2">{theme.sales.toLocaleString()} Sales</span>
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
    const filteredThemes =
        selectedCategory === "All"
            ? section.themes
            : section.themes.filter((t) => t.category === selectedCategory);
    if (filteredThemes.length === 0) return null;
    return (
        <section className="mb-12">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#00204a]">{section.title}</h2>
                {section.viewAll && (
                    <button className="text-[#00D4FF] font-semibold text-sm hover:underline">View all</button>
                )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredThemes.map((theme, idx) => (
                    <ThemeCard key={idx} theme={theme} />
                ))}
            </div>
        </section>
    );
}

const WordpressTemplates = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search, setSearch] = useState("");

    // Filter logic for all sections
    const filterTheme = (theme) => {
        const searchLower = search.toLowerCase();
        return (
            (!selectedCategory || selectedCategory === "All" || theme.category === selectedCategory) &&
            (
                theme.title.toLowerCase().includes(searchLower) ||
                theme.author.toLowerCase().includes(searchLower) ||
                (theme.category && theme.category.toLowerCase().includes(searchLower))
            )
        );
    };

    return (
        <div className="min-h-screen bg-[#f5f6fa] py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Breadcrumb and Header */}
                <div className="mb-6">
                    <nav className="text-xs text-gray-500 mb-2 mt-4">
                        Home <span className="mx-1">/</span> <span className="text-[#00D4FF]">WordPress</span>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#00204a] mb-2 mt-8">WordPress Themes and WordPress Templates</h1>
                    <p className="text-gray-600 mb-4 max-w-2xl mt-4">Thousands of WordPress themes to start your new website with a bang. Beautiful templates for the world's most popular content management system.</p>
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
                {themeSections.map((section) => {
                    // Filter themes in this section
                    const filteredThemes = section.themes.filter(filterTheme);
                    if (filteredThemes.length === 0) return null;
                    return <Section key={section.key} section={{ ...section, themes: filteredThemes }} selectedCategory={selectedCategory} />;
                })}
            </div>
        </div>
    );
};

export default WordpressTemplates; 