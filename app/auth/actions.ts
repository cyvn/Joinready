"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createClient } from "@/src/lib/supabase/server";

export async function login(formData: FormData) {
  const supabase = createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const redirectTo = formData.get("redirectTo") as string | undefined;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    const params = new URLSearchParams({ error: error.message });
    if (redirectTo) params.set("redirectTo", redirectTo);
    redirect(`/login?${params}`);
  }

  revalidatePath("/", "layout");
  redirect(redirectTo && redirectTo.startsWith("/") ? redirectTo : "/");
}

export async function signup(formData: FormData) {
  const supabase = createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const redirectTo = formData.get("redirectTo") as string | undefined;

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    const params = new URLSearchParams({ error: error.message });
    if (redirectTo) params.set("redirectTo", redirectTo);
    redirect(`/signup?${params}`);
  }

  revalidatePath("/", "layout");
  redirect(redirectTo && redirectTo.startsWith("/") ? redirectTo : "/");
}

export async function logout() {
  const supabase = createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}

export async function forgotPassword(formData: FormData) {
  const supabase = createClient();
  const email = formData.get("email") as string;

  const headersList = headers();
  const host = headersList.get("host") ?? "";
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const origin = `${protocol}://${host}`;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?next=/auth/reset-password`,
  });

  if (error) {
    redirect(`/forgot-password?error=${encodeURIComponent(error.message)}`);
  }
  redirect("/forgot-password?sent=1");
}

export async function savePreferences(country: string, branch: string, guidePath?: string) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  await supabase.from("user_preferences").upsert(
    {
      user_id: user.id,
      selected_country_code: country || null,
      selected_branch_id: branch || null,
      last_guide_path: guidePath || null,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" }
  );
}
