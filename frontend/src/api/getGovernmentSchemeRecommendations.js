// Mocked `genkit` functions
const genkit = () => ({
  definePrompt: ({ name, input, output, prompt }) => async (data) => {
    console.log(`Executing prompt: ${name}`);
    return { output: { schemes: [] } }; // Returning mock empty scheme list
  },
  defineFlow: ({ name, inputSchema, outputSchema }, handler) => async (data) => {
    return handler(data);
  },
});

const googleAI = () => {
  console.log("Mock Google AI Plugin Loaded");
  return {};
};

// Export the mock AI object
export const ai = genkit({ plugins: [googleAI()], model: "googleai/gemini-2.0-flash" });

// Schema Definitions
const GovernmentSchemeRecommendationInputSchema = z.object({
  businessType: z.string(),
  location: z.string(),
});

const GovernmentSchemeRecommendationOutputSchema = z.object({
  schemes: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
      eligibilityCriteria: z.string(),
      benefits: z.string(),
      howToApply: z.string(),
    })
  ),
});

// AI Prompt Definition
const prompt = ai.definePrompt({
  name: "governmentSchemeRecommendationPrompt",
  input: { schema: GovernmentSchemeRecommendationInputSchema },
  output: { schema: GovernmentSchemeRecommendationOutputSchema },
  prompt: `
    You are an AI assistant specialized in recommending relevant government schemes for village entrepreneurs in India.

    Based on the entrepreneur's business type ({{{businessType}}}) and location ({{{location}}}), recommend the most relevant government schemes that can help them with financial support and business growth.

    Provide the scheme name, a brief description, eligibility criteria, benefits, and instructions on how to apply for each recommended scheme.
    Return a JSON object.
  `,
});

// Flow Wrapper
const governmentSchemeRecommendationFlow = ai.defineFlow(
  {
    name: "governmentSchemeRecommendationFlow",
    inputSchema: GovernmentSchemeRecommendationInputSchema,
    outputSchema: GovernmentSchemeRecommendationOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output;
  }
);

// Exported Function
async function getGovernmentSchemeRecommendations(input) {
  return await governmentSchemeRecommendationFlow(input);
}

module.exports = {
  getGovernmentSchemeRecommendations,
};