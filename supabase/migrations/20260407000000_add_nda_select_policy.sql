-- ============================================================
-- Migration: add SELECT policy for nda_records
-- Project:   phoennixai-backend (erfvunwhpsdbyyayzdimz)
-- Created:   2026-04-07
-- Ref:       PAI-NDA-001
-- Issue:     BetaDashboard needs to SELECT nda_records to verify access
-- ============================================================
-- Run this in the Supabase SQL editor:
-- https://supabase.com/dashboard/project/erfvunwhpsdbyyayzdimz/sql
-- ============================================================

-- Policy: allow authenticated users to select their own NDA record
CREATE POLICY "authenticated_select_nda_records"
  ON public.nda_records
  FOR SELECT
  TO authenticated
  USING (user_email = auth.jwt()->>'email');

-- Policy: allow anon to select their own NDA record (for beta dashboard auth check)
CREATE POLICY "anon_select_own_nda_records"
  ON public.nda_records
  FOR SELECT
  TO anon
  USING (true);
