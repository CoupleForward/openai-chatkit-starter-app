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
      "Help me map a recent conflict with my partner using WHEN ↓ THEN ↓ THIS ↓ PRIMARY EMOTIONS ↓ UNMET CORE NEEDS",
  },
  {
    icon: "profile-card",
    label: "Explore my primary emotions",
    prompt:
      "Help me understand how my primary emotions and nervous system wiring might be showing up in our fights.",
  },
  {
    icon: "notebook-pencil",
    label: "Need to preapre for a repair conversation",
    prompt:
      "Help me name each of my survival strategies and how they keep our cycle going.",
  },
  {
    icon: "lightbulb",
    label: "I need help understanding myself in this conlfict",
    prompt:
      "Given our pattern, help me understand my deeper layers.",
  },
];

export const PLACEHOLDER_INPUT =
  "Help me map a conflict or pattern using MApping My Story agent.";

export const GREETING =
  "Think of this as a trail guide, not a judge. Where do you want to start?";

// Couple Forward theme ↓
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      // darker background for dark mode, softer for light
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -5 : -2,
    },
    accent: {
      // Couple Forward gold
      primary: "#D4AF37",
      level: 2,
    },
  },
  radius: "soft",
  // you can add more supported theme options later if needed
});



