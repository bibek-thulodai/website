import Image from "next/image"

export default function MerchandiseHero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Our Merchandise</h1>
            <div className="mb-6 h-1 w-20 bg-primary"></div>
            <p className="mb-8 text-lg text-gray-700 md:text-xl">
              Explore our exclusive collection of branded merchandise. Each item represents our commitment to creating
              opportunities and making a positive impact in communities worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#featured-products"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Browse Products
              </a>
              <a
                href="#impact"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl lg:h-[500px]">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Merchandise Collection"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
