"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import SectionHeading from "@/components/shared/SectionHeading"
import { Button } from "@/components/ui/button"
import { Package, Tag, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import OrderModal from "@/components/shared/OrderModal"

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [modalOpen, setModalOpen] = useState(false)
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <main className="flex min-h-screen flex-col items-center justify-center"><div>Loading...</div></main>;
  }

  if (!product) {
    return <main className="flex min-h-screen flex-col items-center justify-center"><div>Product not found.</div></main>;
  }

  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-16" id="product-details">
        <div className="container mx-auto px-4">
          <SectionHeading title={product.name} subtitle={product.subtitle || "Product Details"} />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="relative h-96 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <Image
                src={product.imageUrl || "/placeholder.svg?height=400&width=300"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-1 text-lg font-semibold">{product.name}</h3>
              <p className="mb-3 text-sm text-gray-600">Product Code: {product.code}</p>
              <p className="mb-6 text-gray-700">{product.description}</p>
              <Button className="w-full mb-4" onClick={() => setModalOpen(true)}>
                Place an Order
              </Button>
              <Link href="/merchandise">
                <Button variant="outline" className="w-full">Back to Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading title="Why Shop With Us" subtitle="Every purchase makes a difference" />
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
        productName={product.name}
        productCode={product.code}
      />
    </main>
  )
}
