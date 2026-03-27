// PhoennixAI Beta Waitlist — Google Apps Script v2
// Replace existing code in Apps Script editor with this
// Redeploy as New Version after pasting

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data;

    // Handle both JSON and URL-encoded form data
    if (e.postData.type === 'application/json') {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter;
    }

    sheet.appendRow([
      data.full_name         || data['full_name']         || '',
      data.email             || '',
      data.business_type     || data['business_type']     || '',
      data.tier_interest     || data['tier_interest']     || '',
      data.biggest_challenge || data['biggest_challenge'] || '',
      data.referral_source   || data['referral_source']   || '',
      data.submitted_at      || new Date().toLocaleString('en-GB')
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    Logger.log(error);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Also handle GET requests with URL params (fallback for CORS issues)
  try {
    if (e.parameter && e.parameter.email) {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      sheet.appendRow([
        e.parameter.full_name         || '',
        e.parameter.email             || '',
        e.parameter.business_type     || '',
        e.parameter.tier_interest     || '',
        e.parameter.biggest_challenge || '',
        e.parameter.referral_source   || '',
        e.parameter.submitted_at      || new Date().toLocaleString('en-GB')
      ]);
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'success' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  } catch(error) {
    Logger.log(error);
  }
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'PhoennixAI BetaWaitlist webhook live' }))
    .setMimeType(ContentService.MimeType.JSON);
}
