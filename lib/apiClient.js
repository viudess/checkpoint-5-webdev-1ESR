import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const apiClient = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
    language: 'pt-BR', 
  },
});

export default apiClient;