'use client';

import { AlertCircle, CheckCircle, Info, X, Radio } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  message: string;
  actionText?: string;
  onAction?: () => void;
}

interface ToastContainerProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export default function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4 flex flex-col items-center gap-2 pointer-events-none select-none">
      {toasts.map((toast) => {
        const isError = toast.type === 'error' || toast.type === 'warning';
        const isSuccess = toast.type === 'success';

        return (
          <div
            key={toast.id}
            className={`w-full pointer-events-auto flex items-center justify-between p-3 rounded-lg border-2 shadow-[0_10px_25px_rgba(0,0,0,0.8)] font-mono text-xs transition-all animate-bounceIn ${
              isError
                ? 'bg-[#3b120c]/95 border-[#e8412b] text-[#ffd8d4]'
                : isSuccess
                ? 'bg-[#0e3318]/95 border-[#28a745] text-[#d4f7dc]'
                : 'bg-[#2b1f15]/95 border-[#d49b55] text-[#ffe8cb]'
            }`}
          >
            <div className="flex items-start gap-2.5 min-w-0 pr-2">
              {isError ? (
                <AlertCircle className="w-4 h-4 text-[#e8412b] shrink-0 mt-0.5 animate-pulse" />
              ) : isSuccess ? (
                <CheckCircle className="w-4 h-4 text-[#28a745] shrink-0 mt-0.5" />
              ) : (
                <Radio className="w-4 h-4 text-[#d49b55] shrink-0 mt-0.5 animate-pulse" />
              )}

              <div className="min-w-0">
                {toast.title && (
                  <p className="font-bold text-xs uppercase tracking-wider mb-0.5 truncate">
                    {toast.title}
                  </p>
                )}
                <p className="text-[11px] leading-snug opacity-95">
                  {toast.message}
                </p>

                {toast.actionText && toast.onAction && (
                  <button
                    onClick={toast.onAction}
                    className="mt-1.5 px-2 py-0.5 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded text-[10px] uppercase tracking-wider transition-colors"
                  >
                    {toast.actionText}
                  </button>
                )}
              </div>
            </div>

            <button
              onClick={() => onDismiss(toast.id)}
              className="p-1 hover:bg-white/10 rounded transition-colors text-slate-300 hover:text-white shrink-0"
              aria-label="Close Toast"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
