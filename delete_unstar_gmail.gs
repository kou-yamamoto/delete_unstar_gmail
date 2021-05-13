
//starがないGmailを削除
function delete_unstar_mail() {
  let targetMailThreads = GmailApp.search("-is:starred");
  targetMailThreads.forEach((targetMail) => {
    targetMail.moveToTrash();
  })
}