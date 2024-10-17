import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SocketContextProvider } from './context/SocketContext';
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App'
import './style/index.css'


const htmlRoot = document.getElementById('root');
const reactRoot = createRoot(htmlRoot);

const queryClient = new QueryClient();


reactRoot.render(
  <StrictMode>
    <BrowserRouter>

      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <SocketContextProvider>

            <App />

            <ReactQueryDevtools initialIsOpen={false} />

          </SocketContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>

    </BrowserRouter>
  </StrictMode>,
)
