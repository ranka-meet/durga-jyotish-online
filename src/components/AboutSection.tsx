
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, Heart } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Traditional Knowledge",
      description: "Authentic Vedic astrology passed down through generations"
    },
    {
      icon: Users,
      title: "Family Legacy",
      description: "Three generations of families trust our guidance"
    },
    {
      icon: Award,
      title: "Proven Accuracy",
      description: "Thousands of accurate predictions and successful consultations"
    },
    {
      icon: Heart,
      title: "Compassionate Service",
      description: "Understanding approach to life's most important decisions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-orange-600">Pt. Vinod Kumar Joshi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-4 shadow-xl border-2 border-orange-200">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-orange-50 to-red-50 rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/4b70bb20-1501-47bc-89d1-3d9c451026ba.png"
                    alt="Pt. Vinod Kumar Joshi - Traditional Vedic Astrologer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Four and a Half Decades of Sacred Wisdom
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Since 1961, Pt. Vinod Kumar Joshi has been Mumbai's most trusted name in traditional Vedic astrology. 
                With over 45 years of dedicated practice, he has guided thousands of families through life's most 
                important decisions.
              </p>
              <p>
                Born into a family of traditional astrologers, Pandit ji learned the sacred sciences from his 
                forefathers and has spent his lifetime perfecting the ancient art of Vedic astrology, palmistry, 
                and Vastu Shastra.
              </p>
              <p>
                His deep understanding of Sanskrit texts, combined with practical wisdom gained from decades of 
                consultation, makes him uniquely qualified to provide authentic astrological guidance that truly 
                helps people.
              </p>
              <p className="text-orange-600 font-medium italic">
                "यदि आपको अच्छा ज्योतिषी चाहिए तो उसे उचित दक्षिणा देनी पड़ेगी" - This philosophy reflects 
                his belief that authentic astrological guidance requires proper dedication and respect for the sacred knowledge.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-orange-200">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
                  <item.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specializations */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Areas of Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Vedic Astrology (Jyotish Shastra)",
              "Kundali Matching (36 Gun Milan)",
              "Vastu Shastra Consultation",
              "Palmistry (Hast Rekha)",
              "Gemstone Consultation",
              "Muhurat Selection",
              "Prashna Kundali",
              "Spiritual Remedies & Poojas",
              "Business & Career Guidance"
            ].map((expertise, index) => (
              <div key={index} className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                <span className="text-sm">{expertise}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
