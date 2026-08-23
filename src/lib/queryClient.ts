import { QueryClient, QueryFunction } from "@tanstack/react-query";

/** Static-site stub — forms no longer hit Express. */
export async function apiRequest(
  _method: string,
  _url: string,
  data?: unknown,
): Promise<Response> {
  return new Response(JSON.stringify({ ok: true, data: data ?? null }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

type UnauthorizedBehavior = "returnNull" | "throw";

export function getQueryFn<T>(options: {
  on401: UnauthorizedBehavior;
}): QueryFunction<T> {
  void options;
  return async () => {
    return null as T;
  };
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
