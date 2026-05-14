-- Run this in your Supabase SQL editor at supabase.com → SQL Editor

create table if not exists public.user_preferences (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  selected_country_code text,
  selected_branch_id    text,
  last_guide_path       text,
  updated_at  timestamptz not null default now(),
  unique (user_id)
);

-- Enable Row Level Security
alter table public.user_preferences enable row level security;

-- Users can only read/write their own row
create policy "Users manage own preferences"
  on public.user_preferences
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
