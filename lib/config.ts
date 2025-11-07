import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// Couple Forward custom prompts ↓
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    icon: "compass",
    label: "Map a recent conflict with my partner",
    prompt:
      "Help me map a recent conflict with my partner using WHEN ↓ THEN ↓ THIS ↓ PRIMARY EMOTIONS ↓ UNMET CORE NEEDS.",
  },
  {
    icon: "profile-card",
    label: "Explore my primary emotions",
    prompt:
      "Help me understand how my primary emotions and nervous system wiring might be showing up in our fights.",
  },
  {
    icon: "notebook-pencil",
    label: "Need to prepare for a repair conversation",
    prompt:
      "Help me name each of my survival strategies and how they keep our cycle going.",
  },
  {
    icon: "lightbulb",
    label: "I need help understanding myself in this conflict",
    prompt: "Given our pattern, help me understand my deeper layers.",
  },
];

export const PLACEHOLDER_INPUT =
  "Help me map a conflict or pattern using Mapping My Story agent.";

export const GREETING =
  "Hello, think of me as a trail guide, not a judge. I've been programmed by Couple Forward to help you complain without blame! Where would you like to start?";

// Couple Forward theme ↓
export const getThemeConfig = (theme: ColorScheme): ThemeOption => {
  const isDark = theme === "dark";

  return {
    color: {
      grayscale: {
        // warm, charcoal-ish neutrals
        hue: 40,          // warm / amber base, kills blue
        tint: 4,
        shade: isDark ? -3 : -1,
      },
      accent: {
        primary: "#D4AF37",
        level: 2,
      },
      surface: {
        background: isDark ? "#15191C" : "#F5F1EB",
        foreground: isDark ? "#111418" : "#FFFFFF",
      },
    },
    radius: "round",
    density: "spacious",
  };
};


