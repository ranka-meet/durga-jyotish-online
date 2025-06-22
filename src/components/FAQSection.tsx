
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "क्या consultation Hindi में होती है?",
      answer: "जी हां, सभी consultation पूरी तरह से Hindi में होती है। Pandit ji का मानना है कि अपनी भाषा में बात करने से आपकी समस्याओं को बेहतर तरीके से समझा जा सकता है।"
    },
    {
      question: "Kundali matching के लिए क्या जानकारी चाहिए?",
      answer: "लड़के और लड़की दोनों की birth details चाहिए - Date of Birth, Time of Birth (सटीक समय), और Place of Birth। अगर exact time नहीं पता तो approximate time भी काम आ सकता है।"
    },
    {
      question: "Home visit की सुविधा है क्या?",
      answer: "जी हां, Mumbai के अंदर home visit की सुविधा उपलब्ध है। Vastu consultation और special occasions के लिए Pandit ji आपके घर आ सकते हैं। इसके लिए अलग से charges लगते हैं।"
    },
    {
      question: "Gemstone कैसे मिलेंगे और कितने दिन में?",
      answer: "Consultation के बाद अगर gemstone की जरूरत है तो certified और original stones मिलते हैं। Usually 3-7 दिन में gemstone तैयार हो जाता है। Wearing का proper muhurat भी बताया जाता है।"
    },
    {
      question: "Online consultation होती है?",
      answer: "हां, phone/WhatsApp के through consultation होती है। लेकिन पहली बार मिलना हो तो face-to-face मिलना बेहतर होता है। Detailed chart reading के लिए भी offline consultation ज्यादा accurate होती है।"
    },
    {
      question: "कितने दिन पहले appointment लेना पड़ता है?",
      answer: "Usually 2-3 दिन पहले appointment ले लेना चाहिए। Emergency cases में same day भी देखा जा सकता है। WhatsApp या call करके appointment fix कर सकते हैं।"
    },
    {
      question: "क्या remedies really काम करते हैं?",
      answer: "हां, proper faith और सही तरीके से follow करने पर remedies काम करते हैं। 60+ साल के experience में हजारों लोगों को फायदा हुआ है। Simple और practical remedies दिए जाते हैं।"
    },
    {
      question: "Charges कैसे decide होते हैं?",
      answer: "Basic consultation ₹2100 है। Complex cases, detailed reports, या special services के लिए अलग charges हैं। Pandit ji का मानना है - 'यदि आपको अच्छा ज्योतिषी चाहिए तो उसे उचित दक्षिणा देनी पड़ेगी।'"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Frequently Asked <span className="text-orange-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Common questions about our astrology and Vastu consultation services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden border-2 border-gray-100 hover:border-orange-200 transition-colors">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 border-2 border-orange-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Feel free to call or WhatsApp us for any specific queries about our services
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => window.open('tel:+919833478243')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                📞 Call +91 98334 78243
              </button>
              <button 
                onClick={() => window.open('https://wa.me/919833478243?text=नमस्ते, मुझे कुछ सवाल पूछने हैं।')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                💬 WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
