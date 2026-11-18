import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Check,
  AlertTriangle,
  Info,
  FlaskConical,
  ShieldCheck,
  Clock,
  Users,
  Package,
  Pill,
  Building2,
  HeartPulse,
  ListChecks,
  Beaker,
  Sparkles,
  ClipboardList,
  Thermometer,
} from "lucide-react";

/* -------------------------------------------------------
   Small reusable components
------------------------------------------------------- */

const SectionIcon = ({
  icon: Icon,
  section,
}: {
  icon: React.ElementType;
  section: string;
}) => (
  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
    <Icon size={17} strokeWidth={1.8} className={section} />
  </div>
);

const Accordion = ({
  title,
  icon,
  children,
  section,
  defaultOpen = false,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  section: string;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          w-full
          items-center
          justify-between
          cursor-pointer
          gap-4
          px-4
          py-4
          text-left
          transition
          hover:bg-gray-50
        "
      >
        <div className="flex min-w-0 items-center gap-3">
          <SectionIcon icon={icon} section={section} />

          <span className="text-sm font-semibold text-gray-900">{title}</span>
        </div>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-gray-500"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="border-t border-gray-100 px-4 pb-5 pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const BulletList = ({
  items,
  icon = Check,
}: {
  items: string[];
  icon?: React.ElementType;
}) => {
  if (!items?.length) return null;

  const Icon = icon;

  return (
    <div className="space-y-2.5">
      {items.map((item, index: number) => (
        <div
          key={`${item}-${index}`}
          className="flex items-start gap-2.5 text-sm leading-6 text-gray-600"
        >
          <Icon
            size={15}
            className="mt-1 shrink-0 text-emerald-600"
            strokeWidth={2}
          />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: string | number | null | undefined;
}) => {
  if (
    value === undefined ||
    value === null ||
    value === "" ||
    (Array.isArray(value) && value.length === 0)
  ) {
    return null;
  }

  return (
    <div className="grid grid-cols-[minmax(110px,0.8fr)_minmax(0,1.5fr)] gap-4 border-b border-gray-100 py-2.5 last:border-0">
      <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
        {label}
      </span>

      <span className="text-sm leading-6 text-gray-700">
        {Array.isArray(value) ? value.join(", ") : value}
      </span>
    </div>
  );
};

const Tag = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 ${className}`}
  >
    {children}
  </span>
);

/* -------------------------------------------------------
   Main component
------------------------------------------------------- */

const ProductModalRightSide = ({ product }: { product: any }) => {
  const p = product.product;
  const composition = product.composition;

  return (
    <div
      className="
        flex
        flex-col
        max-md:w-full
      "
    >
      {/* -------------------------------------------------
          STICKY HEADER
      ------------------------------------------------- */}

      <div className="shrink-0 bg-white px-10 pb-5 pt-10 max-md:px-6 max-md:pt-7">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
        >
          {/* CATEGORY */}
          <div className="mb-3 flex flex-wrap gap-2">
            {p?.category && (
              <Tag className="text-blue-600! bg-blue-50!">{p.category}</Tag>
            )}
            {p?.dosage_form && (
              <Tag className="text-green-600! bg-green-50!">
                {p.dosage_form}
              </Tag>
            )}
          </div>

          {/* NAME */}
          <motion.h2
            id="product-modal-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="
              text-3xl
              font-semibold
              leading-tight
              tracking-tight
              text-gray-900
              max-md:text-2xl
            "
          >
            {p?.name}
          </motion.h2>

          {/* TAGLINE */}
          {p?.tagline && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-2 text-sm font-medium text-gray-500"
            >
              {p.tagline}
            </motion.p>
          )}
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.28, duration: 0.4 }}
          className="mt-5 h-px origin-left bg-gray-200"
        />
      </div>

      {/* -------------------------------------------------
          SCROLLABLE CONTENT
      ------------------------------------------------- */}

      <div
        className="
          min-h-0
          flex-1
          overflow-y-auto
          max-h-[70vh]
          px-10
          pb-10
          max-md:px-6
        "
      >
        <div className="space-y-3">
          {/* =================================================
              1. PRODUCT OVERVIEW
          ================================================= */}

          <Accordion
            title="Product Overview"
            icon={Info}
            section="text-blue-600"
            defaultOpen
          >
            <div className="space-y-5">
              {product.product_introduction && (
                <p className="text-sm leading-7 text-gray-600">
                  {product.product_introduction}
                </p>
              )}

              <div className="rounded-xl bg-gray-50 p-4">
                <InfoRow label="Brand" value={p?.brand} />
                <InfoRow label="Category" value={p?.category} />
                <InfoRow
                  label="Therapeutic Class"
                  value={p?.therapeutic_class}
                />
                <InfoRow label="Dosage Form" value={p?.dosage_form} />
                <InfoRow label="Target Group" value={p?.target_group} />
                <InfoRow label="Primary Focus" value={p?.primary_focus} />
                <InfoRow
                  label="Pack Size"
                  value={
                    p?.pack_size
                      ? `${p.pack_size.quantity} ${p.pack_size.unit}`
                      : null
                  }
                />
              </div>
            </div>
          </Accordion>

          {/* =================================================
              2. COMPOSITION
          ================================================= */}

          <Accordion
            title="Composition & Ingredients"
            icon={Beaker}
            section="text-purple-600"
          >
            <div className="space-y-5">
              {composition?.serving_size && (
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Serving Information
                  </h4>

                  <div className="rounded-xl bg-gray-50 p-3">
                    <InfoRow
                      label="Serving Size"
                      value={`${composition.serving_size.quantity} ${composition.serving_size.unit}`}
                    />

                    {composition.serving_size.approx_weight && (
                      <InfoRow
                        label="Approx. Weight"
                        value={composition.serving_size.approx_weight}
                      />
                    )}

                    <InfoRow
                      label="Servings"
                      value={composition.servings_per_container}
                    />
                  </div>
                </div>
              )}

              {/* INGREDIENT TABLE */}
              {composition?.ingredients?.length > 0 && (
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Active Ingredients
                  </h4>

                  <div className="overflow-hidden rounded-xl border border-gray-200">
                    <div className="grid grid-cols-[1fr_auto] gap-3 bg-gray-50 px-3 py-2.5 text-xs font-semibold text-gray-500">
                      <span>Ingredient</span>
                      <span>Quantity</span>
                    </div>

                    {composition.ingredients.map(
                      (
                        ingredient: {
                          name: string;
                          rda_percent?: number | null;
                          quantity_per_tablet?: string;
                          quantity_per_capsule?: string;
                          quantity?: string;
                        },
                        index: number
                      ) => (
                        <div
                          key={`${ingredient.name}-${index}`}
                          className="grid grid-cols-[1fr_auto] gap-3 border-t border-gray-100 px-3 py-3"
                        >
                          <div>
                            <p className="text-sm font-medium text-gray-800">
                              {ingredient.name}
                            </p>

                            {ingredient.rda_percent !== null &&
                              ingredient.rda_percent !== undefined && (
                                <p className="mt-0.5 text-xs text-gray-400">
                                  {ingredient.rda_percent}% RDA
                                </p>
                              )}
                          </div>

                          <span className="text-right text-sm font-semibold text-gray-700">
                            {ingredient.quantity_per_tablet ||
                              ingredient.quantity_per_capsule ||
                              ingredient.quantity}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Total probiotic count */}
              {composition?.total_probiotic_count && (
                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                    Total Probiotic Count
                  </p>
                  <p className="mt-1 text-lg font-semibold text-emerald-900">
                    {composition.total_probiotic_count}
                  </p>
                </div>
              )}

              {/* Other ingredients */}
              {composition?.other_ingredients?.length > 0 && (
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Other Ingredients
                  </h4>

                  <BulletList
                    items={composition.other_ingredients}
                    icon={Check}
                  />
                </div>
              )}

              {/* Additional functional ingredients */}
              {composition?.additional_functional_ingredients?.length > 0 && (
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Additional Functional Ingredients
                  </h4>

                  <div className="space-y-2">
                    {composition.additional_functional_ingredients.map(
                      (
                        ingredient: {
                          name: string;
                          quantity_per_capsule?: string;
                          quantity?: string;
                        },
                        index: number
                      ) => (
                        <div
                          key={`${ingredient.name}-${index}`}
                          className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2.5"
                        >
                          <span className="text-sm text-gray-700">
                            {ingredient.name}
                          </span>

                          <span className="text-sm font-semibold text-gray-900">
                            {ingredient.quantity_per_capsule ||
                              ingredient.quantity}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {composition?.strain_platform && (
                <InfoRow
                  label="Strain Platform"
                  value={composition.strain_platform}
                />
              )}

              {composition?.capsule && (
                <InfoRow label="Capsule" value={composition.capsule} />
              )}

              {composition?.rda_note && (
                <p className="text-xs leading-5 text-gray-400">
                  {composition.rda_note}
                </p>
              )}
            </div>
          </Accordion>

          {/* =================================================
              3. KEY HIGHLIGHTS
          ================================================= */}

          <Accordion
            title="Key Highlights"
            icon={Sparkles}
            section="text-amber-600"
          >
            <BulletList items={product.key_highlights} />
          </Accordion>

          {/* =================================================
              4. INTENDED USES
          ================================================= */}

          <Accordion
            title="Uses & Areas of Support"
            section="text-cyan-600"
            icon={HeartPulse}
          >
            <div className="space-y-3">
              {product.intended_uses?.map(
                (
                  item: { area: string; description: string },
                  index: number
                ) => (
                  <div
                    key={`${item.area}-${index}`}
                    className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                  >
                    <h4 className="text-sm font-semibold text-gray-900">
                      {item.area}
                    </h4>

                    <p className="mt-1.5 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </Accordion>

          {/* =================================================
              5. BENEFITS
          ================================================= */}

          <Accordion
            title="Key Benefits"
            icon={ShieldCheck}
            section="text-indigo-600"
          >
            <BulletList items={product.key_benefits} />
          </Accordion>

          {/* =================================================
              6. WHY THIS COMBINATION
          ================================================= */}

          <Accordion
            title="Why This Combination?"
            section="text-green-600"
            icon={FlaskConical}
          >
            <div className="space-y-4">
              {product.why_this_combination?.map(
                (
                  item: {
                    ingredient: string;
                    quantity?: string;
                    description: string;
                  },
                  index: number
                ) => (
                  <div
                    key={`${item.ingredient}-${index}`}
                    className="rounded-xl border border-gray-100 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-sm font-semibold text-gray-900">
                        {item.ingredient}
                      </h4>

                      {item.quantity && (
                        <span className="shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600">
                          {item.quantity}
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </Accordion>

          {/* =================================================
              7. HOW IT WORKS
          ================================================= */}

          <Accordion
            title="How It Works"
            section="text-gray-600"
            icon={ListChecks}
          >
            <div className="space-y-4">
              {product.how_it_works?.description && (
                <p className="text-sm leading-6 text-gray-600">
                  {product.how_it_works.description}
                </p>
              )}

              {product.how_it_works?.steps?.map(
                (
                  step: {
                    stage: string;
                    title: string;
                    ingredients?: string[];
                  },
                  index: number
                ) => (
                  <div
                    key={`${step.stage}-${index}`}
                    className="relative flex gap-3"
                  >
                    {/* connector */}
                    {index < product.how_it_works.steps.length - 1 && (
                      <div className="absolute left-[15px] top-8 h-[calc(100%+16px)] w-px bg-gray-200" />
                    )}

                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                      {step.stage}
                    </div>

                    <div className="min-w-0 flex-1 pb-2">
                      <h4 className="text-sm font-semibold text-gray-900">
                        {step.title}
                      </h4>

                      {step.ingredients && step.ingredients.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {step.ingredients.map((ingredient, index: number) => (
                            <Tag key={`${ingredient}-${index}`}>
                              {ingredient}
                            </Tag>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}

              {product.how_it_works?.pathway && (
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Pathway
                  </p>

                  <p className="mt-2 text-sm font-medium leading-6 text-gray-800">
                    {product.how_it_works.pathway}
                  </p>
                </div>
              )}

              {product.how_it_works?.outcome && (
                <div className="rounded-xl bg-gray-900 p-4 text-white">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Formulation Outcome
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {product.how_it_works.outcome}
                  </p>
                </div>
              )}

              {product.how_it_works?.disclaimer && (
                <p className="text-xs leading-5 text-gray-400">
                  {product.how_it_works.disclaimer}
                </p>
              )}
            </div>
          </Accordion>

          {/* =================================================
              8. SCIENTIFIC RATIONALE
          ================================================= */}

          <Accordion
            title="Scientific Rationale"
            section="text-orange-600"
            icon={FlaskConical}
          >
            {product.scientific_rationale && (
              <p className="text-sm leading-7 text-gray-600">
                {product.scientific_rationale}
              </p>
            )}
          </Accordion>

          {/* =================================================
              9. WHO CAN USE IT
          ================================================= */}

          <Accordion
            title="Who Can Use It?"
            section="text-indigo-600"
            icon={Users}
          >
            <div className="space-y-4">
              <InfoRow
                label="Target Group"
                value={product.who_can_use_it?.target_group}
              />

              {product.who_can_use_it?.suitable_for?.length > 0 && (
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Suitable For
                  </h4>

                  <BulletList items={product.who_can_use_it.suitable_for} />
                </div>
              )}

              {product.who_can_use_it?.positioning && (
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm leading-6 text-gray-600">
                    {product.who_can_use_it.positioning}
                  </p>
                </div>
              )}

              {product.who_can_use_it?.special_note && (
                <div className="rounded-xl bg-amber-50 p-4">
                  <div className="flex gap-2">
                    <AlertTriangle
                      size={16}
                      className="mt-0.5 shrink-0 text-amber-600"
                    />

                    <p className="text-sm leading-6 text-amber-800">
                      {product.who_can_use_it.special_note}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Accordion>

          {/* =================================================
              10. WHEN TO USE
          ================================================= */}

          <Accordion title="When to Use" section="text-green-600" icon={Clock}>
            <div className="space-y-4">
              {product.when_to_use?.recommended_situations?.length > 0 && (
                <BulletList
                  items={product.when_to_use.recommended_situations}
                />
              )}

              {product.when_to_use?.label_duration && (
                <InfoRow
                  label="Duration"
                  value={product.when_to_use.label_duration}
                />
              )}

              {product.when_to_use?.positioning && (
                <p className="text-sm leading-6 text-gray-600">
                  {product.when_to_use.positioning}
                </p>
              )}

              {product.when_to_use?.special_note && (
                <div className="rounded-xl bg-amber-50 p-4">
                  <p className="text-sm leading-6 text-amber-800">
                    {product.when_to_use.special_note}
                  </p>
                </div>
              )}
            </div>
          </Accordion>

          {/* =================================================
              11. RECOMMENDED USAGE
          ================================================= */}

          <Accordion
            title="Recommended Usage"
            section="text-blue-600"
            icon={Pill}
          >
            <div className="space-y-1">
              <InfoRow
                label="Dosage"
                value={product.recommended_usage?.dosage}
              />

              <InfoRow
                label="Timing"
                value={product.recommended_usage?.timing}
              />

              <InfoRow
                label="Administration"
                value={product.recommended_usage?.administration}
              />

              <InfoRow
                label="Alternative"
                value={product.recommended_usage?.alternative}
              />

              <InfoRow
                label="Duration"
                value={product.recommended_usage?.recommended_duration}
              />

              <InfoRow
                label="Maximum"
                value={product.recommended_usage?.maximum_usage}
              />

              {product.recommended_usage?.capsule_instruction && (
                <div className="mt-3 rounded-xl bg-gray-50 p-4">
                  <p className="text-sm leading-6 text-gray-600">
                    {product.recommended_usage.capsule_instruction}
                  </p>
                </div>
              )}
            </div>
          </Accordion>

          {/* =================================================
              12. CAUTIONS
          ================================================= */}

          <Accordion
            title="Precautions & Cautions"
            section="text-red-600"
            icon={AlertTriangle}
          >
            <div className="space-y-4">
              {product.cautions?.consult_healthcare_professional_if?.length >
                0 && (
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Consult a Healthcare Professional If
                  </h4>

                  <BulletList
                    items={product.cautions.consult_healthcare_professional_if}
                    icon={AlertTriangle}
                  />
                </div>
              )}

              {product.cautions?.general_precautions?.length > 0 && (
                <BulletList
                  items={product.cautions.general_precautions}
                  icon={Info}
                />
              )}

              {product.cautions?.special_attention && (
                <div className="rounded-xl bg-amber-50 p-4">
                  <p className="text-sm leading-6 text-amber-800">
                    {product.cautions.special_attention}
                  </p>
                </div>
              )}

              {product.cautions?.medical_management_note && (
                <div className="rounded-xl bg-red-50 p-4">
                  <p className="text-sm leading-6 text-red-800">
                    {product.cautions.medical_management_note}
                  </p>
                </div>
              )}
            </div>
          </Accordion>

          {/* =================================================
              13. POSSIBLE SIDE EFFECTS
          ================================================= */}

          <Accordion
            title="Possible Side Effects"
            section="text-slate-600"
            icon={HeartPulse}
          >
            <div className="space-y-4">
              {product.possible_side_effects?.note && (
                <p className="text-sm leading-6 text-gray-600">
                  {product.possible_side_effects.note}
                </p>
              )}

              <BulletList
                items={product.possible_side_effects?.possible_effects}
              />

              {product.possible_side_effects?.action && (
                <div className="rounded-xl bg-amber-50 p-4">
                  <p className="text-sm leading-6 text-amber-800">
                    {product.possible_side_effects.action}
                  </p>
                </div>
              )}
            </div>
          </Accordion>

          {/* =================================================
              14. DO'S & DON'TS
          ================================================= */}

          <Accordion
            title="Do's & Don'ts"
            section="text-blue-600"
            icon={ClipboardList}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* DOS */}
              <div className="rounded-xl bg-emerald-50 p-4">
                <h4 className="mb-3 text-sm font-semibold text-emerald-800">
                  Do
                </h4>

                <BulletList items={product.dos_and_donts?.dos} />
              </div>

              {/* DON'TS */}
              <div className="rounded-xl bg-red-50 p-4">
                <h4 className="mb-3 text-sm font-semibold text-red-800">
                  Don't
                </h4>

                <div className="space-y-2.5">
                  {product.dos_and_donts?.donts?.map(
                    (item: string, index: number) => (
                      <div
                        key={`${item}-${index}`}
                        className="flex items-start gap-2.5 text-sm leading-6 text-red-700"
                      >
                        <span className="mt-1 shrink-0 text-red-500">×</span>
                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </Accordion>

          {/* =================================================
              15. STORAGE
          ================================================= */}

          <Accordion
            title="Storage & General Information"
            section="text-gray-600"
            icon={Thermometer}
          >
            <div className="space-y-3">
              {product.storage?.temperature && (
                <InfoRow
                  label="Temperature"
                  value={product.storage.temperature}
                />
              )}

              {product.storage?.conditions?.length > 0 && (
                <BulletList items={product.storage.conditions} />
              )}

              {product.storage?.product_information?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.storage.product_information.map(
                    (item: string, index: number) => (
                      <Tag key={`${item}-${index}`}>{item}</Tag>
                    )
                  )}
                </div>
              )}

              {product.storage?.best_before && (
                <InfoRow
                  label="Best Before"
                  value={product.storage.best_before}
                />
              )}
            </div>
          </Accordion>

          {/* =================================================
              16. CLAIM GUIDELINES
          ================================================= */}

          {product.claim_guidelines && (
            <Accordion
              title="Claim & Regulatory Guidelines"
              section="text-amber-600"
              icon={ShieldCheck}
            >
              <div className="space-y-5">
                {product.claim_guidelines.preferred_language && (
                  <div className="rounded-xl bg-emerald-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                      Preferred Language
                    </p>

                    <p className="mt-1.5 text-sm leading-6 text-emerald-900">
                      {product.claim_guidelines.preferred_language}
                    </p>
                  </div>
                )}

                {product.claim_guidelines.avoid_claims?.length > 0 && (
                  <div>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Avoid Claims
                    </h4>

                    <BulletList
                      items={product.claim_guidelines.avoid_claims}
                      icon={AlertTriangle}
                    />
                  </div>
                )}

                {product.claim_guidelines.regulatory_note && (
                  <p className="text-xs leading-6 text-gray-500">
                    {product.claim_guidelines.regulatory_note}
                  </p>
                )}
              </div>
            </Accordion>
          )}

          {/* =================================================
              17. FACT BOX
          ================================================= */}

          {product.fact_box && (
            <Accordion
              title="Product Fact Box"
              section="text-blue-600"
              icon={Package}
            >
              <div className="overflow-hidden rounded-xl border border-gray-200">
                {Object.entries(product.fact_box).map(([key, value], index) => (
                  <div
                    key={key}
                    className={`
                        grid
                        grid-cols-[minmax(120px,0.8fr)_minmax(0,1.2fr)]
                        gap-4
                        px-3
                        py-2.5
                        ${
                          index !== Object.entries(product.fact_box).length - 1
                            ? "border-b border-gray-100"
                            : ""
                        }
                      `}
                  >
                    <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                      {key.replaceAll("_", " ")}
                    </span>

                    <span className="text-sm font-medium text-gray-700">
                      {Array.isArray(value) ? value.join(", ") : String(value)}
                    </span>
                  </div>
                ))}
              </div>
            </Accordion>
          )}

          {/* =================================================
              18. MANUFACTURING & MARKETING
          ================================================= */}

          {product.manufacturing_and_marketing && (
            <Accordion
              title="Manufacturing & Marketing"
              section="text-yellow-600"
              icon={Building2}
            >
              <div className="space-y-5">
                {/* Marketed By */}
                {product.manufacturing_and_marketing.marketed_by && (
                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Marketed By
                    </h4>

                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-sm font-semibold text-gray-900">
                        {
                          product.manufacturing_and_marketing.marketed_by
                            .company
                        }
                      </p>

                      <p className="mt-2 whitespace-pre-line text-sm leading-6 text-gray-600">
                        {
                          product.manufacturing_and_marketing.marketed_by
                            .address
                        }
                      </p>

                      {product.manufacturing_and_marketing.marketed_by
                        .customer_care && (
                        <p className="mt-3 text-sm text-gray-600">
                          <span className="font-medium">Customer Care:</span>{" "}
                          {
                            product.manufacturing_and_marketing.marketed_by
                              .customer_care
                          }
                        </p>
                      )}

                      {product.manufacturing_and_marketing.marketed_by
                        .email && (
                        <p className="mt-1 text-sm text-gray-600">
                          <span className="font-medium">Email:</span>{" "}
                          {
                            product.manufacturing_and_marketing.marketed_by
                              .email
                          }
                        </p>
                      )}

                      {product.manufacturing_and_marketing.marketed_by
                        .website && (
                        <p className="mt-1 text-sm text-gray-600">
                          <span className="font-medium">Website:</span>{" "}
                          {
                            product.manufacturing_and_marketing.marketed_by
                              .website
                          }
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Manufactured By */}
                {product.manufacturing_and_marketing.manufactured_by && (
                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Manufactured By
                    </h4>

                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-sm font-semibold text-gray-900">
                        {
                          product.manufacturing_and_marketing.manufactured_by
                            .company
                        }
                      </p>

                      {product.manufacturing_and_marketing.manufactured_by
                        .address && (
                        <p className="mt-2 whitespace-pre-line text-sm leading-6 text-gray-600">
                          {
                            product.manufacturing_and_marketing.manufactured_by
                              .address
                          }
                        </p>
                      )}

                      {product.manufacturing_and_marketing.manufactured_by
                        .fssai_licence_number && (
                        <p className="mt-3 text-sm text-gray-600">
                          <span className="font-medium">FSSAI Licence:</span>{" "}
                          {
                            product.manufacturing_and_marketing.manufactured_by
                              .fssai_licence_number
                          }
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {product.manufacturing_and_marketing.fssai_licence_number && (
                  <InfoRow
                    label="FSSAI Licence"
                    value={
                      product.manufacturing_and_marketing.fssai_licence_number
                    }
                  />
                )}
              </div>
            </Accordion>
          )}

          {/* =================================================
              19. SHORT WEBSITE LISTING
          ================================================= */}

          {product.short_website_listing && (
            <Accordion
              title="Short Website Listing"
              section="text-pink-600"
              icon={Sparkles}
            >
              <div className="rounded-xl bg-gray-900 p-5">
                <p className="text-sm leading-7 text-gray-200">
                  {product.short_website_listing}
                </p>
              </div>
            </Accordion>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModalRightSide;
