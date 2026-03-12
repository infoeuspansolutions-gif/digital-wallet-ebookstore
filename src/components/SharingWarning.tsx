import { ShieldAlert, X } from "lucide-react";
import { useState } from "react";

const SharingWarning = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative mx-auto mb-6 max-w-4xl rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3">
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="flex items-start gap-3 pr-6">
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
        <div>
          <p className="font-display text-sm font-semibold text-foreground">
            Do Not Share This Link
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            This book is licensed to you only. If you share this link, your access will be revoked
            and you will permanently lose the ability to read this book. Thank you for respecting the
            author's work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SharingWarning;
