const textArea = document.getElementById('link-input');
const copy = document.querySelector('.copy');
const scopeList = document.getElementById('scope-list');

let loading = false;
const arrayOfScopes = [
  {
    name: 'repo',
    type: 'parent',
    desc: 'Grants full access to repositories, including private repositories.',
  },
  {
    name: 'repo:status',
    type: 'child',
    desc:
      'Grants read/write access to public and private repository commit statuses.',
  },
  {
    name: 'repo_deployment',
    type: 'parent',
    desc:
      'Grants access to deployment statuses for public and private repositories.',
  },
  {
    name: 'public_repo',
    type: 'child',
    desc: 'Limits access to public repositories',
  },
  {
    name: 'repo:invite',
    type: 'child',
    desc:
      'Grants accept/decline abilities for invitations to collaborate on a repository.',
  },
  {
    name: 'security_events',
    type: 'parent',
    desc:
      'Grants read and write access to security events in the code scanning API and grants read and write access to security events in the secret scanning API',
  },
  {
    name: 'admin:repo_hook',
    type: 'parent',
    desc:
      'Grants read, write, ping, and delete access to repository hooks in public and private repositories.',
  },
  {
    name: 'write:repo_hook',
    type: 'parent',
    desc:
      'Grants read, write, and ping access to hooks in public or private repositories',
  },
  {
    name: 'read:repo_hook',
    type: 'parent',
    desc:
      'Grants read and ping access to hooks in public or private repositories.',
  },
  {
    name: 'admin:org',
    type: 'parent',
    desc:
      'Fully manage the organization and its teams, projects, and memberships.',
  },
  {
    name: 'write:org',
    type: 'child',
    desc:
      'Grants Read and write access to organization membership, organization projects, and team membership.',
  },
  {
    name: 'read:org',
    type: 'child',
    desc:
      'Read-only access to organization membership, organization projects, and team membership.',
  },
  {
    name: 'admin:public_key',
    type: 'parent',
    desc: 'Fully manage public keys.',
  },
  {
    name: 'write:public_key',
    type: 'parent',
    desc: 'Create, list, and view details for public keys.',
  },
  {
    name: 'read:public_key',
    type: 'parent',
    desc: 'List and view details for public keys.',
  },
  {
    name: 'admin:org_hook',
    type: 'parent',
    desc: 'Grants read, write, ping, and delete access to organization hooks.',
  },
  { name: 'gist', type: 'parent', desc: 'Grants write access to gists.' },
  {
    name: 'notifications',
    type: 'parent',
    desc: `Grants:
  read access to a user's notifications
  mark as read access to threads
  watch and unwatch access to a repository, and
  read, write, and delete access to thread subscriptions.`,
  },
  {
    name: 'user',
    type: 'parent',
    desc: 'Grants read/write access to profile info only.',
  },
  {
    name: 'read:user',
    type: 'child',
    desc: "Grants access to read a user's profile data.",
  },
  {
    name: 'user:email',
    type: 'child',
    desc: "Grants read access to a user's email addresses.",
  },
  {
    name: 'user:follow',
    type: 'child',
    desc: 'Grants access to follow or unfollow other users.',
  },
  {
    name: 'delete_repo',
    type: 'parent',
    desc: 'Grants access to delete adminable repositories.',
  },
  {
    name: 'write:discussion',
    type: 'parent',
    desc: 'Allows read and write access for team discussions.',
  },
  {
    name: 'read:discussion',
    type: 'parent',
    desc: 'Allows read access for team discussions.',
  },
  {
    name: 'write:packages',
    type: 'parent',
    desc: 'Grants access to upload or publish a package in GitHub Packages.',
  },
  {
    name: 'read:packages',
    type: 'parent',
    desc: 'Grants access to download or install packages from GitHub Packages',
  },
  {
    name: 'delete:packages',
    type: 'parent',
    desc: 'Grants access to delete packages from GitHub Packages.',
  },
  { name: 'admin:gpg_key', type: 'parent', desc: 'Fully manage GPG keys.' },
  {
    name: 'write:gpg_key',
    type: 'child',
    desc: 'Create, list, and view details for GPG keys.',
  },
  {
    name: 'read:gpg_key',
    type: 'child',
    desc: 'List and view details for GPG keys.',
  },
  {
    name: 'workflow',
    type: 'parent',
    desc: 'Grants the ability to add and update GitHub Actions workflow files.',
  },
];

function createScopeListElements(name, type, desc) {
  const li = document.createElement('li');
  li.classList.add(`${type}-scope`);
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
  createScopeListElements(scope.name, scope.type, scope.desc);
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
    const link = `https://github.com/login/oauth/authorize?client_id={client_id}&scope=${arrayOfSelectedScopes.join(
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
