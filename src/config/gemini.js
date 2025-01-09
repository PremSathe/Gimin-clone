const {
  GoogleGenerativeAI,
  // eslint-disable-next-line no-unused-vars
  HarmCategory,
  // eslint-disable-next-line no-undef
} = require("@google/generative-ai");

const API_KEY = "AIzaSyDrML7qE8OP4lYU04qsbOCKIIj19555vX0";
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());
}

export default run
