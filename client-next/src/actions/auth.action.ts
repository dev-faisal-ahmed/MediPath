'use server';

import { AuthError } from 'next-auth';
import { auth, signIn } from '../lib/auth';

export async function singInAction(payload: { email: string; password: string }) {
  try {
    const response = await signIn('credentials', { ...payload, redirect: false });
    return { success: response };
  } catch (error) {
    if (error instanceof AuthError) return { error: error.cause?.err?.message };
  }
}

export async function getAuth() {
  return await auth();
}
