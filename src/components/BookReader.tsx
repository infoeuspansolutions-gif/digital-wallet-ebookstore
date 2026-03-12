import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, BookOpen, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const TOTAL_PAGES = 50;

const BookReader = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(1);

  const goToPage = useCallback((page: number) => {
    if (page >= 1 && page <= TOTAL_PAGES) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") goToPage(currentPage + 1);
      if (e.key === "ArrowLeft") goToPage(currentPage - 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, goToPage]);

  // Disable right-click on images
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.tagName === "IMG") {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", handler);
    return () => document.removeEventListener("contextmenu", handler);
  }, []);

  return (
    <div className="min-h-screen green-gradient">
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="font-display text-sm font-semibold text-foreground sm:text-base">
              Digital Wallet
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setZoom(Math.max(0.5, zoom - 0.25))}
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="min-w-[3rem] text-center text-xs text-muted-foreground">
              {Math.round(zoom * 100)}%
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setZoom(Math.min(2, zoom + 0.25))}
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>

          <span className="text-xs text-muted-foreground">
            Page {currentPage} of {TOTAL_PAGES}
          </span>
        </div>
      </div>

      {/* Promo banner */}
      <div className="mx-auto max-w-4xl px-4 pt-6">
        <div className="flex flex-col items-center gap-2 rounded-xl border border-primary/30 bg-card/80 px-6 py-4 text-center shadow-gold backdrop-blur-sm sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-sm font-bold text-primary sm:text-base">
              📖 Digital Wallet — Now Available Online!
            </p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Soft Copy <span className="font-bold text-primary">KSh 1,500</span> — Call or M-Pesa to{" "}
              <span className="font-semibold text-foreground">0769722940</span> and get it within a short time!
            </p>
          </div>
          <a href="tel:0769722940" className="shrink-0">
            <button className="gold-gradient inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-primary-foreground shadow-gold hover:opacity-90">
              <Phone className="h-4 w-4" />
              Call Now
            </button>
          </a>
        </div>
      </div>

      {/* Page display */}
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div
          className="mx-auto overflow-hidden rounded-lg shadow-card transition-transform duration-300"
          style={{ transform: `scale(${zoom})`, transformOrigin: "top center" }}
        >
          <img
            src={`/book/page_${currentPage}.jpg`}
            alt={`Page ${currentPage} of Digital Wallet`}
            className="no-select w-full"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="sticky bottom-0 z-50 border-t border-border bg-card/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Button
            variant="outline"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="gap-1 border-border text-foreground hover:bg-accent"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">Go to</span>
            <input
              type="number"
              min={1}
              max={TOTAL_PAGES}
              value={currentPage}
              onChange={(e) => {
                const v = parseInt(e.target.value);
                if (v >= 1 && v <= TOTAL_PAGES) setCurrentPage(v);
              }}
              className="w-14 rounded-md border border-border bg-secondary px-2 py-1 text-center text-sm text-foreground outline-none focus:ring-1 focus:ring-ring"
            />
          </div>

          <Button
            variant="outline"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === TOTAL_PAGES}
            className="gap-1 border-border text-foreground hover:bg-accent"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookReader;
