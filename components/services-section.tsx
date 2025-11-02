import { Sparkles, Heart, Zap, Leaf } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Massage Therapy",
    description: "Therapeutic massages designed to relax muscles and improve circulation",
    price: "$90",
  },
  {
    icon: Sparkles,
    title: "Facial Treatments",
    description: "Professional facials with premium skincare products for radiant skin",
    price: "$120",
  },
  {
    icon: Zap,
    title: "Energy Healing",
    description: "Holistic healing sessions to balance your body and mind",
    price: "$85",
  },
  {
    icon: Leaf,
    title: "Aromatherapy",
    description: "Essential oil treatments to enhance relaxation and wellness",
    price: "$75",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Premium Wellness Services
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Discover our curated selection of transformative treatments designed to elevate your wellness experience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon size={24} className="text-primary group-hover:text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-foreground/70 mb-6 leading-relaxed text-sm">{service.description}</p>

                {/* Price and Button */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-lg font-bold text-primary">{service.price}</span>
                  <button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
