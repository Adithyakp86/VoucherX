/*
  # Ensure Insert Policy for Profile Signup

  1. Drop and recreate the insert policy to ensure it allows authenticated users
     to insert their own profiles during signup
*/

DROP POLICY IF EXISTS "Users can insert own profile during signup" ON public.profiles;

CREATE POLICY "Users can insert own profile during signup"
  ON public.profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);
