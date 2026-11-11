/* ============================================================
   Console configuration

   The console reads everything from the Kora API (the backend shared by
   KoraBinary, LyraBinary and VexaBinary). Point this at the service and
   sign in; without it nothing can be read and no one can sign in.

   The console's own origin must be listed in the API's CORS_ORIGINS,
   or the browser refuses every call before it leaves.
   ============================================================ */
window.NexasAdminConfig = {
  /* TODO: the Kora API on Render, e.g. https://kora-api.onrender.com */
  apiBase: '',

  /* TODO: the new Supabase project (Settings, API). The publishable key
     is safe in a browser; the service-role key must never appear here. */
  supabaseUrl: '',
  supabaseKey: ''
};
