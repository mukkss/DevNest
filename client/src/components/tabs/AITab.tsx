import { DeepChat } from 'deep-chat-react';
import PromptPage from '../PromptPage';

const AITab = () => {
  return (
    <div className="flex max-h-full min-h-[400px] w-full flex-col p-2 bg-[#0A1B2F]">
      <h1 className="tab-title">LLMWare Chat</h1>
      <div className="flex-grow flex flex-col overflow-hidden rounded-lg shadow-md">
        <div className="flex-grow flex flex-col ">
          <PromptPage />
        </div>
      </div>
    </div>
  );
};

export default AITab;
