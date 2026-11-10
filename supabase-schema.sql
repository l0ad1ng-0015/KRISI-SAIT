-- Run this in Supabase → SQL Editor to create the tables

CREATE TABLE events (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  num         TEXT,
  type        TEXT,
  title       TEXT NOT NULL,
  paras       TEXT[],
  details     TEXT[],
  date        TEXT,
  form_url    TEXT,
  gradient    TEXT DEFAULT 'linear-gradient(150deg,#d4bfc3 0%,#9e7a84 100%)',
  is_active   BOOLEAN DEFAULT true,
  sort_order  INTEGER DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE webinars (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id    UUID REFERENCES events(id) ON DELETE CASCADE,
  title       TEXT,
  paras       TEXT[],
  date        TEXT,
  form_url    TEXT,
  sort_order  INTEGER DEFAULT 0
);

CREATE TABLE publications (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title       TEXT NOT NULL,
  author      TEXT DEFAULT 'Кристина Дойчинова',
  cover_color TEXT DEFAULT '#c4a8b0',
  href        TEXT,
  excerpt     TEXT,
  is_active   BOOLEAN DEFAULT true,
  sort_order  INTEGER DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE webinars ENABLE ROW LEVEL SECURITY;
ALTER TABLE publications ENABLE ROW LEVEL SECURITY;

-- Allow public read access (the public site reads these)
CREATE POLICY "Public read events" ON events FOR SELECT USING (is_active = true);
CREATE POLICY "Public read webinars" ON webinars FOR SELECT USING (true);
CREATE POLICY "Public read publications" ON publications FOR SELECT USING (is_active = true);

-- Service role key bypasses RLS, so the admin panel (which uses service key) can write freely
