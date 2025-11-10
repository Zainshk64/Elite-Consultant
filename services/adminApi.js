// services/adminApi.js

const BASE_URL = "http://localhost:5000/api";

const handleResponse = async (response) => {
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
};

export const getToken = () => {
  if (typeof window === "undefined") return null;
  let token = localStorage.getItem("adminToken") || null;
  console.log(token);
  return token;
};
// Auth APIs
export const authAPI = {
  login: async (email, password) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return handleResponse(response);
  },

  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("adminToken");
    }
  },
};

// Country APIs
// services/adminApi.js
export const countryAPI = {
  getAll: async () => {
    const response = await fetch(`${BASE_URL}/countries`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return handleResponse(response);
  },

  create: async (formData, isMultipart = false) => {
    const headers = { Authorization: `Bearer ${getToken()}` };
    if (!isMultipart) headers["Content-Type"] = "application/json";

    const response = await fetch(`${BASE_URL}/countries`, {
      method: "POST",
      headers,
      body: isMultipart ? formData : JSON.stringify(formData),
    });
    return handleResponse(response);
  },

  update: async (id, formData, isMultipart = false) => {
    const headers = { Authorization: `Bearer ${getToken()}` };
    if (!isMultipart) headers["Content-Type"] = "application/json";

    const response = await fetch(`${BASE_URL}/countries/${id}`, {
      method: "PUT",
      headers,
      body: isMultipart ? formData : JSON.stringify(formData),
    });
    return handleResponse(response);
  },

  delete: async (id) => {
    const response = await fetch(`${BASE_URL}/countries/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return handleResponse(response);
  },
};

// University APIs
export const universityAPI = {
  // Get all universities
  getAll: async () => {
    const response = await fetch(`${BASE_URL}/universities`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return handleResponse(response);
  },

  // Get single university
  getById: async (id) => {
    const response = await fetch(`${BASE_URL}/universities/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return handleResponse(response);
  },

  // Create university
  create: async (formData, isMultipart = false) => {
    const headers = { Authorization: `Bearer ${getToken()}` };
    if (!isMultipart) headers["Content-Type"] = "application/json";

    const res = await fetch(`${BASE_URL}/universities`, {
      method: "POST",
      headers,
      body: isMultipart ? formData : JSON.stringify(formData),
    });
    return handleResponse(res);
  },

  update: async (id, formData, isMultipart = false) => {
    const headers = { Authorization: `Bearer ${getToken()}` };
    if (!isMultipart) headers["Content-Type"] = "application/json";

    const res = await fetch(`${BASE_URL}/universities/${id}`, {
      method: "PUT",
      headers,
      body: isMultipart ? formData : JSON.stringify(formData),
    });
    return handleResponse(res);
  },

  // Delete university
  delete: async (id) => {
    const response = await fetch(`${BASE_URL}/universities/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return handleResponse(response);
  },
};
