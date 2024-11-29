import axios from "axios";

// Axios 기본 인스턴스 생성
const apiClient = axios.create({
  baseURL: "https://musicpractice-f638a0822fee.herokuapp.com", // 기본 API URL
  timeout: 5000, // 요청 타임아웃 설정 (ms)
  headers: {
    "Content-Type": "application/json", // 요청 헤더 기본 설정
    Authorization: `Bearer YOUR_ACCESS_TOKEN`, // 토큰 인증이 필요한 경우
  },
});

// 요청 인터셉터 설정
apiClient.interceptors.request.use(
  (config) => {
    // 요청을 보내기 전에 작업
    console.log("Request Sent:", config);
    return config;
  },
  (error) => {
    // 요청 에러 처리
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터 설정
apiClient.interceptors.response.use(
  (response) => {
    // 응답 데이터를 가공하거나 로깅
    console.log("Response Received:", response);
    return response.data; // 필요한 데이터만 반환
  },
  (error) => {
    // 응답 에러 처리
    console.error("Response Error:", error);
    return Promise.reject(error);
  }
);

// API 요청 함수 템플릿
export const api = {
  // GET 요청
  get: async (endpoint, params = {}) => {
    try {
      const response = await apiClient.get(endpoint, { params });
      return response;
    } catch (error) {
      console.error("GET Request Error:", error);
      throw error;
    }
  },

  // POST 요청
  post: async (endpoint, data = {}) => {
    try {
      const response = await apiClient.post(endpoint, data);
      return response;
    } catch (error) {
      console.error("POST Request Error:", error);
      throw error;
    }
  },

  // PUT 요청
  put: async (endpoint, data = {}) => {
    try {
      const response = await apiClient.put(endpoint, data);
      return response;
    } catch (error) {
      console.error("PUT Request Error:", error);
      throw error;
    }
  },

  // DELETE 요청
  delete: async (endpoint, params = {}) => {
    try {
      const response = await apiClient.delete(endpoint, { params });
      return response;
    } catch (error) {
      console.error("DELETE Request Error:", error);
      throw error;
    }
  },
};
