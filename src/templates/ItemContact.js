export const ItemContact = (contacts = []) => {
  const fragment = new DocumentFragment();
  const $contactsList = document.getElementById("contacts-list");
  const $contactListTemplate = document.getElementById(
    "item-contact-template"
  ).content;

  contacts.forEach(({ icon, media, contact, url }) => {
    const $contactItem = $contactListTemplate.cloneNode(true);

    $contactItem.querySelector("a").href = url;

    //Icon
    $contactItem.querySelector(".icon").classList.add(icon);

    //Name of media
    $contactItem.querySelector(".contact-info p:first-child").innerHTML = media;

    //Contact
    $contactItem.querySelector(".contact-info p:last-child").innerHTML =
      contact;

    //Insert in the Fragment
    fragment.append($contactItem);
  });

  //Insert in the DOOM
  $contactsList.append(fragment);
};
