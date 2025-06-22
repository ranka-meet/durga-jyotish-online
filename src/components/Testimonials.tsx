
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya S.",
      location: "Mumbai",
      service: "Kundali Matching",
      rating: 5,
      text: "Pandit ji ने हमारी कुंडली मिलान बहुत सटीक तरीके से किया। शादी के बाद जीवन में खुशियां ही खुशियां हैं। 60 साल का अनुभव सच में दिखता है।",
      translation: "Very accurate kundali matching. Life has been blissful after marriage. 60 years of experience truly shows.",
      date: "2024"
    },
    {
      name: "Rajesh M.",
      location: "Goregaon",
      service: "Vastu Consultation",
      rating: 5,
      text: "Office के vastu में जो भी सुझाव दिए थे, उसके बाद business में तेजी से growth देखी। Professional और समय पर service मिली।",
      translation: "Business grew rapidly after implementing vastu suggestions. Professional and timely service.",
      date: "2024"
    },
    {
      name: "Sunita K.",
      location: "Andheri",
      service: "Gemstone Consultation",
      rating: 5,
      text: "सही रत्न की सलाह मिली और genuine stone भी मिला। Health problems में काफी सुधार हुआ है। Highly recommended!",
      translation: "Got right gemstone advice and genuine stone. Significant improvement in health problems.",
      date: "2023"
    },
    {
      name: "Amit P.",
      location: "Borivali",
      service: "Prashna Kundali",
      rating: 5,
      text: "Job change के लिए सही समय बताया था। Exactly उसी time पर नई job मिली। Pandit ji का knowledge amazing है।",
      translation: "Predicted the right time for job change. Got new job exactly at that time. Amazing knowledge.",
      date: "2024"
    },
    {
      name: "Kavita R.",
      location: "Malad",
      service: "Satyanarayan Katha",
      rating: 5,
      text: "घर पर कथा का आयोजन बहुत अच्छा रहा। सभी सामान के साथ proper traditional way में हुआ। Family को बहुत शांति मिली।",
      translation: "Home katha ceremony was excellent. Done in proper traditional way. Family felt very peaceful.",
      date: "2024"
    },
    {
      name: "Deepak G.",
      location: "Kandivali",
      service: "Janm Kundali",
      rating: 5,
      text: "25 साल पुराना relationship था लेकिन शादी नहीं हो रही थी। Pandit ji के guidance से सब कुछ solve हो गया। Thank you!",
      translation: "25-year relationship but couldn't get married. Everything got solved with Pandit ji's guidance.",
      date: "2023"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            What Our <span className="text-orange-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real experiences from families who have trusted Durga Jyotish for their life's important decisions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-orange-200">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-orange-600 text-sm font-medium">
                      {testimonial.service}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.location} • {testimonial.date}
                    </p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <div className="flex-grow">
                  <blockquote className="text-gray-700 mb-3 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <p className="text-gray-600 text-sm">
                    {testimonial.translation}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Verifie Client
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-3xl font-bold text-gray-800 ml-2">4.9/5</span>
            </div>
            <p className="text-lg text-gray-600 mb-2">
              Based on 200+ authentic client reviews
            </p>
            <p className="text-sm text-gray-500">
              All reviews verified through WhatsApp consultation records
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
