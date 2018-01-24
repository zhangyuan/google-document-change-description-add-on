function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Launch', 'showDescriptionEditor')
      .addToUi();
}

function onInstall(e) {
  onOpen(e);
}

function showDescriptionEditor() {
  var ui = HtmlService.createTemplateFromFile('index').evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setTitle('Change Description');
  DocumentApp.getUi().showSidebar(ui);
}

function setDescription(text){
  var document = DocumentApp.getActiveDocument();
  var documentId = document.getId();
  var file = DriveApp.getFileById(documentId);
  file.setDescription(text);
}