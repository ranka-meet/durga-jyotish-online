
import { Award, Users, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Clock,
      number: "60+",
      label: "Years Experience",
      subtext: "Since 1961",
      color: "text-orange-600"
    },
    {
      icon: Users,
      number: "2100+",
      label: "Satisfied Clients",
      subtext: "Happy Families",
      color: "text-red-600"
    },
    {
      icon: Award,
      number: "100%",
      label: "Traditional Methods",
      subtext: "Vedic Astrology",
      color: "text-yellow-600"
    },
    {
      icon: MapPin,
      number: "Mumbai",
      label: "Based Expert",
      subtext: "Home Visits Available",
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Why Trust <span className="text-orange-600">Durga Jyotish</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three generations of families have trusted our traditional Vedic astrology expertise for life's most important decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-orange-200">
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className={`text-3xl font-bold ${item.color} mb-2`}>
                  {item.number}
                </h3>
                <p className="text-lg font-semibold text-gray-800 mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-gray-600">
                  {item.subtext}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200 max-w-4xl mx-auto">
            <div className="text-6xl text-orange-400 mb-4">"</div>
            <blockquote className="text-xl lg:text-2xl text-gray-700 font-medium mb-4 italic">
              यदि आपको अच्छा ज्योतिषी चाहिए तो उसे उचित दक्षिणा देनी पड़ेगी
            </blockquote>
            <p className="text-lg text-gray-600 mb-4">
              "If you want a good astrologer, you must give proper dakshina (offering)"
            </p>
            <footer className="text-orange-600 font-semibold">
              — Pt. Vinod Kumar Joshi
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
