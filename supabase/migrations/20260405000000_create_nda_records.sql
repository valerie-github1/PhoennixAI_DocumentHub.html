-- ============================================================
-- Migration: create nda_records table
-- Project:   phoennixai-backend (erfvunwhpsdbyyayzdimz)
-- Created:   2026-04-05
-- Ref:       PAI-NDA-001
-- ============================================================
-- Run this in the Supabase SQL editor:
-- https://supabase.com/dashboard/project/erfvunwhpsdbyyayzdimz/sql
-- ============================================================

CREATE TABLE IF NOT EXISTS public.nda_records (
  id             uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email     text        NOT NULL,
  signed_at      timestamptz DEFAULT now(),
  signature_data text,
  ip_address     text,
  nda_version    text        NOT NULL DEFAULT 'PAI-NDA-001'
);

-- Enable Row Level Security
ALTER TABLE public.nda_records ENABLE ROW LEVEL SECURITY;

-- Policy: allow anonymous inserts (beta testers sign NDA before they have an account)
CREATE POLICY "anon_insert_nda_records"
  ON public.nda_records
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- No SELECT/UPDATE/DELETE policy for anon — records are write-only from the client.
-- Only the service role (Supabase dashboard / server) can read records.
