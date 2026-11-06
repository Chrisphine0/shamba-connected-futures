CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 1 AND 120),
  organisation text CHECK (organisation IS NULL OR char_length(organisation) <= 160),
  work_email text NOT NULL CHECK (char_length(work_email) BETWEEN 3 AND 255),
  enquiry_type text NOT NULL CHECK (enquiry_type IN ('partnership','business','technology','general')),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 3000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an enquiry" ON public.contact_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);