import { Check } from "lucide-react"

const features = [
  {
    title: "Expert Practitioners",
    description: "Certified wellness professionals with years of industry experience",
  },
  {
    title: "Premium Products",
    description: "We use only the finest natural and organic products",
  },
  {
    title: "Personalized Care",
    description: "Custom treatment plans tailored to your specific needs",
  },
  {
    title: "Serene Environment",
    description: "Peaceful spa spaces designed for ultimate relaxation",
  },
  {
    title: "Flexible Scheduling",
    description: "Convenient appointment times to fit your lifestyle",
  },
  {
    title: "Member Benefits",
    description: "Exclusive discounts and perks for loyal members",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-sm font-medium text-primary">Why Choose Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Experience Excellence in Every Visit
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              At Luxe Wellness, we're committed to providing world-class spa and wellness services that go beyond
              expectations. Our holistic approach ensures you leave feeling rejuvenated in body, mind, and spirit.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <Check size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-foreground/60 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="space-y-4">
              {features.slice(3).map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <Check size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-foreground/60 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="mt-8 w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300">
              Start Your Wellness Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
