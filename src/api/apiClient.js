import axios from "axios";

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: "https://musicpractice-f638a0822fee.herokuapp.com", // API 기본 URL
  timeout: 5000, // 요청 타임아웃
  headers: {
    "Content-Type": "application/json",
  },
});

// 토큰 저장소 (예: 로그인 성공 시 설정)
let authToken = null;

// 토큰 설정 함수
export const setAuthToken = (token) => {
  authToken = token;
};

// 요청 인터셉터: 요청마다 토큰 추가
apiClient.interceptors.request.use(
  (config) => {
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터: 에러 처리
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Response Error:", error);
    return Promise.reject(error);
  }
);

// API 요청 함수
export const api = {
  // GET 요청
  get: async (path, params = {}) => {
    try {
      const response = await apiClient.get(path, { params });
      return response.data;
    } catch (error) {
      console.error("GET Request Error:", error);
      throw error;
    }
  },

  // POST 요청
  post: async (endpoint, data = {}) => {
    try {
      const response = await apiClient.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error("POST Request Error:", error);
      throw error;
    }
  },

  // PUT 요청
  put: async (endpoint, data = {}) => {
    try {
      const response = await apiClient.put(endpoint, data);
      return response.data;
    } catch (error) {
      console.error("PUT Request Error:", error);
      throw error;
    }
  },

  // DELETE 요청
  delete: async (endpoint, params = {}) => {
    try {
      const response = await apiClient.delete(endpoint, { params });
      return response.data;
    } catch (error) {
      console.error("DELETE Request Error:", error);
      throw error;
    }
  },
};
