import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { createPortal } from "react-dom";

// Images
import vitex1 from "../../assets/vitex/1.png";
import vitex2 from "../../assets/vitex/2.png";
import vitex3 from "../../assets/vitex/3.png";

import tuwash1 from "../../assets/tuwash/1.png";
import tuwash2 from "../../assets/tuwash/2.png";
import tuwash3 from "../../assets/tuwash/3.png";

import orthojoint1 from "../../assets/orthojoint/1.png";
import orthojoint2 from "../../assets/orthojoint/2.png";
import orthojoint3 from "../../assets/orthojoint/3.png";

import orgavitq101 from "../../assets/orgavitq10/1.png";
import orgavitq102 from "../../assets/orgavitq10/2.png";
import orgavitq103 from "../../assets/orgavitq10/3.png";

import nevc1 from "../../assets/nevc/1.png";
import nevc2 from "../../assets/nevc/2.png";
import nevc3 from "../../assets/nevc/3.png";

import navprime1 from "../../assets/navprime/1.png";
import navprime2 from "../../assets/navprime/2.png";
import navprime3 from "../../assets/navprime/3.png";

import nanob61 from "../../assets/nanob6/1.png";
import nanob62 from "../../assets/nanob6/2.png";
import nanob63 from "../../assets/nanob6/3.png";

import namitab1 from "../../assets/namitab/1.png";
import namitab2 from "../../assets/namitab/2.png";
import namitab3 from "../../assets/namitab/3.png";

import namimtab1 from "../../assets/namimtab/1.png";
import namimtab2 from "../../assets/namimtab/2.png";
import namimtab3 from "../../assets/namimtab/3.png";

import namidh1 from "../../assets/namidh/1.png";
import namidh2 from "../../assets/namidh/2.png";
import namidh3 from "../../assets/namidh/3.png";

import prorim1 from "../../assets/prorim/1.png";
import prorim2 from "../../assets/prorim/2.png";
import prorim3 from "../../assets/prorim/3.png";

import namibone1 from "../../assets/namibone/1.png";
import namibone2 from "../../assets/namibone/2.png";
import namibone3 from "../../assets/namibone/3.png";

import madmax1 from "../../assets/madmax/1.png";
import madmax2 from "../../assets/madmax/2.png";
import madmax3 from "../../assets/madmax/3.png";

import livsuretablets1 from "../../assets/livsuretablets/1.png";
import livsuretablets2 from "../../assets/livsuretablets/2.png";
import livsuretablets3 from "../../assets/livsuretablets/3.png";

import honda1 from "../../assets/honda/1.png";
import honda2 from "../../assets/honda/2.png";
import honda3 from "../../assets/honda/3.png";

import grovitatablet1 from "../../assets/grovitatablet/1.png";
import grovitatablet2 from "../../assets/grovitatablet/2.png";
import grovitatablet3 from "../../assets/grovitatablet/3.png";

import ftmen1 from "../../assets/ftmen/1.png";
import ftmen2 from "../../assets/ftmen/2.png";
import ftmen3 from "../../assets/ftmen/3.png";

import eone1 from "../../assets/eone/1.png";
import eone2 from "../../assets/eone/2.png";
import eone3 from "../../assets/eone/3.png";

import cttab1 from "../../assets/cttab/1.png";
import cttab2 from "../../assets/cttab/2.png";
import cttab3 from "../../assets/cttab/3.png";

import bebact451 from "../../assets/bebact45/1.png";
import bebact452 from "../../assets/bebact45/2.png";
import bebact453 from "../../assets/bebact45/3.png";

import amyotol1 from "../../assets/amyotol/1.png";
import amyotol2 from "../../assets/amyotol/2.png";
import amyotol3 from "../../assets/amyotol/3.png";

import addu1 from "../../assets/addu/1.png";
import addu2 from "../../assets/addu/2.png";
import addu3 from "../../assets/addu/3.png";

import arescal1 from "../../assets/arescal/1.png";
import arescal2 from "../../assets/arescal/2.png";
import arescal3 from "../../assets/arescal/3.png";

import ProductModalRightSide from "./ProductModalRightSide";

import { vitex } from "../../data/ProductData/vitex";
import { tuwash } from "../../data/ProductData/tuwash";
import { priorim } from "../../data/ProductData/priorim";
import { orthojoint } from "../../data/ProductData/orthojoint";
import { orgavitq10 } from "../../data/ProductData/orgavitq10";
import { nevctablet } from "../../data/ProductData/nevctablet";
import { navprime } from "../../data/ProductData/navprime";
import { nanob6 } from "../../data/ProductData/nanob6";
import { namitab } from "../../data/ProductData/namitab";
import { namidh } from "../../data/ProductData/namidh";
import { namibone } from "../../data/ProductData/namibone";
import { madmax } from "../../data/ProductData/madmax";
import { livsure } from "../../data/ProductData/livsure";
import { honda } from "../../data/ProductData/honda";
import { grovita } from "../../data/ProductData/grovita";
import { ftmen } from "../../data/ProductData/ftmen";
import { eone } from "../../data/ProductData/eone";
import { cttab } from "../../data/ProductData/cttab";
import { bebact45 } from "../../data/ProductData/bebact45";
import { amyotol } from "../../data/ProductData/amyotol";
import { addu } from "../../data/ProductData/addu";
import { aerscal } from "../../data/ProductData/aerscal";
import { namimtab } from "../../data/ProductData/namimtab";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: any;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  open: boolean;
}

const productData: Record<string, any> = {
  vitex: vitex,
  tuwash: tuwash,
  prorim: priorim,
  orthojoint: orthojoint,
  orgavitq10: orgavitq10,
  nevc: nevctablet,
  navprime: navprime,
  nanob6: nanob6,
  namitab: namitab,
  namimtab: namimtab,
  namidh: namidh,
  namibone: namibone,
  madmax: madmax,
  livsuretablets: livsure,
  honda: honda,
  grovitatablet: grovita,
  priorim: priorim,
  ftmen: ftmen,
  eone: eone,
  cttab: cttab,
  bebact45: bebact45,
  amyotol: amyotol,
  addu: addu,
  arescal: aerscal,
};

const productImages: Record<string, string[]> = {
  vitex: [vitex1, vitex2, vitex3],
  tuwash: [tuwash1, tuwash2, tuwash3],
  prorim: [prorim1, prorim2, prorim3],
  orthojoint: [orthojoint1, orthojoint2, orthojoint3],
  orgavitq10: [orgavitq101, orgavitq102, orgavitq103],
  nevc: [nevc1, nevc2, nevc3],
  navprime: [navprime1, navprime2, navprime3],
  nanob6: [nanob61, nanob62, nanob63],
  namitab: [namitab1, namitab2, namitab3],
  namimtab: [namimtab1, namimtab2, namimtab3],
  namidh: [namidh1, namidh2, namidh3],
  namibone: [namibone1, namibone2, namibone3],
  madmax: [madmax1, madmax2, madmax3],
  livsuretablets: [livsuretablets1, livsuretablets2, livsuretablets3],
  honda: [honda1, honda2, honda3],
  grovitatablet: [grovitatablet1, grovitatablet2, grovitatablet3],
  ftmen: [ftmen1, ftmen2, ftmen3],
  eone: [eone1, eone2, eone3],
  cttab: [cttab1, cttab2, cttab3],
  bebact45: [bebact451, bebact452, bebact453],
  amyotol: [amyotol1, amyotol2, amyotol3],
  addu: [addu1, addu2, addu3],
  arescal: [arescal1, arescal2, arescal3],
};

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  open,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const images = product ? productImages[product.id] || [] : [];

  useEffect(() => {
    if (open && product) {
      setCurrentIdx(0);
      setDirection(1);
    }
  }, [open, product]);

  const goPrevious = () => {
    if (images.length <= 1) return;

    setDirection(-1);

    setCurrentIdx((prev) => {
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const goNext = () => {
    if (images.length <= 1) return;

    setDirection(1);

    setCurrentIdx((prev) => {
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        goPrevious();
      }

      if (event.key === "ArrowRight") {
        goNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, product, images.length]);

  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },

    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
    }),
  };

  if (!product) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          <motion.div
            className="
              relative
              flex
              w-full
              overflow-hidden
              rounded-2xl
              bg-white
              shadow-2xl
              max-md:flex-col
              max-md:max-h-[92vh]
              max-md:overflow-y-auto
            "
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(245, 251, 255, 0.98))",
            }}
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              y: 20,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <motion.button
              type="button"
              onClick={onClose}
              className="
                absolute
                right-4
                top-4
                z-30
                flex
                h-10
                w-10
                cursor-pointer
                items-center
                justify-center
                rounded-full
                bg-white/90
                text-gray-600
                shadow-md
                backdrop-blur
                transition
                hover:bg-white
                hover:text-black
              "
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Close product modal"
            >
              <X size={20} />
            </motion.button>
            <div
              className="
                relative
                flex
                min-h-[600px]
                w-1/2
                items-center
                justify-center
                overflow-hidden
                bg-[#f1f8f4]
                max-md:min-h-[400px]
                max-md:w-full
              "
            >
              {/* Decorative background */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#fff]
                  via-[#ffdac8]
                  to-[#e4e2df]
                "
              />

              {/* IMAGE */}
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-16 py-12">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.img
                    key={currentIdx}
                    src={images[currentIdx]}
                    alt={`${product.name} ${currentIdx + 1}`}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: {
                        type: "spring",
                        stiffness: 280,
                        damping: 28,
                      },
                      opacity: {
                        duration: 0.2,
                      },
                      scale: {
                        duration: 0.25,
                      },
                    }}
                    className="
                      relative
                      z-10
                      max-h-[520px]
                      max-w-full
                      object-contain
                      drop-shadow-xl
                      max-md:max-h-[340px]
                    "
                    draggable={false}
                  />
                </AnimatePresence>
              </div>

              {images.length > 1 && (
                <>
                  <motion.button
                    type="button"
                    onClick={goPrevious}
                    whileHover={{
                      scale: 1.08,
                      x: -2,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="
                      absolute
                      left-5
                      top-1/2
                      z-20
                      flex
                      h-12
                      w-12
                      -translate-y-1/2
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-full
                      bg-white/95
                      text-gray-700
                      shadow-lg
                      backdrop-blur-sm
                      transition
                      hover:bg-white
                      max-md:left-3
                    "
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} strokeWidth={2} />
                  </motion.button>

                  {/* NEXT BUTTON */}
                  <motion.button
                    type="button"
                    onClick={goNext}
                    whileHover={{
                      scale: 1.08,
                      x: 2,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="
                      absolute
                      right-5
                      top-1/2
                      z-20
                      flex
                      h-12
                      w-12
                      -translate-y-1/2
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-full
                      bg-white/95
                      text-gray-700
                      shadow-lg
                      backdrop-blur-sm
                      transition
                      hover:bg-white
                      max-md:right-3
                    "
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} strokeWidth={2} />
                  </motion.button>
                </>
              )}

              {/* IMAGE COUNTER */}
              {images.length > 1 && (
                <div
                  className="
                    absolute
                    bottom-5
                    left-1/2
                    z-20
                    -translate-x-1/2
                    rounded-full
                    bg-black/60
                    px-4
                    py-1.5
                    text-xs
                    font-medium
                    text-white
                    backdrop-blur-sm
                  "
                >
                  {currentIdx + 1} / {images.length}
                </div>
              )}

              {/* DOTS */}
              {images.length > 1 && images.length <= 10 && (
                <div
                  className="
                    absolute
                    bottom-6
                    left-1/2
                    z-20
                    flex
                    -translate-x-1/2
                    gap-1.5
                    translate-y-8
                  "
                >
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        setDirection(index > currentIdx ? 1 : -1);
                        setCurrentIdx(index);
                      }}
                      className={`
                        h-1.5
                        cursor-pointer
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          index === currentIdx
                            ? "w-6 bg-emerald-600"
                            : "w-1.5 bg-gray-400"
                        }
                      `}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="overflow-y-auto max-md:w-full w-1/2">
              <ProductModalRightSide product={productData[product.id]} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ProductModal;
