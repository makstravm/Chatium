export class HTTPService {
  static async request<T, V>(
    url: string,
    requestMethod: string,
    requestBody?: V
  ): Promise<T> {
    const response = await fetch(url, {
      method: requestMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    }

    throw data;
  }

  static async get<T>(url: string) {
    const resolved = await this.request<T, never>(url, "GET");

    return resolved;
  }

  static async post<T, V>(url: string, requestBody: V) {
    const resolved = await this.request<T, V>(url, "POST", requestBody);

    return resolved;
  }

  static async put<T>(url: string, requestBody: T) {
    const resolved = await this.request<T, T>(url, "PUT", requestBody);

    return resolved;
  }
}
