function makeFriendsList(friends) {
  const ul = document.createElement('ul');

  ul.innerHTML = friends.map(item=>`<li>${item.firstName+' '+item.lastName}</li>`).join('');
  
  return ul;
}
