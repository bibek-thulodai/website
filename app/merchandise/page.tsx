"use client"

import { useState } from "react"

import SectionHeading from "@/components/shared/SectionHeading"

import { Button } from "@/components/ui/button"
import { Package, Tag, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import OrderModal from "@/components/shared/OrderModal"

export default function MerchandisePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({ name: "", code: "" })

  const handleOrderClick = (productName: string, productCode: string) => {
    setSelectedProduct({ name: productName, code: productCode })
    setModalOpen(true)
  }

  return (
    <main className="flex min-h-screen flex-col">


      {/* Featured Products */}
      <section className="py-16" id="featured-products">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Products" subtitle="Browse our exclusive collection" alignment="center" />

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Product 1 */}
            <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="T-Shirt"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute right-2 top-2 rounded-full bg-white p-2 shadow-sm">
                  <Heart className="h-5 w-5 text-gray-400 transition-colors hover:text-red-500" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-lg font-semibold">Premium T-Shirt</h3>
                <p className="mb-3 text-sm text-gray-600">Product Code: TS-001</p>
                <Button className="w-full" onClick={() => handleOrderClick("Premium T-Shirt", "TS-001")}>
                  Place an Order
                </Button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Tote Bag"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute right-2 top-2 rounded-full bg-white p-2 shadow-sm">
                  <Heart className="h-5 w-5 text-gray-400 transition-colors hover:text-red-500" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-lg font-semibold">Canvas Tote Bag</h3>
                <p className="mb-3 text-sm text-gray-600">Product Code: TB-002</p>
                <Button className="w-full" onClick={() => handleOrderClick("Canvas Tote Bag", "TB-002")}>
                  Place an Order
                </Button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Water Bottle"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute right-2 top-2 rounded-full bg-white p-2 shadow-sm">
                  <Heart className="h-5 w-5 text-gray-400 transition-colors hover:text-red-500" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-lg font-semibold">Stainless Steel Bottle</h3>
                <p className="mb-3 text-sm text-gray-600">Product Code: WB-003</p>
                <Button className="w-full" onClick={() => handleOrderClick("Stainless Steel Bottle", "WB-003")}>
                  Place an Order
                </Button>
              </div>
            </div>

            {/* Product 4 */}
            <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Notebook"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute right-2 top-2 rounded-full bg-white p-2 shadow-sm">
                  <Heart className="h-5 w-5 text-gray-400 transition-colors hover:text-red-500" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-lg font-semibold">Eco-Friendly Notebook</h3>
                <p className="mb-3 text-sm text-gray-600">Product Code: NB-004</p>
                <Button className="w-full" onClick={() => handleOrderClick("Eco-Friendly Notebook", "NB-004")}>
                  Place an Order
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
           
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading title="Why Shop With Us" subtitle="Every purchase makes a difference" alignment="center" />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Quality Products</h3>
              <p className="text-gray-600">
                All our merchandise is made with premium materials for durability and comfort.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Tag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Fair Pricing</h3>
              <p className="text-gray-600">
                We offer competitive prices while ensuring fair compensation for all involved in production.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Support Our Mission</h3>
              <p className="text-gray-600">
                30% of all proceeds go directly to our community development programs worldwide.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Custom Orders</h3>
              <p className="text-gray-600">
                Need something special? We offer custom merchandise for events and organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16" id="impact">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Shop With Purpose</h2>
              <div className="mb-6 h-1 w-20 bg-primary"></div>
              <p className="mb-6 text-lg text-gray-700">
                When you purchase our merchandise, you're not just buying a product – you're investing in positive
                change. Every item in our collection helps fund our initiatives around the world.
              </p>
              <p className="mb-8 text-lg text-gray-700">
                From educational programs to entrepreneurship training, your purchase contributes to creating lasting
                opportunities for individuals and communities in need.
              </p>
              <Link href="/about" passHref>
                <Button variant="outline" size="lg">
                  Learn More About Our Impact
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              <Image src="/placeholder.svg?height=800&width=600" alt="Our Impact" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

    

      {/* Order Modal */}
      <OrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={selectedProduct.name}
        productCode={selectedProduct.code}
      />
    </main>
  )
}
