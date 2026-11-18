import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { FadeUp } from "../../pages/Products";
import ProductModal, { type Product } from "../product/ProductModal";
import { newLaunched } from "../../data/newLaunched";

export default function FeaturedProducts() {
  const track = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  const scroll = (dir: number) =>
    track.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  return (
    <section className="section-y bg-slate-50">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our products"
            title="Featured formulations"
            text="A glimpse of our 500+ product portfolio across major therapeutic segments."
          />
          <div className="flex gap-3">
            {[
              { dir: -1, icon: ArrowLeft, label: "Scroll products left" },
              { dir: 1, icon: ArrowRight, label: "Scroll products right" },
            ].map((b) => (
              <button
                key={b.dir}
                onClick={() => scroll(b.dir)}
                aria-label={b.label}
                className="grid h-12 w-12 place-items-center rounded-full border border-slate-300 bg-white text-ink transition hover:border-brand-500 hover:bg-brand-500 hover:text-white"
              >
                <b.icon className="h-5 w-5" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Track bleeds to the right edge of the viewport */}
      <div
        ref={track}
        className="m-12 flex gap-6 overflow-x-auto scroll-smooth pb-6"
      >
        {newLaunched.map((cat, i) => (
          <FadeUp key={cat.name} delay={i * 0.08} className="w-100">
            <div className="bg-white border border-[#e1edf7] p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="block w-2/3 object-contain"
                />
              </div>

              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-[#1a3a6b]">{cat.name}</h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4! truncate">
                {cat.description}
              </p>

              <div className="w-full flex justify-center items-center">
                <Button
                  onClick={() => {
                    setSelectedProduct(cat);
                    setOpen(true);
                  }}
                  className="cursor-pointer w-1/2 flex justify-center items-center gap-1 text-sm group-hover:gap-2 transition-all"
                >
                  View Details
                </Button>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      <Reveal className="text-center">
        <Button to="/products">
          View all products <ArrowRight className="h-4 w-4" />
        </Button>
      </Reveal>
      <ProductModal
        onClose={handleClose}
        open={open}
        product={selectedProduct}
      />
    </section>
  );
}
