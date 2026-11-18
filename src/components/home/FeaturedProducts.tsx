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
        className="bleed-track no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6"
      >
        {newLaunched.map((p) => (
          <div
            key={p.id}
            className="flex w-[17.5rem] shrink-0 snap-start sm:w-[19rem]"
          >
            {newLaunched.map((cat, i) => (
              <FadeUp key={cat.name} delay={i * 0.08}>
                <div className="bg-white border border-[#e1edf7] p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
                  <div className="flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="block h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-[#1a3a6b]">
                      {cat.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4! truncate">
                    {cat.description}
                  </p>

                  <button
                    onClick={() => {
                      setSelectedProduct(cat);
                      setOpen(true);
                    }}
                    className="cursor-pointer w-full flex justify-center items-center gap-1 text-sm group-hover:gap-2 transition-all"
                  >
                    <div
                      style={{
                        background: "linear-gradient(135deg, #1a3a6b, #2a5298)",
                      }}
                      className="px-4 py-2 rounded-full text-white font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                    >
                      View Details
                    </div>
                  </button>
                </div>
              </FadeUp>
            ))}
          </div>
        ))}
      </div>

      <Reveal className="mt-6 text-center">
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
