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
  reviewForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(this);
    const subject = encodeURIComponent('Customer testimonial submission - Martindale Quality Maintenance');
    const body = encodeURIComponent(
      'Customer name: ' + data.get('review-name') + '\n' +
      'Project type: ' + data.get('review-project') + '\n\n' +
      'Review:\n' + data.get('review-text') + '\n\n' +
      'Please confirm permission before publishing this testimonial.'
    );
    const status = document.getElementById('review-status');
    if (status) status.textContent = 'Opening your email app to send your review. Your review will not be published automatically.';
    window.location.href = 'mailto:martindalequalitymaintenance@gmail.com?subject=' + subject + '&body=' + body;
  });
}
