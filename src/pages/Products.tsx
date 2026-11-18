import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

import Button from "../components/ui/Button";
import Page from "../components/ui/Page";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import { IMG } from "../data/images";
import type { Product } from "../components/product/ProductModal";
import { newLaunched } from "../data/newLaunched";
import ProductModal from "../components/product/ProductModal";

export const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Products() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Page title="Products">
      <PageHero
        label="Products"
        heading="Formulations|built to ~perform."
        text="Browse 500+ pharmaceutical, nutraceutical and dermatology products — search by name, composition or therapeutic area."
        image={IMG.pills}
      ></PageHero>

      <div className="products-grid">
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
                <h3 className="text-lg font-bold text-[#1a3a6b]">{cat.name}</h3>
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

      {/* Closing banner */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <Reveal className="mx-auto max-w-7xl">
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-ink p-8 sm:p-14">
            <img
              src={IMG.capsules}
              alt=""
              loading="lazy"
              className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover opacity-40 md:w-3/5"
            />
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink via-ink/90 to-transparent" />
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold !text-white sm:text-4xl">
                Can't find what you're looking for?
              </h2>
              <p className="mt-4 text-white/70">
                We offer custom formulations, third-party manufacturing and
                private-label supply. Tell us your requirement and our team will
                respond within one working day.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/contact">
                  Talk to our team <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  to="/contact?product=Product%20catalogue"
                  variant="white"
                >
                  Request catalogue
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      <ProductModal
        onClose={handleClose}
        open={open}
        product={selectedProduct}
      />
    </Page>
  );
}
