import ChatWidget from "./components/chatbot/chat-widget";
import { ThemeProvider } from "./components/chatbot/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="easydiymurphybed-theme">
      <ChatWidget />
    </ThemeProvider>
  );
}

export default App;
