import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { TIKTOK_HANDLE } from '../config';

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      question: 'What makes your plants different from other suppliers?',
      answer: 'Our plants are hand-selected and grown in optimal conditions at our specialized nursery. Each plant undergoes a rigorous quality check before shipping, and we provide comprehensive care guides based on millions of views of successful TikTok content. Plus, we offer a 99% survival guarantee that backs up our quality promise.'
    },
    {
      question: 'How do you ensure plants survive shipping?',
      answer: 'We use specialized packaging with temperature-controlled materials, moisture retention systems, and expedited shipping methods. Plants are carefully wrapped and secured to prevent damage during transit. Our shipping process has been refined through thousands of successful deliveries, achieving our industry-leading 99% survival rate.'
    },
    {
      question: 'What is your plant guarantee policy?',
      answer: 'We offer a comprehensive guarantee on all plants. If any plant doesn\'t survive the first 30 days with proper care (following our included guidelines), we\'ll replace it free of charge or provide a full refund. For bulk orders, we extend this to 60-90 days depending on the package selected.'
    },
    {
      question: 'Do you ship internationally?',
      answer: `Currently, we ship within the United States only due to agricultural regulations. We're working on international shipping partnerships and hope to expand to Canada and select European countries in the near future. Follow our TikTok @${TIKTOK_HANDLE} for updates on international availability.`
    },
    {
      question: 'How should I prepare my tank for new plants?',
      answer: 'Before planting, ensure your tank has appropriate lighting (species-specific requirements in our guides), stable water parameters, and quality substrate. We include detailed preparation instructions with every order, plus access to our video tutorials that have helped millions of TikTok viewers successfully set up their tanks.'
    },
    {
      question: 'Can beginners successfully grow these plants?',
      answer: 'Absolutely! Our care guides are designed for all skill levels, from complete beginners to experienced aquascapers. We offer easy-care species like Jungle Vallisneria for beginners and more challenging plants like Ludwigia for those ready for the next level. Each plant comes with skill-level recommendations and difficulty ratings.'
    },
    {
      question: 'What if I need help after my plants arrive?',
      answer: 'We provide ongoing support through multiple channels: detailed care guides, video tutorials, email support, and access to our plant care specialists. Premium package customers also get priority support with faster response times. Our goal is your long-term success, not just a one-time sale.'
    },
    {
      question: 'How often should I fertilize my aquatic plants?',
      answer: 'Fertilization depends on your plant species, lighting, and tank setup. Generally, root tabs every 3-4 months for root feeders like Jungle Val, and liquid fertilizers 2-3 times per week for stem plants like Ludwigia. Our care packages include specific fertilization schedules for each plant type.'
    },
    {
      question: 'Do you offer bulk discounts for large aquascapes?',
      answer: 'Yes! We offer tiered pricing with discounts starting at 5+ plants of the same species. Our Pro and Master packages provide even better value for large projects. For commercial aquascaping projects or orders over $500, contact us directly for custom pricing and wholesale rates.'
    },
    {
      question: 'How can I follow your TikTok content for more tips?',
      answer: `Find us on TikTok @${TIKTOK_HANDLE} for daily plant care tips, transformation videos, and live Q&A sessions. We post new content regularly featuring customer success stories, seasonal care advice, and behind-the-scenes looks at our nursery operations. Our TikTok community is the best place for real-time plant care support!`
    }
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full p-4">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our plants, shipping, and care requirements
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItem === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              {openItem === index && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our plant care specialists are here to help you succeed with your aquascaping journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Contact Support
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-gray-400 hover:bg-white transition-all duration-300">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;