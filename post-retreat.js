/* RCCG Retreat — post-retreat registration */
(function () {
  const form = document.getElementById('post-retreat-form');
  const msg = document.getElementById('post-retreat-msg');
  const success = document.getElementById('post-retreat-success');
  const instrumentSection = document.getElementById('instrument-section');
  if (!form) return;

  const instruments = Array.from(form.querySelectorAll('input[name="instrument"]'));
  const trainingChoices = Array.from(form.querySelectorAll('input[name="instrument_training"]'));

  function setInstrumentState() {
    const wantsTraining = form.querySelector('input[name="instrument_training"]:checked')?.value === 'yes';
    instruments.forEach(function (input) {
      input.disabled = !wantsTraining;
      input.required = wantsTraining;
      if (!wantsTraining) input.checked = false;
    });
    if (instrumentSection) instrumentSection.style.opacity = wantsTraining ? '1' : '.5';
  }

  trainingChoices.forEach(function (input) { input.addEventListener('change', setInstrumentState); });
  setInstrumentState();

  async function loadExisting() {
    if (typeof supabaseClient === 'undefined') return;
    const { data: sessionData } = await supabaseClient.auth.getSession();
    if (!sessionData.session) {
      window.location.href = 'login.html';
      return;
    }
    const { data } = await supabaseClient
      .from('post_retreat_registrations')
      .select('*')
      .eq('user_id', sessionData.session.user.id)
      .maybeSingle();

    if (!data) return;
    const training = form.querySelector('input[name="instrument_training"][value="' + (data.instrument_training ? 'yes' : 'no') + '"]');
    if (training) training.checked = true;
    const boot = form.querySelector('input[name="continue_bootcamp"][value="' + (data.continue_bootcamp ? 'yes' : 'no') + '"]');
    if (boot) boot.checked = true;
    const instrument = form.querySelector('input[name="instrument"][value="' + data.instrument + '"]');
    if (instrument) instrument.checked = true;
    const ack = document.getElementById('certificate_ack');
    if (ack) ack.checked = !!data.certificate_fee_acknowledged;
    setInstrumentState();
    msg.textContent = 'You already have a post-retreat registration. You can update it and submit again.';
    msg.classList.add('ok');
  }

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    msg.textContent = '';
    msg.className = 'form-msg post-retreat-msg';
    if (typeof supabaseClient === 'undefined') return;

    const { data: sessionData, error: sessionError } = await supabaseClient.auth.getSession();
    if (sessionError || !sessionData.session) {
      msg.textContent = 'Please log in before completing the post-retreat registration.';
      return;
    }

    const training = form.querySelector('input[name="instrument_training"]:checked')?.value;
    const instrument = form.querySelector('input[name="instrument"]:checked')?.value || null;
    const bootcamp = form.querySelector('input[name="continue_bootcamp"]:checked')?.value;
    const acknowledged = document.getElementById('certificate_ack')?.checked === true;

    if (!training || !bootcamp) {
      msg.textContent = 'Please complete the required choices.';
      return;
    }
    if (training === 'yes' && !instrument) {
      msg.textContent = 'Please select the instrument you want to learn.';
      return;
    }
    if (!acknowledged) {
      msg.textContent = 'Please acknowledge the ₦3,000 certificate fee.';
      return;
    }

    const submit = form.querySelector('button[type="submit"]');
    if (submit) { submit.disabled = true; submit.textContent = 'Saving…'; }

    const payload = {
      user_id: sessionData.session.user.id,
      instrument_training: training === 'yes',
      instrument: instrument,
      training_duration_months: training === 'yes' ? 3 : 0,
      continue_bootcamp: bootcamp === 'yes',
      certificate_fee: 3000,
      certificate_fee_acknowledged: true,
      updated_at: new Date().toISOString()
    };

    const { error } = await supabaseClient
      .from('post_retreat_registrations')
      .upsert(payload, { onConflict: 'user_id' });

    if (error) {
      console.error(error);
      msg.textContent = error.message || 'Unable to save your registration. Please try again.';
      if (submit) { submit.disabled = false; submit.textContent = 'Submit registration'; }
      return;
    }

    msg.textContent = 'Post-retreat registration submitted successfully.';
    msg.classList.add('ok');
    if (success) success.style.display = 'block';
    if (submit) submit.textContent = 'Registration saved';
  });

  loadExisting();
})();
