import { useEffect, useState } from "react";

type UseActiveSectionOpts = {
  ids: string[];
  rootMargin?: string;  // compensate for sticky header height
  threshold?: number | number[];
};

export default function useActiveSection({
  ids,
  rootMargin = "-80px 0px -60% 0px",
  threshold = [0.2, 0.4, 0.6, 0.8],
}: UseActiveSectionOpts) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const els = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the most visible section
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio - a.intersectionRatio));
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        } else {
          // if nothing is intersecting, pick the first section above the fold
          const topMost = entries
            .slice()
            .sort((a, b) => (a.boundingClientRect.top - b.boundingClientRect.top))[0];
          if (topMost?.target?.id) setActiveId(topMost.target.id);
        }
      },
      { root: null, rootMargin, threshold }
    );

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, rootMargin, threshold]);

  return activeId;
}
