const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const estimateForm = document.getElementById('estimate-form');
if (estimateForm) {
  estimateForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(this);
    const subject = encodeURIComponent('Free estimate request - ' + data.get('service'));
    const body = encodeURIComponent(
      'Name: ' + data.get('name') + '\n' +
      'Reply contact: ' + data.get('reply') + '\n' +
      'Project type: ' + data.get('service') + '\n\n' +
      'Project details:\n' + (data.get('details') || '')
    );
    const mailto = 'mailto:martindalequalitymaintenance@gmail.com?subject=' + subject + '&body=' + body;
    const status = document.getElementById('form-status');
    if (status) status.textContent = 'Opening your email app with your estimate request. If nothing opens, email martindalequalitymaintenance@gmail.com or call 907-217-3276.';
    window.location.href = mailto;
  });
}


const reviewForm = document.getElementById('review-form');

if (reviewForm) {
  reviewForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const data = new FormData(this);

    const params = new URLSearchParams({
      name: data.get('review-name'),
      project: data.get('review-project'),
      rating: data.get('rating'),
      review: data.get('review-text'),
      permission: data.get('permission')
    });

    const status = document.getElementById('review-status');

    if (status) status.textContent = 'Submitting your review...';

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbyyLQvOSivjHIl1azuQgTQdBn7o80Pab2nl34842jrBoW33H_7z9G-e6tPA1YnlchC5/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: params
        }
      );

      if (status) {
        status.textContent = 'Thank you! Your review has been submitted for approval.';
      }

      this.reset();

    } catch (error) {
      if (status) {
        status.textContent = 'There was a problem submitting your review. Please try again.';
      }
    }
  });
}
