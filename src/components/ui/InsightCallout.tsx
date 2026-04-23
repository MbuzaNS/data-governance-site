import { ReactNode } from "react";
import { Quote, ArrowRight } from "lucide-react";

type InsightCalloutProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  tone?: "default" | "strong";
};

export default function InsightCallout({
  eyebrow = "Key Insight",
  title,
  children,
  tone = "default",
}: InsightCalloutProps) {
  const strong = tone === "strong";

  return (
    <section
      className={[
        "my-10 rounded-2xl border p-6 md:p-8 shadow-sm",
        "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950",
        strong ? "border-white/20" : "border-white/10",
      ].join(" ")}
    >
      <div className="flex items-start gap-4">
        <div
          className={[
            "mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
            strong
              ? "bg-white/10 text-white"
              : "bg-white/10 text-slate-200",
          ].join(" ")}
        >
          <Quote className="h-5 w-5" />
        </div>

        <div className="w-full">
          <p
            className={[
              "mb-2 text-xs font-semibold uppercase tracking-[0.2em]",
              strong ? "text-white" : "text-slate-300",
            ].join(" ")}
          >
            {eyebrow}
          </p>

          <h3 className="mb-3 text-xl font-semibold leading-tight text-white md:text-2xl">
            {title}
          </h3>

          <div className="text-base leading-8 text-slate-300 [&_strong]:text-white">
            {children}
          </div>

          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-400">
            <ArrowRight className="h-4 w-4" />
            <span>Critical point</span>
          </div>
        </div>
      </div>
    </section>
  );
}
