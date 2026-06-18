/**
 * API client helper.
 * ------------------
 * Wraps `fetch` so every request to /api/* automatically carries the
 * authenticated user's Bearer token (read from localStorage where the
 * Zustand auth-store persists it).
 *
 * Usage:
 *   import { apiGet, apiPost, apiPut, apiDelete } from '@/lib/api-client'
 *   const cart = await apiGet('/api/cart')
 *   await apiPost('/api/cart', { productId, quantity })
 */

const STORAGE_KEY = 'auth-storage'

function getStoredToken(): string | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return parsed?.state?.token ?? null
  } catch {
    return null
  }
}

export interface ApiOptions {
  /** Send the auth token if available. Default true. */
  auth?: boolean
  /** Extra headers. */
  headers?: Record<string, string>
  /** Pass through an AbortSignal. */
  signal?: AbortSignal
}

function buildHeaders(opts: ApiOptions = {}, hasBody: boolean): Record<string, string> {
  const headers: Record<string, string> = { ...(opts.headers || {}) }
  if (hasBody && !headers['Content-Type']) headers['Content-Type'] = 'application/json'
  if (opts.auth !== false) {
    const token = getStoredToken()
    if (token) headers['Authorization'] = `Bearer ${token}`
  }
  return headers
}

async function handleResponse<T>(res: Response): Promise<T> {
  const isJson = (res.headers.get('content-type') || '').includes('application/json')
  const data = isJson ? await res.json().catch(() => null) : null
  if (!res.ok) {
    const message = (data && (data.error || data.message)) || `Request failed (${res.status})`
    const err = new Error(message) as Error & { status?: number; data?: unknown }
    err.status = res.status
    err.data = data
    throw err
  }
  return (data ?? ({} as T)) as T
}

export async function apiGet<T = unknown>(url: string, opts: ApiOptions = {}): Promise<T> {
  const res = await fetch(url, {
    method: 'GET',
    headers: buildHeaders(opts, false),
    signal: opts.signal,
  })
  return handleResponse<T>(res)
}

export async function apiPost<T = unknown>(url: string, body?: unknown, opts: ApiOptions = {}): Promise<T> {
  const res = await fetch(url, {
    method: 'POST',
    headers: buildHeaders(opts, body !== undefined),
    body: body !== undefined ? JSON.stringify(body) : undefined,
    signal: opts.signal,
  })
  return handleResponse<T>(res)
}

export async function apiPut<T = unknown>(url: string, body?: unknown, opts: ApiOptions = {}): Promise<T> {
  const res = await fetch(url, {
    method: 'PUT',
    headers: buildHeaders(opts, body !== undefined),
    body: body !== undefined ? JSON.stringify(body) : undefined,
    signal: opts.signal,
  })
  return handleResponse<T>(res)
}

export async function apiDelete<T = unknown>(url: string, opts: ApiOptions = {}): Promise<T> {
  const res = await fetch(url, {
    method: 'DELETE',
    headers: buildHeaders(opts, false),
    signal: opts.signal,
  })
  return handleResponse<T>(res)
}

/** Returns the current stored token (or null) for use outside fetch. */
export function getAuthToken(): string | null {
  return getStoredToken()
}
