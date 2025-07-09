export default [
  {
    name: "Blog Title Generator",
    desc: "An AI tool that generates blog titles based on your blog information.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131446.png",
    aiPrompt:
      "Give me 5 blog topic ideas in bullet points only, based on the given niche and outline. Format the result for a rich text editor.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      { label: "Enter blog outline", field: "textarea", name: "outline" },
    ],
  },
  {
    name: "Blog Content Generator",
    desc: "Generates a complete blog post based on your topic and keywords.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/3064/3064197.png",
    aiPrompt:
      "Write a complete SEO-optimized blog post based on the given title and keywords. Format as rich text with headings and bullet points.",
    slug: "generate-blog-content",
    form: [
      { label: "Blog title", field: "input", name: "title", required: true },
      { label: "Target keywords", field: "input", name: "keywords" },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "Suggests creative blog topics based on your niche or interest.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/3064/3064192.png",
    aiPrompt:
      "Generate 10 unique blog topic ideas based on the given niche. Output as a bulleted list.",
    slug: "blog-topic-ideas",
    form: [
      {
        label: "Enter blog niche or interest",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "YouTube SEO Title Generator",
    desc: "Creates SEO-friendly and engaging YouTube titles.",
    category: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiPrompt:
      "Generate 5 SEO-friendly YouTube video titles based on the topic and target audience.",
    slug: "youtube-title-generator",
    form: [
      { label: "Video topic", field: "input", name: "topic", required: true },
      { label: "Target audience or keyword", field: "input", name: "keyword" },
    ],
  },
  {
    name: "YouTube Description Generator",
    desc: "Writes engaging and keyword-rich YouTube video descriptions.",
    category: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiPrompt:
      "Write a YouTube description that is SEO-optimized and includes relevant hashtags based on the given topic.",
    slug: "youtube-description-generator",
    form: [
      {
        label: "Video topic or title",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "Enhances your content by intelligently inserting emojis for better engagement.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/742/742751.png",
    aiPrompt:
      "Enhance this text with relevant and expressive emojis. Avoid overuse.",
    slug: "emoji-text-enhancer",
    form: [
      { label: "Enter text", field: "textarea", name: "text", required: true },
    ],
  },
  {
    name: "Plagiarism-Free Article Rewriter",
    desc: "Rewrites articles to be unique and plagiarism-free.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828919.png",
    aiPrompt:
      "Rewrite the following article in a plagiarism-free manner while keeping the original meaning and structure intact.",
    slug: "article-rewriter",
    form: [
      {
        label: "Paste article",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Tags Generator",
    desc: "Generates relevant and high-performing tags for your YouTube videos.",
    category: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiPrompt:
      "Generate a list of relevant, trending tags for the given YouTube video topic.",
    slug: "youtube-tags-generator",
    form: [
      {
        label: "Video topic or title",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Meta Description Generator",
    desc: "Creates SEO-optimized meta descriptions for webpages.",
    category: "SEO",
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828959.png",
    aiPrompt:
      "Write a compelling meta description under 160 characters for the given page topic.",
    slug: "meta-description-generator",
    form: [
      { label: "Page topic", field: "input", name: "topic", required: true },
    ],
  },
  {
    name: "Instagram Caption Generator",
    desc: "Generates catchy and trendy Instagram captions.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384063.png",
    aiPrompt:
      "Create 5 engaging Instagram captions for the given photo description or mood.",
    slug: "instagram-caption-generator",
    form: [
      {
        label: "Photo description or mood",
        field: "textarea",
        name: "description",
        required: true,
      },
    ],
  },
  {
    name: "Hashtag Generator",
    desc: "Suggests relevant hashtags for social posts.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384063.png",
    aiPrompt:
      "Generate 10 relevant hashtags based on the topic or keyword provided.",
    slug: "hashtag-generator",
    form: [
      {
        label: "Enter topic or keyword",
        field: "input",
        name: "keyword",
        required: true,
      },
    ],
  },
  {
    name: "Product Description Generator",
    desc: "Writes engaging product descriptions for e-commerce.",
    category: "E-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/3144/3144456.png",
    aiPrompt:
      "Write a persuasive and SEO-friendly product description for the given product.",
    slug: "product-description-generator",
    form: [
      {
        label: "Product name and features",
        field: "textarea",
        name: "product",
        required: true,
      },
    ],
  },
  {
    name: "Landing Page Copy Generator",
    desc: "Creates copy for converting landing pages.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/6334/6334810.png",
    aiPrompt:
      "Generate landing page copy including headline, subheadline, benefits, and CTA based on product info.",
    slug: "landing-page-copy",
    form: [
      {
        label: "Product/service description",
        field: "textarea",
        name: "product",
        required: true,
      },
    ],
  },
  {
    name: "Newsletter Content Generator",
    desc: "Writes engaging newsletters based on topic and tone.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/747/747376.png",
    aiPrompt:
      "Write a newsletter email about the given topic. Use an engaging tone and include a CTA.",
    slug: "newsletter-generator",
    form: [
      {
        label: "Newsletter topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Quote Generator",
    desc: "Creates motivational or niche-specific quotes.",
    category: "Inspiration",
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828970.png",
    aiPrompt: "Generate 5 original quotes based on the given theme or niche.",
    slug: "quote-generator",
    form: [
      {
        label: "Enter niche or theme",
        field: "input",
        name: "theme",
        required: true,
      },
    ],
  },
  {
    name: "Sales Copy Generator",
    desc: "Creates sales copy or ad copy",
    category: "Inspiration",
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828970.png",
    aiPrompt: "Generate 10 original sales copy based on the given theme or niche.",
    slug: "sales-copy-generator",
    form: [
      {
        label: "Enter niche or theme",
        field: "input",
        name: "theme",
        required: true,
      },
    ],
  },
  {
    name: "Content Rephraser",
    desc: "Rewrites content in a different tone while retaining the original meaning.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828919.png",
    aiPrompt: "Rephrase the following content to make it sound more professional, casual, or friendly.",
    slug: "content-rephraser",
    form: [
      {
        label: "Enter your content",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    name: "Content Expander",
    desc: "Expands short content into longer, more detailed content.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828921.png",
    aiPrompt: "Expand this short content into a detailed version with more examples and elaboration.",
    slug: "content-expander",
    form: [
      {
        label: "Enter short content",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    name: "SEO Keyword Suggestions",
    desc: "Suggests SEO keywords for any topic.",
    category: "SEO",
    icon: "https://cdn-icons-png.flaticon.com/128/1828/1828970.png",
    aiPrompt: "Suggest a list of high-performing SEO keywords based on the given topic.",
    slug: "seo-keyword-suggestions",
    form: [
      {
        label: "Enter topic or niche",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Google Ad Copy Generator",
    desc: "Creates multiple versions of Google ad headlines and descriptions.",
    category: "Ads",
    icon: "https://cdn-icons-png.flaticon.com/128/888/888879.png",
    aiPrompt: "Generate compelling Google ad copy headlines and descriptions for the given product or service.",
    slug: "google-ad-copy-generator",
    form: [
      {
        label: "Product or service name",
        field: "input",
        name: "product",
        required: true,
      },
    ],
  },
  {
    name: "Facebook Primary Text Generator",
    desc: "Generates scroll-stopping FB ad primary texts.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733547.png",
    aiPrompt: "Write Facebook ad primary texts that are catchy, persuasive, and highlight key benefits.",
    slug: "facebook-primary-text-generator",
    form: [
      {
        label: "What is the ad about?",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    name: "AIDA Framework Generator",
    desc: "Generates copy using Attention, Interest, Desire, Action structure.",
    category: "Copywriting",
    icon: "https://cdn-icons-png.flaticon.com/128/6334/6334810.png",
    aiPrompt: "Write sales copy in AIDA format based on the product or service.",
    slug: "aida-framework-generator",
    form: [
      {
        label: "Describe your product or service",
        field: "textarea",
        name: "product",
        required: true,
      },
    ],
  },
  {
    name: "PAS Framework Generator",
    desc: "Writes copy using Problem, Agitate, Solve technique.",
    category: "Copywriting",
    icon: "https://cdn-icons-png.flaticon.com/128/1086/1086933.png",
    aiPrompt: "Generate a PAS (Problem, Agitate, Solution) style sales copy based on the given info.",
    slug: "pas-framework-generator",
    form: [
      {
        label: "What problem does your product solve?",
        field: "textarea",
        name: "problem",
        required: true,
      },
    ],
  },
  {
    name: "Call-To-Action Generator",
    desc: "Creates persuasive call-to-action phrases.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/992/992651.png",
    aiPrompt: "Generate a list of persuasive CTAs for the following offer.",
    slug: "cta-generator",
    form: [
      {
        label: "Describe your offer",
        field: "textarea",
        name: "offer",
        required: true,
      },
    ],
  },
  {
    name: "Cold Outreach Email Generator",
    desc: "Writes personalized outreach emails for leads.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/747/747376.png",
    aiPrompt: "Write a cold outreach email introducing my service and offering value.",
    slug: "cold-outreach-email-generator",
    form: [
      {
        label: "Describe your service or product",
        field: "textarea",
        name: "service",
        required: true,
      },
    ],
  },
  {
    name: "Welcome Email Generator",
    desc: "Creates friendly and engaging welcome emails.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/747/747376.png",
    aiPrompt: "Generate a warm and welcoming email for new subscribers or customers.",
    slug: "welcome-email-generator",
    form: [
      {
        label: "What is your business or app about?",
        field: "textarea",
        name: "intro",
        required: true,
      },
    ],
  },
  {
    name: "Follow-up Email Generator",
    desc: "Writes polite and effective follow-up emails for leads or clients.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/747/747376.png",
    aiPrompt: "Write a follow-up email that is friendly, professional, and includes a soft CTA.",
    slug: "follow-up-email-generator",
    form: [
      {
        label: "What is the context or reason for follow-up?",
        field: "textarea",
        name: "context",
        required: true,
      },
    ],
  },
  {
    name: "Newsletter Subject Line Generator",
    desc: "Creates attention-grabbing subject lines for newsletters.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/747/747376.png",
    aiPrompt: "Generate 5 catchy and high-open-rate subject lines for the given newsletter content.",
    slug: "newsletter-subject-line-generator",
    form: [
      {
        label: "What is the newsletter about?",
        field: "textarea",
        name: "newsletter",
        required: true,
      },
    ],
  },
  {
    name: "Amazon Product Title Generator",
    desc: "Generates optimized titles for Amazon product listings.",
    category: "E-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/3144/3144456.png",
    aiPrompt: "Write a keyword-optimized Amazon product title for the given product description.",
    slug: "amazon-product-title-generator",
    form: [
      {
        label: "Describe your product",
        field: "textarea",
        name: "product",
        required: true,
      },
    ],
  },
  {
    name: "Bullet Points for Product Listings",
    desc: "Generates persuasive bullet points for e-commerce listings.",
    category: "E-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/3144/3144456.png",
    aiPrompt: "Write 5 benefit-driven bullet points for the given product features.",
    slug: "product-bullet-generator",
    form: [
      {
        label: "Product features and highlights",
        field: "textarea",
        name: "features",
        required: true,
      },
    ],
  },
  {
    name: "Shopify SEO Meta Fields Generator",
    desc: "Generates SEO title and meta description for Shopify products.",
    category: "E-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/3144/3144456.png",
    aiPrompt: "Generate a Shopify SEO title and meta description under 160 characters based on the product.",
    slug: "shopify-seo-meta-generator",
    form: [
      {
        label: "Describe your product",
        field: "textarea",
        name: "product",
        required: true,
      },
    ],
  },
  {
    name: "Product FAQs Generator",
    desc: "Creates frequently asked questions with answers for product pages.",
    category: "E-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/906/906794.png",
    aiPrompt: "Generate 5 common FAQs with answers for the given product.",
    slug: "product-faqs-generator",
    form: [
      {
        label: "Product name and features",
        field: "textarea",
        name: "product",
        required: true,
      },
    ],
  },
  {
    name: "Twitter/X Post Generator",
    desc: "Creates engaging and relevant tweets for your audience.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384065.png",
    aiPrompt: "Write 3 engaging tweets related to the given topic. Keep it short and catchy.",
    slug: "twitter-post-generator",
    form: [
      {
        label: "Enter topic or message idea",
        field: "textarea",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "LinkedIn Post Generator",
    desc: "Writes professional LinkedIn post content for your audience.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384088.png",
    aiPrompt: "Write a professional LinkedIn post with a clear narrative and call to action based on this topic.",
    slug: "linkedin-post-generator",
    form: [
      {
        label: "Topic or announcement",
        field: "textarea",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "TikTok Video Hook Generator",
    desc: "Generates strong hooks to grab attention in the first 3 seconds.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/3046/3046120.png",
    aiPrompt: "Create 3 powerful TikTok video hooks based on the content idea.",
    slug: "tiktok-hook-generator",
    form: [
      {
        label: "What is your video about?",
        field: "textarea",
        name: "idea",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Story Ideas Generator",
    desc: "Suggests creative Instagram Story ideas for engagement.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384063.png",
    aiPrompt: "Give 5 creative and engaging Instagram Story content ideas for the following niche.",
    slug: "instagram-story-ideas-generator",
    form: [
      {
        label: "Enter your niche or topic",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Pinterest Description Generator",
    desc: "Creates SEO-rich and engaging descriptions for Pinterest pins.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733646.png",
    aiPrompt: "Write an engaging and keyword-rich Pinterest pin description for the given content or product.",
    slug: "pinterest-description-generator",
    form: [
      {
        label: "Describe your pin topic or product",
        field: "textarea",
        name: "pinDescription",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Hook/Intro Line Generator",
    desc: "Generates powerful YouTube video hooks to retain viewers.",
    category: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiPrompt: "Write 3 engaging YouTube video hooks (intro lines) to capture attention quickly for this topic.",
    slug: "youtube-hook-generator",
    form: [
      {
        label: "Enter your video topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Thumbnail Text Ideas",
    desc: "Suggests bold thumbnail text to boost CTR for YouTube videos.",
    category: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiPrompt: "Generate 5 short, bold text ideas for a YouTube thumbnail for this video topic.",
    slug: "youtube-thumbnail-text-generator",
    form: [
      {
        label: "Enter your video topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Startup Name Generator",
    desc: "Suggests creative and brandable startup or business names.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/2721/2721263.png",
    aiPrompt: "Generate 10 unique, brandable startup names based on the given niche or keywords.",
    slug: "startup-name-generator",
    form: [
      {
        label: "Enter your niche or keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Slogan/Tagline Generator",
    desc: "Creates catchy slogans or taglines for your brand or product.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/2721/2721263.png",
    aiPrompt: "Generate 5 catchy slogans or taglines for the given business or product.",
    slug: "slogan-tagline-generator",
    form: [
      {
        label: "Describe your product or business",
        field: "textarea",
        name: "business",
        required: true,
      },
    ],
  },
  {
    name: "Value Proposition Generator",
    desc: "Generates compelling value propositions for startups and services.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/6334/6334810.png",
    aiPrompt: "Write a strong value proposition statement for the following business idea.",
    slug: "value-proposition-generator",
    form: [
      {
        label: "Describe your business or product",
        field: "textarea",
        name: "product",
        required: true,
      },
    ],
  },
  {
    name: "Brand Voice Definition Generator",
    desc: "Defines a clear brand tone and voice for your business.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/2620/2620977.png",
    aiPrompt: "Define the brand voice and tone based on this brand's target audience and style.",
    slug: "brand-voice-generator",
    form: [
      {
        label: "Describe your brand",
        field: "textarea",
        name: "brand",
        required: true,
      },
    ],
  },
  {
    name: "Mission Statement Generator",
    desc: "Creates a mission statement that communicates purpose and values.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/2620/2620977.png",
    aiPrompt: "Write a strong mission statement for the business based on this description.",
    slug: "mission-statement-generator",
    form: [
      {
        label: "Describe your company or organization",
        field: "textarea",
        name: "company",
        required: true,
      },
    ],
  },
  {
    name: "Essay Writer",
    desc: "Generates detailed and structured essays based on topic and outline.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/3145/3145765.png",
    aiPrompt: "Write a full-length essay on the given topic. Use proper structure, intro, body, and conclusion.",
    slug: "essay-writer",
    form: [
      {
        label: "Enter essay topic or thesis",
        field: "textarea",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Summarizer Tool",
    desc: "Summarizes long articles, essays, or content into key points.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/3145/3145765.png",
    aiPrompt: "Summarize the following text into key points or a concise paragraph.",
    slug: "summarizer-tool",
    form: [
      {
        label: "Paste the content to summarize",
        field: "textarea",
        name: "text",
        required: true,
      },
    ],
  },
  {
    name: "Flashcard Generator",
    desc: "Creates Q&A-style flashcards for easy learning and revision.",
    category: "Education",
    icon: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
    aiPrompt: "Generate 5 flashcards (question and answer pairs) based on the following topic.",
    slug: "flashcard-generator",
    form: [
      {
        label: "Enter a topic or subject",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Explanation Generator",
    desc: "Explains difficult concepts in simple terms (e.g., for kids).",
    category: "Education",
    icon: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
    aiPrompt: "Explain the following concept in simple terms, like you're explaining to a 5-year-old.",
    slug: "explanation-generator",
    form: [
      {
        label: "Enter concept to explain",
        field: "input",
        name: "concept",
        required: true,
      },
    ],
  },
  {
    name: "Resume Bullet Generator",
    desc: "Generates professional resume bullet points for job roles.",
    category: "Career",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942748.png",
    aiPrompt: "Write 3 strong resume bullet points for the following role and achievements.",
    slug: "resume-bullet-generator",
    form: [
      {
        label: "Describe your role and key tasks",
        field: "textarea",
        name: "role",
        required: true,
      },
    ],
  },
  {
    name: "Cover Letter Generator",
    desc: "Creates tailored cover letters for job applications.",
    category: "Career",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942748.png",
    aiPrompt: "Generate a compelling cover letter based on this job title and candidate background.",
    slug: "cover-letter-generator",
    form: [
      {
        label: "Enter job title and your background",
        field: "textarea",
        name: "details",
        required: true,
      },
    ],
  },
  {
    name: "Job Description Generator",
    desc: "Creates detailed and structured job descriptions.",
    category: "Career",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942748.png",
    aiPrompt: "Write a job description for the following position, including responsibilities and requirements.",
    slug: "job-description-generator",
    form: [
      {
        label: "Enter the job title and role expectations",
        field: "textarea",
        name: "job",
        required: true,
      },
    ],
  },
  {
    name: "Meeting Agenda Generator",
    desc: "Outlines structured agendas for business or team meetings.",
    category: "Productivity",
    icon: "https://cdn-icons-png.flaticon.com/128/1250/1250615.png",
    aiPrompt: "Create a professional meeting agenda based on the following meeting purpose and team.",
    slug: "meeting-agenda-generator",
    form: [
      {
        label: "Enter meeting purpose and key points",
        field: "textarea",
        name: "agenda",
        required: true,
      },
    ],
  },
  {
    name: "AI Tweet Thread Writer",
    desc: "Creates complete Twitter/X threads from ideas or topics.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733579.png",
    aiPrompt: "Generate a 5-7 tweet thread on this topic. Keep it engaging and informative.",
    slug: "tweet-thread-writer",
    form: [
      {
        label: "Enter tweet thread topic or idea",
        field: "textarea",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Carousel Caption Generator",
    desc: "Generates captions for multi-slide Instagram carousels.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384063.png",
    aiPrompt: "Write 5 engaging captions to accompany an Instagram carousel on this topic.",
    slug: "instagram-carousel-caption",
    form: [
      {
        label: "Describe your carousel content",
        field: "textarea",
        name: "carousel",
        required: true,
      },
    ],
  },
  {
    name: "Viral Hook Generator",
    desc: "Creates catchy opening lines/hooks for viral content.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/2620/2620977.png",
    aiPrompt: "Write 5 attention-grabbing hooks for this content topic to make it go viral.",
    slug: "viral-hook-generator",
    form: [
      {
        label: "Enter content topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "AI Video Idea Generator",
    desc: "Generates creative video ideas for YouTube, TikTok, and more.",
    category: "Video",
    icon: "https://cdn-icons-png.flaticon.com/128/854/854878.png",
    aiPrompt: "Suggest 5 unique and engaging video content ideas based on this niche or topic.",
    slug: "ai-video-idea-generator",
    form: [
      {
        label: "Enter your niche or topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Video Script Generator",
    desc: "Writes full scripts for YouTube videos based on your idea.",
    category: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiPrompt: "Write a complete YouTube video script for the given topic, include intro, body, and CTA.",
    slug: "youtube-script-generator",
    form: [
      {
        label: "Enter video topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Hook/Intro Line Generator",
    desc: "Creates powerful opening lines to hook viewers instantly.",
    category: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiPrompt: "Generate 3 powerful hook lines for a YouTube video on this topic.",
    slug: "youtube-hook-generator",
    form: [
      {
        label: "Enter video topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Thumbnail Text Ideas",
    desc: "Generates short catchy text ideas for YouTube thumbnails.",
    category: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiPrompt: "Suggest 3 short and catchy phrases for a YouTube thumbnail on this topic.",
    slug: "youtube-thumbnail-text-generator",
    form: [
      {
        label: "Enter video topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Startup Name Generator",
    desc: "Creates unique and brandable names for startups.",
    category: "Business",
    icon: "https://cdn-icons-png.flaticon.com/128/857/857681.png",
    aiPrompt: "Suggest 5 creative startup name ideas based on the product or service described.",
    slug: "startup-name-generator",
    form: [
      {
        label: "Describe your product or service",
        field: "textarea",
        name: "idea",
        required: true,
      },
    ],
  },
  {
    name: "Slogan/Tagline Generator",
    desc: "Generates catchy taglines or slogans for branding.",
    category: "Business",
    icon: "https://cdn-icons-png.flaticon.com/128/1041/1041916.png",
    aiPrompt: "Generate 5 catchy slogans or taglines for the following brand/product.",
    slug: "slogan-generator",
    form: [
      {
        label: "Enter brand or product description",
        field: "textarea",
        name: "product",
        required: true,
      },
    ],
  },
  {
    name: "Value Proposition Generator",
    desc: "Creates compelling value propositions for your offer.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/6334/6334803.png",
    aiPrompt: "Write a concise and powerful value proposition for the following product or service.",
    slug: "value-proposition-generator",
    form: [
      {
        label: "Describe your product/service and audience",
        field: "textarea",
        name: "description",
        required: true,
      },
    ],
  },
  {
    name: "Brand Voice Definition Generator",
    desc: "Helps define tone and voice of your brand.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/3274/3274554.png",
    aiPrompt: "Define the ideal tone, voice, and language style for the following brand.",
    slug: "brand-voice-generator",
    form: [
      {
        label: "Describe your brand and audience",
        field: "textarea",
        name: "brand",
        required: true,
      },
    ],
  },
  {
    name: "Mission Statement Generator",
    desc: "Generates mission statements for businesses or nonprofits.",
    category: "Business",
    icon: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png",
    aiPrompt: "Create a strong and inspiring mission statement based on this organization’s goal.",
    slug: "mission-statement-generator",
    form: [
      {
        label: "Enter company/organization goal",
        field: "textarea",
        name: "goal",
        required: true,
      },
    ],
  },
  {
    name: "Podcast Episode Script Generator",
    desc: "Writes engaging scripts for podcast episodes.",
    category: "Podcast",
    icon: "https://cdn-icons-png.flaticon.com/128/869/869636.png",
    aiPrompt: "Write a podcast script for the following topic. Include intro, main discussion, and outro.",
    slug: "podcast-script-generator",
    form: [
      {
        label: "Enter podcast topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
];
