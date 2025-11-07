import React from "react";
import { ChatKit } from "@openai/chatkit-react";
import ErrorOverlay from "./ErrorOverlay";

type ChatKitPanelProps = {
  chatkit: any;
  widgetInstanceKey: string;
  blockingError?: any;
};

export function ChatKitPanel({
  chatkit,
  widgetInstanceKey,
  blockingError,
}: ChatKitPanelProps) {
  const isInitializingSession = false;

  return (
    <div className="flex w-full justify-center bg-[#05070A] px-4 py-10">
      <div className="relative flex h-[80vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-slate-800 bg-[#15191C] shadow-sm">
        {/* Header: compass icon + title + subtext */}
        <div className="flex items-center gap-4 border-b border-slate-800 px-6 py-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37] bg-[#15191C]">
            <span className="text-xl" aria-hidden="true">
              🧭
            </span>
            <span className="sr-only">Compass icon</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-50">
              Mapping My Story
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Mapping My Story helps you prepare for an intentional conversation
              with your partner using Couple Forward's proprietary WHEN | THEN | THIS
              approach.
            </p>
          </div>
        </div>

        {/* Chat area */}
        <div className="relative flex-1">
          <ChatKit
            key={widgetInstanceKey}
            control={chatkit.control}
            className="block h-full w-full bg-[#15191C] text-[#EDEDED]"
          />
        </div>

        {/* Error overlay */}
        <ErrorOverlay
          error={blockingError}
          fallbackMessage={
            isInitializingSession
              ? "Initializing your Mapping My Story session…"
              : "Something went wrong while loading the chat."
          }
        />
      </div>
    </div>
  );
}

