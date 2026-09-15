/* Add inside initDashboard(), after the registration has been loaded. */
async function initPostRetreatCard(session) {
  const card = document.getElementById('dash-training-card');
  if (!card || !session) return;

  // The retreat is scheduled for 20–21 Nov 2026. The card becomes visible
  // automatically from 22 Nov 2026. For testing before then, temporarily
  // change POST_RETREAT_ENABLED to true below.
  const POST_RETREAT_ENABLED = new Date() >= new Date('2026-11-22T00:00:00+01:00');
  if (!POST_RETREAT_ENABLED) return;

  card.style.display = 'block';
  const status = document.getElementById('dash-training-status');
  const { data } = await supabaseClient
    .from('post_retreat_registrations')
    .select('id')
    .eq('user_id', session.user.id)
    .maybeSingle();

  if (data) {
    if (status) status.textContent = 'Registered';
    const cta = document.getElementById('dash-training-cta');
    if (cta) cta.textContent = 'View / Update Training';
  }
}

// Also call this once from initDashboard() after the registration query:
// await initPostRetreatCard(session);
