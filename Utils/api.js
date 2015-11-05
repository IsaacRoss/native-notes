export function getRepos(username) {
  var uri = `https://api.github.com/users/${formatUserName(username)}/repos`;
  return fetchUri(uri);
}

export function getBio(username){
  var uri = `https://api.github.com/users/${formatUserName(username)}`;
  return fetchUri(uri);
}

let formatUserName = name => name.toLowerCase().trim();
let fetchUri = uri => fetch(uri).then(res => res.json())
