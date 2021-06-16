const textArea = document.getElementById('link-input');
const copy = document.querySelector('.copy');
const scopeList = document.getElementById('scope-list');

let loading = false;
const arrayOfScopes = [
  {
    name: 'ads_management',
    desc:
      'allows your app to both read and manage the Ads account it owns, or has been granted access to, by the Ad account owner.',
  },
  {
    name: 'ads_read',
    desc: 'allows your app to access the Ads Insights API.',
  },
  {
    name: 'attribution_read',
    desc: 'grants your app access to the Attribution API',
  },
  {
    name: 'business_management',
    desc: 'allows your app to read and write with the Business Manager API.',
  },
  {
    name: 'catalog_management',
    desc:
      'allows your app to create, read, update and delete business-owned product catalogs',
  },
  {
    name: 'email',
    desc: "allows your app to read a person's primary email address",
  },
  {
    name: 'groups_access_member_info',
    desc: 'allows your app to read publicly available group member information',
  },
  {
    name: 'instagram_basic',
    desc:
      " allows your app to read an Instagram account profile's info and media.",
  },
  {
    name: 'instagram_content_publish',
    desc:
      ' allows your app to create organic feed photo and video posts on behalf of a business user',
  },
  {
    name: 'instagram_manage_comments',
    desc:
      'allows your app to create, delete and hide comments on behalf of the Instagram account linked to a Page',
  },
  {
    name: 'instagram_manage_insights',
    desc:
      'allows your app to get access to insights for the Instagram account linked to a Facebook Page.',
  },
  {
    name: 'leads_retrieval',
    desc:
      'allows your app to retrieve and read all information captured by a lead ads',
  },
  {
    name: 'pages_events',
    desc:
      ' allows your app permission to log events on behalf of Facebook Pages',
  },
  {
    name: 'pages_manage_ads',
    desc: 'allows your app to manage ads associated with the Page..',
  },
  {
    name: 'pages_manage_cta',
    desc:
      'allows your app to carry out POST and DELETE functions on endpoints used to manage call-to-action buttons on a Facebook Page.',
  },
  {
    name: 'pages_manage_instant_articles',
    desc:
      ' allows your app to manage Instant Articles on behalf of Facebook Pages.',
  },
  {
    name: 'pages_manage_engagement',
    desc:
      'allows your app to create, edit and delete comments posted on the Page',
  },
  {
    name: 'pages_manage_metadata',
    desc:
      'allows your app to subscribe and receive webhooks about activity on the Page, and to update settings on the Page.',
  },
  {
    name: 'pages_manage_posts',
    desc: ' allows your app to create, edit and delete your Page posts.',
  },
  {
    name: 'pages_messaging',
    desc:
      'allows your app to manage and access Page conversations in Messenger.',
  },
  {
    name: 'pages_read_engagement',
    desc:
      'allows your app to read content (posts, photos, videos, events) posted by the Page, read followers data (including name, PSID), and profile picture, and read metadata and other insights about the Page.',
  },
  {
    name: 'pages_read_user_content',
    desc:
      'allows your app to read user generated content on the Page, such as posts, comments',
  },
  {
    name: 'pages_show_list',
    desc: 'allows your app to access the list of Pages a person manages.',
  },
  {
    name: 'pages_user_gender',
    desc:
      "allows your app to access a user's gender through the Page your app is connected to",
  },
  {
    name: 'pages_user_locale',
    desc:
      "allows your to app to a user's locale through the Page your app is connected to.",
  },
  {
    name: 'pages_user_timezone',
    desc:
      "grants your app access to a user's time zone through the Page your app is connected to.",
  },
  {
    name: 'public_profile',
    desc:
      'Allows apps to read the Default Public Profile Fields on the User node.',
  },
  {
    name: 'publish_to_groups',
    desc: 'allows your app to post content into a Group on behalf of a person',
  },
  {
    name: 'publish_video',
    desc:
      "allows your app to publish live videos to an app user's timeline, group, event or Page",
  },
  {
    name: 'read_insights',
    desc:
      'allows your app to read the Insights data for Pages, apps and web domains the person owns.',
  },
  {
    name: 'user_age_range',
    desc:
      "allows your app to access a person's age range as listed in their Facebook profile",
  },
  {
    name: 'user_birthday',
    desc:
      "The user_birthday permission allows your app to read a person's birthday as listed in their Facebook profile.",
  },
  {
    name: 'user_friends',
    desc:
      " allows your app to get a list of a person's friends using that app.",
  },
  {
    name: 'user_gender',
    desc:
      "allows your app to read a person's gender as listed in their Facebook profile.",
  },
  {
    name: 'user_hometown',
    desc:
      "allows your app to read a person's hometown location from their Facebook profile",
  },
  {
    name: 'user_likes',
    desc:
      'allows your app to read a list of all Facebook Pages that a user has liked.',
  },
  {
    name: 'user_link',
    desc:
      'allows your app to access the Facebook profile URL of the person using your app.',
  },
  {
    name: 'user_location',
    desc:
      "allows your app to read the city name as listed in the location field of a person's Facebook profile.",
  },
  {
    name: 'user_messenger_contact',
    desc: 'allows a business to contact a person via Messenger',
  },
  {
    name: 'user_photos',
    desc:
      'allows your app to read the photos a person has uploaded to Facebook.',
  },
  {
    name: 'user_posts',
    desc:
      'allows your app to access the posts that a user has made on their timeline.',
  },
  {
    name: 'user_videos',
    desc: 'allows your app to read a list of videos uploaded by a person.',
  },
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

arrayOfScopes.forEach((scope) => {
  createScopeListElements(scope.name, scope.desc);
});

const arrayOfSelectedScopes = [];

const checkBoxes = document.querySelectorAll('.checkbox');
function addScopeToSelectedScope(scope) {
  if (arrayOfSelectedScopes.includes(scope)) {
    arrayOfSelectedScopes.splice(arrayOfSelectedScopes.indexOf(scope), 1);
  } else {
    arrayOfSelectedScopes.push(scope);
  }
}
checkBoxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    addScopeToSelectedScope(e.target.id);
    const link = `https://www.facebook.com/v10.0/dialog/oauth?client_id={app-id}&redirect_uri={redirect-uri}&state={state-param}&scope=${arrayOfSelectedScopes.join(
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
