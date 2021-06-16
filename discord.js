const textArea = document.getElementById('link-input');
const copy = document.querySelector('.copy');
const scopeList = document.getElementById('scope-list');

let loading = false;
const arrayOfScopes = [
  {
    name: 'activities.read',
    desc:
      'allows your app to fetch data from a user\'s "Now Playing/Recently Played" list',
  },
  {
    name: 'activities.write',
    desc: "allows your app to update a user's activity",
  },
  {
    name: 'applications.builds.read',
    desc: "allows your app to read build data for a user's applications",
  },
  {
    name: 'applications.builds.upload',
    desc: "allows your app to upload/update builds for a user's applications",
  },
  {
    name: 'applications.commands',
    desc: 'allows your app to use Slash Commands in a guild',
  },
  {
    name: 'applications.commands.update',
    desc: 'allows your app to update its Slash Commands via this bearer token',
  },
  {
    name: 'applications.entitlements',
    desc: "allows your app to read entitlements for a user's applications",
  },
  {
    name: 'applications.store.update',
    desc:
      "allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications",
  },
  {
    name: 'bot',
    desc:
      "for oauth2 bots, this puts the bot in the user's selected guild by default",
  },
  {
    name: 'connections',
    desc: 'allows /users/@me/connections to return linked third-party accounts',
  },
  {
    name: 'email',
    desc: 'enables /users/@me to return an email',
  },
  {
    name: 'gdm.join',
    desc: 'allows your app to join users to a group dm',
  },
  {
    name: 'guilds',
    desc:
      "allows /users/@me/guilds to return basic information about all of a user's guilds",
  },
  {
    name: 'guilds.join',
    desc:
      'allows /guilds/{guild.id}/members/{user.id} to be used for joining users to a guild',
  },
  {
    name: 'identify',
    desc: 'allows /users/@me without email',
  },
  {
    name: 'messages.read',
    desc: 'this allows you to read messages from all client channels',
  },
  {
    name: 'relationships.read',
    desc: "allows your app to know a user's friends and implicit relationships",
  },
  {
    name: 'rpc',
    desc:
      "for local rpc server access, this allows you to control a user's local Discord client",
  },
  {
    name: 'rpc.activities.write',
    desc: "this allows you to update a user's activity",
  },
  {
    name: 'rpc.notifications.read',
    desc: 'allows you to receive notifications pushed out to the user',
  },
  {
    name: 'rpc.voice.read',
    desc:
      "allows you to read a user's voice settings and listen for voice events.",
  },
  {
    name: 'rpc.voice.write',
    desc: " allows you to update a user's voice settings",
  },
  {
    name: 'webhook.incoming',
    desc:
      'this generates a webhook that is returned in the oauth token response for authorization code grants',
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
    const link = `https://discord.com/api/oauth2/authorize?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code&scope=${arrayOfSelectedScopes.join(
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
