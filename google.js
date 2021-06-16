const textArea = document.getElementById('link-input');
const copy = document.querySelector('.copy');
const scopeList = document.getElementById('scope-list');
const form = document.querySelector('form');

let loading = false;

const admobScopes = [
  {
    name: 'admob.readonly',
    headerTitle: 'AdMob',
    desc: 'See your AdMob data.',
  },
  {
    name: 'admob.report',
    desc: 'See your AdMob data.',
  },
];

const adsenseScopes = [
  {
    name: 'adsense',
    headerTitle: 'AdSense',
    desc: 'View and manage your AdSense data',
  },
  {
    name: 'adsense.readonly',
    desc: 'View your AdSense data',
  },
];

const analyticScopes = [
  {
    name: 'analytics',
    headerTitle: 'Analytics',
    desc: 'View and manage your Google Analytics data',
  },
  {
    name: 'analytics.readonly',
    desc: 'View your Google Analytics data',
  },
  {
    name: 'analytics.edit',
    desc: 'Edit Google Analytics management entities',
  },
  {
    name: 'analytics.manage.users',
    desc: 'Manage Google Analytics Account users by email address',
  },
  {
    name: 'analytics.manage.users.readonly',
    desc: 'View Google Analytics user permissions',
  },
  {
    name: 'analytics.user.deletion',
    desc: 'Manage Google Analytics user deletion requests',
  },
];

const blogScopes = [
  {
    name: 'blogger',
    headerTitle: 'Blogger',
    desc: 'Manage your Blogger account',
  },
  {
    name: 'blogger.readonly',
    desc: 'View your Blogger account',
  },
];

const calendarScopes = [
  {
    name: 'calendar',
    headerTitle: 'Calendar',
    desc:
      'See, edit, share, and permanently delete all the calendars you can access using Google Calendar',
  },
  {
    name: 'calendar.events',
    desc: 'View and edit events on all your calendars',
  },
  {
    name: 'calendar.events.readonly',
    desc: 'View events on all your calendars',
  },
  {
    name: 'calendar.readonly',
    desc:
      'See and download any calendar you can access using your Google Calendar',
  },
  {
    name: 'calendar.settings.readonly',
    desc: 'View your Calendar settings',
  },
];

const driveScopes = [
  {
    name: 'drive',
    headerTitle: 'Drive',
    desc: 'See, edit, create, and delete all of your Google Drive files',
  },
  {
    name: 'drive.appdata',
    desc: 'View and manage its own configuration data in your Google Drive',
  },
  {
    name: 'drive.file',
    desc:
      'View and manage Google Drive files and folders that you have opened or created with this app',
  },
  {
    name: 'drive.metadata',
    desc: 'View and manage metadata of files in your Google Drive',
  },
  {
    name: 'drive.metadata.readonly',
    desc: 'View metadata for files in your Google Drive',
  },
  {
    name: 'drive.photos.readonly',
    desc: 'View the photos, videos and albums in your Google Photos',
  },
  {
    name: 'drive.readonly',
    desc: 'See and download all your Google Drive files',
  },
  {
    name: 'drive.scripts',
    desc: "Modify your Google Apps Script scripts' behavior",
  },
];

const driveActivityScopes = [
  {
    name: 'drive.activity',
    headerTitle: 'Drive Activity',
    desc: 'View and add to the activity record of files in your Google Drive',
  },
  {
    name: 'drive.activity.readonly',
    desc: 'View the activity record of files in your Google Drive',
  },
];

const formScopes = [
  {
    name: 'forms',
    headerTitle: 'Forms',
    desc: 'View and manage your forms in Google Drive',
  },
  {
    name: 'forms.currentonly',
    desc: 'View and manage forms that this application has been installed in',
  },
];

const gmailScopes = [
  {
    name: 'gmail.compose',
    headerTitle: 'Gmail',
    desc: 'Manage drafts and send emails',
  },
  {
    name: 'gmail.insert',
    desc: 'Insert mail into your mailbox',
  },
  {
    name: 'gmail.labels',
    desc: 'Manage mailbox labels',
  },
  {
    name: 'gmail.metadata',
    desc:
      'View your email message metadata such as labels and headers, but not the email body',
  },
  {
    name: 'gmail.modify',
    desc: 'View and modify but not delete your email',
  },
  {
    name: 'gmail.readonly',
    desc: 'View your email messages and settings',
  },
  {
    name: 'gmail.send',
    desc: 'Send email on your behalf',
  },
  {
    name: 'gmail.settings.basic',
    desc: 'Manage your basic mail settings',
  },
  {
    name: 'gmail.settings.sharing',
    desc:
      'Manage your sensitive mail settings, including who can manage your mail',
  },
];

const googleDocScopes = [
  {
    name: 'documents',
    headerTitle: 'Google Docs',
    desc: 'View and manage your Google Docs documents',
  },
  {
    name: 'documents.readonly',
    desc: 'View your Google Docs documents',
  },
];

const googleOAuthScopes = [
  {
    name: 'userinfo.email',
    headerTitle: 'Google OAuth2',
    desc: 'View your email address',
  },
  {
    name: 'userinfo.profile',
    desc:
      "See your personal info, including any personal info you've made publicly available",
  },
  {
    name: 'openid',
    desc: 'Associate you with your personal info on Google',
  },
];

const googleSearchConsoleScopes = [
  {
    name: 'webmasters',
    headerTitle: 'Google Search Console',
    desc: 'View and manage Search Console data for your verified sites',
  },
  {
    name: 'webmasters.readonly',
    desc: 'View Search Console data for your verified sites',
  },
];

const googleSheetScopes = [
  {
    name: 'spreadsheets',
    headerTitle: 'Google Sheets',
    desc: 'See, edit, create, and delete your spreadsheets in Google Drive',
  },
  {
    name: 'spreadsheets.readonly',
    desc: 'View your Google Spreadsheets',
  },
];

const googleSignInScopes = [
  {
    name: 'profile',
    headerTitle: 'Google Sign-in',
    desc: 'View your basic profile info',
  },
  {
    name: 'email',
    desc: 'View your email address',
  },
];

const taskScopes = [
  {
    name: 'tasks',
    headerTitle: 'Tasks',
    desc: 'Create, edit, organize, and delete all your tasks',
  },
  {
    name: 'tasks.readonly',
    desc: 'View your tasks',
  },
];

const youtubeAnalyticScopes = [
  {
    name: 'youtube',
    headerTitle: 'YouTube Analytics',
    desc: 'Manage your YouTube account',
  },
  {
    name: 'youtube.readonly',
    desc: 'View your YouTube account',
  },
  {
    name: 'youtubepartner',
    desc: 'View and manage your assets and associated content on YouTube',
  },
  {
    name: 'yt-analytics-monetary.readonly',
    desc:
      'View monetary and non-monetary YouTube Analytics reports for your YouTube content',
  },
  {
    name: 'yt-analytics.readonly',
    desc: 'View YouTube Analytics reports for your YouTube content',
  },
];

const youtubeDataScopes = [
  {
    name: 'youtube.channel-memberships.creator',
    headerTitle: 'YouTube Data',
    desc:
      'See a list of your current active channel members, their current level, and when they became a member',
  },
  {
    name: 'youtube.force-ssl',
    desc:
      'See, edit, and permanently delete your YouTube videos, ratings, comments and captions',
  },
  {
    name: 'youtube.upload',
    desc: 'Manage your YouTube videos',
  },
  {
    name: 'youtubepartner-channel-audit',
    desc:
      'View private information of your YouTube channel relevant during the audit process with a YouTube partner',
  },
];

const scopeNames = [
  ...admobScopes,
  ...adsenseScopes,
  ...analyticScopes,
  ...blogScopes,
  ...calendarScopes,
  ...driveScopes,
  ...driveActivityScopes,
  ...formScopes,
  ...gmailScopes,
  ...googleDocScopes,
  ...googleOAuthScopes,
  ...googleSearchConsoleScopes,
  ...googleSheetScopes,
  ...googleSignInScopes,
  ...taskScopes,
  ...youtubeAnalyticScopes,
  ...youtubeDataScopes,
];

function createScopeListElements(name, desc) {
  const li = document.createElement('li');
  li.classList.add(`child-scope`);
  li.innerHTML = `<div class="scope">
  <p class="input">
    <input
      type="checkbox"
      name="${name}"
      id="${name}"
      class="checkbox"
    />
    ${name}
  </p>
  <div class="tooltip">
    <i class="fas fa-question-circle"></i>
    <div class="tooltip-text">
      <p>
        ${desc}
      </p>
    </div>
  </div>
</div>`;

  scopeList.appendChild(li);
}

function createHeader(name) {
  const h2 = document.createElement('h2');
  h2.innerText = name;

  scopeList.appendChild(h2);
}

scopeNames.forEach((scope) => {
  if (scope.headerTitle) createHeader(scope.headerTitle);
  createScopeListElements(scope.name, scope.desc);
});

const arrayOfSelectedScopes = [];

const checkBoxes = document.querySelectorAll('.checkbox');
function addScopeToSelectedScope(scope) {
  let googleScope;
  if (scope === 'openid' || scope === 'email' || scope === 'profile')
    googleScope = scope;
  else googleScope = 'https://www.googleapis.com/auth/' + scope;

  if (arrayOfSelectedScopes.includes(googleScope)) {
    arrayOfSelectedScopes.splice(arrayOfSelectedScopes.indexOf(googleScope), 1);
  } else {
    arrayOfSelectedScopes.push(googleScope);
  }
}
checkBoxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    addScopeToSelectedScope(e.target.id);
    const link = `https://accounts.google.com/o/oauth2/v2/auth?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code&access_type=offline&scope=${arrayOfSelectedScopes.join(
      '%20'
    )}`;
    textArea.value = link;
  });
});

copy.addEventListener('click', () => {
  textArea.removeAttribute('disabled');
  textArea.select();
  textArea.setSelectionRange(0, 99999);

  document.execCommand('copy');
  alert('Copied to clipboard');
  textArea.setAttribute('disabled', true);
});
